window.ISTQB_FLASHCARDS = [
  // ================= CAPÍTULO 1 (22 Tarjetas) =================
  {
    id: "fc-1-01",
    chapter: 1,
    tag: "Ficha Cap. 1 — Concepto Base",
    isWeakness: false,
    front: "¿Cuál es el propósito principal de probar software y en qué se diferencian la Verificación y la Validación?",
    back: "• Propósito principal: Evaluar la calidad del software y reducir el riesgo de fallas en operación.\n• Verificación: ¿Cumple el sistema con los requisitos especificados? (¿Construimos el producto correctamente?).\n• Validación: ¿Satisface el sistema las necesidades del usuario y partes interesadas en su entorno operativo? (¿Construimos el producto correcto?)."
  },
  {
    id: "fc-1-02",
    chapter: 1,
    tag: "Trampa de Examen (Simulador 3 Q2)",
    isWeakness: true,
    front: "¿Cuál es la diferencia exacta entre Pruebas (Testing) y Depuración (Debugging)?",
    back: "• Pruebas: Pueden desencadenar fallas (pruebas dinámicas) o detectar defectos directamente en productos de trabajo (pruebas estáticas).\n• Depuración: Es una actividad de desarrollo que encuentra la causa de la falla, la analiza y ELIMINA EL DEFECTO del código.\n\n⚠️ Ojo: La depuración elimina DEFECTOS en el código, no 'fallas' (la falla es el efecto externo)."
  },
  {
    id: "fc-1-03",
    chapter: 1,
    tag: "Ficha Cap. 1 — QC vs QA",
    isWeakness: false,
    front: "¿Cuál es la diferencia entre Control de Calidad (QC) y Aseguramiento de la Calidad (QA)? ¿A cuál pertenecen las pruebas?",
    back: "• QC (Control de Calidad): Enfoque CORRECTIVO y orientado al PRODUCTO. Las pruebas son una forma principal de QC.\n• QA (Aseguramiento de la Calidad): Enfoque PREVENTIVO y orientado a la implementación y mejora de los PROCESOS.\n• Ambos (QC y QA) forman parte de la Gestión de la Calidad."
  },
  {
    id: "fc-1-04",
    chapter: 1,
    tag: "Ficha Cap. 1 — Cadena Causal",
    isWeakness: false,
    front: "Define la cadena de causalidad: Causa Raíz → Error → Defecto → Falla.",
    back: "1. Causa Raíz: Razón fundamental por la que ocurre un problema (ej. falta de capacitación, distracción telefónica).\n2. Error (Equivocación): Acción humana que produce un resultado incorrecto.\n3. Defecto (Bug / Falta): Imperfección en un artefacto (código, requisito, caso de prueba).\n4. Falla (Fallo): Mal funcionamiento visible cuando se ejecuta un defecto (el sistema no hace lo que debe)."
  },
  {
    id: "fc-1-05",
    chapter: 1,
    tag: "Ficha Cap. 1 — Principios 1 a 4",
    isWeakness: false,
    front: "Enuncia y explica los primeros 4 Principios de las Pruebas (Principios 1 al 4).",
    back: "1. Las pruebas muestran la presencia, no la ausencia de defectos (no pueden probar que no hay defectos).\n2. Las pruebas exhaustivas son imposibles (en su lugar se usan técnicas de prueba, priorización y enfoque basado en riesgos).\n3. Las pruebas tempranas ahorran tiempo y dinero (detectar defectos al inicio reduce costos).\n4. Los defectos se agrupan (pocos componentes concentran la mayoría de los defectos descubiertos — Principio de Pareto)."
  },
  {
    id: "fc-1-06",
    chapter: 1,
    tag: "Ficha Cap. 1 — Principios 5 a 7",
    isWeakness: false,
    front: "Enuncia y explica los últimos 3 Principios de las Pruebas (Principios 5 al 7).",
    back: "5. Las pruebas se desgastan (Paradoja del pesticida): Repetir las mismas pruebas muchas veces las vuelve ineficaces para detectar NUEVOS defectos.\n6. Las pruebas dependen del contexto: No se prueba igual en todos los sistemas ni ciclos de vida.\n7. Falacia de la ausencia de defectos: Verificar que el software no tenga defectos no garantiza el éxito si no satisface las necesidades del usuario (hace falta validación)."
  },
  {
    id: "fc-1-07",
    chapter: 1,
    tag: "Ficha Cap. 1 — Actividades 1 y 2",
    isWeakness: false,
    front: "¿Qué se hace en (1) Planificación de la Prueba y (2) Monitoreo y Control de la Prueba, y qué Testware producen?",
    back: "• 1. Planificación: Definir objetivos de la prueba y elegir el enfoque.\n  - Testware: Plan de prueba, cronograma, registro de riesgos, criterios de entrada y salida.\n• 2. Monitoreo y Control: Comprobar progreso real vs. plan (monitoreo) y tomar acciones correctivas (control).\n  - Testware: Informes de progreso, directivas de control, información actualizada de riesgos."
  },
  {
    id: "fc-1-08",
    chapter: 1,
    tag: "Trampa de Examen (Intento 3 Q4)",
    isWeakness: true,
    front: "¿Qué pregunta responde el (3) Análisis de la Prueba, qué tareas incluye y qué Testware produce?",
    back: "• Responde a: '¿QUÉ probar?' (en términos de criterios medibles).\n• Tareas: Analizar la base de prueba, identificar características a probar, definir y priorizar CONDICIONES DE PRUEBA (ej. decidir que se debe probar si se puede compartir el pago entre varios usuarios) y detectar defectos en la base de prueba.\n• Testware: Condiciones de prueba (definidas y priorizadas) e informes de defectos en la base de prueba."
  },
  {
    id: "fc-1-09",
    chapter: 1,
    tag: "Trampa Crítica (Intento 3 y 4 Q39)",
    isWeakness: true,
    front: "¿Cuál es la diferencia exacta entre el Testware de (4) Diseño de la Prueba y el de (5) Implementación de la Prueba respecto a los DATOS DE PRUEBA?",
    back: "• En 4. DISEÑO DE LA PRUEBA ('¿Cómo probar?'):\n  - Se producen: Casos de prueba, Cartas de prueba (Test Charters), Ítems de cobertura, REQUISITOS de datos de prueba y REQUISITOS del entorno de prueba.\n• En 5. IMPLEMENTACIÓN DE LA PRUEBA:\n  - Se crean o adquieren los DATOS DE PRUEBA REALES (además de procedimientos, scripts automatizados, suites de prueba y cronograma de ejecución).\n\n⚠️ Por eso una herramienta de preparación de datos apoya a la IMPLEMENTACIÓN Y EJECUCIÓN, no al Diseño."
  },
  {
    id: "fc-1-10",
    chapter: 1,
    tag: "Ficha Cap. 1 — Actividades 6 y 7",
    isWeakness: false,
    front: "¿Qué se hace en (6) Ejecución de la Prueba y (7) Finalización de la Prueba, y qué Testware producen?",
    back: "• 6. Ejecución: Correr pruebas según el cronograma, comparar resultados reales vs. esperados, analizar anomalías y reportar fallos.\n  - Testware: Registros de prueba (Test logs) e Informes de defectos.\n• 7. Finalización: Ocurre en hitos (fin de nivel, fin de iteración, entrega o cancelación). Cierre del entorno y archivo de testware.\n  - Testware: Informe de finalización, elementos de acción/lecciones aprendidas, solicitudes de cambio, testware archivado."
  },
  {
    id: "fc-1-11",
    chapter: 1,
    tag: "Trampa de Examen (Intento 4 Sim 2 Q5)",
    isWeakness: true,
    front: "¿Qué factores contextuales tienen una influencia SIGNIFICATIVA en el proceso de prueba y cuáles NO según el Modelo A?",
    back: "• SÍ influyen significativamente:\n  1. El modelo de ciclo de vida (SDLC).\n  2. Los riesgos de producto identificados.\n  3. Nuevos requisitos normativos/regulatorios obligatorios.\n  4. La experiencia de los miembros del equipo.\n• NO influyen significativamente en cómo se diseña el proceso actual:\n  - El número de defectos encontrados en proyectos anteriores.\n  - El número de probadores certificados en la organización."
  },
  {
    id: "fc-1-12",
    chapter: 1,
    tag: "Ficha Cap. 1 — Trazabilidad",
    isWeakness: false,
    front: "¿Cuáles son los principales beneficios de mantener la trazabilidad entre la base de prueba y el testware?",
    back: "1. Evaluar la cobertura de requisitos o riesgos.\n2. Determinar el riesgo residual (vinculando TODOS los riesgos con los resultados de prueba).\n3. Realizar el análisis de impacto de los cambios (ayuda a seleccionar qué casos ejecutar en la prueba de regresión).\n4. Facilitar auditorías y comunicar el avance en términos de objetivos de negocio."
  },
  {
    id: "fc-1-13",
    chapter: 1,
    tag: "Trampa de Examen (Intento 3 Q6)",
    isWeakness: true,
    front: "¿Cómo se dividen las tareas entre el Rol de Gestión de Pruebas y el Rol de Prueba (Tester)?",
    back: "• Rol de Gestión de Pruebas: Planificación, monitoreo, control y finalización (ej. CREAR EL PLAN DE PRUEBA, decidir sobre automatización, gestionar recursos).\n• Rol de Prueba (Tester): Análisis, diseño, implementación y ejecución técnica (ej. CONFIGURAR ENTORNOS DE PRUEBA, diseñar casos, INFORMAR SOBRE LA COBERTURA ALCANZADA)."
  },
  {
    id: "fc-1-14",
    chapter: 1,
    tag: "Ficha Cap. 1 — Habilidades Esenciales",
    isWeakness: false,
    front: "¿Cuáles son las 6 habilidades esenciales de un probador según el Capítulo 1.5.1?",
    back: "1. Conocimiento en pruebas (técnicas).\n2. Meticulosidad, cuidado, curiosidad y atención a los detalles.\n3. Buenas habilidades de comunicación, escucha activa y trabajo en equipo.\n4. Pensamiento analítico y pensamiento crítico.\n5. Conocimientos técnicos.\n6. Conocimiento del dominio de negocio."
  },
  {
    id: "fc-1-15",
    chapter: 1,
    tag: "Ficha Cap. 1 — Equipo Completo",
    isWeakness: false,
    front: "¿Qué es el Enfoque de Equipo Completo (Whole-Team Approach) y cómo interactúa el probador en él?",
    back: "• Significa que cualquier miembro del equipo con las competencias necesarias puede realizar cualquier tarea requerida, y todos comparten la responsabilidad de la calidad (genera sinergia de equipo).\n• El probador ayuda a los representantes de negocio a crear pruebas de aceptación adecuadas, y colabora con los desarrolladores para acordar la estrategia de prueba y la automatización."
  },
  {
    id: "fc-1-16",
    chapter: 1,
    tag: "Ficha Cap. 1 — Independencia",
    isWeakness: false,
    front: "¿Cuáles son los 4 niveles de independencia (de menor a mayor), su beneficio principal y sus limitaciones?",
    back: "• Niveles (de menor a mayor):\n  1. Sin independencia: El propio autor.\n  2. Cierta independencia: Compañeros del mismo equipo.\n  3. Alta independencia: Probadores fuera del equipo pero dentro de la organización.\n  4. Muy alta independencia: Probadores externos a la organización.\n• Beneficio clave: El probador independiente tiene SESGOS COGNITIVOS distintos al autor y cuestiona suposiciones no escritas.\n• Limitaciones: Aislamiento, mala comunicación y ser vistos como un cuello de botella."
  },

  // ================= CAPÍTULO 2 (18 Tarjetas) =================
  {
    id: "fc-2-01",
    chapter: 2,
    tag: "Ficha Cap. 2 — Impacto del SDLC",
    isWeakness: false,
    front: "¿En qué aspectos de las pruebas impacta el Ciclo de Vida de Desarrollo de Software (SDLC) elegido?",
    back: "1. Alcance y momento/cronología de las actividades de prueba.\n2. Nivel de detalle de la documentación de prueba.\n3. Elección de técnicas de prueba y enfoque de prueba.\n4. Alcance de la automatización de pruebas.\n5. Rol y responsabilidades de un probador."
  },
  {
    id: "fc-2-02",
    chapter: 2,
    tag: "Ficha Cap. 2 — Modelos de SDLC",
    isWeakness: false,
    front: "¿Cómo cambian las pruebas entre modelos Secuenciales, Iterativos/Incrementales y Ágiles?",
    back: "• Secuenciales (Cascada, Modelo en V): En las fases iniciales solo hay pruebas estáticas y planificación; las pruebas dinámicas se limitan a las últimas fases cuando ya existe código.\n• Iterativos (Espiral, Prototipado) e Incrementales (Proceso Unificado): Cada iteración entrega algo funcional con pruebas estáticas y dinámicas continuas y regresión frecuente.\n• Ágiles (Scrum, Kanban, XP): Documentación ligera, alta automatización para regresión y pruebas manuales basadas en la experiencia."
  },
  {
    id: "fc-2-03",
    chapter: 2,
    tag: "Ficha Cap. 2 — Buenas Prácticas",
    isWeakness: false,
    front: "Menciona las 4 buenas prácticas de prueba que aplican a TODOS los modelos de SDLC (secuenciales, incrementales e iterativos).",
    back: "1. Para cada actividad de desarrollo de software existe una actividad de prueba correspondiente.\n2. Cada nivel de prueba tiene objetivos específicos y diferentes.\n3. El análisis y diseño de pruebas para un nivel dado comienza durante la actividad de desarrollo correspondiente.\n4. Los probadores participan en la revisión de productos de trabajo tan pronto como estén disponibles los borradores."
  },
  {
    id: "fc-2-04",
    chapter: 2,
    tag: "Trampa de Examen (Intento 3 Q10)",
    isWeakness: true,
    front: "¿Cómo se diferencian exactamente TDD, ATDD y BDD en una pregunta de examen?",
    back: "• TDD (Desarrollo Guiado por Pruebas): Pruebas orientadas al código (generalmente de componente/unitarias) escritas antes del código para guiar la programación y refactorización.\n• ATDD (Desarrollo Guiado por Pruebas de Aceptación): Se crean pruebas a partir de los CRITERIOS DE ACEPTACIÓN antes de desarrollar la funcionalidad para impulsar el desarrollo.\n• BDD (Desarrollo Guiado por el Comportamiento): Expresa el COMPORTAMIENTO DESEADO con el formato Dado / Cuando / Entonces (Given/When/Then) para que todo el equipo lo entienda."
  },
  {
    id: "fc-2-05",
    chapter: 2,
    tag: "Ficha Cap. 2 — DevOps",
    isWeakness: false,
    front: "¿Qué beneficios aporta DevOps a las pruebas y por qué requiere automatización?",
    back: "• Beneficios: Retroalimentación rápida sobre la calidad del código, CI/CD que promueve shift-left, entornos de prueba estables, disponibilidad constante de software ejecutable y mayor visibilidad de características no funcionales.\n• Automatización: Para poder actualizar y lanzar sistemas con mayor frecuencia en CI/CD, se necesitan muchas pruebas de regresión automatizadas para reducir el riesgo de regresión."
  },
  {
    id: "fc-2-06",
    chapter: 2,
    tag: "Trampa de Examen (Intento 3 Q11)",
    isWeakness: true,
    front: "¿Qué es Shift-Left y cuáles son sus 5 prácticas clave oficiales (incluyendo las pruebas no funcionales)?",
    back: "Shift-left significa adelantar las pruebas a fases más tempranas del SDLC ('probar antes y mejor'):\n1. Revisar especificaciones desde la perspectiva de pruebas antes de aceptarlas.\n2. Escribir casos de prueba antes de escribir el código.\n3. Usar CI/CD para feedback rápido y pruebas de componente automatizadas.\n4. Realizar análisis estático del código antes de las pruebas dinámicas.\n5. ¡OJO!: Iniciar pruebas NO FUNCIONALES (ej. eficiencia de rendimiento) desde el nivel de prueba de COMPONENTES cuando sea posible."
  },
  {
    id: "fc-2-07",
    chapter: 2,
    tag: "Ficha Cap. 2 — Retrospectivas",
    isWeakness: false,
    front: "¿Cuál es el propósito de las retrospectivas al final de una iteración o entrega?",
    back: "Analizar qué tuvo éxito y qué puntos débiles hubo en el proceso para generar una lista de elementos de acción destinados al programa de mejora continua del proceso de la organización (mejorando la efectividad, eficiencia, calidad del testware y colaboración)."
  },
  {
    id: "fc-2-08",
    chapter: 2,
    tag: "Ficha Cap. 2 — Los 5 Niveles de Prueba",
    isWeakness: false,
    front: "¿Cuáles son los 5 Niveles de Prueba del Syllabus ISTQB v4.0 y qué evalúa cada uno?",
    back: "1. Prueba de Componente (Unitaria): Verifica cada módulo por separado (lógica interna del módulo).\n2. Prueba de Integración de Componentes: Verifica interfaces y comunicación entre componentes internos.\n3. Prueba de Sistema: Evalúa el sistema completo extremo a extremo, reglas de negocio y requisitos funcionales/no funcionales.\n4. Prueba de Integración de Sistemas: Prueba interfaces del sistema con otros sistemas o servicios externos.\n5. Prueba de Aceptación: Valida que el sistema satisface las necesidades de negocio del usuario (UAT, Operativa, Contractual/Regulatoria, Alfa y Beta)."
  },
  {
    id: "fc-2-09",
    chapter: 2,
    tag: "Ficha Cap. 2 — Los 4 Tipos de Prueba",
    isWeakness: false,
    front: "¿Cuáles son los 4 Tipos de Prueba en ISTQB v4.0 y qué evalúa cada uno?",
    back: "1. Funcional: Evalúa QUÉ hace el sistema (completitud, corrección e idoneidad funcional).\n2. No Funcional: Evalúa QUÉ TAN BIEN funciona el sistema (rendimiento, usabilidad, fiabilidad, seguridad, compatibilidad, mantenibilidad, portabilidad).\n3. Caja Negra: Basada en especificaciones externas sin considerar la estructura interna.\n4. Caja Blanca: Basada en la estructura interna, código o arquitectura.\n*Todos los tipos pueden aplicarse en cualquiera de los 5 niveles.*"
  },
  {
    id: "fc-2-10",
    chapter: 2,
    tag: "Ficha Cap. 2 — Confirmación vs Regresión",
    isWeakness: false,
    front: "¿Cuál es la diferencia entre Prueba de Confirmación y Prueba de Regresión?",
    back: "• Prueba de Confirmación: Verifica que un defecto reportado ha sido corregido exitosamente (se ocupa de probar el código modificado volviendo a ejecutar los casos que antes fallaban).\n• Prueba de Regresión: Verifica que un cambio no ha introducido efectos adversos en partes NO modificadas del software (ejecuta casos que antes habían PASADO)."
  },
  {
    id: "fc-2-11",
    chapter: 2,
    tag: "Ficha Cap. 2 — Mantenimiento",
    isWeakness: false,
    front: "¿De qué 3 factores depende el alcance de las Pruebas de Mantenimiento y cuáles son sus 3 activadores (triggers)?",
    back: "• Depende de:\n  1. Grado de riesgo del cambio.\n  2. Tamaño del sistema existente.\n  3. Tamaño del cambio.\n• Los 3 Activadores:\n  1. Modificaciones (mejoras, correcciones, hotfixes).\n  2. Actualizaciones o migraciones del entorno operativo (incluye pruebas de conversión de datos).\n  3. Retiro del sistema (pruebas de archivado, restauración y recuperación de datos)."
  },

  // ================= CAPÍTULO 3 (18 Tarjetas) =================
  {
    id: "fc-3-01",
    chapter: 3,
    tag: "Trampa de Examen (Simulador 4 Q15)",
    isWeakness: true,
    front: "¿Qué productos de trabajo SÍ pueden evaluarse mediante Pruebas Estáticas y cuáles NO?",
    back: "• SÍ son evaluables: Requisitos, historias de usuario, código fuente, planes y casos de prueba, cronogramas, presupuestos, cartas de prueba, CONTRATOS y modelos.\n• NO son evaluables mediante pruebas estáticas:\n  1. Código ejecutable binario de terceros (por razones legales y porque no es interpretable por humanos).\n  2. Código cifrado (encriptado)."
  },
  {
    id: "fc-3-02",
    chapter: 3,
    tag: "Trampa de Examen (Intento 3/4 Q15 y Sim 4 Q16)",
    isWeakness: true,
    front: "¿Cuál es la relación entre los defectos que encuentran las Pruebas Estáticas y las Pruebas Dinámicas?",
    back: "• Las pruebas estáticas detectan defectos TEMPRANO en el SDLC (reducen costos de gestión de defectos).\n• Las pruebas dinámicas pueden identificar ALGUNOS de los defectos que se pueden encontrar mediante pruebas estáticas, pero NO TODOS.\n• Defectos que SOLO las pruebas estáticas encuentran: Código inalcanzable (muerto), desviaciones de estándares de codificación, variables declaradas pero nunca usadas, defectos en documentos no ejecutables."
  },
  {
    id: "fc-3-03",
    chapter: 3,
    tag: "Trampa de Examen (Intento 4 Q18)",
    isWeakness: true,
    front: "¿Por qué la frase 'Los fallos encontrados durante una revisión deben tratarse objetivamente' es FALSA?",
    back: "Porque durante una revisión (prueba estática) el software NO se ejecuta, por lo tanto NUNCA se pueden encontrar 'fallos' (fallas). En las revisiones estáticas solo se encuentran ANOMALÍAS o DEFECTOS."
  },
  {
    id: "fc-3-04",
    chapter: 3,
    tag: "Ficha Cap. 3 — Retroalimentación",
    isWeakness: false,
    front: "¿Cuáles son los beneficios de la retroalimentación temprana y frecuente de las partes interesadas?",
    back: "• Ayuda a evitar malentendidos sobre los requisitos.\n• Facilita la comunicación temprana de posibles problemas de calidad.\n• Asegura que los cambios en los requisitos se entiendan e implementen antes.\n• Ayuda al equipo a enfocarse en las características que aportan más valor al negocio."
  },
  {
    id: "fc-3-05",
    chapter: 3,
    tag: "Ficha Cap. 3 — Actividades de Revisión",
    isWeakness: false,
    front: "Enumera en orden las 5 Actividades del Proceso Genérico de Revisión y qué ocurre en cada una.",
    back: "1. Planificación: Definir alcance, características de calidad a evaluar, esfuerzo y criterios de salida.\n2. Inicio de la revisión: Asegurar que todos tengan acceso al producto de trabajo y comprendan sus roles.\n3. Revisión individual: Cada revisor analiza el producto por su cuenta e identifica anomalías.\n4. Comunicación y análisis: Se discuten las anomalías (en reunión) y se decide su estado y acciones.\n5. Reparación e informes: Se crean informes de defectos, se corrigen y se reportan resultados al cumplir criterios de salida."
  },
  {
    id: "fc-3-06",
    chapter: 3,
    tag: "Trampa de Examen (Simulador 4 Q18)",
    isWeakness: true,
    front: "Diferencia exactamente los 6 Roles de una Revisión Formal (especialmente Director vs. Líder de Revisión vs. Moderador).",
    back: "1. Director (Gestor): Decide QUÉ se va a revisar y asigna recursos (personal y tiempo).\n2. Líder de revisión: Responsabilidad general de organizar la revisión (quién participará, cuándo y dónde).\n3. Moderador (Facilitador): Garantiza que las REUNIONES se desarrollen eficazmente, gestiona el tiempo y crea un ambiente seguro donde todos hablen libremente.\n4. Autor: Crea y corrige el producto de trabajo.\n5. Escriba (Grabador): Registra anomalías y decisiones tomadas en la reunión.\n6. Revisor: Examina el producto e identifica anomalías."
  },
  {
    id: "fc-3-07",
    chapter: 3,
    tag: "Trampa Repetida (Intento 3 y 4 Q17)",
    isWeakness: true,
    front: "Si una revisión tiene rol de escriba, preparación individual e informe, pero LA REUNIÓN ES DIRIGIDA POR EL AUTOR del producto de trabajo, ¿qué tipo de revisión es?",
    back: "¡Es una REVISIÓN GUIADA / RECORRIDO (WALKTHROUGH)!\n\nRegla de oro:\n• Revisión Guiada (Walkthrough): SIEMPRE es dirigida por el AUTOR.\n• Revisión Técnica: Dirigida por un moderador con expertos técnicos.\n• Inspección: La más formal, dirigida por un moderador capacitado (el autor tiene PROHIBIDO ser líder, moderador, lector o escriba)."
  },
  {
    id: "fc-3-08",
    chapter: 3,
    tag: "Ficha Cap. 3 — Los 4 Tipos de Revisión",
    isWeakness: false,
    front: "Compara los 4 Tipos de Revisión: Informal, Guiada (Walkthrough), Técnica e Inspección.",
    back: "1. Informal: Sin proceso formal ni documentación exigida; busca detectar anomalías rápido.\n2. Guiada (Walkthrough): Dirigida por el autor; busca evaluar calidad, educar a revisores, ganar confianza y detectar anomalías.\n3. Técnica: Realizada por revisores técnicamente calificados y moderador; busca consenso técnico y resolver problemas técnicos.\n4. Inspección: La más rigurosa; sigue los 5 pasos completos, roles estrictos, recopila métricas para mejorar el proceso."
  },
  {
    id: "fc-3-09",
    chapter: 3,
    tag: "Ficha Cap. 3 — Factores de Éxito",
    isWeakness: false,
    front: "Menciona 5 factores clave para el éxito de las revisiones.",
    back: "1. Dividir productos de trabajo grandes en PARTES PEQUEÑAS para mantener la concentración.\n2. Definir objetivos claros y criterios de salida medibles.\n3. Dar tiempo adecuado de preparación individual.\n4. Facilitación adecuada (evitar aburrimiento u hostilidad).\n5. Evaluar de forma objetiva los DEFECTOS (anomalías) del producto sin atacar al autor."
  },

  // ================= CAPÍTULO 4 (28 Tarjetas - Prioridad Alta) =================
  {
    id: "fc-4-01",
    chapter: 4,
    tag: "Ficha Cap. 4 — Clasificación de Técnicas",
    isWeakness: true,
    front: "Clasifica todas las técnicas del Capítulo 4 en sus 3 grandes grupos: Caja Negra, Caja Blanca y Basadas en la Experiencia.",
    back: "• Caja Negra (4): Partición de Equivalencia (EP), Análisis de Valores Límite (BVA), Tabla de Decisión, Transición de Estado.\n• Caja Blanca (2): Prueba de Sentencias, Prueba de Ramas.\n• Basadas en la Experiencia (3): Predicción de Errores (Error Guessing), Pruebas Exploratorias, Pruebas Basadas en Listas de Comprobación."
  },
  {
    id: "fc-4-02",
    chapter: 4,
    tag: "Ficha Cap. 4 — Partición de Equivalencia",
    isWeakness: true,
    front: "¿Qué es la Partición de Equivalencia (EP) y por qué las particiones inválidas deben probarse de una en una?",
    back: "• Divide los datos en grupos (particiones) donde se espera que el software procese todos los valores de la partición de forma equivalente.\n• Las particiones INVÁLIDAS deben probarse individualmente (no combinar dos entradas inválidas en el mismo caso de prueba) para evitar el ENMASCARAMIENTO DE DEFECTOS (que un mensaje de error impida validar la segunda entrada)."
  },
  {
    id: "fc-4-03",
    chapter: 4,
    tag: "Trampa K3 (Intento 4 Sim 2 - Apartamentos)",
    isWeakness: true,
    front: "Si tienes 2 campos: Piso (Planta baja, 1º, 2º) y Jardín (Sin jardín, Pequeño, Grande), y SOLO la planta baja puede tener jardín, ¿cuántos casos mínimos necesitas para 100% EP?",
    back: "Se necesitan 4 CASOS DE PRUEBA (no 3):\n1. (Planta baja, Jardín pequeño)\n2. (Planta baja, Jardín grande)\n3. (Primer piso, Sin jardín)\n4. (Segundo piso, Sin jardín)\n\nPorque las dos opciones con jardín te obligan a repetir 'Planta baja' dos veces, y luego necesitas otros 2 casos para cubrir 'Primer piso' y 'Segundo piso'."
  },
  {
    id: "fc-4-04",
    chapter: 4,
    tag: "Ficha Cap. 4 — Valores Límite (2 vs 3 valores)",
    isWeakness: true,
    front: "Para un rango válido de enteros entre 1 y 5 (inclusive), ¿cuáles son los valores de prueba con Análisis de Valores Límite (BVA) de 2 valores y de 3 valores?",
    back: "• BVA de 2 valores (el límite y su vecino en la partición adyacente):\n  - Límite 1: {0, 1}\n  - Límite 5: {5, 6}\n  - Total 2 valores = {0, 1, 5, 6}.\n• BVA de 3 valores (el límite y sus dos vecinos inmediatos a ambos lados):\n  - Límite 1: {0, 1, 2}\n  - Límite 5: {4, 5, 6}\n  - Total 3 valores = {0, 1, 2, 4, 5, 6}."
  },
  {
    id: "fc-4-05",
    chapter: 4,
    tag: "Ejercicio K3 (Modelo A - A15)",
    isWeakness: true,
    front: "Un termostato de vino indica: T < 12 (baja), T = 12 (óptima), T > 12 (alta). ¿Qué valores mínimos cubren el 100% de BVA de 3 valores?",
    back: "Los valores límite de las 3 particiones son 11, 12 y 13:\n• Para 11: {10, 11, 12}\n• Para 12: {11, 12, 13}\n• Para 13: {12, 13, 14}\nUnión mínima = {10, 11, 12, 13, 14} (5 valores)."
  },
  {
    id: "fc-4-06",
    chapter: 4,
    tag: "Ficha Cap. 4 — Tablas de Decisión",
    isWeakness: true,
    front: "En una Tabla de Decisión, ¿qué significan los símbolos T, F, '–' (guion) y N/A, y cómo se calcula el número de reglas iniciales?",
    back: "• Si hay n condiciones booleanas, hay 2ⁿ reglas (columnas) iniciales.\n• T (True): La condición se cumple.\n• F (False): La condición no se cumple.\n• '–' (Guion / Indiferente): El valor de esa condición no influye en la acción de esa regla.\n• N/A: La condición no es aplicable para esa regla.\n• Cobertura = (Columnas factibles ejercidas / Total de columnas factibles) × 100%."
  },
  {
    id: "fc-4-07",
    chapter: 4,
    tag: "Ficha Cap. 4 — Contradicción vs Omisión en Tabla",
    isWeakness: true,
    front: "¿Cómo identificas una OMISIÓN y una CONTRADICCIÓN en una Tabla de Decisión comprimida (con guiones '–')?",
    back: "• Omisión (Brecha): Existe una combinación posible de entradas (ej. T, T, F) que no coincide con ninguna columna de la tabla.\n• Contradicción: Existe una combinación de entradas (ej. F, F, F) que coincide al mismo tiempo con DOS columnas distintas que tienen acciones diferentes."
  },
  {
    id: "fc-4-08",
    chapter: 4,
    tag: "Ficha Cap. 4 — Transición de Estados",
    isWeakness: true,
    front: "¿Cuáles son los 3 criterios de cobertura en Pruebas de Transición de Estado (de menor a mayor rigor)?",
    back: "1. Cobertura de todos los estados: Visitar cada estado al menos una vez (el criterio más débil).\n2. Cobertura de transiciones válidas (conmutador 0 / 0-switch): Ejercitar cada transición válida (flecha del diagrama) al menos una vez (el más común).\n3. Cobertura de todas las transiciones: Ejercitar todas las transiciones válidas Y además intentar ejecutar todas las transiciones inválidas (celdas vacías '-' de la tabla de estados)."
  },
  {
    id: "fc-4-09",
    chapter: 4,
    tag: "Trampa K3 (Simulador 4 Q23)",
    isWeakness: true,
    front: "En una tabla de transición de estados, si una secuencia ejecuta el evento 'Disponible' desde S1 (S1→S2) y más tarde ejecuta 'Disponible' desde S3 (S3→S2), ¿cuenta como 1 o 2 transiciones válidas cubiertas?",
    back: "¡Cuenta como DOS transiciones válidas distintas!\nUna transición se define por su Estado de Origen + Evento + Estado de Destino. Como una parte de S1 (S1→S2) y la otra parte de S3 (S3→S2), son dos flechas distintas del diagrama."
  },
  {
    id: "fc-4-10",
    chapter: 4,
    tag: "Trampa de Examen (Intento 3 Q24 y Q25)",
    isWeakness: true,
    front: "¿Cuál es la relación entre Cobertura de Sentencias y Cobertura de Ramas, y cuál es la principal DEBILIDAD de las pruebas de Caja Blanca?",
    back: "• 100% Cobertura de Ramas ⇒ SIEMPRE garantiza 100% Cobertura de Sentencias.\n• 100% Cobertura de Sentencias ⇒ NO garantiza 100% Cobertura de Ramas (ej. un 'if' sin 'else'), pero SÍ garantiza que cada instrucción ejecutable que contiene un defecto se ejecutó al menos una vez.\n• Debilidad principal de Caja Blanca: NO puede detectar defectos de OMISIÓN (requisitos no implementados en el código)."
  },
  {
    id: "fc-4-11",
    chapter: 4,
    tag: "Ficha Cap. 4 — Predicción de Errores",
    isWeakness: false,
    front: "¿En qué se basa la Predicción de Errores (Error Guessing) y qué son los Ataques de Faltas (Fault Attacks)?",
    back: "• Predicción de errores: Técnica basada en la experiencia donde el probador anticipa errores de los desarrolladores, defectos y fallas basándose en cómo funcionó la aplicación en el pasado y qué errores son típicos.\n• Ataques de faltas: Enfoque metódico de la predicción de errores que consiste en crear o usar una lista de posibles errores/defectos/fallas y diseñar pruebas para exponerlos."
  },
  {
    id: "fc-4-12",
    chapter: 4,
    tag: "Ficha Cap. 4 — Pruebas Exploratorias",
    isWeakness: false,
    front: "¿Qué caracteriza a las Pruebas Exploratorias y cuándo están especialmente recomendadas?",
    back: "• Las pruebas se diseñan, ejecutan y evalúan SIMULTÁNEAMENTE mientras el probador aprende sobre el objeto de prueba.\n• Suelen estructurarse en sesiones con límite de tiempo (time-boxed) guiadas por una Carta de Prueba (Test Charter).\n• Son ideales cuando hay POCAS o INADECUADAS especificaciones, fuerte PRESIÓN DE TIEMPO, y probadores con experiencia en el dominio y habilidades analíticas."
  },
  {
    id: "fc-4-13",
    chapter: 4,
    tag: "Ficha Cap. 4 — Listas de Comprobación",
    isWeakness: false,
    front: "¿Cómo deben redactarse los ítems de una Lista de Comprobación (Checklist) y cuál es su compromiso entre cobertura y repetibilidad?",
    back: "• Los ítems suelen formularse como preguntas verificables individualmente y directamente por un humano (ej. '¿Los mensajes de error están en un lenguaje comprensible para el usuario?'). No deben incluir criterios de salida (como '% de cobertura').\n• Cuanto más generales/alto nivel sean los ítems: MÁS cobertura (cada tester explora distinto), pero MENOS repetibilidad."
  },
  {
    id: "fc-4-14",
    chapter: 4,
    tag: "Trampa de Examen (Simulador 4 Q28)",
    isWeakness: true,
    front: "¿Cuáles son las '3 C' de una Historia de Usuario y cuál de ellas permite al equipo lograr una comprensión colectiva de lo que se debe entregar?",
    back: "1. Card (Tarjeta): Medio físico/electrónico que describe la historia ('Como [rol], quiero [objetivo], para [valor]').\n2. Conversation (Conversación): Diálogo entre negocio, desarrollo y pruebas que explica cómo se usará el software y permite lograr una COMPRENSIÓN COLECTIVA.\n3. Confirmation (Confirmación): Los criterios de aceptación."
  },
  {
    id: "fc-4-15",
    chapter: 4,
    tag: "Ficha Cap. 4 — INVEST y Criterios de Aceptación",
    isWeakness: false,
    front: "¿Qué significa el acrónimo INVEST para Historias de Usuario y cuáles son los 2 formatos principales de Criterios de Aceptación?",
    back: "• INVEST: Independientes, Negociables, Valiosas, Estimables, Small (Pequeñas) y Testables (Comprobables).\n• Los 2 formatos de Criterios de Aceptación:\n  1. Orientado al escenario: Formato Dado / Cuando / Entonces (Given/When/Then).\n  2. Orientado a las reglas: Lista de viñetas con reglas o tabla de entradas/salidas."
  },
  {
    id: "fc-4-16",
    chapter: 4,
    tag: "Trampa K3 (Intento 3 Q29 y Sim 4 Q29)",
    isWeakness: true,
    front: "Al resolver una pregunta K3 de ATDD sobre una Historia de Usuario, ¿cómo descartas las opciones trampa?",
    back: "En ATDD, un caso de prueba válido DEBE:\n1. Ejecutarse únicamente bajo el ROL especificado en la historia de usuario (descarta opciones que prueben otro rol).\n2. Validar directamente uno o más de los CRITERIOS DE ACEPTACIÓN listados.\n3. NO agregar requisitos ni comportamientos fuera del alcance de la historia (descarta opciones que hablen de probar en 3 navegadores, registrar usuarios nuevos o programar publicaciones si eso no está en los criterios)."
  },

  // ================= CAPÍTULO 5 (26 Tarjetas - Prioridad Muy Alta) =================
  {
    id: "fc-5-01",
    chapter: 5,
    tag: "Ficha Cap. 5 — Plan de Pruebas",
    isWeakness: true,
    front: "¿Qué elementos pertenecen a la sección 'Enfoque de Prueba' dentro del contenido de un Plan de Pruebas?",
    back: "Dentro del 'Enfoque de prueba' de un plan se definen:\n• Niveles de prueba y Tipos de prueba a aplicar.\n• Técnicas de prueba y niveles de cobertura exigidos.\n• Entregables de prueba.\n• Criterios de entrada y criterios de salida.\n• Grado de independencia.\n• Requisitos de datos de prueba y del entorno de prueba."
  },
  {
    id: "fc-5-02",
    chapter: 5,
    tag: "Ficha Cap. 5 — Planificación Ágil",
    isWeakness: true,
    front: "¿En qué se diferencia la contribución del probador en la Planificación de la Entrega (Release) frente a la Planificación de la Iteración (Sprint)?",
    back: "• Planificación de la Entrega (Release - varias iteraciones): Redactar historias comprobables, criterios de aceptación, análisis de riesgos de alto nivel, estimar esfuerzo global y definir el enfoque para la entrega.\n• Planificación de la Iteración (Sprint - una iteración): Análisis DETALLADO de riesgos de las historias de usuario, determinar comprobabilidad, DESGLOSAR historias en tareas de prueba, estimar esfuerzo de tareas e identificar aspectos funcionales y no funcionales."
  },
  {
    id: "fc-5-03",
    chapter: 5,
    tag: "Ficha Cap. 5 — Criterios de Entrada vs Salida",
    isWeakness: true,
    front: "Compara los Criterios de Entrada y los Criterios de Salida, y cómo se llaman en el desarrollo Ágil.",
    back: "• Criterios de Entrada (En Ágil = Definición de Preparado / Definition of Ready - DoR): Condiciones previas antes de iniciar una actividad (disponibilidad de entorno, datos, requisitos en formato dado/cuando/entonces, smoke tests aprobados, análisis estático sin advertencias graves).\n• Criterios de Salida (En Ágil = Definición de Hecho / Definition of Done - DoD): Condiciones para declarar completada la actividad (cobertura alcanzada, densidad de defectos alcanzada, pruebas de regresión automatizadas, o fin de tiempo/presupuesto)."
  },
  {
    id: "fc-5-04",
    chapter: 5,
    tag: "Ficha Cap. 5 — Las 4 Técnicas de Estimación",
    isWeakness: true,
    front: "¿Cuáles son las 4 Técnicas de Estimación del Esfuerzo de Prueba en ISTQB v4.0 y cómo se agrupan?",
    back: "• Basadas en Métricas (2):\n  1. Estimación basada en proporciones (ratios históricos Desarrollo : Prueba).\n  2. Extrapolación (proyección matemática con datos tempranos del proyecto actual; muy útil en iterativos).\n• Basadas en Expertos (2):\n  3. Delphi de banda ancha (Wideband Delphi) / Planning Poker (iterativa por consenso).\n  4. Estimación de tres puntos (fórmula matemática con a, m, b)."
  },
  {
    id: "fc-5-05",
    chapter: 5,
    tag: "Trampa K3 (Simulador 4 Q31)",
    isWeakness: true,
    front: "Escribe las dos fórmulas de la Estimación de Tres Puntos (Estimación Final E y Desviación Estándar SD) y la regla para N casos de prueba.",
    back: "• Estimación esperada para 1 elemento:\n  E = (a + 4m + b) / 6\n• Error de medición (Desviación estándar):\n  SD = (b - a) / 6\n  (donde a = más optimista, m = más probable, b = más pesimista).\n\n⚠️ ¡REGLA DE EXAMEN!: Si te dan a, m, b para UN caso de prueba y te piden el esfuerzo para N casos de prueba (ej. 4 casos), multiplica el resultado final por N: Total = E × N."
  },
  {
    id: "fc-5-06",
    chapter: 5,
    tag: "Trampa K3 (Priorización por Cobertura Adicional - Sim 4 Q32)",
    isWeakness: true,
    front: "¿Cómo funciona paso a paso la Priorización por Cobertura Adicional?",
    back: "1. Elige primero el caso de prueba que cubra la MAYOR cantidad total de requisitos/elementos.\n2. Tacha todos los elementos que ese primer caso ya cubrió.\n3. Para elegir el 2.º caso, NO mires el total original de cada caso: cuenta cuántos elementos NUEVOS (aún NO tachados) aporta cada caso restante y elige el que aporte más nuevos.\n4. Repite hasta cubrir todos; el caso que ya no aporte elementos nuevos queda de ÚLTIMO."
  },
  {
    id: "fc-5-07",
    chapter: 5,
    tag: "Trampa K3 (Priorización con Dependencias - Intento 3 Q33)",
    isWeakness: true,
    front: "Al priorizar casos de prueba que tienen tanto 'Prioridad (1 = más alta)' como 'Dependencias lógicas', ¿qué manda primero?",
    back: "¡Las DEPENDENCIAS LÓGICAS mandan primero!\nNo puedes ejecutar un caso de Prioridad 1 si depende de otro caso que aún no se ha ejecutado. Primero debes ejecutar la cadena de casos prerequisito que desbloquean al caso de Prioridad 1."
  },
  {
    id: "fc-5-08",
    chapter: 5,
    tag: "Ficha Cap. 5 — Pirámide de Prueba",
    isWeakness: false,
    front: "¿Qué representa la Pirámide de Prueba respecto a la granularidad, velocidad y cantidad de pruebas?",
    back: "• Base de la pirámide (Pruebas Unitarias / Componentes): Alta granularidad (muy específicas), aisladas, ejecución muy rápida → se tienen MUCHAS pruebas.\n• Capa media (Integración / Servicios / API): Granularidad y velocidad intermedias.\n• Cúspide (End-to-End / UI): Granularidad gruesa, complejas, ejecución más lenta → se tienen POCAS pruebas."
  },
  {
    id: "fc-5-09",
    chapter: 5,
    tag: "Trampa Repetida (Simulador 3 Q34 y Simulador 4 Q33)",
    isWeakness: true,
    front: "¿Qué son los 4 Cuadrantes de Prueba de Brian Marick (Q1, Q2, Q3, Q4) y por qué NO equivalen a los 4 niveles de prueba?",
    back: "Los cuadrantes agrupan las pruebas según DOS ejes: orientadas a la Tecnología o al Negocio, y si Apoyan al equipo o Critican el producto (NO son etapas ni corresponden 1 a 1 con los niveles de prueba):\n• Q1 (Tecnología + Apoya al equipo): Componentes e Integración de componentes (Automatizadas).\n• Q2 (Negocio + Apoya al equipo): Funcionales, historias de usuario, prototipos UX, API/simulaciones (Manuales/Auto).\n• Q3 (Negocio + Critica el producto): Exploratorias, Usabilidad, UAT, Alfa/Beta (Manuales).\n• Q4 (Tecnología + Critica el producto): Humo y No funcionales excepto usabilidad: rendimiento, seguridad, fiabilidad (Automatizadas)."
  },
  {
    id: "fc-5-10",
    chapter: 5,
    tag: "Trampa K3 (Simulador 4 Q34)",
    isWeakness: true,
    front: "¿Cómo se relacionan matemáticamente el Nivel de Riesgo, la Probabilidad y el Impacto? Si el Nivel de Riesgo es $1,000 y la Probabilidad es 50%, ¿cuál es el Impacto?",
    back: "• Fórmula directa: Nivel de Riesgo = Probabilidad × Impacto.\n• Fórmula despejada para hallar el Impacto: Impacto = Nivel de Riesgo / Probabilidad.\n• En el ejemplo: Impacto = $1,000 / 0.50 = $2,000.\n*(Recuerda también que la Probabilidad y el Impacto son estadísticamente independientes entre sí)*."
  },
  {
    id: "fc-5-11",
    chapter: 5,
    tag: "Trampa de Examen (Simulador 4 Q35)",
    isWeakness: true,
    front: "Diferencia con ejemplos claros los Riesgos de Proyecto frente a los Riesgos de Producto.",
    back: "• Riesgos de PROYECTO (afectan cronograma, presupuesto o alcance del proyecto):\n  - Organizativos: Retrasos en entregas, estimaciones inexactas, REDUCCIÓN / RECORTE DE COSTES.\n  - Personal: Falta de habilidades, conflictos, traslado de probadores, expectativas imprecisas de stakeholders.\n  - Técnicos/Proveedores: Scope creep, mal soporte de herramientas, fallo de proveedor.\n• Riesgos de PRODUCTO (afectan la calidad interna o externa del software):\n  - ARQUITECTURA DEFICIENTE, funcionalidad faltante/errónea, tiempos de respuesta lentos, mala UX, problemas de accesibilidad o seguridad."
  },
  {
    id: "fc-5-12",
    chapter: 5,
    tag: "Ficha Cap. 5 — Análisis vs Control de Riesgos",
    isWeakness: true,
    front: "¿Qué actividades componen el Análisis de Riesgos y el Control de Riesgos, y cuáles son las 4 opciones de respuesta ante un riesgo de producto?",
    back: "• Análisis de Riesgos = 1) Identificación de riesgos + 2) Evaluación de riesgos (el nivel de riesgo evaluado determina el rigor y alcance de las pruebas).\n• Control de Riesgos = 1) Mitigación de riesgos + 2) Monitoreo de riesgos.\n• Las 4 opciones de respuesta al riesgo de producto:\n  1. Mitigación mediante pruebas (ej. hacer pruebas de rendimiento o usar BVA).\n  2. Aceptación del riesgo.\n  3. Transferencia del riesgo (ej. seguro contra inundación).\n  4. Plan de contingencia."
  },
  {
    id: "fc-5-13",
    chapter: 5,
    tag: "Ficha Cap. 5 — Métricas de Prueba",
    isWeakness: false,
    front: "Diferencia las Métricas de Calidad del Producto frente a las Métricas de Defectos y Métricas de Progreso.",
    back: "• Calidad del Producto: Disponibilidad, tiempo de respuesta, TIEMPO MEDIO HASTA EL FALLO / ENTRE FALLOS (MTTF/MTBF).\n• Defectos: Número y prioridades de defectos encontrados, DENSIDAD DE DEFECTOS (defectos / tamaño), porcentaje de detección de defectos (DDP).\n• Progreso de las Pruebas: Casos implementados, ejecutados/no ejecutados, pasados/fallidos.\n*(Nota: Para informar el nivel de calidad del objeto de prueba se usan métricas de calidad del producto y métricas de defectos)*."
  },
  {
    id: "fc-5-14",
    chapter: 5,
    tag: "Trampa de Examen (Simulador 4 Q36)",
    isWeakness: true,
    front: "¿Qué incluye un Informe de Progreso de Pruebas, qué incluye un Informe de Finalización y qué NO pertenece a ninguno de los dos?",
    back: "• Informe de Progreso: Avance del periodo, impedimentos y soluciones, métricas de prueba, riesgos nuevos/modificados y PRUEBAS PLANIFICADAS PARA EL PRÓXIMO PERIODO.\n• Informe de Finalización: Resumen frente al plan, desviaciones, defectos no resueltos/riesgos no mitigados y lecciones aprendidas.\n• ¿Qué NO es propósito de un informe de prueba?: Dar información detallada de cada defecto como los PASOS PARA REPRODUCIRLO (eso pertenece exclusivamente al Informe de Defecto)."
  },
  {
    id: "fc-5-15",
    chapter: 5,
    tag: "Ficha Cap. 5 — Gestión de la Configuración",
    isWeakness: false,
    front: "¿Cómo apoya la Gestión de la Configuración (CM) a las pruebas?",
    back: "Identifica de forma única, controla las versiones, registra los cambios y relaciona en una línea base (baseline) todos los elementos del testware y del entorno (scripts automatizados, casos de prueba, librerías, stubs y controladores), garantizando trazabilidad y reproducibilidad."
  },
  {
    id: "fc-5-16",
    chapter: 5,
    tag: "Trampa K3 (Simulador 3 Q38 y Modelo A P38)",
    isWeakness: true,
    front: "¿Cuáles son los elementos esenciales de un Informe de Defecto y cuál suele faltar cuando el desarrollador lo rechaza por 'no reproducible'?",
    back: "Contenido clave:\n• ID único, Título y resumen, Fecha/Autor.\n• Identificación del OBJETO DE PRUEBA (y su versión) y del ENTORNO DE PRUEBA (navegador, SO, versión).\n• Contexto y pasos para reproducir + entradas + logs.\n• Resultado esperado y Resultado real.\n• Severidad (impacto) y Prioridad (urgencia de corrección).\n• Estado y Referencias.\n\n⚠️ En los exámenes, cuando un reporte bien redactado no es reproducible, casi siempre lo que olvidaron poner es el ENTORNO DE PRUEBA y el OBJETO/ELEMENTO DE PRUEBA (y sus versiones)."
  },

  // ================= CAPÍTULO 6 (12 Tarjetas - Prioridad Alta) =================
  {
    id: "fc-6-01",
    chapter: 6,
    tag: "Ficha Cap. 6 — Categorías de Herramientas",
    isWeakness: true,
    front: "Relaciona cada función con su categoría exacta de herramienta en el Capítulo 6.1:\n1) Seguimiento del flujo de trabajo y CI/CD\n2) Facilitar la comunicación\n3) Máquinas virtuales y contenedores\n4) Apoyar revisiones",
    back: "1) Seguimiento del flujo de trabajo y CI/CD → Herramientas DevOps.\n2) Facilitar la comunicación → Herramientas de colaboración.\n3) Máquinas virtuales y contenedores → Herramientas de apoyo a la escalabilidad y estandarización del despliegue.\n4) Apoyar revisiones y análisis estático → Herramientas de prueba estática."
  },
  {
    id: "fc-6-02",
    chapter: 6,
    tag: "Trampa Repetida (Intento 3 y 4 Q39)",
    isWeakness: true,
    front: "¿A qué actividad del proceso de prueba da soporte una herramienta de preparación de datos de prueba?",
    back: "Da soporte a la actividad de IMPLEMENTACIÓN Y EJECUCIÓN DE LA PRUEBA.\n(Recuerda: En Análisis y Diseño solo se identifican las condiciones y los requisitos de datos, mientras que en la Implementación se crean/preparan los datos de prueba reales para su Ejecución)."
  },
  {
    id: "fc-6-03",
    chapter: 6,
    tag: "Ficha Cap. 6 — Beneficios de la Automatización",
    isWeakness: true,
    front: "¿Cuáles son los 6 beneficios potenciales de la automatización de pruebas según el Syllabus v4.0?",
    back: "1. Ahorro de tiempo al reducir el trabajo manual repetitivo (regresión, reingreso de datos).\n2. Prevención de errores humanos simples mediante mayor consistencia y repetibilidad.\n3. Evaluación más objetiva (ej. cobertura) y aportar medidas demasiado complicadas para que los humanos las calculen.\n4. Acceso más fácil a información y estadísticas de pruebas.\n5. Tiempos de ejecución de prueba reducidos (detección más temprana).\n6. Más tiempo para que los probadores diseñen pruebas nuevas y más profundas."
  },
  {
    id: "fc-6-04",
    chapter: 6,
    tag: "Ficha Cap. 6 — Riesgos de la Automatización",
    isWeakness: true,
    front: "¿Cuáles son los 8 riesgos potenciales de la automatización de pruebas según el Syllabus v4.0?",
    back: "1. Expectativas poco realistas sobre los beneficios de la herramienta.\n2. Estimaciones inexactas de tiempo, costos y esfuerzo para introducir la herramienta y MANTENER LOS SCRIPTS DE PRUEBA (testware).\n3. Usar una herramienta cuando la prueba manual es más apropiada.\n4. Confiar demasiado en la herramienta (ignorando el pensamiento crítico humano).\n5. Dependencia del proveedor (cierre, retiro, mal soporte).\n6. Uso de software de código abierto que puede ser abandonado.\n7. Incompatibilidad técnica con la plataforma de desarrollo.\n8. Elegir una herramienta que incumple requisitos normativos o de seguridad."
  },
  {
    id: "fc-1-17",
    chapter: 1,
    tag: "Ficha Cap. 1 — Objetivos de Prueba",
    isWeakness: false,
    front: "¿Cuáles de los siguientes SON objetivos válidos de la prueba y cuáles contradicen los principios?",
    back: "• VÁLIDOS: Reducir el nivel de riesgo, generar confianza en la calidad, evaluar productos de trabajo, verificar requisitos y validar necesidades.\n• FALSOS (Contradicen Principios 1 y 2):\n  - 'Demostrar que no hay defectos no corregidos' (Falso por Principio 1).\n  - 'Demostrar que no habrá fallos en producción' (Falso por Principio 1).\n  - 'Comprobar todas las combinaciones de entradas' (Falso por Principio 2)."
  },
  {
    id: "fc-1-18",
    chapter: 1,
    tag: "Ficha Cap. 1 — Carta de Prueba (Test Charter)",
    isWeakness: false,
    front: "¿En qué actividad del proceso de prueba se produce una Carta o Contrato de Prueba (Test Charter) como salida?",
    back: "Se produce durante la actividad de DISEÑO DE LA PRUEBA (4. Diseño de prueba), junto con los casos de prueba, los ítems de cobertura y los requisitos de datos y de entorno."
  },
  {
    id: "fc-1-19",
    chapter: 1,
    tag: "Ficha Cap. 1 — Caso Práctico Error/Defecto/Falla",
    isWeakness: false,
    front: "Un teléfono distrae a un programador y este codifica mal el límite superior. Al ejecutar el sistema, el campo acepta valores inválidos. Clasifica los 4 elementos.",
    back: "• Distracción por el teléfono → Causa Raíz.\n• Equivocación mental del programador → Error.\n• Límite superior mal codificado en el script/código → Defecto.\n• Que el sistema acepte entradas no válidas al ejecutarse → Falla."
  },
  {
    id: "fc-2-12",
    chapter: 2,
    tag: "Ficha Cap. 2 — Formas de Prueba de Aceptación",
    isWeakness: false,
    front: "¿Cuáles son las 4 formas principales de Pruebas de Aceptación según ISTQB v4.0?",
    back: "1. Pruebas de aceptación del usuario (UAT): Centradas en la validación para el negocio y usuarios.\n2. Pruebas de aceptación operativa (OAT): Validan copias de seguridad/restauración, recuperación ante desastres, gestión de usuarios y mantenimiento.\n3. Pruebas de aceptación contractual y regulatoria: Verifican criterios de contrato o leyes.\n4. Pruebas Alfa y Beta: Alfa se realiza en la ubicación del desarrollador; Beta la realizan los clientes en sus propias ubicaciones."
  },
  {
    id: "fc-2-13",
    chapter: 2,
    tag: "Ficha Cap. 2 — Estrategias de Integración",
    isWeakness: false,
    front: "¿En qué se diferencian las pruebas de Integración de Componentes de las pruebas de Integración de Sistemas?",
    back: "• Integración de Componentes: Prueba las interfaces e interacciones entre componentes/módulos internos (usando estrategias bottom-up, top-down o big-bang), realizada a menudo por desarrolladores.\n• Integración de Sistemas: Prueba las interfaces del sistema completo con otros sistemas externos o microservicios de terceros en un entorno lo más parecido posible al operativo."
  },
  {
    id: "fc-2-14",
    chapter: 2,
    tag: "Ejercicio Modelo A P14 — Confirmación vs Regresión",
    isWeakness: true,
    front: "Si en la Ejecución 1: CP1 Falló, CP2 Pasó, CP3 Falló. Luego se corrige el código y en la Ejecución 2 se corren CP1, CP2 y CP3: ¿cuál es Confirmación y cuál es Regresión?",
    back: "En la Ejecución 2:\n• CP1 y CP3 son Pruebas de CONFIRMACIÓN (porque habían fallado en la Ejecución 1).\n• CP2 es Prueba de REGRESIÓN (porque había pasado en la Ejecución 1 y se repite para asegurar que la corrección no lo rompió)."
  },
  {
    id: "fc-3-10",
    chapter: 3,
    tag: "Ficha Cap. 3 — Defectos Típicos en Estáticas",
    isWeakness: false,
    front: "Menciona ejemplos de defectos típicos detectados por pruebas estáticas en Requisitos, Diseño, Código y Seguridad.",
    back: "• Requisitos: Inconsistencias, ambigüedades, contradicciones, omisiones.\n• Diseño: Estructuras de base de datos ineficientes, alto acoplamiento, baja cohesión (mala modularidad).\n• Código: Variables no declaradas o no utilizadas, código inalcanzable/muerto, código duplicado.\n• Seguridad: Vulnerabilidades como desbordamientos de búfer (buffer overflows)."
  },
  {
    id: "fc-3-11",
    chapter: 3,
    tag: "Ficha Cap. 3 — Técnicas de Revisión Individual",
    isWeakness: false,
    front: "¿Qué técnicas de revisión pueden aplicar los revisores durante la actividad 3 (Revisión individual)?",
    back: "Pueden aplicar técnicas como:\n• Revisión ad hoc (sin guía estructurada).\n• Revisión basada en listas de comprobación (checklist).\n• Revisión basada en escenarios y ejecuciones en seco.\n• Revisión basada en roles o basada en perspectivas (evaluar desde el punto de vista del usuario, operaciones, tester, etc.)."
  },
  {
    id: "fc-4-17",
    chapter: 4,
    tag: "Ejercicio K3 (Modelo A P21) — Cobertura AVF",
    isWeakness: true,
    front: "Un sistema de notas tiene 6 rangos: 0-50, 51-60, 61-70, 71-80, 81-90, 91-100. Si ejecutas 6 casos (50, 60, 70, 80, 81, 91), ¿qué % de cobertura BVA de 2 valores lograste?",
    back: "• Cada uno de los 6 rangos tiene 2 valores frontera (mínimo y máximo): 0, 50, 51, 60, 61, 70, 71, 80, 81, 90, 91, 100 → Total = 12 valores frontera.\n• Tus 6 casos cubren 6 de los 12 valores frontera.\n• Cobertura = (6 / 12) × 100% = 50%."
  },
  {
    id: "fc-4-18",
    chapter: 4,
    tag: "Ejercicio K3 (Modelo B P20) — Lavado de Coches",
    isWeakness: true,
    front: "Cada 10º lavado (10, 20, 30...) da 10% de descuento, y cada 20º lavado (20, 40...) da 40% adicional (50% total). ¿Qué 3 valores cubren el 100% de particiones válidas?",
    back: "Las 3 particiones de equivalencia válidas son:\n1. Sin descuento (no múltiplo de 10) → ej. 19.\n2. Con 10% de descuento (múltiplo de 10 pero no de 20) → ej. 30 (o 10).\n3. Con 50% de descuento (múltiplo de 20) → ej. 20 (o 40).\nConjunto ganador: {19, 20, 30}."
  },
  {
    id: "fc-4-19",
    chapter: 4,
    tag: "Ejercicio K2 (Modelo B P19) — Tabla de Decisión vs Rama",
    isWeakness: false,
    front: "¿Cuál es la diferencia fundamental entre la Prueba de Tabla de Decisión y la Prueba de Rama?",
    back: "• En la Tabla de Decisión (Caja Negra), los casos de prueba se derivan de la especificación de reglas de negocio y son INDEPENDIENTES de cómo se implemente el software.\n• En la Prueba de Rama (Caja Blanca), los casos de prueba se derivan del flujo de control del código y SOLO pueden crearse después del diseño o la implementación del código."
  },
  {
    id: "fc-4-20",
    chapter: 4,
    tag: "Ejercicio K2 (Modelo B P24) — Intersección de Cobertura",
    isWeakness: false,
    front: "Ejecutas dos casos de prueba sobre el mismo código: T1 logra 40% de cobertura de sentencias y T2 logra 65%. ¿Qué debe ser necesariamente cierto?",
    back: "Como la cobertura máxima posible es 100% y 40% + 65% = 105% > 100%, existe AL MENOS UNA SENTENCIA (como mínimo el 5% del código) que debe haber sido ejecutada TANTO por T1 como por T2."
  },
  {
    id: "fc-5-17",
    chapter: 5,
    tag: "Ejercicio K3 (Modelo B P31) — Estimación por Proporciones",
    isWeakness: true,
    front: "4 proyectos históricos sumaron 3.600.000 en desarrollo (media 900.000) y 360.000 en pruebas (media 90.000). Si el nuevo proyecto estima 800.000 en desarrollo, ¿cuál es el esfuerzo de prueba?",
    back: "1. Proporción histórica Prueba / Desarrollo = 90.000 / 900.000 = 1/10 (10%).\n2. Esfuerzo de prueba estimado = 10% de 800.000 = 80.000."
  },
  {
    id: "fc-5-18",
    chapter: 5,
    tag: "Ejercicio K3 (Modelo B P32) — Priorización Flujo de Compra",
    isWeakness: true,
    front: "Dependencias: BUSCAR → VER → AÑADIR → PEDIDO. Producto B tiene AÑADIR con Prioridad 1, y Producto A tiene prioridades 4 y 3. ¿Cuál es el orden de los primeros 4 casos?",
    back: "Como el caso de mayor prioridad global (Prio 1) es 'AÑADIR producto B', primero ejecutamos la cadena completa del Producto B:\n1.º BUSCAR producto B (CP2)\n2.º VER producto B (CP4)\n3.º AÑADIR producto B (CP6)\nY antes de hacer el PEDIDO (Prio 5, la más baja), empezamos la cadena del Producto A:\n4.º BUSCAR producto A (CP1)."
  },
  {
    id: "fc-5-19",
    chapter: 5,
    tag: "Ficha Cap. 5 — Gráficos de Quemado (Burndown)",
    isWeakness: false,
    front: "¿Qué herramienta visual utiliza un equipo ágil para mostrar la cantidad de trabajo completado y el trabajo total restante en una iteración?",
    back: "El Gráfico de Quemado (Burndown Chart), que se actualiza diariamente durante el sprint."
  },
  {
    id: "fc-6-05",
    chapter: 6,
    tag: "Trampa de Examen (Modelo A P40 y Modelo B P40)",
    isWeakness: true,
    front: "En automatización de pruebas, distingue esta ventaja real de este riesgo real frecuentes en el examen:",
    back: "• VENTAJA REAL: Aportar medidas de cobertura que son demasiado complicadas de obtener para los seres humanos.\n• RIESGO REAL: Es posible que no se dediquen suficientes esfuerzos al mantenimiento del producto de prueba (testware / scripts automatizados)."
  }
];

