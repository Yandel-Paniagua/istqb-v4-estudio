window.ISTQB_CHAPTERS = [
  {
    id: 1,
    number: "Capítulo 1",
    title: "Fundamentos de la Prueba",
    duration: "180 minutos",
    examQuestionsCount: 8,
    kBreakdown: "2 preguntas K1 | 6 preguntas K2 | 0 preguntas K3",
    summary: "Establece los conceptos base de ISTQB v4.0: qué es probar, diferencia entre pruebas y depuración, relación entre QC y QA, cadena Error → Defecto → Falla, los 7 principios de las pruebas, las 7 actividades del proceso de prueba con su Testware, trazabilidad, roles, enfoque de equipo completo e independencia.",
    keywords: [
      "cobertura", "depuración", "defecto", "error", "falla", "calidad", "aseguramiento de la calidad (QA)",
      "control de calidad (QC)", "causa raíz", "análisis de prueba", "base de prueba", "caso de prueba",
      "condición de prueba", "datos de prueba", "objeto de prueba", "testware", "validación", "verificación"
    ],
    sections: [
      {
        id: "1.1",
        code: "1.1",
        title: "¿Qué es Probar? Objetivos y Diferencia con Depuración",
        kLevel: "K1 / K2",
        type: "teoria",
        fichaSummary: "Propósito principal: Evaluar la calidad del software y reducir el riesgo de fallas en operación.\n• Verificación → ¿Cumple con los requisitos especificados? (¿Construimos el producto correctamente?)\n• Validación → ¿Satisface las necesidades del usuario y del negocio en su entorno operativo? (¿Construimos el producto correcto?)\n• Pruebas ≠ Depuración: Probar detecta defectos (estática) o provoca fallas (dinámica); Depurar es una actividad de desarrollo que localiza la causa raíz en el código y corrige el defecto.",
        trampaAlerta: "En el Simulador 3 (Pregunta 2) marcaste que 'las pruebas causan fallas mientras que la depuración soluciona fallas'. ¡Cuidado con los términos! La depuración NO soluciona 'fallas' (la falla es el comportamiento externo visible), sino que encuentra la causa y elimina/corrige el DEFECTO en el código o artefacto. Después de depurar, el probador ejecuta una Prueba de Confirmación.",
        htmlContent: `
          <p>Las pruebas de software son un conjunto de actividades destinadas a descubrir defectos y evaluar la calidad de los artefactos de software (conocidos como <strong>objetos de prueba</strong>). Es un error común pensar que probar consiste únicamente en ejecutar el software (<em>pruebas dinámicas</em>); también incluye revisar requisitos, historias de usuario, diseños y código sin ejecutarlos (<em>pruebas estáticas</em>).</p>
          <h4>1.1.1 Objetivos Típicos de la Prueba (FL-1.1.1 - K1)</h4>
          <ul>
            <li><strong>Evaluar productos de trabajo:</strong> requisitos, historias de usuario, diseños y código.</li>
            <li><strong>Provocar fallas y encontrar defectos:</strong> detectar anomalías antes de que lleguen a producción.</li>
            <li><strong>Asegurar la cobertura requerida</strong> de un objeto de prueba.</li>
            <li><strong>Reducir el nivel de riesgo</strong> de una calidad inadecuada del software.</li>
            <li><strong>Verificar</strong> si se han cumplido los requisitos especificados.</li>
            <li><strong>Verificar el cumplimiento</strong> de requisitos contractuales, legales y regulatorios.</li>
            <li><strong>Proporcionar información</strong> a las partes interesadas (stakeholders) para tomar decisiones informadas.</li>
            <li><strong>Generar confianza</strong> en la calidad del objeto de prueba.</li>
            <li><strong>Validar</strong> si el objeto de prueba está completo y funciona como esperan los usuarios y partes interesadas.</li>
          </ul>
          <h4>1.1.2 Pruebas vs. Depuración (FL-1.1.2 - K2)</h4>
          <table class="study-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Pruebas (Testing)</th>
                <th>Depuración (Debugging)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Propósito</strong></td>
                <td>Provocar fallas (dinámica) o detectar defectos directamente en artefactos (estática).</td>
                <td>Encontrar la causa de la falla (el defecto), analizarla y eliminar el defecto.</td>
              </tr>
              <tr>
                <td><strong>Responsable típico</strong></td>
                <td>Probadores (Testers) o equipo en pruebas estáticas/dinámicas.</td>
                <td>Desarrolladores.</td>
              </tr>
              <tr>
                <td><strong>Pasos del proceso</strong></td>
                <td>Planificación, análisis, diseño, implementación y ejecución/revisión.</td>
                <td>1) Reproducción de la falla, 2) Diagnóstico (encontrar causa raíz/defecto), 3) Corrección del defecto.</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: "1.2",
        code: "1.2",
        title: "¿Por qué es Necesario Probar? QC vs. QA y Cadena Error → Defecto → Falla",
        kLevel: "K1 / K2",
        type: "teoria",
        fichaSummary: "• QC (Control de Calidad) → Correctivo y orientado al PRODUCTO. Las pruebas son una forma de QC.\n• QA (Aseguramiento de Calidad) → Preventivo y orientado al PROCESO. Busca que los buenos procesos eviten que nazcan defectos.\n• Cadena causal: Causa Raíz (razón origen) → Error (equivocación humana) → Defecto / Bug (imperfección en código o documento) → Falla (mal funcionamiento visible al ejecutar el software).",
        trampaAlerta: "Trampa clásica de examen: Si un enunciado dice 'Durante una revisión formal (prueba estática) se detectaron varios fallos...', esa opción es FALSA. En las pruebas estáticas no se ejecuta el código, por lo que NUNCA se observan fallas, solo se detectan defectos (anomalías).",
        htmlContent: `
          <h4>1.2.1 Contribuciones de las Pruebas al Éxito (FL-1.2.1 - K2)</h4>
          <p>Las pruebas ofrecen un medio rentable para detectar defectos. Si se corrigen temprano, se reduce el costo de fallas posteriores. Además, evalúan la calidad en cada etapa del SDLC y representan indirectamente a los usuarios durante el proyecto.</p>
          <h4>1.2.2 Pruebas y Aseguramiento de la Calidad (QA) (FL-1.2.2 - K1)</h4>
          <p>En ISTQB, <strong>Pruebas</strong> y <strong>QA</strong> no son sinónimos. Ambos pertenecen a la <strong>Gestión de la Calidad</strong>:</p>
          <ul>
            <li><strong>Control de Calidad (QC):</strong> Enfoque correctivo centrado en el <em>producto</em>. Las pruebas (y los métodos formales como pruebas de modelos y simulación) son la actividad principal de QC para alcanzar niveles adecuados de calidad.</li>
            <li><strong>Aseguramiento de la Calidad (QA):</strong> Enfoque preventivo centrado en la implementación y mejora de los <em>procesos</em>. Los resultados de las pruebas se usan en QA para recibir retroalimentación sobre qué tan bien están funcionando los procesos.</li>
          </ul>
          <h4>1.2.3 Errores, Defectos, Fallas y Causas Raíz (FL-1.2.3 - K2)</h4>
          <table class="study-table">
            <thead>
              <tr>
                <th>Concepto</th>
                <th>Definición Oficial ISTQB v4.0</th>
                <th>Ejemplo Práctico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Causa Raíz</strong></td>
                <td>La razón fundamental por la que ocurre un problema o error.</td>
                <td>Falta de capacitación en reglas fiscales o distracción por teléfono mientras se programa.</td>
              </tr>
              <tr>
                <td><strong>Error (Equivocación)</strong></td>
                <td>Acción humana que produce un resultado incorrecto.</td>
                <td>El programador escribe por equivocación el signo <code>&gt;=</code> en lugar de <code>&gt;</code>.</td>
              </tr>
              <tr>
                <td><strong>Defecto (Falta / Bug)</strong></td>
                <td>Imperfección o deficiencia en un producto de trabajo (código, requisito, caso de prueba).</td>
                <td>La línea de código con la condición límite mal codificada o un requisito contradictorio.</td>
              </tr>
              <tr>
                <td><strong>Falla (Fallo)</strong></td>
                <td>Evento en el que un componente o sistema no realiza una función requerida dentro de los límites especificados.</td>
                <td>Al ejecutar la app e ingresar 20 años, el sistema rechaza indebidamente al cliente.</td>
              </tr>
            </tbody>
          </table>
          <p><em>Nota importante:</em> No todos los defectos provocan fallas (por ejemplo, si el defecto está en código inalcanzable o nunca se ejecuta esa condición). Asimismo, las fallas también pueden ser causadas por condiciones ambientales (radiación, campos electromagnéticos, fallas de hardware o firmware).</p>
        `
      },
      {
        id: "1.3",
        code: "1.3",
        title: "Los 7 Principios de las Pruebas",
        kLevel: "K2",
        type: "ficha",
        fichaSummary: "1. Las pruebas muestran la presencia, no la ausencia de defectos.\n2. Las pruebas exhaustivas son imposibles (usar técnicas de prueba y priorización por riesgo).\n3. Las pruebas tempranas ahorran tiempo y dinero (Shift-Left).\n4. Los defectos se agrupan (Principio de Pareto: pocos módulos concentran la mayoría de defectos).\n5. Las pruebas se desgastan (Paradoja del pesticida: repetir las mismas pruebas no halla nuevos defectos).\n6. Las pruebas dependen del contexto.\n7. Falacia de la ausencia de defectos (verificar que no tenga bugs no sirve si no valida las necesidades del usuario).",
        htmlContent: `
          <p>Los siete principios ofrecen directrices generales aplicables a todas las pruebas a lo largo de cualquier ciclo de vida:</p>
          <ol>
            <li><strong>Las pruebas muestran la presencia, no la ausencia de defectos:</strong> Pueden demostrar que existen defectos, pero nunca pueden demostrar que el software está 100% libre de defectos. Reducen la probabilidad de defectos no descubiertos.</li>
            <li><strong>Las pruebas exhaustivas son imposibles:</strong> Probar todas las combinaciones de entradas y precondiciones no es factible salvo en casos triviales. En su lugar se usan <em>técnicas de prueba</em>, <em>priorización de casos</em> y <em>pruebas basadas en el riesgo</em>.</li>
            <li><strong>Las pruebas tempranas ahorran tiempo y dinero:</strong> Tanto las pruebas estáticas como las dinámicas deben comenzar lo antes posible. Eliminar defectos en requisitos o diseño evita que se propaguen al código.</li>
            <li><strong>Los defectos se agrupan:</strong> Un pequeño número de componentes suele contener la mayoría de los defectos detectados o ser responsable de la mayoría de las fallas operativas (aplicación del principio de Pareto).</li>
            <li><strong>Las pruebas se desgastan (Paradoja del pesticida):</strong> Si se repiten las mismas pruebas una y otra vez, dejan de encontrar nuevos defectos. Para encontrar nuevos defectos puede ser necesario modificar pruebas existentes o crear nuevas (aunque las pruebas de regresión automatizadas siguen siendo útiles para detectar regresiones).</li>
            <li><strong>Las pruebas dependen del contexto:</strong> No se prueba igual una aplicación móvil de juegos que el software de control de un avión médico o un proyecto Ágil frente a uno secuencial.</li>
            <li><strong>Falacia de la ausencia de defectos:</strong> Encontrar y corregir muchos defectos (alta verificación) no garantiza el éxito del sistema si el software resulta difícil de usar, no cumple los objetivos de negocio o es inferior a la competencia (falta de validación).</li>
          </ol>
        `
      },
      {
        id: "1.4",
        code: "1.4",
        title: "Actividades de Prueba, Testware, Trazabilidad y Roles",
        kLevel: "K2",
        type: "ficha",
        fichaSummary: "Las 7 actividades y su pregunta clave:\n1. Planificación → Definir objetivos y enfoque.\n2. Monitoreo y Control → Comparar progreso real vs. plan y aplicar directivas correctivas.\n3. Análisis → ¿QUÉ probar? (Condiciones de prueba priorizadas y defectos en la base de prueba).\n4. Diseño → ¿CÓMO probar? (Casos de prueba, cartas de prueba, ítems de cobertura, REQUISITOS de datos y de entorno).\n5. Implementación → ¿Está todo listo? (Procedimientos, scripts automatizados, suites, DATOS de prueba reales, entorno construido, cronograma de ejecución).\n6. Ejecución → Correr pruebas (Registros de prueba / logs e informes de defectos).\n7. Finalización → Cierre en hitos (Informe de finalización, lecciones aprendidas, solicitudes de cambio, testware archivado).",
        trampaAlerta: "¡ERROR DETECTADO DOS VECES EN TUS SIMULADORES (Intento 3 Q4/Q39 e Intento 4 Q39)! En tus apuntes de repaso anotaste 'Datos de prueba' dentro de Diseño. Según ISTQB v4.0:\n• En DISEÑO se identifican los REQUISITOS de datos de prueba.\n• En IMPLEMENTACIÓN se crean o adquieren los DATOS DE PRUEBA reales (por eso una herramienta de preparación de datos apoya a la Implementación y Ejecución, NO al Diseño).\n• Además: Crear el Plan de Pruebas pertenece al Rol de GESTIÓN de pruebas, mientras que Configurar el entorno de prueba pertenece al Rol de PRUEBA (Tester).",
        htmlContent: `
          <h4>1.4.1 y 1.4.3 Actividades del Proceso de Prueba y su Testware (FL-1.4.1 / FL-1.4.3 - K2)</h4>
          <p>Aunque suelen presentarse en orden lógico, las actividades del proceso de prueba suelen implementarse de forma iterativa o en paralelo según el contexto:</p>
          <table class="study-table">
            <thead>
              <tr>
                <th>Actividad</th>
                <th>Tareas Principales</th>
                <th>Productos de Trabajo (Testware) de Salida</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Planificación de la prueba</strong></td>
                <td>Definir objetivos de prueba y seleccionar el enfoque que mejor los logre dentro de las restricciones del proyecto.</td>
                <td>• Plan de prueba<br>• Cronograma de prueba<br>• Registro de riesgos<br>• Criterios de entrada y de salida</td>
              </tr>
              <tr>
                <td><strong>2. Monitoreo y control</strong></td>
                <td><strong>Monitoreo:</strong> Verificación continua del progreso real frente al plan.<br><strong>Control:</strong> Tomar medidas/directivas necesarias para cumplir los objetivos (ej. repriorizar pruebas, reajustar calendario).</td>
                <td>• Informes de progreso de prueba<br>• Directivas de control documentadas<br>• Información actualizada de riesgos</td>
              </tr>
              <tr>
                <td><strong>3. Análisis de la prueba</strong><br><em>(¿Qué probar?)</em></td>
                <td>Analizar la base de prueba para identificar características comprobables, definir y priorizar <strong>condiciones de prueba</strong> según riesgos, y detectar defectos en la base de prueba.</td>
                <td>• Condiciones de prueba (definidas y priorizadas)<br>• Informes de defectos sobre la base de prueba</td>
              </tr>
              <tr>
                <td><strong>4. Diseño de la prueba</strong><br><em>(¿Cómo probar?)</em></td>
                <td>Elaborar las condiciones de prueba en casos de prueba de alto nivel, cartas de prueba (test charters) e ítems de cobertura. Identificar los <em>requisitos</em> de datos y del entorno de prueba.</td>
                <td>• Casos de prueba (priorizados)<br>• Cartas de prueba (Test Charters)<br>• Ítems de cobertura<br>• <strong>Requisitos</strong> de datos de prueba<br>• <strong>Requisitos</strong> del entorno de prueba</td>
              </tr>
              <tr>
                <td><strong>5. Implementación de la prueba</strong><br><em>(Construir y organizar todo)</em></td>
                <td>Crear o adquirir el testware necesario para ejecutar: organizar casos en procedimientos y suites de prueba, crear scripts automatizados, crear/adquirir los <strong>datos de prueba</strong> reales y construir/verificar el entorno.</td>
                <td>• Procedimientos de prueba<br>• Scripts de prueba automatizados<br>• Conjuntos (suites) de pruebas<br>• <strong>Datos de prueba</strong> (creados/cargados)<br>• Cronograma de ejecución de pruebas<br>• Elementos del entorno (stubs, drivers, simuladores)</td>
              </tr>
              <tr>
                <td><strong>6. Ejecución de la prueba</strong></td>
                <td>Ejecutar pruebas manuales o automatizadas según el cronograma, comparar resultados reales vs. esperados, analizar anomalías y reportar defectos.</td>
                <td>• Registros de prueba (Test logs)<br>• Informes de defectos</td>
              </tr>
              <tr>
                <td><strong>7. Finalización de la prueba</strong></td>
                <td>Ocurre en hitos (entrega, fin de iteración, fin de nivel o cancelación). Archivar testware, limpiar y entregar el entorno, cerrar informes de defectos y redactar informe final.</td>
                <td>• Informe de finalización de prueba<br>• Elementos de acción para mejora (lecciones aprendidas)<br>• Solicitudes de cambio (elementos del backlog de producto)<br>• Testware finalizado y archivado</td>
              </tr>
            </tbody>
          </table>

          <h4>1.4.2 El Proceso de Prueba en Contexto (FL-1.4.2 - K2)</h4>
          <p>Las pruebas no se realizan en el vacío. Factores contextuales que influyen significativamente en cómo se prueba incluyen: las partes interesadas (necesidades y expectativas), miembros del equipo (experiencia y habilidades), factores de negocio/dominio, factores técnicos (arquitectura, tecnología), restricciones del proyecto (presupuesto, tiempo), factores organizativos, el <strong>ciclo de vida de desarrollo (SDLC)</strong>, herramientas y <strong>requisitos regulatorios/legales</strong>.</p>

          <h4>1.4.4 Trazabilidad entre la Base de Prueba y el Testware (FL-1.4.4 - K2)</h4>
          <ul>
            <li>Permite evaluar la cobertura (por ejemplo, qué requisitos o riesgos ya están cubiertos por casos de prueba).</li>
            <li>Permite determinar el <strong>riesgo residual</strong> (vinculando todos los riesgos identificados con los resultados de prueba).</li>
            <li>Facilita el <strong>análisis de impacto de cambios</strong> (saber exactamente qué casos de prueba ejecutar en regresión cuando cambia un requisito o componente).</li>
            <li>Facilita las auditorías y ayuda a comunicar el estado a los stakeholders en términos comprensibles para el negocio.</li>
          </ul>

          <h4>1.4.5 Roles en las Pruebas (FL-1.4.5 - K2)</h4>
          <ul>
            <li><strong>Rol de Gestión de Pruebas:</strong> Responsabilidad global del proceso, equipo y liderazgo. Se centra en la <em>planificación, monitoreo, control y finalización</em> (ej. redactar el plan de pruebas, decidir sobre la automatización global, informar avances).</li>
            <li><strong>Rol de Prueba (Tester):</strong> Responsable del aspecto técnico/ingenieril. Se centra en el <em>análisis, diseño, implementación y ejecución</em> de pruebas (ej. configurar entornos de prueba, diseñar casos, informar sobre la cobertura alcanzada).</li>
          </ul>
        `
      },
      {
        id: "1.5",
        code: "1.5",
        title: "Habilidades Esenciales, Enfoque de Equipo Completo e Independencia",
        kLevel: "K1 / K2",
        type: "teoria",
        fichaSummary: "• Habilidades del probador: Conocimiento de pruebas, meticulosidad/atención al detalle, buenas habilidades de comunicación (tacto y diplomacia), pensamiento analítico/crítico, conocimiento técnico y conocimiento del dominio.\n• Enfoque de Equipo Completo (Whole-Team): Cualquier miembro con las habilidades necesarias puede realizar tareas de prueba; todos comparten la responsabilidad de la calidad.\n• Niveles de independencia (de menor a mayor): 1) Sin independencia (autor), 2) Pares del mismo equipo, 3) Equipo de pruebas independiente dentro de la organización, 4) Probadores externos a la organización.\n• Beneficio principal de la independencia: Sesgos cognitivos distintos a los del autor (cuestiona suposiciones).\n• Desventaja: Aislamiento, problemas de comunicación, verse como cuello de botella.",
        htmlContent: `
          <h4>1.5.1 Habilidades Genéricas Requeridas para la Prueba (FL-1.5.1 - K2)</h4>
          <p>Además del conocimiento de técnicas de prueba, un buen probador requiere:</p>
          <ul>
            <li><strong>Meticulosidad, cuidado, curiosidad, atención al detalle y ser metódico</strong> para identificar defectos difíciles de encontrar.</li>
            <li><strong>Buenas habilidades de comunicación, escucha activa y espíritu de equipo:</strong> Comunicar defectos y fallas suele percibirse como crítica al autor (malas noticias), por lo que requiere tacto, objetividad y comunicación constructiva.</li>
            <li><strong>Pensamiento analítico, pensamiento crítico y creatividad.</strong></li>
            <li><strong>Conocimientos técnicos</strong> (para usar herramientas y entender el código/arquitectura).</li>
            <li><strong>Conocimiento del dominio</strong> (para comprender al usuario final y las reglas del negocio).</li>
          </ul>
          <p><em>Nota de examen:</em> "Crear la visión del producto" (rol de negocio) o "Planificar y organizar el trabajo del equipo" (rol de gestión) NO son competencias genéricas del rol de prueba.</p>

          <h4>1.5.2 El Enfoque de Equipo Completo (Whole-Team Approach) (FL-1.5.2 - K1)</h4>
          <p>Proveniente de Extreme Programming (XP), significa que cualquier miembro del equipo con los conocimientos y habilidades necesarios puede realizar cualquier tipo de tarea necesaria para el éxito del proyecto, y todos comparten la responsabilidad de la calidad. Los probadores trabajan estrechamente con los representantes del negocio (para ayudarles a crear pruebas de aceptación adecuadas) y con los desarrolladores (para acordar la estrategia de prueba y los enfoques de automatización).</p>

          <h4>1.5.3 Independencia de las Pruebas (FL-1.5.3 - K2)</h4>
          <p>Los productos de trabajo pueden ser probados por su autor (sin independencia), por compañeros del mismo equipo (cierta independencia), por probadores fuera del equipo pero dentro de la organización (alta independencia) o por probadores externos a la organización (muy alta independencia).</p>
          <ul>
            <li><strong>Beneficio principal:</strong> Los probadores independientes ven otros tipos de fallas y defectos en comparación con los desarrolladores debido a sus diferentes antecedentes, perspectivas técnicas y <strong>sesgos cognitivos</strong>. Pueden cuestionar suposiciones hechas durante la especificación y la implementación.</li>
            <li><strong>Inconvenientes potenciales:</strong> Los probadores independientes pueden quedar aislados del equipo de desarrollo, sufrir falta de colaboración, problemas de comunicación o relación adversaria, y los desarrolladores pueden perder su sentido de responsabilidad por la calidad o ver a los probadores como un cuello de botella en la entrega.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 2,
    number: "Capítulo 2",
    title: "Pruebas a lo Largo del Ciclo de Vida de Desarrollo de Software (SDLC)",
    duration: "130 minutos",
    examQuestionsCount: 6,
    kBreakdown: "2 preguntas K1 | 4 preguntas K2 | 0 preguntas K3",
    summary: "Explica cómo el modelo de ciclo de vida (secuencial, iterativo, incremental, ágil) impacta en las pruebas, los enfoques Test-First (TDD, ATDD, BDD), DevOps, Shift-Left, retrospectivas, los 5 niveles de prueba, los 4 tipos de prueba, confirmación vs. regresión y pruebas de mantenimiento.",
    keywords: [
      "pruebas de aceptación", "pruebas de integración de sistemas", "pruebas del sistema",
      "pruebas de integración de componentes", "pruebas de componentes", "pruebas funcionales",
      "pruebas no funcionales", "caja negra", "caja blanca", "confirmación", "regresión",
      "mantenimiento", "shift-left", "TDD", "ATDD", "BDD", "DevOps"
    ],
    sections: [
      {
        id: "2.1",
        code: "2.1",
        title: "Impacto del SDLC, Enfoques Test-First (TDD, ATDD, BDD), DevOps y Shift-Left",
        kLevel: "K1 / K2",
        type: "ficha",
        fichaSummary: "• En modelos SECUENCIALES (Cascada, Modelo en V): al inicio solo se hacen pruebas estáticas y planificación; las pruebas dinámicas ocurren tarde (cuando ya hay código).\n• En modelos ITERATIVOS / INCREMENTALES / ÁGILES: pruebas estáticas y dinámicas en cada iteración, regresión frecuente y amplia automatización.\n• Diferencia clave Test-First:\n  - TDD: Pruebas unitarias/componentes escritas antes del código → guían la codificación y refactorización.\n  - ATDD: Pruebas derivadas de los criterios de aceptación antes de desarrollar la historia → involucra a negocio, desarrollo y testing.\n  - BDD: Expresa el comportamiento deseado por el negocio en formato Dado / Cuando / Entonces (Given/When/Then), traducible automáticamente a pruebas ejecutables.\n• Shift-Left: Probar antes (no necesariamente probar más), incluyendo pruebas no funcionales desde nivel de componente.",
        trampaAlerta: "En el Intento 3 fallaste las preguntas 10 y 11:\n1) Confundiste ATDD con BDD: Cuando una opción dice 'usa el formato Dado/Cuando/Entonces y se centra en el comportamiento deseado', describe BDD, NO ATDD. ATDD se define como 'crear pruebas a partir de los criterios de aceptación para guiar el desarrollo'.\n2) En Shift-Left creíste que hacer pruebas de rendimiento en pruebas de componente NO era shift-left. ¡Sí lo es! Iniciar pruebas no funcionales desde niveles tempranos (componentes) es una práctica oficial de Shift-Left. Lo que NO es shift-left es escribir scripts antes de configurar la gestión de configuración.",
        htmlContent: `
          <h4>2.1.1 Impacto del SDLC en las Pruebas (FL-2.1.1 - K2)</h4>
          <p>La elección del Ciclo de Vida del Desarrollo de Software (SDLC) impacta directamente en:</p>
          <ul>
            <li>El alcance y calendario de las actividades de prueba (ej. cuándo pueden empezar las pruebas dinámicas).</li>
            <li>El nivel de detalle de la documentación de prueba.</li>
            <li>La elección de las técnicas de prueba y el enfoque de prueba.</li>
            <li>El alcance de la automatización de pruebas.</li>
            <li>El rol y las responsabilidades de un probador.</li>
          </ul>
          <p>En <strong>modelos secuenciales</strong> (Cascada, Modelo en V), los probadores participan al inicio en revisiones de requisitos y análisis/diseño, pero <strong>no pueden realizar pruebas dinámicas al principio</strong> porque aún no hay código ejecutable. En <strong>modelos iterativos e incrementales</strong>, cada iteración entrega un prototipo o incremento probado tanto estática como dinámicamente, lo que exige pruebas de regresión continuas. En el <strong>desarrollo Ágil</strong> se favorece la documentación ligera, amplia automatización para regresión y pruebas manuales basadas en la experiencia.</p>

          <h4>2.1.2 Buenas Prácticas de Prueba en TODOS los SDLC (FL-2.1.2 - K1)</h4>
          <ul>
            <li>Para cada actividad de desarrollo de software existe una actividad de prueba correspondiente.</li>
            <li>Los diferentes niveles de prueba tienen objetivos específicos y diferentes (evitando redundancias).</li>
            <li>El análisis y diseño de pruebas para un nivel dado comienza durante la actividad de desarrollo correspondiente.</li>
            <li>Los probadores participan en la revisión de los productos de trabajo tan pronto como estén disponibles los borradores.</li>
          </ul>

          <h4>2.1.3 Desarrollo Guiado por Pruebas: TDD, ATDD y BDD (FL-2.1.3 - K1)</h4>
          <table class="study-table">
            <thead>
              <tr>
                <th>Enfoque</th>
                <th>Enfoque Principal</th>
                <th>Características Clave para el Examen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>TDD</strong><br><em>(Test-Driven Development)</em></td>
                <td>Dirige la codificación a través de casos de prueba (generalmente unitarios/de componente).</td>
                <td>1) Se escriben las pruebas primero, 2) se escribe el código mínimo para pasarlas, 3) se refactoriza el código y las pruebas.</td>
              </tr>
              <tr>
                <td><strong>ATDD</strong><br><em>(Acceptance Test-Driven Development)</em></td>
                <td>Deriva las pruebas a partir de los <strong>criterios de aceptación</strong> como parte del diseño del sistema antes de escribir el código.</td>
                <td>Las pruebas las crean colaborativamente miembros del equipo con distintas perspectivas (clientes, desarrolladores, probadores) para impulsar el desarrollo de la historia de usuario.</td>
              </tr>
              <tr>
                <td><strong>BDD</strong><br><em>(Behavior-Driven Development)</em></td>
                <td>Expresa el <strong>comportamiento deseado</strong> de una aplicación con casos de prueba escritos en un lenguaje sencillo comprensible para todas las partes interesadas.</td>
                <td>Utiliza habitualmente el formato <strong>Dado / Cuando / Entonces</strong> (<em>Given / When / Then</em>). Los escenarios se traducen automáticamente en pruebas ejecutables.</td>
              </tr>
            </tbody>
          </table>

          <h4>2.1.4 DevOps y Pruebas (FL-2.1.4 - K2)</h4>
          <p>DevOps busca crear sinergia entre desarrollo (incluidas las pruebas) y operaciones. Sus beneficios para las pruebas incluyen:</p>
          <ul>
            <li>Retroalimentación rápida sobre la calidad del código.</li>
            <li>Integración Continua (CI) y Entrega Continua (CD) que promueven el enfoque <em>shift-left</em>.</li>
            <li>Promueve procesos automatizados (CI/CD) que facilitan establecer entornos de prueba estables y reducen el esfuerzo manual repetitivo.</li>
            <li>Aumenta la visibilidad sobre las características de calidad no funcionales (rendimiento, fiabilidad).</li>
            <li><em>Riesgos/Desafíos de DevOps:</em> Hay que definir y establecer la canalización de entrega, introducir y mantener herramientas de CI/CD, y la automatización requiere recursos adicionales (además, no elimina la necesidad de pruebas manuales, especialmente desde la perspectiva del usuario).</li>
          </ul>

          <h4>2.1.5 Enfoque de Desplazamiento hacia la Izquierda (Shift-Left) (FL-2.1.5 - K2)</h4>
          <p>El principio de pruebas tempranas se conoce como <strong>shift-left</strong> porque en un diagrama lineal de izquierda a derecha adelanta las actividades de prueba hacia fases más tempranas (sin descuidar las fases finales). Prácticas oficiales de Shift-Left:</p>
          <ul>
            <li>Revisar especificaciones desde la perspectiva de las pruebas antes de que sean aceptadas formalmente.</li>
            <li>Escribir casos de prueba antes de escribir el código (TDD, ATDD, BDD).</li>
            <li>Usar CI/CD para obtener retroalimentación rápida y pruebas de componente automatizadas al enviar código.</li>
            <li>Completar el análisis estático del código fuente antes de las pruebas dinámicas.</li>
            <li><strong>Realizar pruebas no funcionales a partir del nivel de prueba de componentes</strong> cuando sea posible.</li>
          </ul>

          <h4>2.1.6 Retrospectivas y Mejora de Procesos (FL-2.1.6 - K2)</h4>
          <p>Se celebran al final de un proyecto, iteración o hito de entrega. Responden a: ¿qué tuvo éxito?, ¿qué no tuvo éxito y cómo mejorarlo? Los resultados se registran en el informe de finalización de prueba y generan acciones de mejora para la efectividad, eficiencia, calidad del testware y cooperación entre desarrollo y pruebas.</p>
        `
      },
      {
        id: "2.2",
        code: "2.2",
        title: "Los 5 Niveles de Prueba, 4 Tipos de Prueba y Confirmación vs. Regresión",
        kLevel: "K2",
        type: "ficha",
        fichaSummary: "• Los 5 Niveles de Prueba (ISTQB v4.0 distingue 5, no 4):\n  1. Prueba de Componente (Unitaria): módulo aislado (usa stubs y drivers).\n  2. Prueba de Integración de Componentes: interfaces e interacción entre componentes internos.\n  3. Prueba de Sistema: comportamiento y capacidades del sistema completo extremo a extremo (funcional y no funcional).\n  4. Prueba de Integración de Sistemas: interfaces con otros sistemas y servicios externos (ej. pasarela de pago externa, microservicios de terceros).\n  5. Prueba de Aceptación: validación de necesidades del negocio (UAT, Aceptación Operativa, Contractual/Regulatoria, Alfa y Beta).\n• Confirmación vs. Regresión:\n  - Confirmación (Re-testing): verifica que un defecto reportado fue corregido con éxito (vuelve a correr el caso que había fallado).\n  - Regresión: verifica que un cambio/corrección no haya introducido efectos adversos en partes NO modificadas del software.",
        htmlContent: `
          <h4>2.2.1 Los 5 Niveles de Prueba (FL-2.2.1 - K2)</h4>
          <p>Los niveles de prueba son grupos de actividades de prueba organizadas y gestionadas conjuntamente. Cada nivel es una instancia del proceso de prueba en relación con la etapa de desarrollo:</p>
          <table class="study-table">
            <thead>
              <tr>
                <th>Nivel de Prueba</th>
                <th>Objeto y Enfoque Principal</th>
                <th>Defectos Típicos y Responsables</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Prueba de Componente</strong><br><em>(Prueba Unitaria)</em></td>
                <td>Prueba componentes de forma aislada. Suele requerir arneses de prueba, objetos simulados (mocks), controladores (drivers) y resguardos (stubs).</td>
                <td>Lógica incorrecta dentro de un módulo, algoritmos mal codificados. Realizada generalmente por los <strong>desarrolladores</strong>.</td>
              </tr>
              <tr>
                <td><strong>2. Prueba de Integración de Componentes</strong></td>
                <td>Se centra en las interacciones e interfaces entre componentes integrados dentro del sistema (enfoques bottom-up, top-down, big-bang).</td>
                <td>Paso incorrecto de parámetros, llamadas a APIs internas mal entendidas, discrepancias de interfaz entre módulos.</td>
              </tr>
              <tr>
                <td><strong>3. Prueba de Sistema</strong></td>
                <td>Examina el comportamiento y las capacidades de todo el sistema o producto completo (tareas funcionales de extremo a extremo y características no funcionales).</td>
                <td>Implementación incorrecta de reglas de negocio del sistema, fallas de rendimiento o seguridad global. Realizada a menudo por un <strong>equipo de pruebas independiente</strong>.</td>
              </tr>
              <tr>
                <td><strong>4. Prueba de Integración de Sistemas</strong></td>
                <td>Se centra en las interfaces del sistema bajo prueba con otros sistemas y servicios externos (ej. bolsa de valores, pasarela de pago web, servicios en la nube).</td>
                <td>Incompatibilidad de protocolos o formatos de datos con sistemas externos, fallos de red o tiempos de espera entre sistemas.</td>
              </tr>
              <tr>
                <td><strong>5. Prueba de Aceptación</strong></td>
                <td>Se centra en la validación y en demostrar la preparación para el despliegue. Formas principales: <strong>UAT</strong> (usuarios), <strong>Operativa</strong> (respaldo, recuperación de desastres, mantenimiento), <strong>Contractual y Regulatoria</strong>, <strong>Alfa</strong> (en instalaciones del desarrollador) y <strong>Beta</strong> (en ubicaciones de los clientes).</td>
                <td>El sistema no satisface las necesidades de negocio del usuario o los flujos de trabajo operativos reales.</td>
              </tr>
            </tbody>
          </table>

          <h4>2.2.2 Los 4 Tipos de Prueba (FL-2.2.2 - K2)</h4>
          <p><em>Importante:</em> Cualquiera de los 4 tipos de prueba puede aplicarse en <strong>cualquiera de los 5 niveles de prueba</strong>:</p>
          <ol>
            <li><strong>Pruebas Funcionales:</strong> Evalúan las funciones que un componente o sistema debe realizar (<em>"¿qué hace el objeto de prueba?"</em>). Buscan completitud funcional, corrección funcional e idoneidad funcional.</li>
            <li><strong>Pruebas No Funcionales:</strong> Evalúan atributos de calidad distintos a la funcionalidad (<em>"¿qué tan bien se comporta el sistema?"</em>): eficiencia de desempeño, compatibilidad, usabilidad, fiabilidad, seguridad, mantenibilidad, portabilidad.</li>
            <li><strong>Pruebas de Caja Negra:</strong> Basadas en especificaciones y orientadas al comportamiento externo de entrada/salida, sin hacer referencia a la estructura interna del objeto de prueba.</li>
            <li><strong>Pruebas de Caja Blanca:</strong> Basadas en la estructura y derivadas de la implementación o estructura interna del sistema (código, arquitectura, flujos de datos o flujos de control).</li>
          </ol>

          <h4>2.2.3 Pruebas de Confirmación y Pruebas de Regresión (FL-2.2.3 - K2)</h4>
          <ul>
            <li><strong>Prueba de Confirmación:</strong> Confirma que un defecto original se ha corregido con éxito. Consiste en volver a ejecutar los casos de prueba que habían fallado anteriormente debido al defecto (o ejecutar nuevas pruebas para cubrir los cambios).</li>
            <li><strong>Prueba de Regresión:</strong> Confirma que ningún cambio ha tenido consecuencias adversas (regresiones) en partes del software que ya funcionaban. Se requiere tras una corrección, una nueva funcionalidad o un cambio de entorno. Primero se realiza un análisis de impacto para saber cuánta regresión hace falta; son fuertes candidatas a la automatización.</li>
          </ul>
        `
      },
      {
        id: "2.3",
        code: "2.3",
        title: "Pruebas de Mantenimiento y sus Activadores",
        kLevel: "K2",
        type: "teoria",
        fichaSummary: "El alcance de las pruebas de mantenimiento depende de:\n1. El grado de riesgo del cambio.\n2. El tamaño del sistema existente.\n3. El tamaño del cambio.\n\nLos 3 Activadores (Triggers) de las pruebas de mantenimiento:\n1. Modificaciones (mejoras planificadas, cambios correctivos o de emergencia / hotfixes).\n2. Actualizaciones o migraciones del entorno operativo (a nueva plataforma, pruebas de conversión de datos).\n3. Retiro de un sistema (fin de vida útil → probar el archivado de datos o la restauración/recuperación de datos tras largos periodos).",
        htmlContent: `
          <p>Una vez que un sistema está en producción, el mantenimiento es necesario para corregir defectos descubiertos en operación, añadir nuevas funcionalidades, mejorar atributos no funcionales o retirar el sistema.</p>
          <p>Las pruebas de mantenimiento incluyen tanto <strong>pruebas de confirmación / verificación del cambio</strong> como <strong>pruebas de regresión</strong> sobre el resto del sistema.</p>
          <h4>Alcance de las pruebas de mantenimiento:</h4>
          <ul>
            <li>El <strong>grado de riesgo del cambio</strong> (ej. cuánto puede afectar a áreas críticas).</li>
            <li>El <strong>tamaño del sistema existente</strong>.</li>
            <li>El <strong>tamaño del cambio</strong>.</li>
          </ul>
          <h4>Los 3 Activadores (Triggers) Oficiales (FL-2.3.1 - K2):</h4>
          <ol>
            <li><strong>Modificaciones:</strong> Mejoras planificadas (cambios adaptativos), cambios correctivos o parches en caliente (hotfixes).</li>
            <li><strong>Actualizaciones o migraciones del entorno operativo:</strong> Paso a una nueva plataforma, sistema operativo o base de datos. Exige pruebas del nuevo entorno así como pruebas de conversión/migración de datos.</li>
            <li><strong>Retiro (Jubilación) de una aplicación:</strong> Cuando una aplicación llega al final de su vida útil. Requiere probar el archivado de datos (si se exigen largos periodos de retención legal) y probar los procedimientos de restauración y recuperación de esos datos archivados.</li>
          </ol>
        `
      }
    ]
  },
  {
    id: 3,
    number: "Capítulo 3",
    title: "Pruebas Estáticas",
    duration: "80 minutos",
    examQuestionsCount: 4,
    kBreakdown: "2 preguntas K1 | 2 preguntas K2 | 0 preguntas K3",
    summary: "Aborda la evaluación del software y sus productos de trabajo sin ejecutar el código: qué artefactos son evaluables, diferencias entre pruebas estáticas y dinámicas, las 5 actividades del proceso de revisión, los 6 roles, los 4 tipos de revisión y los factores de éxito.",
    keywords: [
      "anomalía", "pruebas estáticas", "pruebas dinámicas", "análisis estático",
      "revisión informal", "revisión guiada (walkthrough)", "revisión técnica", "inspección",
      "autor", "moderador (facilitador)", "escriba (grabador)", "director", "líder de revisión", "revisor"
    ],
    sections: [
      {
        id: "3.1",
        code: "3.1",
        title: "Conceptos Básicos de Pruebas Estáticas y Diferencias con Pruebas Dinámicas",
        kLevel: "K1 / K2",
        type: "ficha",
        fichaSummary: "• Pruebas estáticas: NO requieren ejecutar el software. Se realizan mediante revisiones manuales o análisis estático automatizado.\n• Casi cualquier producto de trabajo que pueda leerse y entenderse puede revisarse (requisitos, historias de usuario, código fuente, planes de prueba, cronogramas, presupuestos, contratos, modelos).\n• NO se deben revisar estáticamente: código ejecutable binario de terceros (por motivos legales y porque no es legible por humanos) ni código cifrado/encriptado.\n• Diferencia esencial: Las pruebas estáticas encuentran DEFECTOS directamente; las pruebas dinámicas provocan FALLAS mediante las cuales luego se localizan los defectos.",
        trampaAlerta: "¡OJO A ESTOS 3 ERRORES QUE COMETISTE EN EL CAPÍTULO 3!\n1) En el Simulador 4 (Q15) marcaste que un 'Contrato' NO se puede examinar mediante pruebas estáticas. ¡Los contratos SÍ son evaluables! Lo que NO se puede examinar es 'Código cifrado' o 'Código ejecutable binario de terceros'.\n2) En el Intento 3 y 4 (Q15) fallaste dos veces: '¿Cuál NO es una ventaja de las pruebas estáticas?'. La respuesta falsa era 'Tener una gestión de defectos menos costosa debido a la facilidad de detectar defectos MÁS TARDE en el SDLC' (las pruebas estáticas los detectan TEMPRANO, no tarde).\n3) Valor estática vs. dinámica (Simulador 4 Q16): Las pruebas dinámicas pueden identificar algunos de los defectos que se encuentran con pruebas estáticas, pero NO todos (por ejemplo, el código inalcanzable/muerto o el incumplimiento de estándares de codificación solo se detectan con pruebas estáticas).",
        htmlContent: `
          <h4>3.1.1 Productos de Trabajo Evaluables mediante Pruebas Estáticas (FL-3.1.1 - K1)</h4>
          <p>Casi cualquier producto de trabajo puede examinarse mediante pruebas estáticas si puede ser leído y comprendido:</p>
          <ul>
            <li><strong>Sí son evaluables:</strong> Documentos de especificaciones de requisitos, historias de usuario, criterios de aceptación, arquitectura, diseño, código fuente, planes de prueba, cronogramas, presupuestos, cartas de prueba, contratos, modelos y páginas web.</li>
            <li><strong>NO son apropiados para pruebas estáticas:</strong> Productos de trabajo que son demasiado difíciles de interpretar para los seres humanos y que no deben ser analizados por herramientas, tales como el <strong>código ejecutable de terceros</strong> (por razones legales/propiedad intelectual y formato binario) o el <strong>código cifrado/ofuscado</strong>.</li>
          </ul>

          <h4>3.1.2 y 3.1.3 Valor de las Pruebas Estáticas y Diferencias con las Dinámicas (FL-3.1.2 / FL-3.1.3 - K2)</h4>
          <table class="study-table">
            <thead>
              <tr>
                <th>Criterio</th>
                <th>Pruebas Estáticas</th>
                <th>Pruebas Dinámicas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ejecución del código</strong></td>
                <td>NO se ejecuta el software.</td>
                <td>SÍ se ejecuta el software.</td>
              </tr>
              <tr>
                <td><strong>¿Qué detectan?</strong></td>
                <td>Encuentran <strong>defectos (anomalías) directamente</strong> en los productos de trabajo.</td>
                <td>Provocan <strong>fallas</strong> observables en tiempo de ejecución, tras lo cual se diagnostica el defecto subyacente.</td>
              </tr>
              <tr>
                <td><strong>Cobertura de rutas</strong></td>
                <td>Pueden evaluar <strong>todos los caminos del código</strong> fácilmente, incluyendo código muerto/inalcanzable que nunca se ejecutaría en pruebas dinámicas.</td>
                <td>Solo evalúan los caminos que los casos de prueba logran alcanzar en tiempo de ejecución.</td>
              </tr>
              <tr>
                <td><strong>Momento en el SDLC</strong></td>
                <td>Desde las primeras fases (requisitos, diseño) antes de que exista código.</td>
                <td>Solo cuando los objetos de prueba ejecutables están disponibles.</td>
              </tr>
              <tr>
                <td><strong>Defectos exclusivos o más fáciles en Estáticas</strong></td>
                <td>Defectos en requisitos (inconsistencias, ambigüedades, omisiones), defectos de diseño (baja cohesión, alto acoplamiento), desviaciones de estándares de codificación, variables no declaradas o no usadas, código muerto, vulnerabilidades de seguridad (desbordamiento de búfer).</td>
                <td>Comportamientos anómalos externos visibles solo en tiempo de ejecución, problemas de rendimiento o memoria bajo carga real, configuración del entorno.</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: "3.2",
        code: "3.2",
        title: "Proceso de Retroalimentación y Revisión: Actividades, Roles, Tipos y Éxito",
        kLevel: "K1 / K2",
        type: "ficha",
        fichaSummary: "• Las 5 Actividades del Proceso de Revisión:\n  1. Planificación (alcance, características de calidad a evaluar, criterios de salida).\n  2. Inicio de la revisión (asegurar acceso al documento y explicar roles).\n  3. Revisión individual (cada revisor evalúa e identifica anomalías por su cuenta).\n  4. Comunicación y análisis (discutir anomalías en reunión, decidir su estado y acciones).\n  5. Reparación e informes (crear informes de defectos, corregir y verificar criterios de salida).\n• Los 6 Roles: Director/Gestor (decide qué se revisa y da recursos), Autor, Moderador/Facilitador (dirige la reunión con eficacia y ambiente seguro), Escriba/Grabador (anota anomalías), Líder de revisión (organiza cuándo y dónde), Revisor.\n• Los 4 Tipos de Revisión: Informal, Guiada/Walkthrough (SIEMPRE dirigida por el AUTOR), Técnica (expertos técnicos, dirigida por moderador) e Inspección (la más formal, con métricas, el autor NO puede ser líder, moderador ni escriba).",
        trampaAlerta: "¡ERROR REPETIDO EN TUS INTENTOS! En el Intento 3 y en el Intento 4 (Q17) fallaste la pregunta donde daban estos atributos: 'Existe rol de escriba, propósito evaluar calidad, LA REUNIÓN ES DIRIGIDA POR EL AUTOR, hay preparación individual e informe'.\nREGLA DE ORO: Si el enunciado dice 'la reunión es dirigida por el autor del producto de trabajo', la respuesta SIEMPRE es REVISIÓN GUIADA / RECORRIDO (WALKTHROUGH). En una Inspección o Revisión Técnica la dirige el Moderador (y en la Inspección está prohibido que el autor la dirija).\nAdemás, en el Simulador 4 (Q18) confundiste al Líder de revisión con el Moderador: quien garantiza que las reuniones sean eficaces y que todos expresen sus opiniones libremente es el MODERADOR (FACILITADOR).",
        htmlContent: `
          <h4>3.2.1 Beneficios de la Retroalimentación Temprana y Frecuente (FL-3.2.1 - K1)</h4>
          <p>La retroalimentación temprana y frecuente de las partes interesadas evita malentendidos sobre los requisitos, asegura que los cambios en los requisitos se comprendan e implementen antes, y ayuda al equipo de desarrollo a enfocarse en las funcionalidades que aportan mayor valor y menor riesgo al negocio.</p>

          <h4>3.2.2 Las 5 Actividades del Proceso Genérico de Revisión (FL-3.2.2 - K2)</h4>
          <ol>
            <li><strong>Planificación:</strong> Definir el alcance de la revisión (propósito, qué producto o parte se revisará, qué características de calidad se evaluarán, esfuerzo y plazos, y criterios de salida).</li>
            <li><strong>Inicio de la revisión:</strong> Asegurar que todos los participantes estén preparados, tengan acceso al producto de trabajo, comprendan su rol y responsabilidades, y tengan todo lo necesario para realizar la revisión.</li>
            <li><strong>Revisión individual (Preparación individual):</strong> Cada revisor evalúa la calidad del producto de trabajo e <strong>identifica anomalías</strong>, recomendaciones y preguntas aplicando una o más técnicas de revisión (ej. basada en listas de comprobación, basada en escenarios, basada en roles).</li>
            <li><strong>Comunicación y análisis:</strong> Como las anomalías identificadas en la revisión individual no son necesariamente defectos (pueden ser falsos positivos), es necesario analizarlas y discutirlas (generalmente en una reunión de revisión) para decidir su estado, propiedad y acciones requeridas.</li>
            <li><strong>Reparación (Corrección) e informes:</strong> Para cada defecto real se crea un informe de defecto para dar seguimiento a su corrección. Una vez alcanzados los criterios de salida, se acepta el producto de trabajo y se informan los resultados de la revisión.</li>
          </ol>

          <h4>3.2.3 Los 6 Roles y Responsabilidades en las Revisiones (FL-3.2.3 - K1)</h4>
          <table class="study-table">
            <thead>
              <tr>
                <th>Rol</th>
                <th>Responsabilidad Exacta según ISTQB v4.0</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Director (Gestor / Manager)</strong></td>
                <td>Decide <strong>qué se va a revisar</strong> y proporciona los recursos necesarios, como el personal y el tiempo para la revisión.</td>
              </tr>
              <tr>
                <td><strong>Autor</strong></td>
                <td>Crea y corrige el producto de trabajo bajo revisión.</td>
              </tr>
              <tr>
                <td><strong>Moderador (Facilitador)</strong></td>
                <td>Garantiza el <strong>desarrollo eficaz de las reuniones de revisión</strong>, incluida la mediación, la gestión del tiempo y el establecimiento de un entorno de revisión seguro en el que todos puedan hablar libremente.</td>
              </tr>
              <tr>
                <td><strong>Escriba (Grabador / Recorder)</strong></td>
                <td>Recopila las anomalías de los revisores y registra la información de la revisión, como las decisiones y las nuevas anomalías encontradas durante la reunión.</td>
              </tr>
              <tr>
                <td><strong>Revisor</strong></td>
                <td>Realiza las revisiones (pueden ser miembros del proyecto, expertos en la materia o partes interesadas).</td>
              </tr>
              <tr>
                <td><strong>Líder de revisión</strong></td>
                <td>Asume la <strong>responsabilidad general de la revisión</strong>, como decidir quién participará y organizar cuándo y dónde tendrá lugar.</td>
              </tr>
            </tbody>
          </table>

          <h4>3.2.4 Los 4 Tipos de Revisiones (FL-3.2.4 - K2)</h4>
          <table class="study-table">
            <thead>
              <tr>
                <th>Tipo de Revisión</th>
                <th>Nivel de Formalidad</th>
                <th>Quién Dirige y Características Distintivas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Revisión Informal</strong></td>
                <td>No sigue un proceso definido y no exige una salida documentada formal.</td>
                <td>Ej. revisión entre pares (buddy check / pair review). Su objetivo principal es detectar anomalías rápidamente.</td>
              </tr>
              <tr>
                <td><strong>2. Revisión Guiada (Recorrido / Walkthrough)</strong></td>
                <td>Formalidad media (puede ser desde bastante informal hasta muy formal).</td>
                <td><strong>Dirigida por el AUTOR.</strong> Objetivos: evaluar la calidad, generar confianza en el producto, educar a los revisores, obtener consenso, generar nuevas ideas, motivar y detectar anomalías. Los revisores pueden hacer revisión individual previa, aunque no es obligatoria.</td>
              </tr>
              <tr>
                <td><strong>3. Revisión Técnica</strong></td>
                <td>Formal.</td>
                <td>Realizada por <strong>revisores técnicamente cualificados</strong> y <strong>dirigida por un moderador</strong>. Objetivos: obtener consenso sobre un problema técnico y tomar decisiones, además de detectar anomalías, evaluar calidad y generar ideas.</td>
              </tr>
              <tr>
                <td><strong>4. Inspección</strong></td>
                <td>El tipo de revisión <strong>más formal y riguroso</strong>; sigue el proceso genérico completo.</td>
                <td>Dirigida por un moderador capacitado. <strong>El autor NO puede actuar como líder de la revisión, lector ni escriba.</strong> Se recopilan métricas para mejorar el proceso de desarrollo de software, incluido el proceso de inspección. Objetivo principal: encontrar el máximo número de anomalías.</td>
              </tr>
            </tbody>
          </table>

          <h4>3.2.5 Factores de Éxito para las Revisiones (FL-3.2.5 - K1)</h4>
          <ul>
            <li>Definir objetivos claros y criterios de salida medibles.</li>
            <li>Elegir el tipo de revisión adecuado para el producto, contexto y participantes.</li>
            <li>Realizar las revisiones sobre <strong>fragmentos pequeños (en partes pequeñas)</strong> para que los revisores no pierdan la concentración.</li>
            <li>Proporcionar retroalimentación a los implicados y a los autores para mejorar el producto y las actividades.</li>
            <li>Dedicar tiempo adecuado para que los participantes se preparen.</li>
            <li>Apoyo de la dirección al proceso de revisión.</li>
            <li>Hacer que las revisiones formen parte de la cultura de la organización para promover el aprendizaje y la mejora de procesos.</li>
            <li>Facilitación adecuada de las reuniones, evitando el lenguaje corporal que indique aburrimiento, exasperación u hostilidad, y asegurando que los <strong>defectos (anomalías)</strong> encontrados sean reconocidos y tratados de forma objetiva (recuerda: nunca se evalúa a la persona, sino al producto de trabajo).</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 4,
    number: "Capítulo 4",
    title: "Análisis y Diseño de Pruebas (Prioridad Alta)",
    duration: "390 minutos",
    examQuestionsCount: 11,
    kBreakdown: "0-1 K1 | 5-6 K2 | 5-6 K3 (Cálculos y Ejercicios Prácticos)",
    summary: "El capítulo con más peso del examen (11 de las 40 preguntas = 27.5%). Cubre técnicas de Caja Negra (Partición de Equivalencia, Análisis de Valores Límite de 2 y 3 valores, Tablas de Decisión, Transición de Estados), Caja Blanca (Sentencias y Ramas), Basadas en la Experiencia (Predicción de Errores, Exploratorias, Listas de Comprobación) y Basadas en la Colaboración (Historias de Usuario 3C/INVEST, Criterios de Aceptación y ATDD).",
    keywords: [
      "partición de equivalencia (EP)", "análisis de valores límite (BVA)", "tabla de decisión",
      "transición de estado", "cobertura de sentencia", "cobertura de rama",
      "predicción de errores", "pruebas exploratorias", "listas de comprobación",
      "3C (Card, Conversation, Confirmation)", "INVEST", "criterios de aceptación", "ATDD"
    ],
    sections: [
      {
        id: "4.1",
        code: "4.1",
        title: "Descripción General de las 3 Categorías de Técnicas de Prueba",
        kLevel: "K2",
        type: "ficha",
        fichaSummary: "• Técnicas de Caja Negra (basadas en especificaciones): Los casos de prueba son independientes de cómo se implemente el software; buscan desviaciones respecto a los requisitos.\n• Técnicas de Caja Blanca (basadas en la estructura): Los casos de prueba se derivan del diseño detallado, flujo de control o código fuente; sólo pueden crearse tras el diseño o implementación.\n• Técnicas Basadas en la Experiencia: Se apoyan en el conocimiento y experiencia del probador sobre el software, el dominio, los usuarios y los defectos típicos; complementan a las técnicas de caja negra y caja blanca.",
        htmlContent: `
          <p>Las técnicas de prueba ayudan al probador en el análisis de pruebas (qué probar) y en el diseño de pruebas (cómo probar), permitiendo desarrollar un conjunto relativamente pequeño de casos de prueba pero altamente eficaz y sistemático.</p>
          <table class="study-table">
            <thead>
              <tr>
                <th>Categoría</th>
                <th>Base de Prueba Utilizada</th>
                <th>Técnicas Incluidas en CTFL v4.0</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Caja Negra</strong><br><em>(Comportamentales)</em></td>
                <td>Documentación formal o informal de requisitos, especificaciones, historias de usuario, procesos de negocio (independiente de la estructura interna).</td>
                <td>1. Partición de Equivalencia (EP)<br>2. Análisis de Valores Límite (BVA)<br>3. Prueba de Tabla de Decisión<br>4. Prueba de Transición de Estado</td>
              </tr>
              <tr>
                <td><strong>Caja Blanca</strong><br><em>(Estructurales)</em></td>
                <td>Estructura interna del objeto de prueba: código fuente, arquitectura, flujos de control o diseño detallado.</td>
                <td>1. Prueba de Sentencias<br>2. Prueba de Ramas</td>
              </tr>
              <tr>
                <td><strong>Basadas en la Experiencia</strong></td>
                <td>Conocimiento y experiencia de los probadores (diseño e implementación de software, dominio de negocio, defectos probables).</td>
                <td>1. Predicción de Errores (Error Guessing)<br>2. Pruebas Exploratorias<br>3. Pruebas Basadas en Listas de Comprobación</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: "4.2.1",
        code: "4.2.1",
        title: "Caja Negra: Partición de Equivalencia (EP) y Cobertura",
        kLevel: "K3",
        type: "ejercicio",
        fichaSummary: "• Divide los datos en particiones (clases de equivalencia) donde se espera que el software procese todos los elementos de una misma partición de la misma manera.\n• Si un caso de prueba detecta un defecto con un valor de la partición, cualquier otro valor de esa misma partición debería detectar el mismo defecto.\n• Fórmula de Cobertura EP = (N.º de particiones ejercidas por al menos un valor / Total de particiones identificadas) × 100%.\n• Regla importante para Particiones Inválidas: Deben probarse INDIVIDUALMENTE (una sola partición inválida por caso de prueba) para evitar el enmascaramiento de defectos (que un error oculte a otro).\n• En cambio, para Particiones Válidas de múltiples parámetros (riterio Each Choice): pueden combinarse varias particiones válidas en un mismo caso de prueba, SALVO que exista una restricción lógica entre ellas.",
        trampaAlerta: "¡ERROR DETECTADO EN TU INTENTO 4 (Simulador 2) Y EN EL SIMULADOR 4 (Q20)!\n1) En el problema de 'Búsqueda de pisos (planta baja, 1º, 2º) y tipo de jardín (sin jardín, pequeño, grande)' donde 'SOLO la planta baja puede tener jardín', marcaste 3 casos de prueba. ¡Recuerda! Como 'jardín pequeño' y 'jardín grande' te obligan a usar 'planta baja' dos veces, necesitas 2 casos para esos dos jardines en planta baja + otros 2 casos para '1er piso (sin jardín)' y '2do piso (sin jardín)' = 4 CASOS DE PRUEBA MÍNIMOS.\n2) En el problema de edad D = CY - BY (Simulador 4 Q20), invertiste el orden de resta (pusiste CY=1900 y BY=1965, lo que daba -65 en lugar de +65). ¡Verifica siempre cuál variable es el minuendo y cuál el sustraendo!",
        htmlContent: `
          <h4>Conceptos Clave de Partición de Equivalencia (FL-4.2.1 - K3)</h4>
          <ul>
            <li><strong>Particiones válidas:</strong> Contienen valores que el componente o sistema debe procesar normalmente.</li>
            <li><strong>Particiones inválidas:</strong> Contienen valores que el componente o sistema debe rechazar o ignorar (mostrar mensaje de error). Cualquier valor dentro de una partición inválida debe producir el mismo tratamiento de error.</li>
            <li><strong>Enmascaramiento de defectos:</strong> Si en un mismo caso de prueba ingresamos dos valores inválidos a la vez (ej. edad inválida = -5 y código postal inválido = "ABC"), el sistema podría mostrar solo el primer mensaje de error y abortar la validación sin llegar a evaluar el segundo campo. Por eso las particiones inválidas se prueban de una en una combinadas con valores válidos en los demás campos.</li>
          </ul>
          <div class="callout callout-ejercicio">
            <div class="callout-title">Ejercicio Resuelto K3 — Validador de PIN (De tus Fichas de Estudio)</div>
            <p><strong>Reglas de un PIN válido:</strong> a) Tiene exactamente 4 dígitos, y b) Al menos dos dígitos son diferentes.<br>
            <strong>Paso 1: Identificar todas las particiones:</strong></p>
            <ul>
              <li>Longitud: 1) Muy corto (1 a 3 dígitos — Inválida), 2) Exactamente 4 dígitos (Válida), 3) Muy largo (5 o más dígitos — Inválida).</li>
              <li>Repetición de dígitos (en 4 dígitos): 4) Todos los dígitos iguales, ej. <code>1111</code> (Inválida), 5) Al menos 2 dígitos diferentes, ej. <code>1234</code> (Válida).</li>
            </ul>
            <p><strong>Paso 2: Conjunto que cubre el 100% de las particiones:</strong><br>
            <code>112</code> (cubre muy corto) | <code>123456</code> (cubre muy largo) | <code>1111</code> (cubre 4 dígitos pero todos iguales) | <code>1234</code> (cubre 4 dígitos con al menos 2 diferentes — PIN válido).</p>
          </div>
        `
      },
      {
        id: "4.2.2",
        code: "4.2.2",
        title: "Caja Negra: Análisis de Valores Límite (BVA / AVF) de 2 y 3 Valores",
        kLevel: "K3",
        type: "ejercicio",
        fichaSummary: "• Se aplica solo a particiones ORDENADAS (números, fechas, longitudes de texto, horas).\n• El valor límite es el valor mínimo o máximo de una partición ordenada.\n• BVA de 2 valores (Por cada valor límite se prueban 2 puntos): el propio valor límite y su vecino más cercano perteneciente a la partición adyacente.\n  Ejemplo rango [1 a 5] entero:\n  - Límite inferior (1): se prueban {0, 1}.\n  - Límite superior (5): se prueban {5, 6}.\n  - Total BVA 2 valores = {0, 1, 5, 6}.\n• BVA de 3 valores (Por cada valor límite se prueban 3 puntos): el valor límite y AMBOS vecinos inmediatos (uno a cada lado).\n  Ejemplo rango [1 a 5] entero:\n  - Límite 0 (máximo de inválidos inferiores): {-1, 0, 1} (si admite negativos) o {0, 1} si empieza en 0.\n  - Límite 1: {0, 1, 2}.\n  - Límite 5: {4, 5, 6}.\n  - Límite 6: {5, 6, 7}.\n  - Unión en el ejemplo de tus fichas (enteros no negativos): {0, 1, 2, 4, 5, 6}.",
        htmlContent: `
          <h4>Diferencia Exacta entre AVF de 2 Valores y AVF de 3 Valores (FL-4.2.2 - K3)</h4>
          <p>En el examen ISTQB v4.0 es fundamental distinguir entre ambas variantes:</p>
          <table class="study-table">
            <thead>
              <tr>
                <th>Variante</th>
                <th>Elementos de Cobertura por cada Límite</th>
                <th>Ejemplo: Contraseña válida entre 6 y 12 caracteres (mínimo posible = 0)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>BVA de 2 valores</strong></td>
                <td>Para cada valor límite se prueba el límite y su vecino en la partición adyacente (es decir, los extremos de cada partición).</td>
                <td>• Partición inválida corta <code>[0..5]</code>: límites <strong>0</strong> y <strong>5</strong>.<br>• Partición válida <code>[6..12]</code>: límites <strong>6</strong> y <strong>12</strong>.<br>• Partición inválida larga <code>[13..]</code>: límite <strong>13</strong>.<br><strong>Conjunto 2 valores:</strong> <code>{0, 5, 6, 12, 13}</code> (5 valores).</td>
              </tr>
              <tr>
                <td><strong>BVA de 3 valores</strong></td>
                <td>Para cada valor límite se prueba el límite y sus <strong>dos vecinos inmediatos</strong> (el que está fuera y el que está justo dentro de la partición). Es más riguroso y detecta defectos que el de 2 valores no ve (por ejemplo, si se programó <code>if (x == 12)</code> en vez de <code>if (x &lt;= 12)</code>).</td>
                <td>• Para límite <code>0</code>: <code>{0, 1}</code><br>• Para límite <code>5</code>: <code>{4, 5, 6}</code><br>• Para límite <code>6</code>: <code>{5, 6, 7}</code><br>• Para límite <code>12</code>: <code>{11, 12, 13}</code><br>• Para límite <code>13</code>: <code>{12, 13, 14}</code><br><strong>Conjunto 3 valores:</strong> <code>{0, 1, 4, 5, 6, 7, 11, 12, 13, 14}</code>.<br><em>Adicionales respecto al de 2 valores:</em> <strong>1, 4, 7, 11, 14</strong>.</td>
              </tr>
            </tbody>
          </table>
          <div class="callout callout-ejercicio">
            <div class="callout-title">Ejercicio Resuelto K3 — Almacenamiento de Vino a 12 °C (BVA de 3 valores)</div>
            <p><strong>Reglas:</strong> Si $T = 12$ ("óptima"), si $T &lt; 12$ ("demasiado baja"), si $T &gt; 12$ ("demasiado alta").<br>
            <strong>Particiones:</strong> $\{\dots, 10, 11\}$, $\{12\}$, $\{13, 14, \dots\}$.<br>
            <strong>Valores límite:</strong> <code>11</code>, <code>12</code> y <code>13</code>.<br>
            • Para el límite <code>11</code> sus 3 valores son: <code>10, 11, 12</code>.<br>
            • Para el límite <code>12</code> sus 3 valores son: <code>11, 12, 13</code>.<br>
            • Para el límite <code>13</code> sus 3 valores son: <code>12, 13, 14</code>.<br>
            <strong>Resultado final (100% cobertura BVA de 3 valores):</strong> <code>10, 11, 12, 13, 14</code>.</p>
          </div>
        `
      },
      {
        id: "4.2.3",
        code: "4.2.3",
        title: "Caja Negra: Prueba de Tabla de Decisión",
        kLevel: "K3",
        type: "ejercicio",
        fichaSummary: "• Modela reglas de negocio complejas especificando qué combinaciones de condiciones producen qué acciones.\n• Si hay n condiciones booleanas (V/F), la tabla completa tiene 2ⁿ columnas (reglas).\n• Notación en tablas comprimidas/simplificadas:\n  - T (V): La condición debe ser verdadera.\n  - F: La condición debe ser falsa.\n  - '–' (Guion / Indiferente): El valor de la condición no afecta al resultado.\n  - 'N/A': La condición no es aplicable para esa regla.\n• Cobertura de Tabla de Decisión = (N.º de columnas factibles ejercidas / Total de columnas factibles) × 100%.\n• Permite encontrar lagunas (omisiones) y contradicciones en los requisitos.",
        trampaAlerta: "En el Simulador 4 (Q22) te dieron una tabla de decisión con 8 reglas (R1 a R8) y 4 casos de prueba que ya cubrían R2, R3, R6 y R7. Te preguntaron cuál caso adicional aumentaba la cobertura y marcaste 'Ninguno'.\nTRUCO INFALIBLE PARA EL EXAMEN: Antes de mirar las opciones, tacha en la tabla qué columna (R1, R2...) cubre cada caso existente. Las columnas que NO estén tachadas son las únicas que aumentarán la cobertura. Luego evalúa cuál de las opciones A, B, C o D cae en una columna NO tachada.",
        htmlContent: `
          <h4>Tablas de Decisión: Tablas Completas vs. Minimizadas (FL-4.2.3 - K3)</h4>
          <p>En una <strong>tabla de decisión de entrada limitada</strong>, todas las condiciones son booleanas (<code>T</code> o <code>F</code>). En una <strong>tabla de entrada extendida</strong>, las condiciones pueden tomar múltiples valores (ej. rangos de colesterol o tipos de cliente).</p>
          <ul>
            <li><strong>Eliminación de combinaciones inviables:</strong> Si una combinación de condiciones es lógicamente imposible según el dominio (ej. ser menor de 18 años y llevar 20 años jubilado), esa columna se elimina porque no es un caso de prueba factible.</li>
            <li><strong>Minimización (Colapso de columnas):</strong> Cuando dos columnas producen exactamente las mismas acciones y solo difieren en el valor de una condición, se fusionan poniendo un guion (<code>–</code>) en esa condición.</li>
            <li><strong>Detección de anomalías en la propia tabla (como en la Ficha 15):</strong>
              <ul>
                <li><strong>Omisión (Brecha):</strong> Una combinación válida de entradas (ej. <code>T, T, F</code>) no coincide con ninguna columna de la tabla.</li>
                <li><strong>Contradicción:</strong> Una misma combinación de entradas (ej. <code>F, F, F</code>) coincide simultáneamente con dos reglas que tienen guiones (<code>–</code>) pero especifican acciones diferentes/incompatibles.</li>
              </ul>
            </li>
          </ul>
        `
      },
      {
        id: "4.2.4",
        code: "4.2.4",
        title: "Caja Negra: Prueba de Transición de Estado",
        kLevel: "K3",
        type: "ejercicio",
        fichaSummary: "• Componentes: Estados, Eventos, Condiciones de guarda [entre corchetes], Transiciones y Acciones.\n• Un diagrama de estados muestra solo las transiciones VÁLIDAS. Una tabla de estados muestra TODAS las combinaciones Estado × Evento (incluyendo celdas vacías '-' que representan transiciones INVÁLIDAS).\n• Los 3 criterios de cobertura en ISTQB v4.0 (de menor a mayor rigor):\n  1. Cobertura de todos los estados (la más débil).\n  2. Cobertura de transiciones válidas (también llamada cobertura de conmutador 0 / 0-switch): es la más usada; exige recorrer cada flecha válida del diagrama al menos una vez.\n  3. Cobertura de todas las transiciones: exige ejercitar TODAS las transiciones válidas Y además intentar forzar todas las transiciones inválidas de la tabla de estados.",
        trampaAlerta: "En el Simulador 4 (Q23) te dieron una tabla de estados de reserva de hotel (estados S1=Requesting, S2=Confirmed, S3=Waiting list, S4=End) y te pidieron qué secuencia de 5 eventos lograba la MAYOR cobertura de transiciones válidas.\nElegiste una secuencia que repetía exactamente la misma transición (S1 + NotAvailable → S3) dos veces. ¡Recuerda! Repetir la misma transición desde el mismo estado de origen no suma cobertura. En cambio, cuando el mismo evento ('Available') se dispara primero desde S1 (S1→S2) y luego desde S3 (S3→S2), cuenta como DOS transiciones distintas porque parten de estados de origen diferentes.",
        htmlContent: `
          <h4>Cómo Resolver Ejercicios de Transición de Estados en el Examen (FL-4.2.4 - K3)</h4>
          <p>En el examen suelen aparecer dos tipos de ejercicios K3:</p>
          <ol>
            <li><strong>¿Cuál es el número MÍNIMO de casos de prueba para cubrir el 100% de las transiciones válidas?</strong>
              <ul>
                <li>Cuenta cuántas flechas entran al estado final (ej. <code>FIN</code> o <code>APAGADO</code>) o cuántas flechas conducen a un estado del cual solo se puede ir al estado final.</li>
                <li>Como cada caso de prueba empieza en <code>INICIO</code> y termina al llegar a <code>FIN</code> (no puede continuar después de <code>FIN</code>), si hay 2 flechas que llevan inevitablemente a <code>FIN</code> sin poder volver atrás, necesitarás al menos 2 casos de prueba; si hay 3 caminos terminales excluyentes (como en la Ficha 16 de la Reserva de Habitación o la Pregunta 23 del Modelo A), el mínimo es <strong>3 casos de prueba</strong>.</li>
              </ul>
            </li>
            <li><strong>¿Qué secuencia de eventos logra la mayor cobertura de transiciones válidas (con o sin condiciones de guarda)?</strong>
              <ul>
                <li>Traza paso a paso el estado actual y el valor de las variables de guarda (como <code>N := N + 1</code>).</li>
                <li>Anota cada transición como el par <code>(EstadoOrigen --Evento[Guarda]--&gt; EstadoDestino)</code> y cuenta cuántos pares <strong>únicos</strong> recorre cada opción (descartando cualquier opción que intente una transición inválida).</li>
              </ul>
            </li>
          </ol>
        `
      },
      {
        id: "4.3",
        code: "4.3",
        title: "Técnicas de Caja Blanca: Cobertura de Sentencias, Cobertura de Ramas y su Valor",
        kLevel: "K2",
        type: "ficha",
        fichaSummary: "• Prueba de Sentencias (FL-4.3.1): Ítems de cobertura = sentencias ejecutables.\n  - Si logras 100% de cobertura de sentencias → CADA instrucción ejecutable (incluidas las que contienen un defecto) se ha ejecutado al menos una vez.\n  - Limitación: NO garantiza cubrir todas las ramas (ej. un 'if' sin 'else' cuando la condición es falsa) ni detecta defectos dependientes de datos específicos.\n• Prueba de Ramas (FL-4.3.2): Ítems de cobertura = ramas (transferencias de control entre dos nodos del grafo de flujo de control, sean condicionales o incondicionales).\n  - Cobertura de ramas = (Ramas ejecutadas / Total de ramas en el código) × 100%.\n• Relación de Subsunción:\n  - 100% Cobertura de Ramas ⇒ SIEMPRE garantiza 100% Cobertura de Sentencias.\n  - 100% Cobertura de Sentencias ⇒ NO garantiza 100% Cobertura de Ramas.\n• Debilidad fundamental de Caja Blanca (FL-4.3.3): NO puede detectar defectos de OMISIÓN (requisitos no implementados en el código).",
        trampaAlerta: "En el Intento 3 fallaste las preguntas 24 y 25 de Caja Blanca:\n1) En Q24 marcaste que 100% de cobertura de sentencias significa que 'cada ruta/camino del código se ha ejecutado'. ¡Falso! Un bucle puede tener infinitas rutas. La consecuencia verdadera del 100% de sentencias es que 'cada sentencia que contiene un defecto se ha ejecutado al menos una vez'.\n2) En Q25 marcaste que las técnicas de caja blanca NO se pueden usar en pruebas estáticas. ¡Sí se pueden usar en pruebas estáticas (ej. simulación en seco / dry run de pseudocódigo)! Lo que es FALSO sobre la caja blanca es decir que 'ayuda a identificar brechas/lagunas en la implementación de requisitos' (eso solo lo detecta la caja negra).",
        htmlContent: `
          <h4>4.3.1 Pruebas de Sentencias y 4.3.2 Pruebas de Ramas</h4>
          <p>En el flujo de control de un programa:</p>
          <ul>
            <li>Una <strong>rama incondicional</strong> es una transferencia directa de control en línea recta de una sentencia a la siguiente.</li>
            <li>Una <strong>rama condicional</strong> es cada salida posible de una decisión: el resultado <code>Verdadero</code> y el resultado <code>Falso</code> de un <code>if...then</code>, cada <code>case</code> de un <code>switch</code> o la salida/continuación de un bucle.</li>
          </ul>
          <div class="callout callout-ejercicio">
            <div class="callout-title">Propiedad Matemática frecuente en el Examen (Modelo B - P24)</div>
            <p>Si el caso de prueba <code>T1</code> logra un <strong>40%</strong> de cobertura de sentencias y el caso de prueba <code>T2</code> logra un <strong>65%</strong> de cobertura de sentencias sobre el mismo código, como $40\% + 65\% = 105\% &gt; 100\%$, es <strong>matemáticamente obligatorio</strong> que exista al menos una sentencia (al menos el 5% del código) que haya sido ejecutada tanto por <code>T1</code> como por <code>T2</code>.</p>
          </div>
          <h4>4.3.3 El Valor de las Pruebas de Caja Blanca (FL-4.3.3 - K2)</h4>
          <ul>
            <li><strong>Fortaleza principal:</strong> Durante las pruebas de caja blanca se tiene en cuenta <strong>toda la implementación del software</strong>, lo que facilita la detección de defectos incluso cuando la especificación del software es vaga, obsoleta o incompleta (por ejemplo, si hay código extra malicioso o no deseado que no figura en los requisitos).</li>
            <li><strong>Debilidad principal:</strong> Si el software no implementa uno o más requisitos (<strong>defectos de omisión</strong>), las pruebas de caja blanca no pueden detectarlos porque esos requisitos simplemente no existen en el código.</li>
            <li><strong>Aplicación en pruebas estáticas:</strong> Pueden utilizarse en revisiones estáticas (por ejemplo, ejecución en seco de código o pseudocódigo aún no compilable).</li>
          </ul>
        `
      },
      {
        id: "4.4",
        code: "4.4",
        title: "Técnicas Basadas en la Experiencia: Predicción de Errores, Exploratorias y Checklists",
        kLevel: "K2",
        type: "ficha",
        fichaSummary: "1. Predicción de Errores (Error Guessing): Anticipa errores de los desarrolladores, defectos y fallas basándose en el conocimiento del probador (cómo ha funcionado antes la app, qué errores suelen cometer los programadores y qué fallas han ocurrido en otras aplicaciones similares). Los 'Ataques de Faltas' (Fault Attacks) son una forma metódica de implementar la predicción de errores creando listas de posibles defectos y diseñando pruebas que los ataquen.\n2. Pruebas Exploratorias: Las pruebas se diseñan, ejecutan y evalúan SIMULTÁNEAMENTE mientras el probador aprende sobre el objeto de prueba. Suelen usar Pruebas Basadas en Sesiones (con tiempo definido y una Carta de Prueba / Test Charter con los objetivos). Muy útiles cuando hay pocas especificaciones o fuerte presión de tiempo.\n3. Listas de Comprobación (Checklists): El probador diseña, implementa y ejecuta pruebas para cubrir las condiciones de una lista. No debe contener ítems automatizables ni criterios de entrada/salida. Listas más de alto nivel dan mayor variabilidad/cobertura pero menor repetibilidad.",
        htmlContent: `
          <h4>Comparativa de las 3 Técnicas Basadas en la Experiencia (FL-4.4.1 a FL-4.4.3 - K2)</h4>
          <table class="study-table">
            <thead>
              <tr>
                <th>Técnica</th>
                <th>En qué consiste</th>
                <th>Claves para Preguntas de Examen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Predicción de Errores</strong><br><em>(Error Guessing)</em></td>
                <td>Anticipar errores humanos, defectos en el código y fallas resultantes (ej. división por cero, variables sin inicializar, año bisiesto, campos vacíos).</td>
                <td>Se basa en defectos pasados y errores típicos de los desarrolladores (no requiere haber sido desarrollador ni replicar la tarea de programación).</td>
              </tr>
              <tr>
                <td><strong>Pruebas Exploratorias</strong></td>
                <td>Aprendizaje, diseño y ejecución ocurren al mismo tiempo.</td>
                <td>Ideales cuando hay <strong>especificaciones escasas/inadecuadas</strong> y <strong>presión de tiempo significativa</strong>, y son más eficaces si el probador tiene <strong>experiencia en el dominio y habilidades analíticas</strong>.</td>
              </tr>
              <tr>
                <td><strong>Basadas en Listas de Comprobación</strong><br><em>(Checklist-based)</em></td>
                <td>Guiadas por una lista de condiciones de prueba redactadas a menudo como preguntas comprobables individualmente por una persona.</td>
                <td>Ejemplo válido de ítem: <em>"¿Los mensajes de error están escritos en un lenguaje que el usuario pueda entender?"</em>.<br><strong>No válido como ítem:</strong> <em>"La cobertura de sentencias supera el 85%"</em> (eso es un criterio de salida).</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: "4.5",
        code: "4.5",
        title: "Enfoques Basados en la Colaboración: Historias de Usuario (3C / INVEST), Criterios de Aceptación y ATDD",
        kLevel: "K2 / K3",
        type: "ficha",
        fichaSummary: "• Redacción colaborativa: Las historias de usuario las crean CONJUNTAMENTE representantes de negocio, desarrolladores y probadores (los 'Tres Amigos').\n• Las 3 C de una Historia de Usuario:\n  1. Card (Tarjeta): Medio físico o electrónico que describe la historia.\n  2. Conversation (Conversación): Explica cómo se usará el software y permite lograr una COMPRENSIÓN COLECTIVA de lo que se debe entregar.\n  3. Confirmation (Confirmación): Los criterios de aceptación.\n• Acrónimo INVEST: Independientes, Negociables, Valiosas, Estimables, Small (Pequeñas) y Testables (Comprobables).\n• Los 2 formatos de Criterios de Aceptación:\n  1. Orientado a Escenarios: Formato Dado / Cuando / Entonces (Given/When/Then).\n  2. Orientado a Reglas: Lista de viñetas con reglas de negocio o tabla de entradas/salidas.\n• Regla de Oro para casos de prueba ATDD (K3): El caso de prueba debe validar estrictamente los criterios de aceptación definidos en la historia y para el ROL indicado en la historia (sin agregar cosas fuera de alcance como probar otros roles u otros navegadores no mencionados).",
        trampaAlerta: "¡ERROR DETECTADO EN TUS SIMULADORES (Intento 3 Q29 y Simulador 4 Q28 y Q29)!\n1) En el Simulador 4 (Q28) preguntaron: '¿Qué práctica de redacción colaborativa permite al equipo lograr una comprensión colectiva?'. Marcaste 'Revisiones', pero según las 3 C (Card, Conversation, Confirmation), la que logra la comprensión colectiva entre negocio, desarrollo y testing es la CONVERSACIÓN (Conversation).\n2) En las preguntas K3 de ATDD (Intento 3 Q29 del Editor y Simulador 4 Q29 del filtro de precios), elegiste opciones que agregaban cosas que NO estaban en los criterios de aceptación (ej. iniciar sesión como 'propietario del contenido' en vez de 'Editor', o probar en 3 navegadores Edge/Chrome/Opera cuando la historia solo hablaba del filtro dinámico de precios). ¡En ATDD jamás elijas una opción que pruebe algo fuera de los criterios de aceptación listados!",
        htmlContent: `
          <h4>4.5.1 Redacción Colaborativa de Historias de Usuario (FL-4.5.1 - K2)</h4>
          <p>Las historias de usuario tienen tres aspectos fundamentales llamados juntos las <strong>"3 C"</strong>:</p>
          <ul>
            <li><strong>Card (Tarjeta):</strong> El medio que describe una historia de usuario, sus requisitos asociados y el formato típico: <em>"Como [rol], quiero [objetivo a cumplir], para que [valor de negocio resultante]"</em>.</li>
            <li><strong>Conversation (Conversación):</strong> Explica cómo se utilizará el software; puede documentarse o ser verbal. A través de la lluvia de ideas y el diálogo colaborativo entre negocio, desarrollo y pruebas, ayuda a <strong>lograr una visión y comprensión colectiva</strong> de lo que se debe entregar.</li>
            <li><strong>Confirmation (Confirmación):</strong> Los criterios de aceptación que permiten confirmar que la historia se ha implementado satisfactoriamente.</li>
          </ul>
          <p>Las buenas historias de usuario deben ser <strong>INVEST</strong>: <strong>I</strong>ndependientes, <strong>N</strong>egociables, <strong>V</strong>aliosas, <strong>E</strong>stimables, <strong>S</strong>mall (Pequeñas) y <strong>T</strong>estables (Comprobables). Si un probador no sabe cómo probar una historia, esto indica que la historia no es lo suficientemente clara o que no aporta valor real.</p>

          <h4>4.5.2 Formatos de Criterios de Aceptación (FL-4.5.2 - K2)</h4>
          <ol>
            <li><strong>Orientado al escenario (Scenario-oriented):</strong> Utiliza el formato <strong>Dado / Cuando / Entonces</strong> (<em>Given / When / Then</em>) utilizado en BDD.</li>
            <li><strong>Orientado a las reglas (Rule-oriented):</strong> Utiliza una lista de reglas con viñetas que deben verificarse, o una tabulación de mapeo de entradas y salidas.</li>
          </ol>

          <h4>4.5.3 Desarrollo Guiado por Pruebas de Aceptación (ATDD) (FL-4.5.3 - K3)</h4>
          <p>ATDD es un enfoque de probar primero (test-first). Los casos de prueba se crean <strong>antes</strong> de implementar la historia de usuario. El primer paso es un taller de especificación donde el equipo analiza, discute y escribe la historia y sus criterios de aceptación (resolviendo incompletitudes, ambigüedades o defectos). Luego se derivan los casos de prueba (positivos y negativos) directamente de los criterios de aceptación, asegurándose de que ningún caso de prueba vaya más allá del alcance de la historia de usuario.</p>
        `
      }
    ]
  },
  {
    id: 5,
    number: "Capítulo 5",
    title: "Gestión de las Actividades de Prueba (Prioridad Muy Alta)",
    duration: "335 minutos",
    examQuestionsCount: 9,
    kBreakdown: "2 K1 | 4-5 K2 | 2-3 K3 (Estimación, Priorización e Informes de Defecto)",
    summary: "Tu capítulo más importante a reforzar (representa 9 de las 40 preguntas del examen). Cubre Planificación de Pruebas, Criterios de Entrada (DoR) y Salida (DoD), las 4 Técnicas de Estimación (Proporciones, Extrapolación, Delphi/Planning Poker y 3 Puntos), Priorización de Casos (por Riesgo, Dependencias Lógicas y Cobertura Adicional), Pirámide y Cuadrantes de Prueba (Q1-Q4), Gestión de Riesgos (Proyecto vs. Producto, Análisis y Control), Métricas, Informes, Gestión de la Configuración y Gestión de Defectos.",
    keywords: [
      "plan de prueba", "criterios de entrada (DoR)", "criterios de salida (DoD)",
      "estimación de tres puntos", "extrapolación", "estimación por proporciones", "Delphi de banda ancha",
      "priorización de casos de prueba", "pirámide de prueba", "cuadrantes de prueba (Q1, Q2, Q3, Q4)",
      "riesgo de proyecto", "riesgo de producto", "mitigación de riesgos", "gestión de la configuración", "informe de defecto"
    ],
    sections: [
      {
        id: "5.1.1-5.1.3",
        code: "5.1.1 - 5.1.3",
        title: "Planificación de Pruebas, Planificación Ágil y Criterios de Entrada/Salida",
        kLevel: "K1 / K2",
        type: "ficha",
        fichaSummary: "• Contenido del Plan de Pruebas: Contexto, Supuestos y limitaciones, Partes interesadas, Comunicación, Registro de riesgos, Enfoque de prueba (niveles, tipos, técnicas, entregables, criterios de entrada/salida, independencia, requisitos de entorno/datos), Presupuesto y cronograma.\n• En Ágil:\n  - Planificación de la Entrega (Release): escribe historias comprobables, define criterios de aceptación, analiza riesgos de alto nivel, estima esfuerzo general y planifica las pruebas para la entrega.\n  - Planificación de la Iteración (Sprint): análisis detallado de riesgos de las historias del sprint, determina comprobabilidad, desglosa historias en tareas de prueba, estima esfuerzo de tareas e identifica aspectos funcionales y no funcionales.\n• Criterios de Entrada (En Ágil = Definición de Preparado / Definition of Ready - DoR): Recursos disponibles, testware disponible, calidad inicial (ej. smoke test pasado).\n• Criterios de Salida (En Ágil = Definición de Hecho / Definition of Done - DoD): Medidas de minuciosidad (cobertura lograda, densidad de defectos), criterios de finalización (regresiones automatizadas, defectos reportados), o agotamiento de tiempo/presupuesto.",
        trampaAlerta: "Corrección importante sobre la Ficha 23 de tu PDF: En la parte inferior de la página 23 del PDF de Fichas aparece invertido 'Definición de Hecho' y 'Definición de Preparado'. Según el Syllabus Oficial ISTQB v4.0 (Sección 5.1.3):\n• Definición de Preparado / Listo (Definition of Ready - DoR) = CRITERIO DE ENTRADA que una historia de usuario debe cumplir ANTES de iniciar su desarrollo/pruebas en la iteración.\n• Definición de Hecho / Terminado (Definition of Done - DoD) = CRITERIO DE SALIDA para los elementos probados cuando están listos para ser liberados/aceptados.",
        htmlContent: `
          <h4>5.1.1 Propósito y Contenido de un Plan de Prueba (FL-5.1.1 - K2)</h4>
          <p>Un plan de prueba describe los objetivos, los recursos y los procesos de un proyecto de prueba:</p>
          <ul>
            <li>Documenta los medios y el cronograma para alcanzar los objetivos de prueba.</li>
            <li>Ayuda a garantizar que las actividades de prueba realizadas cumplirán los criterios establecidos.</li>
            <li>Sirve como medio de comunicación con los miembros del equipo y otras partes interesadas.</li>
            <li>Demuestra que las pruebas se adherirán a la política y estrategia de pruebas existentes.</li>
          </ul>

          <h4>5.1.2 Contribución del Probador a la Planificación de la Entrega y la Iteración (FL-5.1.2 - K1)</h4>
          <table class="study-table">
            <thead>
              <tr>
                <th>Planificación de la Entrega (Release Planning)</th>
                <th>Planificación de la Iteración (Iteration / Sprint Planning)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mira hacia adelante a la entrega de un producto a lo largo de varias iteraciones. Los probadores participan en:<br>• Redactar historias de usuario comprobables y criterios de aceptación.<br>• Participar en análisis de riesgos de proyecto y de calidad.<br>• Estimar el esfuerzo de prueba asociado con las historias.<br>• Determinar el enfoque de prueba y planificar las pruebas para la entrega.</td>
                <td>Mira hacia el final de una única iteración y se ocupa del backlog de la iteración. Los probadores participan en:<br>• <strong>Análisis detallado de riesgos de las historias de usuario.</strong><br>• Determinar la comprobabilidad de las historias.<br>• Desglosar las historias en tareas (particularmente tareas de prueba).<br>• Estimar el esfuerzo de prueba para todas las tareas de prueba.<br>• Identificar y refinar aspectos funcionales y no funcionales del objeto de prueba.</td>
              </tr>
            </tbody>
          </table>

          <h4>5.1.3 Criterios de Entrada y Criterios de Salida (FL-5.1.3 - K2)</h4>
          <ul>
            <li><strong>Criterios de Entrada (Precondiciones para iniciar una actividad):</strong> Disponibilidad de recursos (personal, herramientas, entornos, datos de prueba, presupuesto, tiempo), disponibilidad de testware (base de prueba, requisitos comprobables, historias de usuario, casos de prueba) y nivel de calidad inicial de un objeto de prueba (ej. todas las pruebas de humo han pasado o el análisis estático no muestra advertencias de severidad alta antes de fusionar el código). En Ágil para una historia de usuario se llaman <strong>Definición de Preparado (Definition of Ready - DoR)</strong>.</li>
            <li><strong>Criterios de Salida (Qué debe lograrse para declarar completada una actividad):</strong> Medidas de minuciosidad/rigor (nivel de cobertura alcanzado, número de defectos no resueltos, densidad de defectos alcanzada, número de casos fallidos) y criterios de finalización (pruebas planificadas ejecutadas, pruebas estáticas realizadas, todos los defectos encontrados informados, todas las pruebas de regresión automatizadas). <em>Agotar el tiempo o el presupuesto</em> también puede verse como un criterio de salida válido si las partes interesadas aceptan el riesgo de salir en vivo sin seguir probando. En Ágil se llaman <strong>Definición de Hecho / Terminado (Definition of Done - DoD)</strong>.</li>
          </ul>
        `
      },
      {
        id: "5.1.4",
        code: "5.1.4",
        title: "Las 4 Técnicas de Estimación del Esfuerzo de Prueba (K3)",
        kLevel: "K3",
        type: "ejercicio",
        fichaSummary: "1. Basada en Proporciones (Ratios): Usa cifras históricas de proyectos propios anteriores para calcular la proporción estándar Desarrollo : Prueba y aplicarla al desarrollo estimado del nuevo proyecto.\n2. Extrapolación: Recopila mediciones tempranas del proyecto ACTUAL y proyecta matemáticamente el esfuerzo restante (muy adecuada en SDLC iterativos, ej. promediar o ponderar el esfuerzo REAL de las últimas iteraciones).\n3. Delphi de Banda Ancha (Wideband Delphi) / Planning Poker: Basada en expertos, iterativa y colaborativa. Cada experto estima en aislamiento → se discuten discrepancias → nueva ronda hasta lograr consenso.\n4. Estimación de Tres Puntos (PERT): Basada en expertos usando a ( más optimista), m (más probable) y b (más pesimista):\n   • Estimación Final: E = (a + 4m + b) / 6\n   • Desviación Estándar (Error de medición): SD = (b - a) / 6",
        trampaAlerta: "¡DOS ERRORES DE CÁLCULO K3 EN TUS SIMULADORES 3 Y 4 QUE SON MUY FÁCILES DE EVITAR!\n1) En el Simulador 3 (Q31 - Extrapolación con gráfico de barras): Te dieron barras negras ('Estimated') y barras grises ('Actual') y la fórmula E(n) = (3·A(n-1) + A(n-2))/4. Tomaste por error los valores de las barras negras en lugar de las grises ('Actual': A(4)=6 y A(3)=8 → (3×6 + 8)/4 = 6.5). ¡Fíjate siempre en la leyenda del gráfico!\n2) En el Simulador 4 (Q31 - Tres Puntos): Calculaste perfecto E = (1 + 4×3 + 8)/6 = 3.5 horas para UN caso de prueba y marcaste 3.5 horas... ¡pero la pregunta pedía el tiempo total para ejecutar CUATRO casos de prueba (3.5 × 4 = 14 horas)! Antes de marcar la respuesta en Tres Puntos, verifica si piden 1 elemento o N elementos.",
        htmlContent: `
          <h4>Las 4 Técnicas de Estimación (FL-5.1.4 - K3)</h4>
          <p>El Syllabus v4.0 agrupa las 4 técnicas en dos familias: <strong>basadas en métricas</strong> (Proporciones y Extrapolación) y <strong>basadas en expertos</strong> (Delphi de banda ancha y Estimación de tres puntos).</p>
          <div class="callout callout-ejercicio">
            <div class="callout-title">Ejercicios Resueltos K3 de Estimación</div>
            <p><strong>1) Estimación Basada en Proporciones (Modelo B - P31):</strong><br>
            Cuatro proyectos anteriores tuvieron:<br>
            • Desarrollo: $800k + 1.200k + 600k + 1.000k = 3.600.000$ (Media = $900.000$).<br>
            • Prueba: $40k + 130k + 70k + 120k = 360.000$ (Media = $90.000$).<br>
            • Proporción histórica $\text{Prueba} / \text{Desarrollo} = 90.000 / 900.000 = 0,10$ ($10\%$).<br>
            Si el nuevo proyecto tiene un esfuerzo de desarrollo estimado de $800.000$, entonces:<br>
            $\text{Esfuerzo de Prueba} = 800.000 \times 0,10 = \mathbf{80.000}$.</p>
            <hr style="margin:0.75rem 0;border:none;border-top:1px solid var(--border-color);">
            <p><strong>2) Estimación de Tres Puntos (Para 1 unidad vs. N unidades):</strong><br>
            • Fórmula de estimación esperada: $E = \frac{a + 4m + b}{6}$<br>
            • Fórmula de desviación estándar: $SD = \frac{b - a}{6}$ (el intervalo del $68\%$ de confianza es $[E - SD,\; E + SD]$).<br>
            <em>Ejemplo (Simulador 4 - Q31):</em> Para ejecutar 1 caso de prueba, $a = 1\text{ h}$, $m = 3\text{ h}$, $b = 8\text{ h}$.<br>
            $E_{\text{1 caso}} = \frac{1 + 4(3) + 8}{6} = \frac{21}{6} = 3,5\text{ horas}$.<br>
            Para ejecutar <strong>4 casos de prueba</strong>: $\text{Total} = 3,5 \times 4 = \mathbf{14\text{ horas}}$.</p>
          </div>
        `
      },
      {
        id: "5.1.5-5.1.7",
        code: "5.1.5 - 5.1.7",
        title: "Priorización de Casos de Prueba, Pirámide de Prueba y Cuadrantes de Prueba",
        kLevel: "K1 / K2 / K3",
        type: "ejercicio",
        fichaSummary: "• Estrategias de Priorización de Casos de Prueba (FL-5.1.5 - K3):\n  1. Basada en el riesgo: Primero los casos que cubren los riesgos más importantes.\n  2. Basada en la cobertura: Primero los casos que logran la mayor cobertura.En la variante de 'Cobertura Adicional', después de elegir el 1.º caso con mayor cobertura total, cada caso subsiguiente se elige según cuántos elementos NUEVOS (aún no cubiertos por los anteriores) logra cubrir.\n  3. Basada en requisitos: Primero los requisitos más importantes para los stakeholders.\n  *REGLA CRÍTICA:* El orden de ejecución SIEMPRE debe respetar las dependencias lógicas (si TC3 tiene prioridad 1 pero depende de TC2, y TC2 depende de TC1, debes ejecutar TC1 → TC2 → TC3).\n• Los 4 Cuadrantes de Prueba de Brian Marick (FL-5.1.7 - K2):\n  - Q1 (Tecnología + Apoya al equipo): Pruebas de componentes e integración de componentes (Automatizadas en CI).\n  - Q2 (Negocio + Apoya al equipo): Pruebas funcionales, historias de usuario, prototipos UX, APIs y simulaciones (Manuales o automatizadas).\n  - Q3 (Negocio + Critica el producto): Pruebas exploratorias, usabilidad, aceptación del usuario UAT, alfa/beta (Manuales).\n  - Q4 (Tecnología + Critica el producto): Pruebas de humo y pruebas no funcionales excepto usabilidad (rendimiento, seguridad, fiabilidad — Automatizadas).",
        trampaAlerta: "¡ATENCIÓN! Estos dos temas del Capítulo 5 te hicieron perder 4 puntos entre el Intento 3, Simulador 3 y Simulador 4:\n1) Cuadrantes de Prueba (Fallaste en Simulador 3 Q34 y Simulador 4 Q33): Marcaste dos veces que 'los 4 cuadrantes corresponden a los 4 niveles de prueba'. ¡NO! Los cuadrantes NO son los niveles de prueba. Su propósito es agrupar los tipos de prueba según dos ejes (Orientados al negocio o a la tecnología / Apoyan al equipo o critican el producto) para ayudar a los stakeholders no técnicos y a la gestión a entender que se necesitan todos los tipos de pruebas.\n2) Priorización por Cobertura Adicional (Fallaste en Simulador 4 Q32): No cuentes solo cuántas 'X' tiene cada fila en total; ve tachando los requisitos ya cubiertos paso a paso:\n   - Paso 1: TC1 cubre {R1, R3, R4, R7} (4 nuevos) → va 1º. Quedan sin cubrir {R2, R5, R6}.\n   - Paso 2: Entre los restantes, TC3 cubre {R5, R6} (2 nuevos) mientras que TC2 solo cubre {R5} (1 nuevo, porque R1 y R7 ya los cubrió TC1). Por tanto TC3 va 2º.\n   - Paso 3: Solo falta {R2}, que lo cubre TC4 → TC4 va 3º.\n   - Paso 4: TC2 queda de ÚLTIMO (4º) porque sus tres requisitos (R1, R5, R7) ya fueron cubiertos por TC1 y TC3.",
        htmlContent: `
          <h4>5.1.6 Pirámide de Prueba (FL-5.1.6 - K1)</h4>
          <p>La pirámide de prueba es un modelo que muestra que diferentes pruebas pueden tener diferente <strong>granularidad</strong>:</p>
          <ul>
            <li><strong>Capa inferior (Base):</strong> Pruebas pequeñas, rápidas, aisladas y de alta granularidad (ej. pruebas de componentes/unitarias). Se tienen <strong>muchas</strong> pruebas para lograr cobertura de código.</li>
            <li><strong>Capa intermedia:</strong> Pruebas de integración de componentes, servicios o API.</li>
            <li><strong>Capa superior (Cúspide):</strong> Pruebas de extremo a extremo (End-to-End / UI) de alto nivel, complejas, más lentas y de gruesa granularidad. Se tienen <strong>pocas</strong> pruebas.</li>
          </ul>
          <p><em>Trampa de examen (Pregunta A21):</em> La pirámide de prueba <strong>NO</strong> dice que "cuanto más cerca de la cúspide, más formal debe ser la automatización".</p>

          <h4>5.1.7 Los 4 Cuadrantes de Prueba (FL-5.1.7 - K2)</h4>
          <table class="study-table">
            <thead>
              <tr>
                <th>Cuadrante</th>
                <th>Orientación y Propósito</th>
                <th>Pruebas Incluidas y Automatización</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cuadrante Q1</strong></td>
                <td>Orientado a la <strong>Tecnología</strong><br><strong>Apoya al equipo</strong></td>
                <td>• Pruebas de componentes<br>• Pruebas de integración de componentes<br><em>Generalmente automatizadas e integradas en CI.</em></td>
              </tr>
              <tr>
                <td><strong>Cuadrante Q2</strong></td>
                <td>Orientado al <strong>Negocio</strong><br><strong>Apoya al equipo</strong></td>
                <td>• Pruebas funcionales<br>• Ejemplos, pruebas de historias de usuario<br>• Prototipos de experiencia de usuario (UX)<br>• Pruebas de API y simulaciones<br><em>Verifican los criterios de aceptación; pueden ser manuales o automatizadas.</em></td>
              </tr>
              <tr>
                <td><strong>Cuadrante Q3</strong></td>
                <td>Orientado al <strong>Negocio</strong><br><strong>Critica el producto</strong></td>
                <td>• Pruebas exploratorias<br>• Pruebas de usabilidad<br>• Pruebas de aceptación del usuario (UAT), alfa y beta<br><em>Orientadas al usuario; suelen ser manuales.</em></td>
              </tr>
              <tr>
                <td><strong>Cuadrante Q4</strong></td>
                <td>Orientado a la <strong>Tecnología</strong><br><strong>Critica el producto</strong></td>
                <td>• Pruebas de humo (Smoke tests)<br>• Pruebas no funcionales (<strong>excepto usabilidad</strong>, que va en Q3: rendimiento, eficiencia, seguridad, fiabilidad, portabilidad)<br><em>A menudo automatizadas.</em></td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: "5.2",
        code: "5.2",
        title: "Gestión de Riesgos: Atributos, Proyecto vs. Producto, Análisis y Control",
        kLevel: "K1 / K2",
        type: "ficha",
        fichaSummary: "• Fórmula de Nivel de Riesgo: Nivel de Riesgo = Probabilidad × Impacto (Daño).\n  *Importante:* La probabilidad y el impacto son factores INDEPENDIENTES (que el impacto sea muy alto no dice nada sobre su probabilidad).\n  *Despeje matemático:* Impacto = Nivel de Riesgo / Probabilidad.\n• Riesgo de Proyecto (afecta cronograma, presupuesto o alcance):\n  - Cuestiones organizativas (retrasos, estimaciones inexactas, recorte de costos).\n  - Problemas de personal (falta de competencias, conflictos, escasez de personal).\n  - Cuestiones técnicas (aumento del alcance / scope creep, mal soporte de herramientas).\n  - Cuestiones de proveedores (fallas de terceros, quiebra).\n• Riesgo de Producto (afecta las características de calidad del software):\n  - Funcionalidad faltante o incorrecta, cálculos erróneos, fallos en tiempo de ejecución, arquitectura deficiente, respuesta lenta, mala UX, vulnerabilidades de seguridad.\n• Gestión de Riesgos = 1) Análisis de Riesgos (Identificación + Evaluación) y 2) Control de Riesgos (Mitigación + Monitoreo).\n• Opciones de respuesta en el Control de Riesgos de Producto: Mitigar mediante pruebas, Aceptar, Transferir o Plan de contingencia.",
        trampaAlerta: "¡REVISA TUS 3 ERRORES EN GESTIÓN DE RIESGOS (Simulador 3 Q35 y Simulador 4 Q34 y Q35)!\n1) Cálculo inverso de riesgo (Simulador 4 Q34): Te dieron Nivel de riesgo = $1.000 y Probabilidad = 50% (0,50) y te pidieron el IMPACTO. Multiplicaste $1.000 × 0,50 = $500. ¡No! Como Riesgo = Probabilidad × Impacto, para hallar el Impacto debes DIVIDIR: Impacto = $1.000 / 0,50 = $2.000.\n2) Riesgo de Producto vs. Proyecto (Simulador 4 Q35): Marcaste 'Reducción de costes' como riesgo de producto. ¡'Reducción/recorte de costes' es un riesgo organizativo de PROYECTO! En cambio, 'Arquitectura deficiente' sí es un riesgo de PRODUCTO.\n3) Cómo influye el Análisis de Riesgos en las pruebas (Simulador 3 Q35): Es el 'nivel de riesgo evaluado' (en la evaluación de riesgos) lo que nos ayuda a seleccionar el rigor y alcance de las pruebas.",
        htmlContent: `
          <h4>5.2.3 Análisis de Riesgos de Producto y su Influencia en las Pruebas (FL-5.2.3 - K2)</h4>
          <p>El análisis de riesgos de producto consiste en la <strong>identificación de riesgos</strong> (lluvia de ideas, talleres, entrevistas, diagramas causa-efecto) y la <strong>evaluación de riesgos</strong> (categorizar el riesgo y determinar su probabilidad, impacto y nivel de riesgo de forma cuantitativa o cualitativa con una matriz de riesgos). Los resultados del análisis de riesgos de producto se utilizan para:</p>
          <ul>
            <li>Determinar el <strong>alcance de las pruebas</strong> que se llevarán a cabo.</li>
            <li>Determinar los <strong>niveles de prueba</strong> particulares y proponer <strong>tipos de prueba</strong> (ej. si el riesgo de rendimiento es muy alto, decidir hacer pruebas detalladas de eficiencia de rendimiento en una fase temprana).</li>
            <li>Determinar las <strong>técnicas de prueba</strong> a emplear y los niveles de <strong>cobertura</strong> que deben alcanzarse.</li>
            <li>Estimar el esfuerzo de prueba necesario para cada tarea.</li>
            <li><strong>Priorizar las pruebas</strong> en un intento de encontrar los defectos críticos lo antes posible.</li>
            <li>Determinar si se podría realizar alguna actividad además de las pruebas para reducir el riesgo (ej. dar formación a los diseñadores).</li>
          </ul>

          <h4>5.2.4 Control de Riesgos de Producto (FL-5.2.4 - K2)</h4>
          <p>El control de riesgos de producto comprende todas las medidas que se toman en respuesta a los riesgos de producto identificados y evaluados. Incluye la <strong>mitigación de riesgos</strong> y el <strong>monitoreo de riesgos</strong>. Las opciones de respuesta ante un riesgo analizado son:</p>
          <ul>
            <li><strong>Mitigación del riesgo mediante pruebas:</strong> Seleccionar probadores con la experiencia adecuada, aplicar un nivel apropiado de independencia, realizar revisiones y análisis estático, aplicar las técnicas de prueba y niveles de cobertura apropiados, aplicar los tipos de prueba adecuados para la característica de calidad afectada, y realizar pruebas dinámicas (incluidas las de regresión).</li>
            <li><strong>Aceptación del riesgo:</strong> Si la probabilidad e impacto son muy bajos o están fuera de nuestro control (ej. cambio en las preferencias de los consumidores).</li>
            <li><strong>Transferencia del riesgo:</strong> Transferir la responsabilidad o pérdida potencial a un tercero (ej. contratar un seguro contra inundación de la sala de servidores o subcontratar un servicio).</li>
            <li><strong>Plan de contingencia:</strong> Definir medidas de respaldo que se activarán si el riesgo llega a materializarse.</li>
          </ul>
        `
      },
      {
        id: "5.3-5.5",
        code: "5.3 - 5.5",
        title: "Monitoreo, Métricas, Informes, Gestión de la Configuración y Gestión de Defectos",
        kLevel: "K1 / K2 / K3",
        type: "ficha",
        fichaSummary: "• Las 7 categorías de Métricas (5.3.1): 1) Progreso del proyecto, 2) Progreso de las pruebas, 3) Calidad del producto (disponibilidad, tiempo de respuesta, tiempo medio hasta la falla), 4) Defectos (cantidad/prioridades, densidad de defectos, % de detección TDD), 5) Riesgo (nivel de riesgo residual), 6) Cobertura (de requisitos, de código), 7) Costos.\n• Informes de Prueba (5.3.2): Informes de Progreso (duración, avances, impedimentos, métricas, riesgos nuevos/modificados, pruebas planificadas para el próximo periodo) e Informes de Finalización (resumen contra el plan, desviaciones, riesgos no mitigados/defectos abiertos, lecciones aprendidas).\n• Gestión de la Configuración (CM - 5.4): Identificación única, control de versiones, líneas base (baselines) y auditoría de todos los elementos de configuración (incluyendo el entorno, librerías, stubs, drivers y scripts de prueba).\n• Informe de Defecto (5.5 - K3): Identificador único, título y resumen, fecha/autor/organización, identificación del OBJETO DE PRUEBA (y versión) y ENTORNO DE PRUEBA, contexto/pasos para reproducir + entradas + registros, resultado esperado y real, severidad (impacto técnico/negocio), prioridad de corrección, estado del defecto y referencias.",
        trampaAlerta: "¡CUIDADO CON ESTAS DOS PREGUNTAS QUE FALLASTE EN LOS SIMULADORES 3 Y 4!\n1) Simulador 4 (Q36): '¿Cuál NO es un propósito válido para un informe de prueba (progreso/finalización)?'. Marcaste 'Proporcionar información sobre las pruebas planificadas para el próximo período' (eso SÍ va en el informe de progreso). La respuesta correcta (lo que NO va en un informe de estado de pruebas) es: 'Proporcionar información detallada sobre cada defecto, como los pasos para reproducirlo' (eso pertenece a los Informes de Defectos individuales, no al informe de progreso/resumen).\n2) Simulador 3 (Q38) y Modelo A (P38): En las preguntas de '¿Qué falta en este informe de defecto que impide reproducirlo?', revisa siempre si el texto menciona el ENTORNO DE PRUEBA (navegador, sistema operativo, versión) y el OBJETO DE PRUEBA (versión/build de la aplicación). Casi siempre es eso lo que falta en los ejercicios K3 de ISTQB.",
        htmlContent: `
          <h4>5.3.1 Métricas Utilizadas en las Pruebas (FL-5.3.1 - K1)</h4>
          <table class="study-table">
            <thead>
              <tr>
                <th>Categoría de Métrica</th>
                <th>Ejemplos Oficiales del Syllabus v4.0</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Progreso del proyecto</strong></td>
                <td>Completitud de tareas, resultados, esfuerzo de proyecto consumido.</td>
              </tr>
              <tr>
                <td><strong>Progreso de las pruebas</strong></td>
                <td>Avance de implementación de casos de prueba, progreso de preparación del entorno, número de casos de prueba ejecutados/no ejecutados, pasados/fallidos, tiempo de ejecución.</td>
              </tr>
              <tr>
                <td><strong>Calidad del producto</strong></td>
                <td>Disponibilidad, tiempos de respuesta, <strong>tiempo medio hasta el fallo (MTTF / MTBF)</strong>.</td>
              </tr>
              <tr>
                <td><strong>Defectos</strong></td>
                <td>Número y prioridades de defectos encontrados/fijos, <strong>densidad de defectos</strong> (defectos divididos por el tamaño del producto), porcentaje de detección de defectos (DDP).</td>
              </tr>
              <tr>
                <td><strong>Riesgo</strong></td>
                <td>Nivel de riesgo residual.</td>
              </tr>
              <tr>
                <td><strong>Cobertura</strong></td>
                <td>Cobertura de requisitos, cobertura de código.</td>
              </tr>
              <tr>
                <td><strong>Costos</strong></td>
                <td>Costo de las pruebas, costo de la calidad organizativa.</td>
              </tr>
            </tbody>
          </table>
          <p><em>Nota para informar sobre el nivel de calidad del objeto de prueba:</em> Se utilizan tanto las métricas de calidad del producto como las métricas de defectos (ej. número de defectos encontrados durante la prueba de sistema y densidad de defectos).</p>

          <h4>5.3.2 y 5.3.3 Informes de Prueba y Comunicación del Estado (FL-5.3.2 / FL-5.3.3 - K2)</h4>
          <p>La información reportada debe adaptarse a la <strong>audiencia</strong>: por ejemplo, a los representantes de negocio les interesan los impedimentos, el avance general y los nuevos riesgos, mientras que una métrica altamente técnica como la <em>"cobertura de rama alcanzada"</em> es la menos útil para el negocio (es útil para desarrolladores).</p>
          <p>Medios de comunicación del estado de las pruebas: comunicación verbal, paneles de control (dashboards, tableros de tareas, <strong>gráficos de quemado / burndown charts</strong> para ver trabajo completado vs. trabajo total restante en una iteración), canales de comunicación electrónica (correo, chat, videoconferencia — muy útiles en equipos distribuidos en distintos continentes donde la comunicación cara a cara no es eficaz), documentación en línea e informes formales.</p>

          <h4>5.4 Gestión de la Configuración (CM) (FL-5.4.1 - K2)</h4>
          <p>Para apoyar adecuadamente las pruebas, la Gestión de la Configuración garantiza que todos los elementos de configuración (plan de pruebas, estrategias, condiciones, casos, scripts automatizados, entornos, librerías, stubs y controladores) se identifiquen de forma única, se sometan a control de versiones, se rastreen los cambios y se relacionen entre sí formando una <strong>línea base (baseline)</strong> reproducible.</p>

          <h4>5.5 Gestión de Defectos (FL-5.5.1 - K3)</h4>
          <p>Como no todas las anomalías reportadas resultan ser defectos reales (pueden ser falsos positivos, solicitudes de cambio o funcionar según lo especificado), el proceso de gestión de defectos maneja las anomalías desde su descubrimiento hasta su cierre, incluyendo un flujo de trabajo para su registro, análisis, clasificación, decisión de respuesta y cierre.</p>
        `
      }
    ]
  },
  {
    id: 6,
    number: "Capítulo 6",
    title: "Herramientas de Prueba (Prioridad Alta)",
    duration: "20 minutos",
    examQuestionsCount: 2,
    kBreakdown: "1 pregunta K1 | 1 pregunta K2 | 0 preguntas K3",
    summary: "Cubre las categorías de herramientas que dan soporte a las distintas actividades de prueba y los beneficios y riesgos potenciales de la automatización de pruebas.",
    keywords: [
      "automatización de pruebas", "herramientas de gestión", "herramientas de prueba estática",
      "herramientas de diseño e implementación", "herramientas de ejecución y cobertura",
      "herramientas no funcionales", "herramientas DevOps", "herramientas de colaboración",
      "máquinas virtuales y contenedores"
    ],
    sections: [
      {
        id: "6.1",
        code: "6.1",
        title: "Soporte de Herramientas para las Pruebas (Categorías)",
        kLevel: "K2",
        type: "ficha",
        fichaSummary: "Clasificación de herramientas según las actividades que apoyan:\n1. Gestión: Gestión del SDLC, requisitos, pruebas, defectos y gestión de la configuración.\n2. Pruebas estáticas: Soporte para revisiones y herramientas de análisis estático.\n3. Diseño e implementación: Facilitan la generación de casos de prueba, datos de prueba y procedimientos de prueba.\n   *OJO EXAMEN:* Cuando preguntan '¿A qué actividad del proceso de prueba da soporte una herramienta de preparación de datos de prueba?', la respuesta oficial es IMPLEMENTACIÓN Y EJECUCIÓN DE LA PRUEBA (porque según el Cap. 1.4.1, los datos de prueba se crean/adquieren en la Implementación para la Ejecución).\n4. Ejecución y cobertura: Ejecución automatizada de pruebas y medición de cobertura.\n5. Pruebas no funcionales: Permiten realizar pruebas no funcionales difíciles o imposibles de hacer manualmente (rendimiento/carga, seguridad).\n6. DevOps: Apoyan la canalización de entrega (CI/CD), el seguimiento del flujo de trabajo y los procesos de compilación/despliegue automatizados.\n7. Colaboración: Facilitan la comunicación entre equipos.\n8. Escalabilidad y estandarización del despliegue: Máquinas virtuales, herramientas de contenedorización (ej. Docker).\n9. Otras herramientas: Cualquier herramienta que ayude en el contexto (ej. una hoja de cálculo).",
        trampaAlerta: "Memoriza este emparejamiento oficial del Modelo B (Pregunta 39) y la trampa del Modelo A (Pregunta 39):\n• 'Apoyar el seguimiento del flujo de trabajo' → Herramientas DevOps.\n• 'Facilitar la comunicación' → Herramientas de colaboración.\n• 'Máquinas virtuales / Contenedores' → Herramientas de apoyo a la escalabilidad y estandarización del despliegue.\n• 'Apoyar revisiones' → Herramientas de prueba estática.\n• 'Herramienta de preparación de datos de prueba' → Apoya a la actividad de IMPLEMENTACIÓN Y EJECUCIÓN de la prueba.",
        htmlContent: `
          <h4>6.1 Categorías de Herramientas de Prueba (FL-6.1.1 - K2)</h4>
          <table class="study-table">
            <thead>
              <tr>
                <th>Categoría de Herramienta</th>
                <th>Cómo Apoya a las Pruebas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Herramientas de Gestión</strong></td>
                <td>Aumentan la eficiencia del proceso de prueba facilitando la gestión del SDLC, requisitos, pruebas, defectos y configuración.</td>
              </tr>
              <tr>
                <td><strong>Herramientas de Prueba Estática</strong></td>
                <td>Asociadas a actividades y beneficios de pruebas estáticas: apoyo a revisiones y análisis estático del código/modelos.</td>
              </tr>
              <tr>
                <td><strong>Herramientas de Diseño e Implementación de Pruebas</strong></td>
                <td>Facilitan la generación de casos de prueba, datos de prueba y procedimientos de prueba. <em>(Recuerda: la creación y preparación efectiva de los datos de prueba es una tarea de la actividad de <strong>Implementación de la prueba</strong> para su uso en la <strong>Ejecución</strong>).</em></td>
              </tr>
              <tr>
                <td><strong>Herramientas de Ejecución y Cobertura de Pruebas</strong></td>
                <td>Facilitan la ejecución automatizada de las pruebas y la medición de la cobertura alcanzada.</td>
              </tr>
              <tr>
                <td><strong>Herramientas de Pruebas No Funcionales</strong></td>
                <td>Permiten al probador realizar pruebas no funcionales que son difíciles o imposibles de realizar manualmente (ej. simular miles de usuarios concurrentes en pruebas de carga/rendimiento o escaneos de seguridad).</td>
              </tr>
              <tr>
                <td><strong>Herramientas DevOps</strong></td>
                <td>Apoyan la canalización de entrega automatizada (CI/CD), el <strong>seguimiento del flujo de trabajo</strong>, los procesos de construcción (build) automatizados y la configuración/despliegue.</td>
              </tr>
              <tr>
                <td><strong>Herramientas de Colaboración</strong></td>
                <td>Facilitan la comunicación entre los miembros del equipo y las partes interesadas.</td>
              </tr>
              <tr>
                <td><strong>Herramientas de Escalabilidad y Estandarización del Despliegue</strong></td>
                <td>Por ejemplo, <strong>máquinas virtuales</strong> y herramientas de <strong>contenedorización</strong>, que permiten aprovisionar entornos de prueba idénticos y escalables rápidamente.</td>
              </tr>
              <tr>
                <td><strong>Otras Herramientas</strong></td>
                <td>Cualquier otra herramienta que ayude en las pruebas dentro del contexto (por ejemplo, una simple hoja de cálculo).</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: "6.2",
        code: "6.2",
        title: "Beneficios y Riesgos de la Automatización de Pruebas",
        kLevel: "K1",
        type: "ficha",
        fichaSummary: "• Beneficios Potenciales:\n  - Ahorro de tiempo al reducir el trabajo manual repetitivo (regresión, reingreso de datos, verificación de estándares).\n  - Prevención de errores humanos simples mediante mayor consistencia y repetibilidad.\n  - Evaluación más objetiva (ej. cobertura) y aportar medidas demasiado complicadas de calcular para los humanos.\n  - Mayor facilidad de acceso a la información sobre las pruebas para apoyar decisiones.\n  - Tiempos de ejecución de prueba reducidos (detección más temprana de defectos).\n  - Más tiempo para que los probadores diseñen pruebas nuevas, más profundas y más efectivas.\n• Riesgos Potenciales:\n  - Expectativas poco realistas sobre los beneficios de una herramienta (funcionalidad, facilidad de uso).\n  - Estimaciones inexactas del tiempo, costos y esfuerzo para introducir una herramienta, mantener los scripts de prueba y cambiar el proceso manual existente.\n  - Uso de una herramienta de prueba cuando la prueba manual es más apropiada.\n  - Confiar demasiado en una herramienta, por ejemplo, ignorando la necesidad del pensamiento crítico humano al analizar resultados.\n  - Dependencia del proveedor de la herramienta (que puede cerrar, retirar la herramienta, venderla a otro o dar mal soporte).\n  - Uso de software de código abierto que puede ser abandonado o requerir actualizaciones frecuentes de componentes internos.\n  - La herramienta de automatización no es compatible con la plataforma de desarrollo.\n  - Elegir una herramienta inadecuada que no cumplía con los requisitos regulatorios o estándares de seguridad.",
        htmlContent: `
          <h4>6.2 Beneficios y Riesgos Potenciales de la Automatización de Pruebas (FL-6.2.1 - K1)</h4>
          <p>El simple hecho de adquirir una herramienta no garantiza el éxito. Cada herramienta nueva requerirá esfuerzo para lograr beneficios reales y duraderos (introducción, mantenimiento y capacitación).</p>
          <table class="study-table">
            <thead>
              <tr>
                <th>Beneficios Potenciales (✔)</th>
                <th>Riesgos Potenciales (✖)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ahorro de tiempo</strong> al reducir el trabajo manual repetitivo (ej. ejecutar pruebas de regresión, volver a introducir los mismos datos de prueba, comparar resultados esperados con reales, comprobar estándares de codificación).</td>
                <td><strong>Expectativas poco realistas</strong> sobre los beneficios de una herramienta (incluyendo funcionalidad y facilidad de uso).</td>
              </tr>
              <tr>
                <td><strong>Prevención de errores humanos simples</strong> gracias a una mayor consistencia y repetibilidad (las pruebas se ejecutan exactamente en el mismo orden y con la misma frecuencia).</td>
                <td><strong>Estimaciones inexactas</strong> del tiempo, los costos y el esfuerzo necesarios para introducir una herramienta, <strong>mantener los scripts de prueba (testware)</strong> y cambiar el proceso de prueba manual existente.</td>
              </tr>
              <tr>
                <td><strong>Evaluación más objetiva</strong> (por ejemplo, cobertura) y <strong>proporcionar medidas que son demasiado complicadas para que los humanos las obtengan</strong>.</td>
                <td><strong>Usar una herramienta de prueba cuando la prueba manual es más apropiada.</strong></td>
              </tr>
              <tr>
                <td><strong>Acceso más fácil a la información sobre las pruebas</strong> para apoyar la gestión de pruebas y el reporte (ej. estadísticas, gráficos de tasas de progreso y tasas de ejecución).</td>
                <td><strong>Confiar demasiado en una herramienta</strong>, por ejemplo, ignorando la necesidad del pensamiento crítico humano.</td>
              </tr>
              <tr>
                <td><strong>Reducción de los tiempos de ejecución</strong> para proporcionar una detección de defectos más temprana y una retroalimentación más rápida.</td>
                <td><strong>Dependencia del proveedor</strong> de la herramienta (que puede cerrar, retirar la herramienta, venderla a un proveedor diferente o proporcionar un soporte deficiente) o <strong>uso de código abierto que puede ser abandonado</strong>.</td>
              </tr>
              <tr>
                <td><strong>Más tiempo para que los probadores</strong> diseñen pruebas nuevas, más profundas y más efectivas.</td>
                <td><strong>Incompatibilidad técnica</strong> con la plataforma de desarrollo o <strong>incumplimiento de requisitos regulatorios</strong> y estándares de seguridad.</td>
              </tr>
            </tbody>
          </table>
          <p><em>Trampas frecuentes de examen en el Capítulo 6:</em></p>
          <ul>
            <li><em>"La automatización puede reducir el tiempo asignado a la prueba manual"</em> → El examen considera reducir el trabajo manual repetitivo como un <strong>beneficio</strong>, no como un riesgo.</li>
            <li><em>"Puede que no se confíe lo suficiente en las herramientas"</em> → Falso, el riesgo real es el opuesto: <strong>confiar demasiado</strong> en la herramienta e ignorar el pensamiento crítico humano.</li>
            <li><em>"Compartir la responsabilidad de la prueba con el proveedor de la herramienta"</em> → Falso, el proveedor nunca comparte la responsabilidad de nuestras pruebas.</li>
          </ul>
        `
      }
    ]
  }
];
