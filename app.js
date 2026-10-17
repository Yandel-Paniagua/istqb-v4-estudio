(function () {
  // Estado global de la aplicación
  const state = {
    activeView: "dashboard",
    readingChapterId: 1,
    readingFilter: "all", // all | ficha | ejercicio | trampa
    readingSearch: "",
    fontSize: 1.04,

    // Flashcards
    fcFilterChapter: "all", // all | 1..6 | weakness | pending
    fcSearch: "",
    fcList: [],
    fcIndex: 0,
    fcFlipped: false,
    fcMastered: JSON.parse(localStorage.getItem("istqb_fc_mastered") || "{}"),

    // Simulador activo
    simActive: false,
    simFinished: false,
    simConfig: null,
    simQuestions: [],
    simCurrentIdx: 0,
    simAnswers: {}, // { qId: ['a'] }
    simFlagged: {}, // { qId: true }
    simRevealedInstant: {}, // { qId: true }
    simInstantMode: false,
    simTimerSecondsRemaining: 3600,
    simElapsedSeconds: 0,
    simTimerPaused: false,
    simTimerInterval: null,
    simReviewFilter: "all", // all | wrong | correct | ch456
    simHistory: JSON.parse(localStorage.getItem("istqb_sim_history") || "[]")
  };

  // Inicialización
  document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initThemeControls();
    initReadingControls();
    initFlashcards();
    initSimulatorsHub();
    initK3Trainer();
    renderDashboardHistory();
  });

  // ================= NAVEGACIÓN PRINCIPAL =================
  function initNavigation() {
    const navButtons = document.querySelectorAll(".nav-btn[data-view]");
    navButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-view");
        switchView(target);
      });
    });
  }

  window.switchView = function (viewName, options = {}) {
    state.activeView = viewName;
    document.querySelectorAll(".nav-btn[data-view]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-view") === viewName);
    });
    document.querySelectorAll(".view-section").forEach((sec) => {
      sec.classList.toggle("active", sec.id === "view-" + viewName);
    });

    if (viewName === "reading" && options.chapterId) {
      state.readingChapterId = options.chapterId;
      if (options.filter) state.readingFilter = options.filter;
      renderReadingView();
    } else if (viewName === "flashcards" && options.chapterFilter) {
      state.fcFilterChapter = String(options.chapterFilter);
      document.getElementById("fc-chapter-select").value = String(options.chapterFilter);
      applyFlashcardFilters();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ================= TEMA VISUAL (NEUTRO / CÁLIDO / OSCURO) =================
  function initThemeControls() {
    const savedTheme = localStorage.getItem("istqb_theme") || "neutral";
    applyTheme(savedTheme);
    document.querySelectorAll(".theme-btn[data-theme]").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyTheme(btn.getAttribute("data-theme"));
      });
    });
  }

  function applyTheme(theme) {
    document.body.classList.remove("theme-warm", "theme-dark");
    if (theme === "warm") document.body.classList.add("theme-warm");
    if (theme === "dark") document.body.classList.add("theme-dark");
    localStorage.setItem("istqb_theme", theme);
    document.querySelectorAll(".theme-btn[data-theme]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-theme") === theme);
    });
  }

  // ================= APARTADO 1: LECTURA POR CAPÍTULOS =================
  function initReadingControls() {
    renderChapterSidebar();
    renderReadingView();

    document.querySelectorAll(".filter-tab[data-rfilter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.readingFilter = btn.getAttribute("data-rfilter");
        document.querySelectorAll(".filter-tab[data-rfilter]").forEach((b) => {
          b.classList.toggle("active", b.getAttribute("data-rfilter") === state.readingFilter);
        });
        renderReadingView();
      });
    });

    const searchInput = document.getElementById("reading-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.readingSearch = e.target.value.trim().toLowerCase();
        renderReadingView();
      });
    }

    document.getElementById("font-dec-btn")?.addEventListener("click", () => {
      state.fontSize = Math.max(0.88, +(state.fontSize - 0.06).toFixed(2));
      document.documentElement.style.setProperty("--reading-font-size", state.fontSize + "rem");
    });
    document.getElementById("font-inc-btn")?.addEventListener("click", () => {
      state.fontSize = Math.min(1.32, +(state.fontSize + 0.06).toFixed(2));
      document.documentElement.style.setProperty("--reading-font-size", state.fontSize + "rem");
    });
  }

  function renderChapterSidebar() {
    const container = document.getElementById("chapter-select-list");
    if (!container) return;
    container.innerHTML = window.ISTQB_CHAPTERS.map((ch) => {
      const isPriority = ch.id >= 4;
      return `
        <button class="chapter-item-btn ${ch.id === state.readingChapterId ? "active" : ""}" data-chid="${ch.id}">
          <div>
            <div style="font-weight:600;">${ch.number}: ${ch.title.replace(" (Prioridad Alta)", "").replace(" (Prioridad Muy Alta)", "")}</div>
            <div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px;">${ch.examQuestionsCount} preg. en examen • ${ch.duration}</div>
          </div>
          ${isPriority ? '<span class="badge badge-priority" style="font-size:0.68rem;">Reforzar</span>' : ""}
        </button>
      `;
    }).join("");

    container.querySelectorAll(".chapter-item-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.readingChapterId = parseInt(btn.getAttribute("data-chid"), 10);
        renderChapterSidebar();
        renderReadingView();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }

  function renderReadingView() {
    const ch = window.ISTQB_CHAPTERS.find((c) => c.id === state.readingChapterId) || window.ISTQB_CHAPTERS[0];
    const tocContainer = document.getElementById("reading-toc-list");
    const mainContainer = document.getElementById("reading-main-article");
    if (!mainContainer) return;

    // Actualizar pestañas activas
    document.querySelectorAll(".filter-tab[data-rfilter]").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-rfilter") === state.readingFilter);
    });

    // Filtrar secciones
    const filteredSections = ch.sections.filter((sec) => {
      if (state.readingFilter === "ficha" && !sec.fichaSummary) return false;
      if (state.readingFilter === "ejercicio" && sec.type !== "ejercicio") return false;
      if (state.readingFilter === "trampa" && !sec.trampaAlerta) return false;
      if (state.readingSearch) {
        const hay = (sec.title + " " + (sec.fichaSummary || "") + " " + (sec.trampaAlerta || "") + " " + sec.htmlContent).toLowerCase();
        return hay.includes(state.readingSearch);
      }
      return true;
    });

    if (tocContainer) {
      tocContainer.innerHTML = filteredSections.map((sec) => `
        <li><a class="toc-link" href="#sec-${sec.id}">${sec.code} — ${sec.title}</a></li>
      `).join("");
    }

    const keywordsHtml = ch.keywords.map((kw) => `<span class="badge" style="margin:2px;">${kw}</span>`).join("");

    const sectionsHtml = filteredSections.length === 0
      ? `<div class="card"><p style="color:var(--text-secondary);">No hay secciones en este capítulo que coincidan con el filtro seleccionado. Cambia a "Todo el Capítulo" para ver el contenido completo.</p></div>`
      : filteredSections.map((sec) => {
          const fichaBox = sec.fichaSummary ? `
            <div class="callout callout-ficha">
              <div class="callout-title">📌 Ficha de Estudio Esencial (Resumen Clave)</div>
              <div style="white-space:pre-line;">${escapeHtml(sec.fichaSummary)}</div>
            </div>
          ` : "";

          const trampaBox = sec.trampaAlerta ? `
            <div class="callout callout-trampa">
              <div class="callout-title">⚠️ Trampa de Examen / Tu Punto a Reforzar en Simuladores</div>
              <div style="white-space:pre-line;">${escapeHtml(sec.trampaAlerta)}</div>
            </div>
          ` : "";

          const bodyContent = state.readingFilter === "ficha"
            ? ""
            : `<div class="topic-body">${sec.htmlContent}</div>`;

          return `
            <article class="topic-card" id="sec-${sec.id}">
              <div class="topic-header">
                <div>
                  <span class="badge" style="margin-bottom:0.35rem;">Sección ${sec.code}</span>
                  <h3 class="topic-title">${sec.title}</h3>
                </div>
                <span class="badge ${sec.kLevel.includes("K3") ? "badge-k3" : sec.kLevel.includes("K2") ? "badge-k2" : "badge-k1"}">Nivel ${sec.kLevel}</span>
              </div>
              ${fichaBox}
              ${trampaBox}
              ${bodyContent}
            </article>
          `;
        }).join("");

    // Navegación entre capítulos al pie
    const prevCh = window.ISTQB_CHAPTERS.find((c) => c.id === ch.id - 1);
    const nextCh = window.ISTQB_CHAPTERS.find((c) => c.id === ch.id + 1);

    mainContainer.innerHTML = `
      <div class="chapter-banner">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
          <span class="badge" style="font-size:0.82rem;">Programa Oficial ISTQB® CTFL v4.0</span>
          <div style="display:flex;gap:0.5rem;">
            <button class="btn btn-sm" onclick="switchView('flashcards', { chapterFilter: ${ch.id} })">Practicar Flashcards del ${ch.number}</button>
          </div>
        </div>
        <h2 style="margin-top:0.6rem;">${ch.number}: ${ch.title}</h2>
        <p style="color:var(--text-secondary);margin-top:0.35rem;">${ch.summary}</p>
        <div class="chapter-meta-row">
          <span class="badge">⏱ Duración Syllabus: ${ch.duration}</span>
          <span class="badge">📝 Peso en el Examen: <strong>${ch.examQuestionsCount} de 40 preguntas</strong></span>
          <span class="badge">🎯 Distribución: ${ch.kBreakdown}</span>
        </div>
        <details style="margin-top:0.9rem;font-size:0.86rem;color:var(--text-secondary);">
          <summary style="cursor:pointer;font-weight:600;">Ver palabras clave oficiales del ${ch.number}</summary>
          <div style="margin-top:0.5rem;">${keywordsHtml}</div>
        </details>
      </div>
      ${sectionsHtml}
      <div class="card" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
        <div>
          ${prevCh ? `<button class="btn" onclick="switchView('reading', { chapterId: ${prevCh.id} })">← ${prevCh.number}: ${prevCh.title.split(" (")[0]}</button>` : `<span></span>`}
        </div>
        <div>
          ${nextCh ? `<button class="btn btn-primary" onclick="switchView('reading', { chapterId: ${nextCh.id} })">${nextCh.number}: ${nextCh.title.split(" (")[0]} →</button>` : `<button class="btn btn-primary" onclick="switchView('simulators')">Ir a los Simuladores de Examen →</button>`}
        </div>
      </div>
    `;
  }

  // ================= APARTADO 2: ENTRENADOR PRÁCTICO K3 =================
  function initK3Trainer() {
    // 1. Calculadora Estimación de Tres Puntos
    const calcPertBtn = document.getElementById("k3-pert-btn");
    if (calcPertBtn) {
      const updatePert = () => {
        const a = parseFloat(document.getElementById("k3-pert-a").value) || 0;
        const m = parseFloat(document.getElementById("k3-pert-m").value) || 0;
        const b = parseFloat(document.getElementById("k3-pert-b").value) || 0;
        const n = parseFloat(document.getElementById("k3-pert-n").value) || 1;
        const e1 = (a + 4 * m + b) / 6;
        const sd1 = (b - a) / 6;
        const eTotal = e1 * n;
        document.getElementById("k3-pert-output").innerHTML = `
          <strong>Paso 1 (Para 1 elemento):</strong> <code>E₁ = (a + 4m + b) / 6 = (${a} + 4×${m} + ${b}) / 6 = ${a + 4 * m + b} / 6 =</code> <strong>${e1.toFixed(2)} horas-persona</strong><br>
          <strong>Desviación estándar (Error de medición):</strong> <code>SD = (b − a) / 6 = (${b} − ${a}) / 6 = ±</code> <strong>${sd1.toFixed(2)}</strong> (Rango para 1 elemento: ${(e1 - sd1).toFixed(2)} a ${(e1 + sd1).toFixed(2)})<br>
          <div style="margin-top:0.5rem;padding-top:0.5rem;border-top:1px solid var(--border-color);color:var(--accent-primary);font-size:1.02rem;">
            <strong>Paso 2 (Multiplicado por N = ${n} casos/elementos):</strong> <code>Total = ${e1.toFixed(2)} × ${n} =</code> <strong>${eTotal.toFixed(2)} horas-persona</strong>
          </div>
        `;
      };
      calcPertBtn.addEventListener("click", updatePert);
      updatePert();
    }

    // 2. Calculadora de Riesgo e Impacto Inverso
    const calcRiskBtn = document.getElementById("k3-risk-btn");
    if (calcRiskBtn) {
      const updateRisk = () => {
        const riskLevel = parseFloat(document.getElementById("k3-risk-level").value) || 0;
        const probPct = parseFloat(document.getElementById("k3-risk-prob").value) || 1;
        const probDec = probPct / 100;
        const impact = probDec > 0 ? riskLevel / probDec : 0;
        document.getElementById("k3-risk-output").innerHTML = `
          <strong>Fórmula base:</strong> <code>Nivel de Riesgo = Probabilidad × Impacto</code><br>
          <strong>Despejando el Impacto (DIVIDIENDO, no multiplicando):</strong><br>
          <code>Impacto = Nivel de Riesgo / Probabilidad (en decimal) = $${riskLevel} / ${probDec.toFixed(2)} =</code> <strong>$${impact.toLocaleString("es-ES", { maximumFractionDigits: 2 })}</strong><br>
          <span style="font-size:0.84rem;color:var(--text-secondary);">Comprobación: Si el impacto es $${impact.toLocaleString("es-ES")} y ocurre el ${probPct}% de las veces, la exposición esperada (nivel de riesgo) es $${riskLevel.toLocaleString("es-ES")}.</span>
        `;
      };
      calcRiskBtn.addEventListener("click", updateRisk);
      updateRisk();
    }

    // 3. Calculadora de Valores Límite (BVA 2 valores vs 3 valores)
    const calcBvaBtn = document.getElementById("k3-bva-btn");
    if (calcBvaBtn) {
      const updateBva = () => {
        const minVal = parseInt(document.getElementById("k3-bva-min").value, 10);
        const maxVal = parseInt(document.getElementById("k3-bva-max").value, 10);
        if (isNaN(minVal) || isNaN(maxVal) || minVal > maxVal) return;
        const bva2 = Array.from(new Set([minVal - 1, minVal, maxVal, maxVal + 1])).sort((x, y) => x - y);
        const bva3 = Array.from(new Set([minVal - 1, minVal, minVal + 1, maxVal - 1, maxVal, maxVal + 1])).sort((x, y) => x - y);
        const extraFor3 = bva3.filter((v) => !bva2.includes(v));
        document.getElementById("k3-bva-output").innerHTML = `
          <div><strong>Rango válido:</strong> <code>[${minVal} .. ${maxVal}]</code> (Límite inferior = <code>${minVal}</code>, Límite superior = <code>${maxVal}</code>)</div>
          <div style="margin-top:0.4rem;">• <strong>BVA de 2 valores (${bva2.length} puntos):</strong> <code>${bva2.join(", ")}</code> <em>(Cada límite y su vecino en la partición inválida adyacente)</em></div>
          <div style="margin-top:0.4rem;">• <strong>BVA de 3 valores (${bva3.length} puntos):</strong> <code>${bva3.join(", ")}</code> <em>(Cada límite y sus DOS vecinos inmediatos, fuera y dentro)</em></div>
          <div style="margin-top:0.4rem;color:var(--accent-primary);">• <strong>Valores adicionales al pasar de 2 a 3 valores:</strong> <code>${extraFor3.join(", ") || "Ninguno (rango de 1 solo número)"}</code></div>
        `;
      };
      calcBvaBtn.addEventListener("click", updateBva);
      updateBva();
    }
  }

  // ================= APARTADO 3: SIMULADORES DE EXAMEN (40 PREGUNTAS / 1 HORA SIN CIERRE) =================
  function initSimulatorsHub() {
    document.querySelectorAll(".start-sim-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const simId = btn.getAttribute("data-simid");
        startSimulator(simId);
      });
    });

    document.getElementById("sim-pause-btn")?.addEventListener("click", togglePauseTimer);
    document.getElementById("sim-finish-btn")?.addEventListener("click", () => {
      const answeredCount = Object.keys(state.simAnswers).length;
      if (answeredCount < state.simQuestions.length) {
        const confirmFinish = confirm(`Has respondido ${answeredCount} de ${state.simQuestions.length} preguntas. ¿Deseas finalizar y calificar el examen ahora?`);
        if (!confirmFinish) return;
      }
      finishSimulator();
    });
    document.getElementById("sim-exit-btn")?.addEventListener("click", () => {
      if (state.simActive && !state.simFinished) {
        if (!confirm("¿Salir del simulador actual y volver al menú de simuladores?")) return;
      }
      stopSimulatorTimer();
      state.simActive = false;
      document.getElementById("sim-hub-container").style.display = "block";
      document.getElementById("sim-runner-container").style.display = "none";
      document.getElementById("sim-results-container").style.display = "none";
    });

    document.getElementById("sim-instant-toggle")?.addEventListener("change", (e) => {
      state.simInstantMode = e.target.checked;
      renderCurrentQuestion();
    });
  }

  window.startSimulator = function (simId) {
    const instantToggle = document.getElementById("hub-instant-mode-check");
    state.simInstantMode = instantToggle ? instantToggle.checked : false;
    const instantRunnerCheck = document.getElementById("sim-instant-toggle");
    if (instantRunnerCheck) instantRunnerCheck.checked = state.simInstantMode;

    let questions = [];
    let simTitle = "";

    if (simId === "sim-4") {
      // Generador dinámico de 40 preguntas
      const focusMode = document.getElementById("sim4-focus-mode")?.value || "weakness";
      const includeCD = document.getElementById("sim4-include-cd")?.checked !== false;

      const allPool = [];
      window.ISTQB_EXAMS_DATA.simulators.forEach((s) => {
        s.questions.forEach((q) => {
          if (!includeCD && q.isTranslatedCD) return;
          allPool.push(JSON.parse(JSON.stringify(q)));
        });
      });

      if (focusMode === "weakness") {
        simTitle = "Simulador 4: Personalizado Intensivo Capítulos 4, 5 y 6 (40 preguntas)";
        const ch456 = shuffleArray(allPool.filter((q) => q.chapter >= 4));
        const ch123 = shuffleArray(allPool.filter((q) => q.chapter <= 3));
        const picked456 = ch456.slice(0, 30);
        const picked123 = ch123.slice(0, 40 - picked456.length);
        questions = shuffleArray([...picked456, ...picked123]).slice(0, 40);
      } else {
        simTitle = "Simulador 4: Distribución Oficial ISTQB Aleatoria (40 preguntas)";
        const quotas = { 1: 8, 2: 6, 3: 4, 4: 11, 5: 9, 6: 2 };
        Object.keys(quotas).forEach((chStr) => {
          const chNum = parseInt(chStr, 10);
          const chPool = shuffleArray(allPool.filter((q) => q.chapter === chNum));
          questions.push(...chPool.slice(0, quotas[chNum]));
        });
      }
      questions.forEach((q, i) => { q.num = i + 1; });
    } else {
      const simObj = window.ISTQB_EXAMS_DATA.simulators.find((s) => s.id === simId);
      if (!simObj) return;
      simTitle = simObj.title;
      questions = JSON.parse(JSON.stringify(simObj.questions));
    }

    state.simActive = true;
    state.simFinished = false;
    state.simConfig = { id: simId, title: simTitle };
    state.simQuestions = questions;
    state.simCurrentIdx = 0;
    state.simAnswers = {};
    state.simFlagged = {};
    state.simRevealedInstant = {};
    state.simTimerSecondsRemaining = 3600; // 1 hora = 3600s
    state.simElapsedSeconds = 0;
    state.simTimerPaused = false;

    document.getElementById("sim-hub-container").style.display = "none";
    document.getElementById("sim-results-container").style.display = "none";
    document.getElementById("sim-runner-container").style.display = "block";
    document.getElementById("sim-active-title").textContent = simTitle;

    startSimulatorTimer();
    renderQuestionGrid();
    renderCurrentQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function startSimulatorTimer() {
    stopSimulatorTimer();
    updateTimerUI();
    state.simTimerInterval = setInterval(() => {
      if (state.simTimerPaused || state.simFinished) return;
      state.simElapsedSeconds += 1;
      state.simTimerSecondsRemaining -= 1;
      updateTimerUI();
    }, 1000);
  }

  function stopSimulatorTimer() {
    if (state.simTimerInterval) {
      clearInterval(state.simTimerInterval);
      state.simTimerInterval = null;
    }
  }

  function togglePauseTimer() {
    state.simTimerPaused = !state.simTimerPaused;
    const btn = document.getElementById("sim-pause-btn");
    if (btn) btn.textContent = state.simTimerPaused ? "▶ Reanudar" : "⏸ Pausar";
  }

  function updateTimerUI() {
    const timerBox = document.getElementById("sim-timer-box");
    const digitsEl = document.getElementById("sim-timer-digits");
    const statusEl = document.getElementById("sim-timer-status");
    if (!digitsEl) return;

    if (state.simTimerSecondsRemaining >= 0) {
      timerBox?.classList.remove("overtime");
      const mins = Math.floor(state.simTimerSecondsRemaining / 60);
      const secs = state.simTimerSecondsRemaining % 60;
      digitsEl.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
      if (statusEl) statusEl.textContent = "Tiempo restante (1h)";
    } else {
      // Pasó de 1 hora: NO se cierra el examen, cuenta el tiempo extra
      timerBox?.classList.add("overtime");
      const overSecs = Math.abs(state.simTimerSecondsRemaining);
      const mins = Math.floor(overSecs / 60);
      const secs = overSecs % 60;
      digitsEl.textContent = `+${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
      if (statusEl) statusEl.textContent = "Tiempo extra (Sin cierre)";
    }
  }

  function renderQuestionGrid() {
    const grid = document.getElementById("sim-question-grid");
    if (!grid) return;
    const answeredCount = Object.keys(state.simAnswers).length;
    const progressEl = document.getElementById("sim-answered-counter");
    if (progressEl) progressEl.textContent = `${answeredCount} / ${state.simQuestions.length} respondidas`;

    grid.innerHTML = state.simQuestions.map((q, idx) => {
      const isCurrent = idx === state.simCurrentIdx;
      const isAnswered = state.simAnswers[q.id] && state.simAnswers[q.id].length > 0;
      const isFlagged = !!state.simFlagged[q.id];
      return `
        <button class="q-grid-btn ${isCurrent ? "current" : ""} ${isAnswered ? "answered" : ""} ${isFlagged ? "flagged" : ""}" data-qidx="${idx}">
          ${idx + 1}
        </button>
      `;
    }).join("");

    grid.querySelectorAll(".q-grid-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.simCurrentIdx = parseInt(btn.getAttribute("data-qidx"), 10);
        renderQuestionGrid();
        renderCurrentQuestion();
      });
    });
  }

  function renderCurrentQuestion() {
    const q = state.simQuestions[state.simCurrentIdx];
    const container = document.getElementById("sim-question-card-holder");
    if (!q || !container) return;

    const requiredChoices = q.correct.length;
    const userSelected = state.simAnswers[q.id] || [];
    const isFlagged = !!state.simFlagged[q.id];
    const showInstantExp = state.simInstantMode && userSelected.length >= requiredChoices;

    const translatedBanner = q.isTranslatedCD ? `
      <div class="translated-notice">
        <span>⚠️</span>
        <div><strong>Pregunta de Examen Oficial Modelo C / D (Traducida del inglés):</strong> Traducida utilizando el glosario oficial ISTQB CTFL v4.0 en español e incluyendo términos clave en inglés entre paréntesis para evitar cualquier ambigüedad de interpretación.</div>
      </div>
    ` : "";

    const multiNotice = requiredChoices > 1 ? `
      <div style="margin-bottom:0.85rem;">
        <span class="badge badge-priority" style="font-size:0.83rem;">Seleccione EXACTAMENTE ${requiredChoices} opciones (${userSelected.length}/${requiredChoices} seleccionadas)</span>
      </div>
    ` : "";

    const optionsHtml = Object.keys(q.options).map((letter) => {
      const isSelected = userSelected.includes(letter);
      let statusClass = "";
      if (showInstantExp) {
        if (q.correct.includes(letter)) statusClass = "correct-answer";
        else if (isSelected) statusClass = "wrong-answer";
      }
      return `
        <div class="option-item ${isSelected ? "selected" : ""} ${statusClass}" data-opt="${letter}">
          <div class="option-letter">${letter}</div>
          <div style="flex:1;">${escapeHtml(q.options[letter])}</div>
        </div>
      `;
    }).join("");

    let instantExplanationHtml = "";
    if (showInstantExp) {
      const isRight = arraysEqualIgnoreOrder(userSelected, q.correct);
      instantExplanationHtml = buildQuestionExplanationHtml(q, userSelected, isRight);
    }

    container.innerHTML = `
      <div class="question-card">
        ${translatedBanner}
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;padding-bottom:0.85rem;border-bottom:1px solid var(--border-color);">
          <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">
            <span style="font-weight:700;font-size:1.05rem;">Pregunta ${state.simCurrentIdx + 1} de ${state.simQuestions.length}</span>
            <span class="badge">Capítulo ${q.chapter} (${q.lo})</span>
            <span class="badge ${q.kLevel === "K3" ? "badge-k3" : q.kLevel === "K2" ? "badge-k2" : "badge-k1"}">Nivel ${q.kLevel}</span>
            <span class="badge">${q.source}</span>
          </div>
          <button class="btn btn-sm" id="flag-q-btn" style="${isFlagged ? "border-color:#B5892E;background-color:var(--warning-bg);color:var(--warning-text);" : ""}">
            ${isFlagged ? "🚩 Marcada para revisar" : "🏳️ Marcar para revisar"}
          </button>
        </div>

        <div class="question-stem">${escapeHtml(q.question)}</div>
        ${multiNotice}
        <div class="options-list">
          ${optionsHtml}
        </div>

        ${instantExplanationHtml}

        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:1.6rem;padding-top:1rem;border-top:1px solid var(--border-color);">
          <button class="btn" id="prev-q-btn" ${state.simCurrentIdx === 0 ? "disabled style='opacity:0.5;cursor:not-allowed;'" : ""}>← Anterior</button>
          <span style="font-size:0.85rem;color:var(--text-muted);">Pregunta ${state.simCurrentIdx + 1} / ${state.simQuestions.length}</span>
          ${
            state.simCurrentIdx < state.simQuestions.length - 1
              ? `<button class="btn btn-primary" id="next-q-btn">Siguiente →</button>`
              : `<button class="btn btn-primary" id="finish-last-q-btn">Finalizar y Ver Resultados ✓</button>`
          }
        </div>
      </div>
    `;

    // Eventos de selección de opciones
    container.querySelectorAll(".option-item").forEach((el) => {
      el.addEventListener("click", () => {
        const opt = el.getAttribute("data-opt");
        let current = state.simAnswers[q.id] ? [...state.simAnswers[q.id]] : [];
        if (requiredChoices === 1) {
          current = [opt];
        } else {
          if (current.includes(opt)) {
            current = current.filter((x) => x !== opt);
          } else {
            if (current.length >= requiredChoices) current.shift();
            current.push(opt);
          }
        }
        state.simAnswers[q.id] = current;
        renderQuestionGrid();
        renderCurrentQuestion();
      });
    });

    document.getElementById("flag-q-btn")?.addEventListener("click", () => {
      state.simFlagged[q.id] = !state.simFlagged[q.id];
      renderQuestionGrid();
      renderCurrentQuestion();
    });

    document.getElementById("prev-q-btn")?.addEventListener("click", () => {
      if (state.simCurrentIdx > 0) {
        state.simCurrentIdx -= 1;
        renderQuestionGrid();
        renderCurrentQuestion();
      }
    });

    document.getElementById("next-q-btn")?.addEventListener("click", () => {
      if (state.simCurrentIdx < state.simQuestions.length - 1) {
        state.simCurrentIdx += 1;
        renderQuestionGrid();
        renderCurrentQuestion();
      }
    });

    document.getElementById("finish-last-q-btn")?.addEventListener("click", () => {
      finishSimulator();
    });
  }

  function buildQuestionExplanationHtml(q, userSelected, isRight) {
    const userStr = userSelected && userSelected.length ? userSelected.map((x) => x.toUpperCase()).join(", ") : "Sin responder";
    const correctStr = q.correct.map((x) => x.toUpperCase()).join(", ");
    const optionBreakdownHtml = Object.keys(q.options).map((letter) => {
      const isOptCorrect = q.correct.includes(letter);
      const optExp = (q.optionExplanations && q.optionExplanations[letter]) || (isOptCorrect ? "Opción correcta." : "Opción incorrecta.");
      return `
        <div class="option-breakdown-item ${isOptCorrect ? "is-correct" : "is-wrong"}">
          <strong>Opción ${letter.toUpperCase()} (${isOptCorrect ? "✔ Correcta" : "✖ Incorrecta"}):</strong> ${escapeHtml(optExp)}
        </div>
      `;
    }).join("");

    return `
      <div class="explanation-box">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.65rem;">
          <strong style="color:${isRight ? "var(--success-text)" : "var(--danger-text)"};font-size:0.98rem;">
            ${isRight ? "✔ ¡Respuesta Correcta!" : `✖ Respuesta Incorrecta (Tu elección: ${userStr} | Correcta: ${correctStr})`}
          </strong>
          <span class="badge">Objetivo: ${q.lo} (${q.kLevel})</span>
        </div>
        <p style="margin-bottom:0.75rem;font-size:0.94rem;"><strong>Justificación General:</strong> ${escapeHtml(q.explanation)}</p>
        <div style="font-size:0.86rem;font-weight:600;color:var(--text-secondary);margin-top:0.5rem;">Por qué cada opción es correcta o incorrecta:</div>
        ${optionBreakdownHtml}
      </div>
    `;
  }

  function finishSimulator() {
    stopSimulatorTimer();
    state.simFinished = true;

    let correctCount = 0;
    const chapterStats = {
      1: { right: 0, total: 0 },
      2: { right: 0, total: 0 },
      3: { right: 0, total: 0 },
      4: { right: 0, total: 0 },
      5: { right: 0, total: 0 },
      6: { right: 0, total: 0 }
    };

    state.simQuestions.forEach((q) => {
      const uAns = state.simAnswers[q.id] || [];
      const isRight = arraysEqualIgnoreOrder(uAns, q.correct);
      if (isRight) correctCount += 1;
      if (chapterStats[q.chapter]) {
        chapterStats[q.chapter].total += 1;
        if (isRight) chapterStats[q.chapter].right += 1;
      }
    });

    const totalQ = state.simQuestions.length;
    const pct = Math.round((correctCount / totalQ) * 1000) / 10;
    const passed = correctCount >= 26;
    const minsUsed = Math.floor(state.simElapsedSeconds / 60);
    const secsUsed = state.simElapsedSeconds % 60;
    const overTime = state.simElapsedSeconds > 3600;

    // Guardar en el historial local
    const attemptRecord = {
      date: new Date().toLocaleDateString("es-ES", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }),
      title: state.simConfig.title,
      score: correctCount,
      total: totalQ,
      pct: pct,
      passed: passed,
      timeStr: `${minsUsed}m ${secsUsed}s${overTime ? " (con tiempo extra)" : ""}`
    };
    state.simHistory.unshift(attemptRecord);
    localStorage.setItem("istqb_sim_history", JSON.stringify(state.simHistory.slice(0, 25)));
    renderDashboardHistory();

    document.getElementById("sim-runner-container").style.display = "none";
    const resContainer = document.getElementById("sim-results-container");
    resContainer.style.display = "block";

    renderSimulatorResults(correctCount, totalQ, pct, passed, attemptRecord.timeStr, chapterStats);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderSimulatorResults(correctCount, totalQ, pct, passed, timeStr, chapterStats) {
    const resContainer = document.getElementById("sim-results-container");
    const chRowsHtml = Object.keys(chapterStats).map((chNum) => {
      const st = chapterStats[chNum];
      if (st.total === 0) return "";
      const chPct = Math.round((st.right / st.total) * 100);
      return `
        <tr>
          <td><strong>Capítulo ${chNum}</strong></td>
          <td>${st.right} / ${st.total}</td>
          <td>
            <div style="display:flex;align-items:center;gap:0.6rem;">
              <div class="progress-track" style="max-width:140px;margin:0;">
                <div class="progress-fill" style="width:${chPct}%;background-color:${chPct >= 65 ? "#46694F" : "#8C463E"};"></div>
              </div>
              <span>${chPct}%</span>
            </div>
          </td>
          <td>${chPct >= 75 ? '<span class="badge" style="background:var(--success-bg);color:var(--success-text);">Sólido</span>' : '<span class="badge badge-priority">Reforzar</span>'}</td>
        </tr>
      `;
    }).join("");

    const filteredReviewQuestions = state.simQuestions.filter((q) => {
      const uAns = state.simAnswers[q.id] || [];
      const isRight = arraysEqualIgnoreOrder(uAns, q.correct);
      if (state.simReviewFilter === "wrong") return !isRight;
      if (state.simReviewFilter === "correct") return isRight;
      if (state.simReviewFilter === "ch456") return q.chapter >= 4;
      return true;
    });

    const reviewCardsHtml = filteredReviewQuestions.map((q) => {
      const uAns = state.simAnswers[q.id] || [];
      const isRight = arraysEqualIgnoreOrder(uAns, q.correct);
      const translatedNotice = q.isTranslatedCD ? `<div class="translated-notice" style="margin-bottom:0.75rem;">⚠️ <strong>Origen:</strong> ${escapeHtml(q.source)}</div>` : "";
      return `
        <div class="card" style="border-left:5px solid ${isRight ? "#46694F" : "#8C463E"};">
          ${translatedNotice}
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.6rem;">
            <div>
              <strong>Pregunta ${q.num}</strong> • <span class="badge">Capítulo ${q.chapter} (${q.lo})</span> <span class="badge">Nivel ${q.kLevel}</span>
            </div>
            <span class="badge" style="background:${isRight ? "var(--success-bg)" : "var(--danger-bg)"};color:${isRight ? "var(--success-text)" : "var(--danger-text)"};">
              ${isRight ? "✔ Acertada (1/1 pto)" : "✖ Fallada (0/1 pto)"}
            </span>
          </div>
          <p style="white-space:pre-line;font-weight:500;margin-bottom:0.9rem;">${escapeHtml(q.question)}</p>
          ${buildQuestionExplanationHtml(q, uAns, isRight)}
        </div>
      `;
    }).join("");

    resContainer.innerHTML = `
      <div class="card" style="border-left:6px solid ${passed ? "#46694F" : "#8C463E"};">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem;">
          <div>
            <span class="badge">${escapeHtml(state.simConfig.title)}</span>
            <h2 style="font-size:1.6rem;margin-top:0.4rem;">
              Resultado: ${correctCount} / ${totalQ} (${pct}%) — ${passed ? "APROBADO (≥ 65%)" : "NO APROBADO (Mínimo 26/40 = 65%)"}
            </h2>
            <p style="color:var(--text-secondary);margin-top:0.25rem;">Tiempo empleado: <strong>${timeStr}</strong></p>
          </div>
          <div style="display:flex;gap:0.6rem;flex-wrap:wrap;">
            <button class="btn" id="back-to-sim-hub-btn">← Volver a Simuladores</button>
            <button class="btn btn-primary" onclick="startSimulator('${state.simConfig.id}')">↻ Repetir este Simulador</button>
          </div>
        </div>

        <h4 style="margin-top:1.25rem;margin-bottom:0.5rem;">Desglose de Rendimiento por Capítulo</h4>
        <table class="study-table">
          <thead>
            <tr>
              <th>Capítulo</th>
              <th>Aciertos</th>
              <th>Porcentaje</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            ${chRowsHtml}
          </tbody>
        </table>
      </div>

      <div class="reading-toolbar">
        <strong>Revisión Detallada de las 40 Preguntas (Por qué cada opción es correcta o incorrecta):</strong>
        <div class="reading-filter-tabs">
          <button class="filter-tab ${state.simReviewFilter === "all" ? "active" : ""}" data-revfilter="all">Todas (${state.simQuestions.length})</button>
          <button class="filter-tab ${state.simReviewFilter === "wrong" ? "active" : ""}" data-revfilter="wrong">Incorrectas / Sin resp. (${totalQ - correctCount})</button>
          <button class="filter-tab ${state.simReviewFilter === "correct" ? "active" : ""}" data-revfilter="correct">Correctas (${correctCount})</button>
          <button class="filter-tab ${state.simReviewFilter === "ch456" ? "active" : ""}" data-revfilter="ch456">Solo Cap. 4, 5 y 6</button>
        </div>
      </div>

      <div>
        ${reviewCardsHtml || '<div class="card"><p>No hay preguntas en este filtro.</p></div>'}
      </div>
    `;

    document.getElementById("back-to-sim-hub-btn")?.addEventListener("click", () => {
      state.simActive = false;
      document.getElementById("sim-results-container").style.display = "none";
      document.getElementById("sim-hub-container").style.display = "block";
    });

    resContainer.querySelectorAll(".filter-tab[data-revfilter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.simReviewFilter = btn.getAttribute("data-revfilter");
        renderSimulatorResults(correctCount, totalQ, pct, passed, timeStr, chapterStats);
      });
    });
  }

  function renderDashboardHistory() {
    const container = document.getElementById("custom-sim-history-body");
    if (!container) return;
    if (!state.simHistory.length) {
      container.innerHTML = `<tr><td colspan="4" style="color:var(--text-muted);text-align:center;">Tus nuevos intentos en la plataforma se guardarán automáticamente aquí.</td></tr>`;
      return;
    }
    container.innerHTML = state.simHistory.map((item) => `
      <tr>
        <td>${escapeHtml(item.date)}</td>
        <td><strong>${escapeHtml(item.title)}</strong></td>
        <td><strong>${item.score} / ${item.total}</strong> (${item.pct}%)</td>
        <td>${item.passed ? '<span class="badge" style="background:var(--success-bg);color:var(--success-text);">Aprobado</span>' : '<span class="badge badge-priority">Reforzar</span>'} <span style="font-size:0.8rem;color:var(--text-muted);margin-left:6px;">${escapeHtml(item.timeStr)}</span></td>
      </tr>
    `).join("");
  }

  // ================= APARTADO 4: FLASHCARDS DE ESTUDIO (CAP. 1 AL 6 SIN LÍMITE) =================
  function initFlashcards() {
    const chSelect = document.getElementById("fc-chapter-select");
    const searchInput = document.getElementById("fc-search-input");

    chSelect?.addEventListener("change", (e) => {
      state.fcFilterChapter = e.target.value;
      applyFlashcardFilters();
    });

    searchInput?.addEventListener("input", (e) => {
      state.fcSearch = e.target.value.trim().toLowerCase();
      applyFlashcardFilters();
    });

    document.getElementById("fc-card-inner")?.addEventListener("click", () => {
      state.fcFlipped = !state.fcFlipped;
      document.getElementById("fc-card-inner")?.classList.toggle("flipped", state.fcFlipped);
    });

    document.getElementById("fc-prev-btn")?.addEventListener("click", () => {
      if (state.fcList.length === 0) return;
      state.fcFlipped = false;
      state.fcIndex = (state.fcIndex - 1 + state.fcList.length) % state.fcList.length;
      renderCurrentFlashcard();
    });

    document.getElementById("fc-next-btn")?.addEventListener("click", () => {
      if (state.fcList.length === 0) return;
      state.fcFlipped = false;
      state.fcIndex = (state.fcIndex + 1) % state.fcList.length;
      renderCurrentFlashcard();
    });

    document.getElementById("fc-shuffle-btn")?.addEventListener("click", () => {
      state.fcList = shuffleArray(state.fcList);
      state.fcIndex = 0;
      state.fcFlipped = false;
      renderCurrentFlashcard();
    });

    document.getElementById("fc-mark-mastered-btn")?.addEventListener("click", () => {
      const card = state.fcList[state.fcIndex];
      if (!card) return;
      state.fcMastered[card.id] = true;
      localStorage.setItem("istqb_fc_mastered", JSON.stringify(state.fcMastered));
      updateFlashcardStats();
      if (state.fcIndex < state.fcList.length - 1) {
        state.fcIndex += 1;
        state.fcFlipped = false;
      }
      renderCurrentFlashcard();
    });

    document.getElementById("fc-mark-review-btn")?.addEventListener("click", () => {
      const card = state.fcList[state.fcIndex];
      if (!card) return;
      delete state.fcMastered[card.id];
      localStorage.setItem("istqb_fc_mastered", JSON.stringify(state.fcMastered));
      updateFlashcardStats();
      if (state.fcIndex < state.fcList.length - 1) {
        state.fcIndex += 1;
        state.fcFlipped = false;
      }
      renderCurrentFlashcard();
    });

    applyFlashcardFilters();
  }

  function applyFlashcardFilters() {
    const allCards = window.ISTQB_FLASHCARDS || [];
    state.fcList = allCards.filter((c) => {
      if (state.fcFilterChapter === "weakness" && !c.isWeakness) return false;
      if (state.fcFilterChapter === "pending" && state.fcMastered[c.id]) return false;
      if (["1", "2", "3", "4", "5", "6"].includes(state.fcFilterChapter)) {
        if (c.chapter !== parseInt(state.fcFilterChapter, 10)) return false;
      }
      if (state.fcSearch) {
        const hay = (c.tag + " " + c.front + " " + c.back).toLowerCase();
        return hay.includes(state.fcSearch);
      }
      return true;
    });
    state.fcIndex = 0;
    state.fcFlipped = false;
    updateFlashcardStats();
    renderCurrentFlashcard();
  }

  function updateFlashcardStats() {
    const allCards = window.ISTQB_FLASHCARDS || [];
    const masteredTotal = allCards.filter((c) => state.fcMastered[c.id]).length;
    const statsEl = document.getElementById("fc-mastery-summary");
    if (statsEl) {
      statsEl.textContent = `Dominadas: ${masteredTotal} de ${allCards.length} tarjetas totales`;
    }
  }

  function renderCurrentFlashcard() {
    const inner = document.getElementById("fc-card-inner");
    const counterEl = document.getElementById("fc-counter-label");
    const frontTagEl = document.getElementById("fc-front-tag");
    const frontQEl = document.getElementById("fc-front-question");
    const backTagEl = document.getElementById("fc-back-tag");
    const backAEl = document.getElementById("fc-back-answer");
    const statusBadgeEl = document.getElementById("fc-status-badge");

    if (!inner) return;
    inner.classList.toggle("flipped", state.fcFlipped);

    if (state.fcList.length === 0) {
      if (counterEl) counterEl.textContent = "0 / 0 tarjetas";
      if (frontTagEl) frontTagEl.textContent = "Sin resultados";
      if (frontQEl) frontQEl.textContent = "No hay tarjetas que coincidan con este filtro.";
      if (backAEl) backAEl.textContent = "";
      return;
    }

    const card = state.fcList[state.fcIndex];
    const isMastered = !!state.fcMastered[card.id];

    if (counterEl) counterEl.textContent = `Tarjeta ${state.fcIndex + 1} de ${state.fcList.length} (Capítulo ${card.chapter})`;
    if (frontTagEl) frontTagEl.textContent = `Capítulo ${card.chapter} • ${card.tag}`;
    if (frontQEl) frontQEl.textContent = card.front;
    if (backTagEl) backTagEl.textContent = `Respuesta • Capítulo ${card.chapter}`;
    if (backAEl) backAEl.textContent = card.back;
    if (statusBadgeEl) {
      statusBadgeEl.textContent = isMastered ? "✔ Marcada como Dominada" : "⏳ Por repasar";
      statusBadgeEl.style.backgroundColor = isMastered ? "var(--success-bg)" : "var(--bg-muted)";
      statusBadgeEl.style.color = isMastered ? "var(--success-text)" : "var(--text-secondary)";
    }
  }

  // Utilidades
  function arraysEqualIgnoreOrder(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
    const sa = [...a].sort();
    const sb = [...b].sort();
    return sa.every((val, idx) => val === sb[idx]);
  }

  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
})();
