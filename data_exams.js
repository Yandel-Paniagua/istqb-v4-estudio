window.ISTQB_EXAMS_DATA = {
  "simulators": [
    {
      "id": "sim-1",
      "title": "Simulador 1: Examen Oficial Modelo A (Español)",
      "subtitle": "40 preguntas oficiales ISTQB CTFL v4.0 • Distribución estándar (8-6-4-11-9-2)",
      "badge": "100% Oficial en Español",
      "hasTranslatedCD": false,
      "description": "Examen oficial Modelo A completo en español con explicación detallada de por qué es correcta la respuesta y por qué es incorrecta cada una de las demás opciones.",
      "questions": [
        {
          "id": "A-01",
          "num": 1,
          "chapter": 1,
          "lo": "FL-1.1.1",
          "kLevel": "K1",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de los siguientes enunciados describe un objetivo de prueba válido?",
          "options": {
            "a": "Demostrar que no hay defectos no corregidos en el sistema sujeto a prueba.",
            "b": "Demostrar que no habrá fallos después de la implementación del sistema en producción.",
            "c": "Reducir el nivel de riesgo del objeto de prueba y generar confianza en el nivel de calidad.",
            "d": "Comprobar que no existen combinaciones de entradas no probadas."
          },
          "correct": [
            "c"
          ],
          "explanation": "Reducir el nivel de riesgo de una calidad inadecuada y generar confianza en el objeto de prueba son dos objetivos oficiales de las pruebas (Sección 1.1.1).",
          "optionExplanations": {
            "a": "Incorrecta: Contradice el Principio 1 ('Las pruebas muestran la presencia, no la ausencia de defectos'). No es posible demostrar que no quedan defectos.",
            "b": "Incorrecta: Contradice el Principio 1 y 7; nunca se puede garantizar al 100% que no ocurrirán fallos en producción.",
            "c": "Correcta: Según el Syllabus (1.1.1), las pruebas reducen el nivel de riesgo de una calidad de software inadecuada y ayudan a generar confianza en la calidad del objeto de prueba.",
            "d": "Incorrecta: Contradice el Principio 2 ('Las pruebas exhaustivas son imposibles'). Probar todas las combinaciones de entradas es inviable salvo en casos triviales."
          }
        },
        {
          "id": "A-02",
          "num": 2,
          "chapter": 1,
          "lo": "FL-1.2.1",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes opciones muestra un ejemplo de actividades de prueba que contribuyen al éxito?",
          "options": {
            "a": "La participación de probadores durante varias actividades del ciclo de vida del desarrollo de software (CVDS) ayudará a detectar defectos en los productos de trabajo.",
            "b": "Los probadores intentan no molestar a los desarrolladores mientras codifican, para que los desarrolladores escriban mejor código.",
            "c": "Los probadores que colaboran con los usuarios finales ayudan a mejorar la calidad de los informes de defectos durante la integración de componentes y la prueba de sistema.",
            "d": "Los probadores certificados diseñarán casos de prueba mucho mejores que los probadores no certificados."
          },
          "correct": [
            "a"
          ],
          "explanation": "Es importante que los probadores participen desde el inicio del CVDS (revisiones de requisitos, diseño, etc.) para detectar defectos tempranos en los productos de trabajo.",
          "optionExplanations": {
            "a": "Correcta: Participar en diversas actividades del CVDS permite evaluar productos de trabajo y detectar defectos de forma temprana y rentable.",
            "b": "Incorrecta: Aislar a los probadores de los desarrolladores perjudica la comunicación y contradice el enfoque de equipo completo.",
            "c": "Incorrecta: En la integración de componentes los usuarios finales no suelen participar (allí se colabora con desarrolladores/arquitectos) ni su función es redactar informes técnicos de defectos de integración.",
            "d": "Incorrecta: La certificación acredita conocimientos del estándar, pero por sí sola no garantiza automáticamente diseñar mejores casos de prueba en todos los contextos."
          }
        },
        {
          "id": "A-03",
          "num": 3,
          "chapter": 1,
          "lo": "FL-1.3.1",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "Le han asignado como probador a un equipo que produce un nuevo sistema de forma incremental. Usted se ha dado cuenta de que no se han realizado cambios en los casos de prueba de regresión existentes durante varias iteraciones y no se han identificado nuevos defectos de regresión. Su jefe está contento, pero usted no. ¿Qué principio de prueba explica su escepticismo?",
          "options": {
            "a": "Las pruebas se desgastan.",
            "b": "Falacia de ausencia de errores.",
            "c": "Los defectos se agrupan.",
            "d": "Las pruebas exhaustivas son imposibles."
          },
          "correct": [
            "a"
          ],
          "explanation": "El principio 5 ('Las pruebas se desgastan' o paradoja del pesticida) indica que si las mismas pruebas se repiten muchas veces sin modificarse ante un sistema que crece, pierden eficacia para encontrar defectos nuevos.",
          "optionExplanations": {
            "a": "Correcta: Si los mismos casos de prueba se repiten iteración tras iteración sin actualizarse para las nuevas partes del sistema, se vuelven ineficaces para detectar nuevos defectos.",
            "b": "Incorrecta: La falacia de la ausencia de defectos se refiere a que un sistema sin defectos aún puede no satisfacer las necesidades del usuario (validación).",
            "c": "Incorrecta: La agrupación de defectos se refiere a que pocos módulos concentran la mayoría de los defectos.",
            "d": "Incorrecta: Este principio explica por qué no podemos probar todas las entradas posibles, no por qué una suite fija deja de hallar defectos."
          }
        },
        {
          "id": "A-04",
          "num": 4,
          "chapter": 1,
          "lo": "FL-1.4.1",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "Usted trabaja en un equipo que desarrolla una aplicación móvil para realizar pedidos de comida. En la iteración actual, el equipo decidió implementar la funcionalidad de pago. ¿Cuál de las siguientes actividades forma parte del análisis de prueba?",
          "options": {
            "a": "Estimar que la prueba de la integración con el servicio de pago llevará 8 días-persona.",
            "b": "Decidir que el equipo debe probar si es posible compartir correctamente el pago entre muchos usuarios.",
            "c": "Utilizar el análisis del valor frontera (AVF) para obtener los datos de prueba de los casos de prueba que comprueban la correcta tramitación del pago para el importe mínimo permitido a pagar.",
            "d": "Analizar la discrepancia entre el resultado real y el resultado esperado tras ejecutar un caso de prueba que comprueba el proceso de pago con tarjeta de crédito, e informar de un defecto."
          },
          "correct": [
            "b"
          ],
          "explanation": "El análisis de prueba responde a '¿qué probar?' identificando y definiendo condiciones de prueba. Decidir probar si se puede compartir el pago entre varios usuarios es definir una condición de prueba.",
          "optionExplanations": {
            "a": "Incorrecta: Estimar el esfuerzo de prueba pertenece a la actividad de Planificación de la prueba.",
            "b": "Correcta: Definir qué situación o característica se debe probar (condición de prueba) es la esencia del Análisis de la prueba.",
            "c": "Incorrecta: Aplicar técnicas como AVF para derivar elementos de cobertura y casos de prueba pertenece al Diseño de la prueba.",
            "d": "Incorrecta: Comparar resultados reales con esperados tras ejecutar y reportar un defecto pertenece a la Ejecución de la prueba."
          }
        },
        {
          "id": "A-05",
          "num": 5,
          "chapter": 1,
          "lo": "FL-1.4.2",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Qué factores tienen una influencia SIGNIFICATIVA en el enfoque de prueba?\nI. El ciclo de vida del desarrollo de software (CVDS).\nII. El número de defectos detectados en proyectos anteriores.\nIII. Los riesgos de producto identificados.\nIV. Nuevos requisitos normativos que obligan a realizar pruebas formales de caja blanca.\nV. La configuración del entorno de prueba.",
          "options": {
            "a": "I, II tienen una influencia significativa.",
            "b": "I, III, IV tienen una influencia significativa.",
            "c": "II, IV, V tienen una influencia significativa.",
            "d": "III, V tienen una influencia significativa."
          },
          "correct": [
            "b"
          ],
          "explanation": "El CVDS (I), los riesgos de producto identificados (III) y los requisitos normativos/regulatorios (IV) son factores contextuales clave que determinan cómo se planifica y ejecuta el proceso de prueba (Sección 1.4.2).",
          "optionExplanations": {
            "a": "Incorrecta: El número de defectos de proyectos anteriores (II) puede servir para estimaciones históricas si los proyectos son muy similares, pero no define de forma general el proceso de prueba tanto como III y IV.",
            "b": "Correcta: El CVDS (I), los riesgos de producto (III) y las regulaciones obligatorias (IV) influyen directamente en el proceso y enfoque de prueba.",
            "c": "Incorrecta: Ni II ni V son los factores contextuales determinantes frente al CVDS y los riesgos de producto.",
            "d": "Incorrecta: Omite el CVDS (I) y los requisitos normativos (IV)."
          }
        },
        {
          "id": "A-06",
          "num": 6,
          "chapter": 1,
          "lo": "FL-1.4.5",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuáles DOS de las siguientes tareas pertenecen PRINCIPALMENTE a un rol de prueba?",
          "options": {
            "a": "Configurar entornos de prueba.",
            "b": "Mantener el backlog del producto.",
            "c": "Diseñar soluciones para nuevos requisitos.",
            "d": "Crear el plan de prueba.",
            "e": "Informar sobre la cobertura alcanzada."
          },
          "correct": [
            "a",
            "e"
          ],
          "explanation": "El rol de prueba (Tester) se encarga de los aspectos técnicos e ingenieriles (análisis, diseño, implementación y ejecución), lo que incluye configurar el entorno de prueba y medir/informar la cobertura alcanzada.",
          "optionExplanations": {
            "a": "Correcta: Configurar y verificar el entorno de prueba es una tarea técnica de implementación propia del rol de prueba.",
            "b": "Incorrecta: Mantener el backlog del producto es responsabilidad del Product Owner (representante de negocio).",
            "c": "Incorrecta: Diseñar soluciones técnicas para los requisitos pertenece al equipo de desarrollo/arquitectura.",
            "d": "Incorrecta: Crear el plan de prueba pertenece principalmente al rol de Gestión de Pruebas (Test Manager / Líder), no al rol de prueba.",
            "e": "Correcta: Medir y reportar la cobertura técnica alcanzada forma parte de las actividades técnicas del rol de prueba."
          }
        },
        {
          "id": "A-07",
          "num": 7,
          "chapter": 1,
          "lo": "FL-1.5.1",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuáles de las siguientes competencias (I-V) son las MÁS importantes para un probador?\nI. Tener conocimiento del dominio.\nII. Crear una visión del producto.\nIII. Ser un buen jugador de equipo.\nIV. Planificar y organizar el trabajo del equipo.\nV. Pensamiento crítico.",
          "options": {
            "a": "II y IV son importantes.",
            "b": "I, III y V son importantes.",
            "c": "I, II y V son importantes.",
            "d": "III y IV son importantes."
          },
          "correct": [
            "b"
          ],
          "explanation": "El conocimiento del dominio (I), el trabajo en equipo/comunicación (III) y el pensamiento crítico (V) son habilidades genéricas esenciales del probador (Sección 1.5.1).",
          "optionExplanations": {
            "a": "Incorrecta: Crear la visión del producto (II) es tarea del propietario del producto/negocio, y planificar el trabajo del equipo (IV) es tarea de gestión.",
            "b": "Correcta: I (dominio), III (trabajo en equipo) y V (pensamiento crítico) están listadas explícitamente como habilidades esenciales del probador.",
            "c": "Incorrecta: Incluye II (visión del producto), que pertenece a negocio.",
            "d": "Incorrecta: Incluye IV (organizar el trabajo del equipo), que es gestión."
          }
        },
        {
          "id": "A-08",
          "num": 8,
          "chapter": 1,
          "lo": "FL-1.5.2",
          "kLevel": "K1",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Cómo se manifiesta el enfoque de equipo completo en las interacciones entre los probadores y los representantes de negocio?",
          "options": {
            "a": "Los representantes de negocio deciden sobre los enfoques de automatización de la prueba.",
            "b": "Los probadores ayudan a los representantes de negocio a definir la estrategia de prueba.",
            "c": "Los representantes de negocio no forman parte del enfoque de equipo completo.",
            "d": "Los probadores ayudan a los representantes de negocio a crear pruebas de aceptación adecuadas."
          },
          "correct": [
            "d"
          ],
          "explanation": "En el enfoque de equipo completo (Sección 1.5.2), los probadores trabajan estrechamente con los representantes de negocio para ayudarles a crear pruebas de aceptación adecuadas.",
          "optionExplanations": {
            "a": "Incorrecta: Los enfoques de automatización se deciden junto con los desarrolladores y técnicos, no por los representantes de negocio.",
            "b": "Incorrecta: La estrategia de prueba se acuerda con todo el equipo (especialmente con los desarrolladores).",
            "c": "Incorrecta: Los representantes de negocio son parte esencial del enfoque de equipo completo.",
            "d": "Correcta: Es la interacción directa descrita en el Syllabus entre probadores y representantes de negocio."
          }
        },
        {
          "id": "A-09",
          "num": 9,
          "chapter": 2,
          "lo": "FL-2.1.2",
          "kLevel": "K1",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "Considere la siguiente regla: «para cada actividad del CVDS existe una actividad de prueba correspondiente». ¿En qué modelos del CVDS se cumple esta regla?",
          "options": {
            "a": "Sólo en modelos de CVDS secuenciales.",
            "b": "Sólo en modelos de CVDS iterativos.",
            "c": "Sólo en modelos de CVDS iterativos e incrementales.",
            "d": "En modelos de CVDS secuenciales, incrementales e iterativos."
          },
          "correct": [
            "d"
          ],
          "explanation": "Es una buena práctica universal de las pruebas que se aplica a todos los modelos de ciclo de vida del desarrollo de software (Sección 2.1.2).",
          "optionExplanations": {
            "a": "Incorrecta: No es exclusiva de los modelos secuenciales.",
            "b": "Incorrecta: También aplica a secuenciales e incrementales.",
            "c": "Incorrecta: También aplica a los secuenciales.",
            "d": "Correcta: Según la sección 2.1.2, esta regla es una buena práctica aplicable independientemente del modelo de CVDS elegido."
          }
        },
        {
          "id": "A-10",
          "num": 10,
          "chapter": 2,
          "lo": "FL-2.1.3",
          "kLevel": "K1",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes afirmaciones describe MEJOR el enfoque de desarrollo guiado por pruebas de aceptación (ATDD / DGPA)?",
          "options": {
            "a": "En ATDD, los criterios de aceptación suelen crearse basándose en el formato dado/cuando/entonces.",
            "b": "En ATDD, los casos de prueba se crean principalmente en la prueba de componente y están orientados al código.",
            "c": "En ATDD, se crean pruebas basadas en criterios de aceptación para impulsar el desarrollo del software relacionado.",
            "d": "En ATDD, las pruebas se basan en el comportamiento deseado del software, lo que facilita que los miembros del equipo las entiendan."
          },
          "correct": [
            "c"
          ],
          "explanation": "En ATDD (Acceptance Test-Driven Development), las pruebas se derivan de los criterios de aceptación antes de implementar la funcionalidad para guiar el desarrollo.",
          "optionExplanations": {
            "a": "Incorrecta: El formato Dado/Cuando/Entonces se asocia típicamente con BDD (Behavior-Driven Development).",
            "b": "Incorrecta: Crear pruebas en el nivel de componente orientadas al código describe a TDD (Test-Driven Development).",
            "c": "Correcta: ATDD define y crea pruebas a partir de los criterios de aceptación antes de escribir el código para dirigir el desarrollo.",
            "d": "Incorrecta: Describe BDD (Desarrollo Guiado por el Comportamiento)."
          }
        },
        {
          "id": "A-11",
          "num": 11,
          "chapter": 2,
          "lo": "FL-2.1.5",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes opciones NO es un ejemplo del enfoque de desplazamiento hacia la izquierda (shift-left)?",
          "options": {
            "a": "Revisar los requisitos del usuario antes de que sean aceptados formalmente por las partes interesadas.",
            "b": "Escribir una prueba de componente antes de que se escriba el código correspondiente.",
            "c": "Ejecutar una prueba de eficiencia de rendimiento para un componente durante la prueba de componente.",
            "d": "Escribir un script de prueba antes de establecer el proceso de gestión de la configuración."
          },
          "correct": [
            "d"
          ],
          "explanation": "Los scripts de prueba deben estar sujetos a la gestión de la configuración; escribirlos sin haber establecido la gestión de configuración no es shift-left sino una mala práctica.",
          "optionExplanations": {
            "a": "Incorrecta (sí es shift-left): Revisar especificaciones temprano es un ejemplo clásico de shift-left.",
            "b": "Incorrecta (sí es shift-left): TDD (escribir la prueba antes del código) es una práctica de shift-left.",
            "c": "Incorrecta (sí es shift-left): Realizar pruebas no funcionales (como rendimiento) desde el nivel de componentes está listado explícitamente en el Syllabus (2.1.5) como ejemplo de shift-left.",
            "d": "Correcta (NO es shift-left): No tiene sentido redactar scripts de prueba antes de configurar el control de versiones/gestión de configuración que debe administrarlos."
          }
        },
        {
          "id": "A-12",
          "num": 12,
          "chapter": 2,
          "lo": "FL-2.1.6",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de los siguientes argumentos debería utilizar para convencer a su jefe de que organice retrospectivas al final de cada ciclo de entrega?",
          "options": {
            "a": "Las retrospectivas son muy populares hoy en día y los clientes las apreciarían si las añadiéramos a nuestros procesos.",
            "b": "Organizar retrospectivas ahorrará dinero a la organización porque sin ellas los representantes de los usuarios finales no proporcionan retroalimentación inmediata sobre el producto.",
            "c": "Las debilidades del proceso identificadas durante la retrospectiva pueden analizarse y servir como una lista de tareas para el programa de mejora continua del proceso de la organización.",
            "d": "Las retrospectivas abarcan cinco valores que incluyen el coraje y el respeto, que son cruciales para mantener la mejora continua en la organización."
          },
          "correct": [
            "c"
          ],
          "explanation": "El propósito de las retrospectivas (Sección 2.1.6) es identificar qué funcionó y qué no en el proceso para generar acciones de mejora continua.",
          "optionExplanations": {
            "a": "Incorrecta: Adoptar una práctica solo por moda no es un argumento técnico válido.",
            "b": "Incorrecta: Las retrospectivas evalúan y mejoran los PROCESOS del equipo, no sirven para recoger feedback de los usuarios sobre el producto (eso se hace en revisiones de entrega/demos).",
            "c": "Correcta: En las retrospectivas se identifican debilidades del proceso y se definen acciones de seguimiento para la mejora continua.",
            "d": "Incorrecta: Coraje y respeto son dos de los cinco valores de Extreme Programming (XP), no de las retrospectivas."
          }
        },
        {
          "id": "A-13",
          "num": 13,
          "chapter": 2,
          "lo": "FL-2.2.1",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Qué tipos de fallos (1-4) se ajustan MEJOR a qué niveles de prueba (A-D)?\n1. Fallos en el comportamiento del sistema ya que se desvía de las necesidades de negocio del usuario.\n2. Fallos en la comunicación entre componentes.\n3. Fallos en la lógica de un módulo.\n4. Fallos en reglas de negocio no implementadas correctamente.\n\nA. Prueba de componente.\nB. Prueba de integración de componentes.\nC. Prueba de sistema.\nD. Prueba de aceptación.",
          "options": {
            "a": "1D, 2B, 3A, 4C",
            "b": "1D, 2B, 3C, 4A",
            "c": "1B, 2A, 3D, 4C",
            "d": "1C, 2B, 3A, 4D"
          },
          "correct": [
            "a"
          ],
          "explanation": "1 (necesidades de negocio del usuario) → D (Aceptación); 2 (comunicación entre componentes) → B (Integración de componentes); 3 (lógica de un módulo aislado) → A (Componente); 4 (reglas de negocio del sistema) → C (Sistema).",
          "optionExplanations": {
            "a": "Correcta: Empareja exactamente el objeto de prueba y los defectos típicos de los 4 niveles indicados.",
            "b": "Incorrecta: Asigna la lógica de un módulo a prueba de sistema (3C) y las reglas de negocio globales a componente (4A).",
            "c": "Incorrecta: Emparejamientos incorrectos en 1, 2 y 3.",
            "d": "Incorrecta: Invierte Prueba de Sistema y Prueba de Aceptación entre 1 y 4."
          }
        },
        {
          "id": "A-14",
          "num": 14,
          "chapter": 2,
          "lo": "FL-2.2.3",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "Usted está probando una historia de usuario con tres criterios de aceptación: CA1, CA2 y CA3. CA1 está cubierto por el caso de prueba CP1, CA2 por CP2 y CA3 por CP3. El historial de ejecución de pruebas tuvo tres ejecuciones en tres versiones consecutivas del software:\n• Ejecución 1: (1) CP1 Falló | (2) CP2 Pasó | (3) CP3 Falló\n• Ejecución 2: (4) CP1 Pasó  | (5) CP2 Falló | (6) CP3 Falló\n• Ejecución 3: (7) CP1 Pasó  | (8) CP2 Pasó  | (9) CP3 Pasó\nLas pruebas se repiten una vez que se le informa de que todos los defectos encontrados en la ejecución de prueba se han corregido y hay disponible una nueva versión del software. ¿Cuál de las pruebas anteriores se ejecuta como prueba de REGRESIÓN?",
          "options": {
            "a": "Sólo 4, 7, 8, 9",
            "b": "Sólo 5, 7",
            "c": "Sólo 4, 6, 8, 9",
            "d": "Sólo 5, 6"
          },
          "correct": [
            "b"
          ],
          "explanation": "Una prueba es de CONFIRMACIÓN cuando vuelve a ejecutar un caso que FALLÓ en la ejecución inmediatamente anterior, y es de REGRESIÓN cuando vuelve a ejecutar un caso que había PASADO en la ejecución inmediatamente anterior.",
          "optionExplanations": {
            "a": "Incorrecta: (4), (8) y (9) son pruebas de confirmación porque habían fallado en la ejecución previa.",
            "b": "Correcta: En la Ejecución 1 sólo CP2 pasó (2), por lo que en la Ejecución 2 el caso (5) es prueba de regresión (mientras que 4 y 6 son confirmación). En la Ejecución 2 sólo CP1 pasó (4), por lo que en la Ejecución 3 el caso (7) es prueba de regresión (mientras que 8 y 9 son confirmación).",
            "c": "Incorrecta: 4, 6, 8 y 9 son precisamente las pruebas de confirmación.",
            "d": "Incorrecta: (6) es una prueba de confirmación porque CP3 había fallado en (3)."
          }
        },
        {
          "id": "A-15",
          "num": 15,
          "chapter": 3,
          "lo": "FL-3.1.2",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes opciones NO es una ventaja de las pruebas estáticas?",
          "options": {
            "a": "Tener una gestión de defectos menos costosa debido a la facilidad de detectar defectos más adelante en el CVDS.",
            "b": "Corregir los defectos detectados durante las pruebas estáticas suele ser mucho menos costoso que corregir los defectos detectados durante las pruebas dinámicas.",
            "c": "Encontrar defectos de codificación que podrían no haberse encontrado realizando únicamente pruebas dinámicas.",
            "d": "Detectar lagunas e inconsistencias en los requisitos."
          },
          "correct": [
            "a"
          ],
          "explanation": "Detectar defectos MÁS ADELANTE (más tarde) en el CVDS es mucho MÁS costoso, no menos costoso. El beneficio de las pruebas estáticas es detectarlos TEMPRANO.",
          "optionExplanations": {
            "a": "Correcta (es la afirmación FALSA): Detectar defectos tarde en el ciclo de vida aumenta drásticamente los costos; las pruebas estáticas buscan detectarlos temprano.",
            "b": "Incorrecta: Es una ventaja real de las pruebas estáticas.",
            "c": "Incorrecta: Es una ventaja real (ej. código inalcanzable o desviaciones de estándares).",
            "d": "Incorrecta: Es una ventaja real de revisar los requisitos estáticamente."
          }
        },
        {
          "id": "A-16",
          "num": 16,
          "chapter": 3,
          "lo": "FL-3.2.1",
          "kLevel": "K1",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de los siguientes es un beneficio de la retroalimentación temprana y frecuente?",
          "options": {
            "a": "Mejora el proceso de prueba para futuros proyectos.",
            "b": "Obliga a los clientes a priorizar sus requisitos en función de los riesgos acordados.",
            "c": "Proporciona una medida para la calidad de los cambios.",
            "d": "Ayuda a evitar malentendidos sobre los requisitos."
          },
          "correct": [
            "d"
          ],
          "explanation": "La retroalimentación temprana y frecuente de las partes interesadas permite detectar y evitar malentendidos sobre los requisitos desde el inicio (Sección 3.2.1).",
          "optionExplanations": {
            "a": "Incorrecta: Mejorar el proceso para futuros proyectos es un beneficio de las retrospectivas o de las métricas de inspección.",
            "b": "Incorrecta: La retroalimentación no 'obliga' a los clientes a priorizar por riesgos.",
            "c": "Incorrecta: La retroalimentación de los interesados no es una métrica formal de calidad de cambios.",
            "d": "Correcta: Según el Syllabus (3.2.1), la retroalimentación temprana y frecuente previene malentendidos sobre los requisitos."
          }
        },
        {
          "id": "A-17",
          "num": 17,
          "chapter": 3,
          "lo": "FL-3.2.4",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "Las revisiones que se utilizan en su organización tienen los siguientes atributos:\n• Existe el rol de un escriba.\n• El propósito principal es evaluar la calidad.\n• La reunión de revisión es dirigida por el autor del producto de trabajo.\n• Existe preparación individual.\n• Se produce un informe de revisión.\n¿Cuál de los siguientes tipos de revisión es MÁS probable que se esté utilizando?",
          "options": {
            "a": "Revisión informal.",
            "b": "Revisión guiada (Recorrido / Walkthrough).",
            "c": "Revisión técnica.",
            "d": "Inspección."
          },
          "correct": [
            "b"
          ],
          "explanation": "La pista definitiva es que 'la reunión de revisión es dirigida por el autor del producto de trabajo'. Eso define exclusivamente a la Revisión Guiada / Recorrido (Walkthrough).",
          "optionExplanations": {
            "a": "Incorrecta: Una revisión informal no suele exigir escriba, preparación individual estructurada ni informe de revisión.",
            "b": "Correcta: En una Revisión Guiada (Walkthrough), el autor dirige la reunión de revisión y el objetivo principal incluye evaluar la calidad y educar a los participantes.",
            "c": "Incorrecta: En la revisión técnica la reunión es dirigida por un moderador capacitado, no por el autor.",
            "d": "Incorrecta: En la inspección el autor tiene expresamente prohibido actuar como líder/moderador de la reunión."
          }
        },
        {
          "id": "A-18",
          "num": 18,
          "chapter": 3,
          "lo": "FL-3.2.5",
          "kLevel": "K1",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de estas afirmaciones NO es un factor que contribuya al éxito de las revisiones?",
          "options": {
            "a": "Los participantes deben dedicar el tiempo adecuado a la revisión.",
            "b": "Dividir grandes productos de trabajo en pequeñas partes para que el esfuerzo necesario sea menos intenso.",
            "c": "Los participantes deben evitar comportamientos que puedan indicar aburrimiento, exasperación u hostilidad hacia otros participantes.",
            "d": "Los fallos encontrados deben ser reconocidos, apreciados y manejados objetivamente."
          },
          "correct": [
            "d"
          ],
          "explanation": "Trampa terminológica clásica: Durante las revisiones (pruebas estáticas) NO se pueden encontrar 'fallos' (fallas), porque el software no se ejecuta; sólo se encuentran anomalías o defectos.",
          "optionExplanations": {
            "a": "Incorrecta: Dedicar tiempo adecuado sí es un factor de éxito.",
            "b": "Incorrecta: Dividir productos grandes en partes pequeñas evita la pérdida de concentración de los revisores (sí es factor de éxito).",
            "c": "Incorrecta: Evitar comportamientos hostiles o de aburrimiento sí es un factor de éxito.",
            "d": "Correcta (NO es un factor válido): En las revisiones se encuentran defectos/anomalías, nunca 'fallos' (los fallos solo ocurren en ejecución dinámica)."
          }
        },
        {
          "id": "A-19",
          "num": 19,
          "chapter": 4,
          "lo": "FL-4.1.1",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes opciones es una característica de las técnicas de prueba basadas en la experiencia?",
          "options": {
            "a": "Los casos de prueba se crean a partir de información de diseño detallada.",
            "b": "Los elementos probados dentro de la sección de código de interfaz se utilizan para medir la cobertura.",
            "c": "Las técnicas dependen en gran medida del conocimiento que tenga el probador del software y del dominio de negocio.",
            "d": "Los casos de prueba se utilizan para identificar desviaciones con respecto a los requisitos."
          },
          "correct": [
            "c"
          ],
          "explanation": "Las técnicas basadas en la experiencia aprovechan el conocimiento y la experiencia de los probadores sobre el software, su entorno, el dominio de negocio y los defectos probables.",
          "optionExplanations": {
            "a": "Incorrecta: Describe una técnica de caja blanca.",
            "b": "Incorrecta: Medir cobertura de elementos de código describe una técnica de caja blanca.",
            "c": "Correcta: Es la definición fundamental de las técnicas basadas en la experiencia (Sección 4.1).",
            "d": "Incorrecta: Identificar desviaciones respecto a los requisitos describe a las técnicas de caja negra."
          }
        },
        {
          "id": "A-20",
          "num": 20,
          "chapter": 4,
          "lo": "FL-4.2.1",
          "kLevel": "K3",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "Está probando un formulario simplificado de búsqueda de apartamentos que sólo tiene dos criterios de búsqueda:\n• piso (con tres opciones posibles: planta baja; primer piso; segundo piso o superior)\n• tipo de jardín (con tres opciones posibles: sin jardín; jardín pequeño; jardín grande)\nSólo los apartamentos de la planta baja tienen jardín. El formulario tiene un mecanismo de validación incorporado que no le permitirá utilizar criterios de búsqueda que violen esta regla. Cada prueba tiene dos valores de entrada: piso y tipo de jardín. Quiere aplicar la partición de equivalencia (EP) para cubrir cada piso y cada tipo de jardín en sus pruebas. ¿Cuál es el número MÍNIMO de casos de prueba para lograr una cobertura del 100% de EP?",
          "options": {
            "a": "3",
            "b": "4",
            "c": "5",
            "d": "6"
          },
          "correct": [
            "b"
          ],
          "explanation": "Como 'jardín pequeño' y 'jardín grande' solo pueden combinarse con 'planta baja', esos dos casos usan 'planta baja'. Luego se requieren otros 2 casos para cubrir 'primer piso' y 'segundo piso o superior' (ambos con 'sin jardín'). Total = 4 casos.",
          "optionExplanations": {
            "a": "Incorrecta: Con 3 casos es imposible porque al cubrir 'jardín pequeño' y 'jardín grande' estás obligado a usar 'planta baja' dos veces, quedándote solo 1 caso más para cubrir tanto 'primer piso' como 'segundo piso'.",
            "b": "Correcta: Los 4 casos mínimos son: CP1 (planta baja, jardín pequeño), CP2 (planta baja, jardín grande), CP3 (primer piso, sin jardín), CP4 (segundo piso o superior, sin jardín).",
            "c": "Incorrecta: 5 casos cubren todas las combinaciones válidas posibles (también llamada cobertura combinatoria), pero no es el mínimo para cubrir cada partición individual al menos una vez.",
            "d": "Incorrecta: Excede el mínimo necesario."
          }
        },
        {
          "id": "A-21",
          "num": 21,
          "chapter": 4,
          "lo": "FL-4.2.2",
          "kLevel": "K3",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "Está probando un sistema que calcula la nota final del curso para un alumno según las siguientes reglas:\n• 0 – 50 puntos: suspenso\n• 51 – 60 puntos: regular\n• 61 – 70 puntos: satisfactorio\n• 71 – 80 puntos: bien\n• 81 – 90 puntos: muy bien\n• 91 – 100 puntos: excelente\nHa preparado el siguiente conjunto de casos de prueba:\nCP1: 91 (excelente) | CP2: 50 (suspenso) | CP3: 81 (muy bien) | CP4: 60 (regular) | CP5: 70 (satisfactorio) | CP6: 80 (bien).\n¿Cuál es la cobertura de análisis de valores límite (BVA) de 2 valores para el resultado final que se logra con los casos de prueba existentes?",
          "options": {
            "a": "50%",
            "b": "60%",
            "c": "33,3%",
            "d": "100%"
          },
          "correct": [
            "a"
          ],
          "explanation": "Existen 6 particiones y cada una tiene 2 valores límite: {0, 50}, {51, 60}, {61, 70}, {71, 80}, {81, 90}, {91, 100} = 12 valores límite en total. Los 6 casos prueban 6 de esos 12 valores (50, 60, 70, 80, 81, 91) → 6 / 12 = 50%.",
          "optionExplanations": {
            "a": "Correcta: Se cubren 6 valores límite (50, 60, 70, 80, 81, 91) de un total de 12 valores límite (faltan 0, 51, 61, 71, 90, 100). 6/12 = 50%.",
            "b": "Incorrecta: Calcula erróneamente sobre 10 límites en lugar de 12.",
            "c": "Incorrecta: Correspondería al cálculo de BVA de 3 valores (6 de 18), no de 2 valores.",
            "d": "Incorrecta: Solo se probó un extremo de cada rango, no ambos extremos."
          }
        },
        {
          "id": "A-22",
          "num": 22,
          "chapter": 4,
          "lo": "FL-4.2.3",
          "kLevel": "K3",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "Su tienda favorita de alquiler diario de bicicletas ha introducido un nuevo sistema CRM y le ha pedido a usted que lo pruebe.\nLas características implementadas son las siguientes:\n• Cualquiera puede alquilar una bicicleta, pero los miembros reciben un 20% de descuento.\n• Sin embargo, si se pierde la fecha límite de devolución, el descuento ya no está disponible.\n• Después de 15 alquileres, los miembros reciben un regalo: una camiseta.\nLa tabla de decisión que describe las características implementadas tiene las siguientes reglas:\n• R1: Ser miembro=V, Incumplimiento plazo=V, Alquiler 15=F → Acciones: ninguna\n• R2: Ser miembro=V, Incumplimiento plazo=F, Alquiler 15=F → Acciones: 20% descuento\n• R3: Ser miembro=V, Incumplimiento plazo=V, Alquiler 15=V → Acciones: Camiseta\n• R4: Ser miembro=V, Incumplimiento plazo=F, Alquiler 15=V → Acciones: 20% descuento + Camiseta\n• R5: Ser miembro=F, Incumplimiento plazo=V, Alquiler 15=F → Acciones: ninguna\n• R6: Ser miembro=F, Incumplimiento plazo=F, Alquiler 15=F → Acciones: ninguna\n• R7: Ser miembro=F, Incumplimiento plazo=F, Alquiler 15=V → Acciones: ninguna\n• R8: Ser miembro=F, Incumplimiento plazo=V, Alquiler 15=V → Acciones: Camiseta\nBasándose ÚNICAMENTE en la descripción de las características del sistema CRM, ¿cuál de las reglas anteriores describe una situación imposible?",
          "options": {
            "a": "R4",
            "b": "R2",
            "c": "R6",
            "d": "R8"
          },
          "correct": [
            "d"
          ],
          "explanation": "La regla de negocio establece que 'Después de 15 alquileres, LOS MIEMBROS reciben un regalo: una camiseta'. En R8 el cliente NO es miembro (Ser miembro = F), pero la tabla indica que recibe una camiseta, lo cual es imposible según la especificación.",
          "optionExplanations": {
            "a": "Incorrecta: R4 es válida (es miembro, devuelve a tiempo y es su alquiler 15 → recibe descuento y camiseta).",
            "b": "Incorrecta: R2 es válida (es miembro, devuelve a tiempo y no es alquiler 15 → recibe 20% de descuento).",
            "c": "Incorrecta: R6 es válida (no es miembro → no recibe ni descuento ni camiseta).",
            "d": "Correcta: En R8 la condición 'Ser miembro' es Falsa (F), pero tiene marcada la acción 'Camiseta de regalo', violando la regla de que solo los miembros reciben camiseta."
          }
        },
        {
          "id": "A-23",
          "num": 23,
          "chapter": 4,
          "lo": "FL-4.2.4",
          "kLevel": "K3",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "Usted prueba un sistema cuyo ciclo de vida está modelado por el siguiente diagrama de transición de estados (comienza en INICIO y termina en APAGADO):\n• INICIO --(PROBAR)--> MODO DEPURACIÓN\n• INICIO --(EJECUTAR)--> EN OPERACIÓN\n• EN OPERACIÓN --(ERROR)--> MODO DEPURACIÓN\n• MODO DEPURACIÓN --(COMPLETADO)--> APAGADO\n• EN OPERACIÓN --(PAUSAR)--> EN ESPERA\n• EN ESPERA --(REANUDAR)--> EN OPERACIÓN\n• EN ESPERA --(COMPLETADO)--> APAGADO\n¿Cuál es el número MÍNIMO de casos de prueba para lograr una cobertura de transiciones válidas del 100%?",
          "options": {
            "a": "4",
            "b": "2",
            "c": "7",
            "d": "3"
          },
          "correct": [
            "d"
          ],
          "explanation": "Del estado MODO DEPURACIÓN solo se puede salir hacia APAGADO (estado final). Como a MODO DEPURACIÓN entran 2 flechas distintas (PROBAR desde INICIO y ERROR desde EN OPERACIÓN), esas dos flechas requieren 2 casos de prueba separados. Además, la salida de EN ESPERA hacia APAGADO requiere un 3.er caso de prueba.",
          "optionExplanations": {
            "a": "Incorrecta: No hacen falta 4 casos porque el bucle PAUSAR / REANUDAR puede recorrerse dentro del mismo caso que luego va de EN ESPERA a APAGADO.",
            "b": "Incorrecta: Con 2 casos es imposible cubrir las 3 rutas terminales hacia APAGADO.",
            "c": "Incorrecta: 7 es el número de transiciones, pero un solo caso de prueba puede recorrer varias transiciones.",
            "d": "Correcta: Se necesitan exactamente 3 casos: CP1 (INICIO -> MODO DEPURACIÓN -> APAGADO), CP2 (INICIO -> EN OPERACIÓN -> MODO DEPURACIÓN -> APAGADO) y CP3 (INICIO -> EN OPERACIÓN -> EN ESPERA -> EN OPERACIÓN -> EN ESPERA -> APAGADO)."
          }
        },
        {
          "id": "A-24",
          "num": 24,
          "chapter": 4,
          "lo": "FL-4.3.1",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "Su conjunto de pruebas logró un 100% de cobertura de sentencias (declaraciones). ¿Cuál es la consecuencia de este hecho?",
          "options": {
            "a": "Cada instrucción en el código que contiene un defecto se ha ejecutado al menos una vez.",
            "b": "Cualquier conjunto de pruebas que contenga más casos de prueba que su conjunto de pruebas también logrará un 100% de cobertura de sentencias.",
            "c": "Cada camino (ruta) en el código se ha ejecutado al menos una vez.",
            "d": "Cada combinación de valores de entrada se ha probado al menos una vez."
          },
          "correct": [
            "a"
          ],
          "explanation": "100% de cobertura de sentencias significa que todas las instrucciones ejecutables del código fueron ejecutadas al menos una vez; por consiguiente, cualquier sentencia que contenga un defecto también fue ejecutada al menos una vez.",
          "optionExplanations": {
            "a": "Correcta: Como se ejecutaron todas las sentencias ejecutables del código, cualquier sentencia con un defecto fue ejecutada al menos una vez (aunque eso no garantiza que los datos usados hayan provocado la falla).",
            "b": "Incorrecta: Tener más casos de prueba no garantiza cubrir todas las sentencias (todos podrían recorrer siempre la misma rama).",
            "c": "Incorrecta: 100% de sentencias ni siquiera garantiza el 100% de ramas (ej. un 'if' sin 'else'), y mucho menos todos los caminos posibles.",
            "d": "Incorrecta: Probar todas las combinaciones de entrada es imposible (Principio 2)."
          }
        },
        {
          "id": "A-25",
          "num": 25,
          "chapter": 4,
          "lo": "FL-4.3.3",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes opciones NO es cierta para las pruebas de caja blanca?",
          "options": {
            "a": "Durante las pruebas de caja blanca se considera toda la implementación del software.",
            "b": "Las métricas de cobertura de caja blanca pueden ayudar a identificar pruebas adicionales para aumentar la cobertura del código.",
            "c": "Las técnicas de prueba de caja blanca se pueden utilizar en pruebas estáticas.",
            "d": "Las pruebas de caja blanca pueden ayudar a identificar brechas (lagunas) en la implementación de los requisitos."
          },
          "correct": [
            "d"
          ],
          "explanation": "La principal debilidad de las pruebas de caja blanca es que solo ven el código que está escrito; por lo tanto, NO pueden detectar requisitos faltantes (brechas de omisión en la implementación de requisitos).",
          "optionExplanations": {
            "a": "Incorrecta (sí es cierta): Las pruebas de caja blanca examinan toda la implementación del código.",
            "b": "Incorrecta (sí es cierta): Las métricas de cobertura indican qué partes del código faltan por ejercitar.",
            "c": "Incorrecta (sí es cierta): Las técnicas de caja blanca se pueden usar en revisiones estáticas (ej. ejecución en seco de pseudocódigo).",
            "d": "Correcta (NO es cierta): Las pruebas de caja blanca no pueden detectar requisitos omitidos (no implementados) porque se basan en la estructura del código y no en las especificaciones."
          }
        },
        {
          "id": "A-26",
          "num": 26,
          "chapter": 4,
          "lo": "FL-4.4.1",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes opciones describe MEJOR el concepto detrás de la predicción de errores (error guessing)?",
          "options": {
            "a": "La predicción de errores implica usar su conocimiento y experiencia de defectos encontrados en el pasado y errores típicos cometidos por los desarrolladores.",
            "b": "La predicción de errores implica usar su experiencia personal de desarrollo y los errores que usted cometió en el pasado como desarrollador.",
            "c": "La predicción de errores requiere que usted imagine que es el usuario del objeto de prueba y adivine los errores que el usuario podría cometer al interactuar con él.",
            "d": "La predicción de errores requiere que usted duplique rápidamente la tarea de desarrollo para identificar el tipo de errores que un desarrollador podría cometer."
          },
          "correct": [
            "a"
          ],
          "explanation": "En la predicción de errores (Sección 4.4.1), el probador anticipa errores, defectos y fallos basándose en su experiencia previa sobre cómo ha funcionado la aplicación y los errores típicos que suelen cometer los desarrolladores.",
          "optionExplanations": {
            "a": "Correcta: Define exactamente la base de la predicción de errores según el Syllabus v4.0.",
            "b": "Incorrecta: Un probador no necesita haber sido desarrollador para aplicar predicción de errores.",
            "c": "Incorrecta: Aunque los errores del usuario pueden considerarse, la técnica no se limita a imaginar ser el usuario.",
            "d": "Incorrecta: El probador no reprograma la tarea de desarrollo."
          }
        },
        {
          "id": "A-27",
          "num": 27,
          "chapter": 4,
          "lo": "FL-4.4.2",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "En su proyecto ha habido un retraso en el lanzamiento de una aplicación completamente nueva y la ejecución de pruebas comenzó tarde, pero usted tiene un conocimiento de dominio muy detallado y buenas habilidades analíticas. La lista completa de requisitos aún no se ha compartido con el equipo, pero la gerencia está pidiendo que se presenten algunos resultados de pruebas ahora. ¿Qué técnica de prueba se adapta MEJOR a esta situación?",
          "options": {
            "a": "Prueba basada en listas de comprobación.",
            "b": "Predicción de errores.",
            "c": "Prueba exploratoria.",
            "d": "Prueba de ramas."
          },
          "correct": [
            "c"
          ],
          "explanation": "Las pruebas exploratorias son ideales cuando hay pocas especificaciones, fuerte presión de tiempo y el probador cuenta con buen conocimiento del dominio y habilidades analíticas.",
          "optionExplanations": {
            "a": "Incorrecta: Al ser una aplicación nueva sin requisitos compartidos y con prisa, no hay tiempo previo para elaborar y mantener una lista de comprobación detallada.",
            "b": "Incorrecta: Al ser una aplicación nueva, no hay historial previo de defectos de esa aplicación, por lo que el aprendizaje simultáneo de la prueba exploratoria es más adecuado.",
            "c": "Correcta: En la prueba exploratoria el aprendizaje, el diseño y la ejecución ocurren simultáneamente, adaptándose perfectamente a la falta de requisitos y presión de tiempo.",
            "d": "Incorrecta: La prueba de ramas es una técnica de caja blanca lenta que no aprovecha el conocimiento del dominio de negocio."
          }
        },
        {
          "id": "A-28",
          "num": 28,
          "chapter": 4,
          "lo": "FL-4.5.2",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes actividades describe MEJOR la forma en que se pueden documentar los criterios de aceptación?",
          "options": {
            "a": "Realizar retrospectivas para determinar las necesidades reales de las partes interesadas con respecto a una historia de usuario determinada.",
            "b": "Utilizar el formato dado/cuando/entonces (given/when/then) para describir un ejemplo de condición de prueba relacionada con una historia de usuario determinada.",
            "c": "Utilizar la comunicación verbal para reducir el riesgo de que otros malinterpreten los criterios de aceptación.",
            "d": "Documentar los riesgos relacionados con una historia de usuario determinada en un plan de prueba para facilitar las pruebas basadas en el riesgo."
          },
          "correct": [
            "b"
          ],
          "explanation": "Los dos formatos estándar para documentar criterios de aceptación (Sección 4.5.2) son el formato orientado a escenarios (Dado/Cuando/Entonces) y el formato orientado a reglas.",
          "optionExplanations": {
            "a": "Incorrecta: Las retrospectivas evalúan el proceso al final de la iteración, no documentan criterios de aceptación.",
            "b": "Correcta: El formato Dado/Cuando/Entonces es la forma estándar orientada a escenarios para redactar criterios de aceptación.",
            "c": "Incorrecta: La comunicación verbal no documenta los criterios de aceptación.",
            "d": "Incorrecta: El registro de riesgos en un plan de pruebas no son los criterios de aceptación de una historia de usuario."
          }
        },
        {
          "id": "A-29",
          "num": 29,
          "chapter": 4,
          "lo": "FL-4.5.3",
          "kLevel": "K3",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "Considere la siguiente historia de usuario:\n«Como Editor, quiero revisar el contenido antes de que se publique, para poder asegurar que la gramática es correcta»\ny sus criterios de aceptación:\n• El usuario puede iniciar sesión en el sistema de gestión de contenidos con el rol de 'Editor'.\n• El editor puede ver las páginas de contenido existentes.\n• El editor puede editar el contenido de la página.\n• El editor puede agregar comentarios de marcado.\n• El editor puede guardar los cambios.\n• El editor puede reasignar al 'propietario del contenido' para hacer actualizaciones.\n¿Cuál de los siguientes es el MEJOR ejemplo de una prueba ATDD para esta historia de usuario?",
          "options": {
            "a": "Probar si el editor puede guardar el documento después de eliminar el contenido de la página.",
            "b": "Probar si el propietario del contenido puede iniciar sesión y hacer actualizaciones en el contenido.",
            "c": "Probar si el editor puede programar el contenido editado para su publicación.",
            "d": "Probar si el editor puede reasignar a otro editor para hacer actualizaciones."
          },
          "correct": [
            "a"
          ],
          "explanation": "En ATDD, cada prueba debe validar directamente los criterios de aceptación definidos para el rol de la historia ('Editor'). Editar (eliminar contenido) y guardar cambios valida dos criterios de aceptación del Editor.",
          "optionExplanations": {
            "a": "Correcta: Valida directamente los criterios 'El editor puede editar el contenido de la página' y 'El editor puede guardar los cambios' dentro del rol de Editor.",
            "b": "Incorrecta: Prueba el rol de 'propietario del contenido' en lugar del rol 'Editor' de esta historia de usuario.",
            "c": "Incorrecta: 'Programar para publicación' no figura en los criterios de aceptación (está fuera del alcance de esta historia).",
            "d": "Incorrecta: El criterio indica reasignar al 'propietario del contenido', no a otro editor."
          }
        },
        {
          "id": "A-30",
          "num": 30,
          "chapter": 5,
          "lo": "FL-5.1.2",
          "kLevel": "K1",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Cómo agregan valor los probadores a la planificación de la iteración y de la entrega?",
          "options": {
            "a": "Los probadores determinan la prioridad de las historias de usuario a desarrollar.",
            "b": "Los probadores se enfocan sólo en los aspectos funcionales del sistema a probar.",
            "c": "Los probadores participan en la identificación detallada de riesgos y en la evaluación de riesgos de las historias de usuario.",
            "d": "Los probadores garantizan el lanzamiento de software de alta calidad a través del diseño temprano de pruebas durante la planificación de la entrega."
          },
          "correct": [
            "c"
          ],
          "explanation": "En la planificación de la iteración y de la entrega (Sección 5.1.2), los probadores aportan valor participando en el análisis e identificación detallada de riesgos de las historias de usuario.",
          "optionExplanations": {
            "a": "Incorrecta: La prioridad de las historias de usuario la define el representante de negocio (Product Owner).",
            "b": "Incorrecta: Los probadores identifican tanto aspectos funcionales como NO funcionales.",
            "c": "Correcta: Es una contribución directa del probador durante la planificación ágil.",
            "d": "Incorrecta: El diseño detallado de pruebas no ocurre durante la reunión de planificación de la entrega ni garantiza por sí solo la calidad."
          }
        },
        {
          "id": "A-31",
          "num": 31,
          "chapter": 5,
          "lo": "FL-5.1.3",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuáles DOS de las siguientes opciones son los criterios de SALIDA para probar un sistema?",
          "options": {
            "a": "Preparación del entorno de prueba.",
            "b": "La capacidad de iniciar sesión en el objeto de prueba por parte del probador.",
            "c": "Se alcanza la densidad de defectos estimada.",
            "d": "Los requisitos se traducen al formato dado/cuando/entonces.",
            "e": "Las pruebas de regresión están automatizadas."
          },
          "correct": [
            "c",
            "e"
          ],
          "explanation": "Alcanzar la densidad de defectos estimada (medida de minuciosidad) y tener automatizadas las pruebas de regresión (criterio de finalización) son criterios de salida. Las demás opciones son precondiciones (criterios de entrada).",
          "optionExplanations": {
            "a": "Incorrecta: Que el entorno esté listo es un criterio de ENTRADA.",
            "b": "Incorrecta: Poder iniciar sesión en el objeto de prueba (calidad inicial / smoke test) es un criterio de ENTRADA.",
            "c": "Correcta: Es una métrica de minuciosidad que actúa como criterio de SALIDA.",
            "d": "Incorrecta: Que los requisitos estén redactados y listos es un criterio de ENTRADA (Definition of Ready).",
            "e": "Correcta: Automatizar las pruebas de regresión es un criterio de completitud/SALIDA (Definition of Done)."
          }
        },
        {
          "id": "A-32",
          "num": 32,
          "chapter": 5,
          "lo": "FL-5.1.4",
          "kLevel": "K3",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "Su equipo utiliza la técnica de estimación de tres puntos para estimar el esfuerzo de prueba de una nueva característica de alto riesgo. Se hicieron las siguientes estimaciones:\n• Estimación más optimista (a): 2 horas-persona\n• Estimación más probable (m): 11 horas-persona\n• Estimación más pesimista (b): 14 horas-persona\n¿Cuál es la estimación final (E)?",
          "options": {
            "a": "9 horas-persona",
            "b": "14 horas-persona",
            "c": "11 horas-persona",
            "d": "10 horas-persona"
          },
          "correct": [
            "d"
          ],
          "explanation": "Aplicando la fórmula E = (a + 4m + b) / 6 = (2 + 4×11 + 14) / 6 = (2 + 44 + 14) / 6 = 60 / 6 = 10 horas-persona.",
          "optionExplanations": {
            "a": "Incorrecta: 9 es el promedio simple (2+11+14)/3 sin ponderar por 4 la estimación más probable.",
            "b": "Incorrecta: 14 es únicamente el valor pesimista (b).",
            "c": "Incorrecta: 11 es únicamente el valor más probable (m).",
            "c_note": "",
            "d": "Correcta: E = (2 + 44 + 14) / 6 = 10 horas-persona."
          }
        },
        {
          "id": "A-33",
          "num": 33,
          "chapter": 5,
          "lo": "FL-5.1.5",
          "kLevel": "K3",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "Usted está probando una aplicación móvil que permite a los usuarios encontrar un restaurante cercano según el tipo de comida que desean comer. Considere la siguiente lista de casos de prueba, prioridades (es decir, un número menor significa una mayor prioridad) y dependencias:\n• TC 001: Seleccionar tipo de comida | Prioridad: 3 | Dependencia lógica: ninguna\n• TC 002: Seleccionar restaurante | Prioridad: 2 | Dependencia lógica: TC 001\n• TC 003: Obtener dirección | Prioridad: 1 | Dependencia lógica: TC 002\n• TC 004: Llamar al restaurante | Prioridad: 2 | Dependencia lógica: TC 002\n• TC 005: Hacer reserva | Prioridad: 3 | Dependencia lógica: TC 002\n¿Cuál de los siguientes casos de prueba debe ejecutarse como el TERCERO?",
          "options": {
            "a": "TC 003",
            "b": "TC 005",
            "c": "TC 002",
            "d": "TC 001"
          },
          "correct": [
            "a"
          ],
          "explanation": "El orden debe respetar primero las dependencias lógicas: 1.º TC 001 (único sin dependencia) → 2.º TC 002 (depende de TC 001). Una vez hecho TC 002, quedan desbloqueados TC 003 (prio 1), TC 004 (prio 2) y TC 005 (prio 3); como TC 003 tiene la prioridad más alta (1), se ejecuta en 3.er lugar.",
          "optionExplanations": {
            "a": "Correcta: Secuencia completa = 1º TC 001 → 2º TC 002 → 3º TC 003 → 4º TC 004 → 5º TC 005.",
            "b": "Incorrecta: TC 005 tiene prioridad 3 (la más baja de los que dependen de TC 002), por lo que se ejecuta en 5.º lugar.",
            "c": "Incorrecta: TC 002 se ejecuta en 2.º lugar.",
            "d": "Incorrecta: TC 001 se ejecuta en 1.er lugar."
          }
        },
        {
          "id": "A-34",
          "num": 34,
          "chapter": 5,
          "lo": "FL-5.1.7",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "Considere las siguientes categorías de prueba (1-4) y los cuadrantes de prueba ágil (A-D):\n1. Prueba de usabilidad\n2. Prueba de componente\n3. Prueba funcional\n4. Prueba de fiabilidad\n\nA. Cuadrante Q1: orientado a la tecnología, apoya al equipo de desarrollo.\nB. Cuadrante Q2: orientado al negocio, apoya al equipo de desarrollo.\nC. Cuadrante Q3: orientado al negocio, critica el producto.\nD. Cuadrante Q4: orientado a la tecnología, critica el producto.\n¿Cómo se asignan las siguientes categorías de prueba a los cuadrantes de prueba ágil?",
          "options": {
            "a": "1C, 2A, 3B, 4D",
            "b": "1D, 2A, 3C, 4B",
            "c": "1C, 2B, 3D, 4A",
            "d": "1D, 2B, 3C, 4A"
          },
          "correct": [
            "a"
          ],
          "explanation": "1 (Usabilidad) → Q3 (C); 2 (Componente) → Q1 (A); 3 (Funcional) → Q2 (B); 4 (Fiabilidad, no funcional técnica) → Q4 (D).",
          "optionExplanations": {
            "a": "Correcta: Correspondencia exacta según la sección 5.1.7 del Syllabus v4.0.",
            "b": "Incorrecta: Coloca usabilidad en Q4 y funcional en Q3.",
            "c": "Incorrecta: Coloca componente en Q2 y funcional en Q4.",
            "d": "Incorrecta: Emparejamientos erróneos en los cuatro elementos."
          }
        },
        {
          "id": "A-35",
          "num": 35,
          "chapter": 5,
          "lo": "FL-5.2.4",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "Durante un análisis de riesgos se identificó y evaluó el siguiente riesgo:\n• Riesgo: El tiempo de respuesta es demasiado largo para generar un informe.\n• Probabilidad del riesgo: media; impacto del riesgo: alto.\n• Respuesta al riesgo:\n  - Un equipo de pruebas independiente realiza pruebas de eficiencia de rendimiento durante la prueba del sistema.\n  - Una muestra seleccionada de usuarios finales realiza pruebas de aceptación alfa y beta antes del lanzamiento.\n¿Qué medida se propone tomar en respuesta a este riesgo analizado?",
          "options": {
            "a": "Aceptación del riesgo.",
            "b": "Plan de contingencia.",
            "c": "Mitigación del riesgo.",
            "d": "Transferencia del riesgo."
          },
          "correct": [
            "c"
          ],
          "explanation": "Realizar pruebas específicas (de rendimiento por equipo independiente y pruebas alfa/beta) para reducir la probabilidad de que el problema llegue a producción es Mitigación del riesgo mediante pruebas.",
          "optionExplanations": {
            "a": "Incorrecta: No se está aceptando pasivamente el riesgo, sino ejecutando pruebas activas.",
            "b": "Incorrecta: Un plan de contingencia define qué hacer si el riesgo se materializa en producción, no pruebas previas al lanzamiento.",
            "c": "Correcta: Las pruebas son una forma principal de mitigación de riesgos de producto.",
            "d": "Incorrecta: No se está transfiriendo el riesgo a un tercero (como una aseguradora)."
          }
        },
        {
          "id": "A-36",
          "num": 36,
          "chapter": 5,
          "lo": "FL-5.3.3",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Qué producto de trabajo puede ser utilizado por un equipo ágil para mostrar la cantidad de trabajo que se ha completado y la cantidad total de trabajo restante para una iteración dada?",
          "options": {
            "a": "Criterios de aceptación.",
            "b": "Informe de defectos.",
            "c": "Informe de finalización de prueba.",
            "d": "Gráfico de quemado (Burndown chart)."
          },
          "correct": [
            "d"
          ],
          "explanation": "Los gráficos de quemado (burndown charts) son representaciones gráficas actualizadas diariamente que muestran el trabajo completado y el trabajo restante en una iteración.",
          "optionExplanations": {
            "a": "Incorrecta: Los criterios de aceptación definen las condiciones que debe cumplir una historia de usuario.",
            "b": "Incorrecta: Los informes de defectos detallan anomalías individuales.",
            "c": "Incorrecta: El informe de finalización se crea al terminar la iteración, no muestra el avance diario del trabajo restante durante la iteración.",
            "d": "Correcta: Es la definición exacta de un gráfico de quemado (burndown chart) en la sección 5.3.3."
          }
        },
        {
          "id": "A-37",
          "num": 37,
          "chapter": 5,
          "lo": "FL-5.4.1",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "Necesita actualizar uno de los scripts de prueba automatizados para estar en línea con un nuevo requisito. ¿Qué proceso indica que usted crea una nueva versión del script de prueba en el repositorio de pruebas?",
          "options": {
            "a": "Gestión de la trazabilidad.",
            "b": "Prueba de mantenimiento.",
            "c": "Gestión de la configuración.",
            "d": "Ingeniería de requisitos."
          },
          "correct": [
            "c"
          ],
          "explanation": "El control de versiones de los elementos del testware (como los scripts de prueba en un repositorio) forma parte de la Gestión de la Configuración (Sección 5.4).",
          "optionExplanations": {
            "a": "Incorrecta: La trazabilidad vincula requisitos con casos de prueba, no gestiona el versionado de archivos en un repositorio.",
            "b": "Incorrecta: La prueba de mantenimiento es una actividad de prueba tras cambios en producción, no el control de versiones del repositorio.",
            "c": "Correcta: La Gestión de la Configuración controla la identificación única y el versionado de todos los elementos de configuración del testware.",
            "d": "Incorrecta: La ingeniería de requisitos gestiona los requisitos del sistema, no las versiones de los scripts en el repositorio de pruebas."
          }
        },
        {
          "id": "A-38",
          "num": 38,
          "chapter": 5,
          "lo": "FL-5.5.1",
          "kLevel": "K3",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "Usted recibió el siguiente informe de defecto de los desarrolladores declarando que la anomalía descrita en este informe de prueba no es reproducible:\n\n«La aplicación se cuelga — 2022-May-03 – John Doe – Rechazado\nLa aplicación se cuelga después de ingresar 'Test input: $ä' en el campo Nombre en la pantalla de creación de nuevo usuario. Intenté cerrar sesión, iniciar sesión con la cuenta test_admin01, mismo problema. Probado con otras cuentas de administrador de prueba, mismo problema. No se recibió ningún mensaje de error; el registro (ver adjunto) contiene una notificación de error fatal. Basado en el caso de prueba TC-1305, la aplicación debería aceptar la entrada proporcionada y crear el usuario. Por favor, corrija con alta prioridad, esta característica está relacionada con REQ-0012, que es un nuevo requisito de negocio crítico.»\n\n¿Qué información crítica falta en este informe de prueba que habría sido útil para los desarrolladores?",
          "options": {
            "a": "Resultado esperado y resultado real.",
            "b": "Referencias y estado del defecto.",
            "c": "Entorno de prueba y elemento (objeto) de prueba.",
            "d": "Prioridad y severidad."
          },
          "correct": [
            "c"
          ],
          "explanation": "El informe incluye el resultado esperado y real, las referencias (TC-1305, REQ-0012), el estado (Rechazado), la prioridad y la severidad, pero NO indica en qué entorno de prueba ni en qué versión/build del objeto de prueba ocurrió la falla.",
          "optionExplanations": {
            "a": "Incorrecta: Sí están en el texto (Real: 'La aplicación se cuelga'; Esperado: 'debería aceptar la entrada y crear el usuario').",
            "b": "Incorrecta: Sí están en el texto (Referencias: TC-1305 y REQ-0012; Estado: Rechazado).",
            "c": "Correcta: No se menciona el entorno de prueba (SO, navegador, base de datos) ni la versión específica de la aplicación bajo prueba, por lo que el desarrollador no sabe dónde reproducirlo.",
            "d": "Incorrecta: Sí están en el texto (Prioridad: 'alta prioridad'; Severidad: 'se cuelga / error fatal / requisito crítico')."
          }
        },
        {
          "id": "A-39",
          "num": 39,
          "chapter": 6,
          "lo": "FL-6.1.1",
          "kLevel": "K2",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Qué actividad de prueba apoya una herramienta de preparación de datos?",
          "options": {
            "a": "Monitoreo y control de pruebas.",
            "b": "Análisis y diseño de pruebas.",
            "c": "Implementación y ejecución de pruebas.",
            "d": "Finalización de la prueba."
          },
          "correct": [
            "c"
          ],
          "explanation": "Según la sección 1.4.1 del Syllabus, mientras que en el diseño solo se identifican los requisitos de datos, es durante la IMPLEMENTACIÓN DE LA PRUEBA cuando se crean o adquieren los datos de prueba reales necesarios para la EJECUCIÓN.",
          "optionExplanations": {
            "a": "Incorrecta: Monitoreo y control recopila métricas de avance y toma medidas de gestión.",
            "b": "Incorrecta (¡Cuidado, trampa frecuente!): En análisis y diseño solo se definen las condiciones y los 'requisitos de datos de prueba', pero no se preparan/cargan los datos en sí.",
            "c": "Correcta: La creación, adquisición y carga efectiva de los datos de prueba para correr las pruebas pertenece a la Implementación y Ejecución de pruebas.",
            "d": "Incorrecta: En la finalización se archiva el testware y se cierra el entorno."
          }
        },
        {
          "id": "A-40",
          "num": 40,
          "chapter": 6,
          "lo": "FL-6.2.1",
          "kLevel": "K1",
          "source": "Oficial Modelo A (Español)",
          "isTranslatedCD": false,
          "question": "¿Qué elemento identifica correctamente un riesgo potencial de realizar la automatización de pruebas?",
          "options": {
            "a": "Puede introducir regresiones desconocidas en producción.",
            "b": "Es posible que no se asignen suficientes esfuerzos para mantener el testware (código de prueba).",
            "c": "Es posible que no se confíe lo suficiente en las herramientas de prueba y el testware asociado.",
            "d": "Puede reducir el tiempo asignado a las pruebas manuales."
          },
          "correct": [
            "b"
          ],
          "explanation": "Subestimar y no asignar suficiente tiempo y esfuerzo al mantenimiento continuo de los scripts automatizados (testware) es uno de los riesgos clásicos de la automatización (Sección 6.2).",
          "optionExplanations": {
            "a": "Incorrecta: Ejecutar pruebas automatizadas en un entorno de pruebas no introduce regresiones en el código de producción.",
            "b": "Correcta: Es un riesgo oficial listado en la sección 6.2 del Syllabus v4.0.",
            "c": "Incorrecta: El riesgo real es el opuesto: confiar DEMASIADO en la herramienta e ignorar el pensamiento crítico.",
            "d": "Incorrecta: Reducir el esfuerzo manual repetitivo es un beneficio buscado por la automatización, no un riesgo."
          }
        }
      ]
    },
    {
      "id": "sim-2",
      "title": "Simulador 2: Examen Oficial Modelo B (Español)",
      "subtitle": "40 preguntas oficiales ISTQB CTFL v4.0 • Distribución estándar (8-6-4-11-9-2)",
      "badge": "100% Oficial en Español",
      "hasTranslatedCD": false,
      "description": "Examen oficial Modelo B completo en español con justificación detallada opción por opción (A, B, C, D).",
      "questions": [
        {
          "id": "B-01",
          "num": 1,
          "chapter": 1,
          "lo": "FL-1.2.1",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes opciones es un ejemplo de por qué las pruebas son necesarias?",
          "options": {
            "a": "La prueba dinámica aumenta la calidad haciendo que los objetos de prueba pasen a ser conocidos como de alta calidad por los usuarios.",
            "b": "La prueba estática aumenta la calidad al ayudar a los desarrolladores a identificar fallos en su código más rápidamente.",
            "c": "La prueba estática reduce los costes de desarrollo porque los usuarios pueden proporcionar requisitos mejor redactados.",
            "d": "Las revisiones aumentan la calidad de las especificaciones de requisitos y hacen que se necesiten menos cambios en los productos de trabajo derivados."
          },
          "correct": [
            "d"
          ],
          "explanation": "Revisar estáticamente las especificaciones de requisitos detecta defectos temprano, mejorando su calidad y evitando que esos defectos se propaguen a productos derivados (diseño y código).",
          "optionExplanations": {
            "a": "Incorrecta: Las pruebas por sí solas no aumentan directamente la calidad si no se corrigen los defectos encontrados, ni se limitan a cambiar la percepción del usuario.",
            "b": "Incorrecta (¡Trampa clásica!): La prueba estática NO identifica 'fallos' en el código (los fallos sólo ocurren al ejecutar el código en prueba dinámica); identifica defectos.",
            "c": "Incorrecta: La prueba estática evalúa los requisitos existentes para hallar defectos, no hace que los usuarios mágicamente escriban mejores requisitos por sí solos.",
            "d": "Correcta: Al detectar y eliminar defectos en los requisitos mediante revisiones, se reduce la necesidad de retrabajo y cambios en el diseño y código derivados."
          }
        },
        {
          "id": "B-02",
          "num": 2,
          "chapter": 1,
          "lo": "FL-1.2.2",
          "kLevel": "K1",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes afirmaciones sobre el aseguramiento de la calidad (QA) y/o el control de la calidad (QC) es correcta?",
          "options": {
            "a": "El aseguramiento de la calidad (QA) se realiza como parte de la prueba.",
            "b": "La prueba se realiza como parte del control de la calidad (QC).",
            "c": "Prueba es otro término para el control de la calidad (QC).",
            "d": "La prueba se realiza como parte del aseguramiento de la calidad (QA)."
          },
          "correct": [
            "b"
          ],
          "explanation": "El control de la calidad (QC) es un enfoque correctivo centrado en el producto, y las pruebas son la forma principal de control de calidad (junto con otros métodos como métodos formales, pruebas de modelos y simulación).",
          "optionExplanations": {
            "a": "Incorrecta: QA es un enfoque preventivo de procesos a nivel de toda la organización, no una subactividad de las pruebas.",
            "b": "Correcta: Según la sección 1.2.2 del Syllabus, las pruebas se realizan como parte principal del Control de Calidad (QC).",
            "c": "Incorrecta: QC es más amplio que las pruebas (también incluye métodos formales y simulación).",
            "d": "Incorrecta: Las pruebas pertenecen a QC (orientado al producto), aunque sus resultados sirven de retroalimentación para QA (orientado al proceso)."
          }
        },
        {
          "id": "B-03",
          "num": 3,
          "chapter": 1,
          "lo": "FL-1.3.1",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de los siguientes resultados de una actividad de prueba es un ejemplo de aplicación práctica del principio «la prueba exhaustiva es imposible»?",
          "options": {
            "a": "Se han creado casos de prueba para cubrir cada ruta posible del flujo de control del código.",
            "b": "Se ha decidido no probar nunca más un componente después de que las pruebas anteriores no encontraran ningún defecto en él.",
            "c": "Se han documentado todos los casos de prueba posibles y se han priorizado para que se ejecuten tantos como permita el tiempo disponible.",
            "d": "Se han utilizado la partición de equivalencia y el análisis del valor frontera para generar los casos de prueba."
          },
          "correct": [
            "d"
          ],
          "explanation": "Como es imposible probar todas las entradas posibles, el Principio 2 indica utilizar técnicas de prueba (como partición de equivalencia y valores frontera) para seleccionar una muestra sistemática y manejable de casos de prueba.",
          "optionExplanations": {
            "a": "Incorrecta: Cubrir cada ruta posible en código con bucles suele ser imposible y no ilustra el uso de técnicas de muestreo.",
            "b": "Incorrecta: No tiene relación con la imposibilidad de pruebas exhaustivas.",
            "c": "Incorrecta: Documentar 'todos los casos de prueba posibles' ya es imposible en la práctica.",
            "d": "Correcta: Aplicar técnicas de diseño de pruebas como EP y BVA permite acotar un número infinito o enorme de entradas a un conjunto finito y eficaz."
          }
        },
        {
          "id": "B-04",
          "num": 4,
          "chapter": 1,
          "lo": "FL-1.4.1",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Qué actividad de prueba implica trabajar con requisitos de datos de prueba, condiciones de prueba, requisitos del entorno de prueba y casos de prueba?",
          "options": {
            "a": "Diseño de prueba.",
            "b": "Ejecución de prueba.",
            "c": "Análisis de prueba.",
            "d": "Implementación de prueba."
          },
          "correct": [
            "a"
          ],
          "explanation": "En el Diseño de la prueba se toman las condiciones de prueba (del análisis) y se elaboran en casos de prueba, identificando además los requisitos de datos de prueba y los requisitos del entorno de prueba.",
          "optionExplanations": {
            "a": "Correcta: El Diseño de prueba transforma condiciones de prueba en casos de prueba y define los requisitos de datos y del entorno.",
            "b": "Incorrecta: La ejecución corre los procedimientos/scripts y genera registros de prueba e informes de defectos.",
            "c": "Incorrecta: El análisis define las condiciones de prueba, pero aún no diseña los casos ni los requisitos de datos/entorno.",
            "d": "Incorrecta: La implementación crea los datos reales y construye el entorno a partir de los requisitos definidos en el diseño."
          }
        },
        {
          "id": "B-05",
          "num": 5,
          "chapter": 1,
          "lo": "FL-1.4.2",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de los siguientes factores es MÁS probable que afecte al modo en que se realiza la prueba en un proyecto determinado?",
          "options": {
            "a": "El presupuesto de marketing asignado al producto.",
            "b": "El formato del informe de finalización de la prueba utilizado en un proyecto anterior.",
            "c": "El número de años de experiencia en pruebas de los miembros del equipo de prueba.",
            "d": "La estructura organizativa del departamento de recursos humanos."
          },
          "correct": [
            "c"
          ],
          "explanation": "Según la sección 1.4.2, las habilidades, conocimientos y experiencia de los miembros del equipo son un factor contextual clave que influye directamente en cómo se lleva a cabo la prueba (ej. qué técnicas o herramientas usar).",
          "optionExplanations": {
            "a": "Incorrecta: El presupuesto de marketing no determina el proceso técnico de pruebas.",
            "b": "Incorrecta: Un formato de informe final pasado tiene un impacto mínimo en cómo se realizan las pruebas del proyecto actual.",
            "c": "Correcta: La experiencia y competencias del equipo determinan la elección de técnicas (ej. exploratorias vs. detalladas) y prácticas de prueba.",
            "d": "Incorrecta: La estructura de RR.HH. es irrelevante para el enfoque de pruebas."
          }
        },
        {
          "id": "B-06",
          "num": 6,
          "chapter": 1,
          "lo": "FL-1.4.4",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de los siguientes enunciados describe CORRECTAMENTE el valor de mantener la trazabilidad entre la base de prueba y el producto de prueba (testware)?",
          "options": {
            "a": "La trazabilidad entre los riesgos mitigados y los casos de prueba que han pasado proporciona un medio para determinar el nivel de riesgo residual.",
            "b": "La trazabilidad entre los requisitos de usuario y los resultados de la ejecución de pruebas proporciona un medio para medir el avance del proyecto con respecto a los objetivos de negocio.",
            "c": "La trazabilidad entre los probadores y los casos de prueba que han fallado proporciona un medio para determinar el nivel de competencia de los probadores.",
            "d": "La trazabilidad entre los riesgos identificados y las condiciones de prueba escritas proporciona un medio para determinar qué riesgos merece la pena probar."
          },
          "correct": [
            "b"
          ],
          "explanation": "Vincular los requisitos de usuario con los resultados de ejecución permite evaluar e informar el progreso del proyecto frente a los objetivos y expectativas del negocio.",
          "optionExplanations": {
            "a": "Incorrecta: Para determinar el riesgo residual hay que trazar TODOS los riesgos identificados (incluidos los NO mitigados y las pruebas fallidas/no ejecutadas), no solo los riesgos mitigados con pruebas pasadas.",
            "b": "Correcta: Permite medir y comunicar a los interesados hasta qué punto se están cumpliendo los requisitos de negocio.",
            "c": "Incorrecta: Que un caso de prueba falle depende de los defectos del software, no mide la competencia del probador.",
            "d": "Incorrecta: Qué riesgos merece la pena probar se decide mediante la evaluación del nivel de riesgo (probabilidad × impacto), no por la trazabilidad."
          }
        },
        {
          "id": "B-07",
          "num": 7,
          "chapter": 1,
          "lo": "FL-1.5.1",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes opciones es MÁS probable que sea un ejemplo de un probador que utiliza una competencia genérica al probar?",
          "options": {
            "a": "El profundo conocimiento del probador de una variedad de juegos de ordenador hizo que se llevara bien con uno de los desarrolladores a quien también le gustaban los juegos.",
            "b": "El probador era un antiguo piloto y pudo entender mejor los criterios de aceptación del sistema de control del helicóptero.",
            "c": "El probador trabajó anteriormente como programador y utilizó sus habilidades para comunicarse mejor con los analistas de negocio.",
            "d": "El probador tuvo mucho cuidado de no cometer errores cuando generó metódicamente los casos de prueba antes de comenzar su sesión de prueba exploratoria."
          },
          "correct": [
            "b"
          ],
          "explanation": "Ser antiguo piloto aporta 'conocimiento del dominio' (una de las competencias genéricas del probador en 1.5.1) al probar el sistema de control de un helicóptero.",
          "optionExplanations": {
            "a": "Incorrecta: Compartir un pasatiempo no es aplicar una competencia profesional de prueba al trabajo.",
            "b": "Correcta: Ejemplifica directamente la competencia de 'conocimiento del dominio' para comprender los criterios de aceptación.",
            "c": "Incorrecta: Saber programar es un conocimiento técnico, pero no es lo que facilita la comunicación de negocio con analistas de negocio.",
            "d": "Incorrecta (¡Trampa!): En una sesión de prueba exploratoria NO se generan los casos de prueba antes de comenzar la sesión, sino durante la sesión simultáneamente con la ejecución."
          }
        },
        {
          "id": "B-08",
          "num": 8,
          "chapter": 1,
          "lo": "FL-1.5.2",
          "kLevel": "K1",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes opciones es una ventaja del enfoque de equipo completo?",
          "options": {
            "a": "Permite a los miembros del equipo asumir cualquier rol en cualquier momento.",
            "b": "Sólo requiere un único equipo para dar soporte a todo el proyecto de desarrollo.",
            "c": "Integra a los representantes de negocio junto con los desarrolladores en el mismo equipo.",
            "d": "Genera una sinergia de equipo que beneficia a todo el proyecto."
          },
          "correct": [
            "d"
          ],
          "explanation": "El Syllabus (1.5.2) establece explícitamente que el enfoque de equipo completo mejora la dinámica del equipo, la comunicación y la colaboración, creando una sinergia en beneficio de todo el proyecto.",
          "optionExplanations": {
            "a": "Incorrecta: Los miembros solo asumen tareas para las cuales tienen los conocimientos y habilidades necesarios, no 'cualquier rol en cualquier momento'.",
            "b": "Incorrecta: El enfoque de equipo completo no prohíbe que un proyecto grande tenga varios equipos.",
            "c": "Incorrecta: También incluye a los probadores y a todos los roles necesarios, no solo a negocio y desarrolladores.",
            "d": "Correcta: Generar sinergia de equipo y responsabilidad compartida por la calidad es su ventaja esencial."
          }
        },
        {
          "id": "B-09",
          "num": 9,
          "chapter": 2,
          "lo": "FL-2.1.1",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de los siguientes enunciados sobre el ciclo de vida del desarrollo de software (CVDS) elegido es CORRECTO?",
          "options": {
            "a": "Si se utiliza el desarrollo ágil de software, la automatización de pruebas del sistema reemplaza la necesidad de pruebas de regresión.",
            "b": "Si se utiliza un modelo de desarrollo secuencial, entonces la prueba dinámica suele limitarse a las últimas fases del ciclo de vida.",
            "c": "Si se utiliza un modelo de desarrollo iterativo, entonces la prueba de componentes suele ser realizada manualmente por los desarrolladores.",
            "d": "Si se utiliza un modelo de desarrollo incremental, entonces la prueba estática se realiza en los primeros incrementos y la prueba dinámica en los últimos incrementos."
          },
          "correct": [
            "b"
          ],
          "explanation": "En los modelos de desarrollo secuenciales (como Cascada o Modelo en V), al principio no hay código ejecutable, por lo que las pruebas dinámicas no pueden realizarse hasta fases avanzadas del ciclo de vida.",
          "optionExplanations": {
            "a": "Incorrecta: En Ágil hay muchos cambios y las pruebas de regresión son indispensables (de hecho, la automatización se usa precisamente PARA ejecutar las pruebas de regresión, no las reemplaza).",
            "b": "Correcta: En modelos secuenciales, las fases tempranas solo admiten pruebas estáticas y planificación; las dinámicas ocurren al final cuando se ha escrito el código.",
            "c": "Incorrecta: En modelos iterativos las pruebas de componentes suelen automatizarse ampliamente.",
            "d": "Incorrecta: En modelos incrementales se realizan tanto pruebas estáticas como dinámicas en CADA incremento."
          }
        },
        {
          "id": "B-10",
          "num": 10,
          "chapter": 2,
          "lo": "FL-2.1.2",
          "kLevel": "K1",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes opciones es una buena práctica de prueba que se aplica a todos los ciclos de vida de desarrollo de software?",
          "options": {
            "a": "La prueba debe realizarse sólo después de que el desarrollo se haya completado.",
            "b": "Los probadores deben revisar los productos de trabajo tan pronto como estén disponibles los borradores.",
            "c": "Toda prueba dinámica debe ser realizada por un equipo de prueba independiente.",
            "d": "La prueba de regresión debe realizarse manualmente en cada cambio del código."
          },
          "correct": [
            "b"
          ],
          "explanation": "Participar en la revisión de productos de trabajo tan pronto como haya borradores disponibles es una de las 4 buenas prácticas universales aplicables a todos los modelos de SDLC (Sección 2.1.2).",
          "optionExplanations": {
            "a": "Incorrecta: Contradice el principio de pruebas tempranas (shift-left).",
            "b": "Correcta: Es una buena práctica universal definida en la sección 2.1.2 del Syllabus.",
            "c": "Incorrecta: Las pruebas dinámicas pueden ser realizadas por desarrolladores (ej. pruebas de componentes) o pares.",
            "d": "Incorrecta: Siempre que sea posible, las pruebas de regresión repetitivas se benefician de la automatización."
          }
        },
        {
          "id": "B-11",
          "num": 11,
          "chapter": 2,
          "lo": "FL-2.1.3",
          "kLevel": "K1",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes opciones es un ejemplo de un enfoque de desarrollo basado en probar primero (test-first)?",
          "options": {
            "a": "Desarrollo guiado por pruebas (TDD).",
            "b": "Desarrollo guiado por cobertura (CDD).",
            "c": "Desarrollo guiado por la calidad (QDD).",
            "d": "Desarrollo guiado por características (FDD)."
          },
          "correct": [
            "a"
          ],
          "explanation": "Los tres enfoques oficiales de 'probar primero' (test-first) en el Syllabus v4.0 (Sección 2.1.3) son TDD, ATDD y BDD.",
          "optionExplanations": {
            "a": "Correcta: TDD (Test-Driven Development) es un enfoque test-first donde se escriben las pruebas antes del código.",
            "b": "Incorrecta: Término inventado como distractor.",
            "c": "Incorrecta: Término inventado como distractor.",
            "d": "Incorrecta: Feature-Driven Development (FDD) es una metodología iterativa pero no es uno de los 3 enfoques test-first del capítulo 2.1.3."
          }
        },
        {
          "id": "B-12",
          "num": 12,
          "chapter": 2,
          "lo": "FL-2.1.4",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de los siguientes enunciados sobre DevOps es CORRECTO?",
          "options": {
            "a": "Para acelerar los lanzamientos, se utiliza la integración continua para animar a los desarrolladores a enviar código rápidamente sin necesidad de completar la prueba de componente.",
            "b": "Para poder actualizar y lanzar sistemas con mayor frecuencia, se necesitan muchas pruebas de regresión automatizadas para reducir el peligro de regresión.",
            "c": "Para tratar tanto a los desarrolladores como a las operaciones por igual, los probadores asignarán más esfuerzo a la prueba de aceptación en producción.",
            "d": "Para incrementar la velocidad, la automatización en DevOps elimina la necesidad de realizar cualquier prueba manual."
          },
          "correct": [
            "b"
          ],
          "explanation": "En DevOps, la entrega continua e integración continua actualizan el software frecuentemente, por lo que se requiere un conjunto amplio de pruebas de regresión automatizadas para mitigar el riesgo de regresión.",
          "optionExplanations": {
            "a": "Incorrecta: CI ejecuta precisamente las pruebas de componentes automatizadas al enviar el código, no las omite.",
            "b": "Correcta: Según la sección 2.1.4, las pruebas de regresión automatizadas son esenciales en DevOps para minimizar el riesgo de regresión ante despliegues frecuentes.",
            "c": "Incorrecta: DevOps promueve el shift-left, no trasladar todo el esfuerzo a producción.",
            "d": "Incorrecta: El Syllabus aclara explícitamente que aunque DevOps automatiza mucho, las pruebas manuales (especialmente desde la perspectiva del usuario) siguen siendo necesarias."
          }
        },
        {
          "id": "B-13",
          "num": 13,
          "chapter": 2,
          "lo": "FL-2.2.1",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes actividades es MÁS probable que se lleve a cabo como parte de la prueba de SISTEMA?",
          "options": {
            "a": "Prueba de seguridad de un sistema de gestión de créditos por parte de un equipo de prueba independiente.",
            "b": "Prueba de la interfaz de un sistema de cambio de divisas con un sistema bancario externo.",
            "c": "Prueba beta de un sistema de aprendizaje a distancia por parte de estudiantes universitarios.",
            "d": "Prueba de las interacciones entre la interfaz de usuario y la base de datos de un sistema de recursos humanos."
          },
          "correct": [
            "a"
          ],
          "explanation": "La prueba de sistema evalúa el comportamiento y capacidades del sistema completo (incluyendo características no funcionales como seguridad) y suele ser realizada por un equipo de prueba independiente.",
          "optionExplanations": {
            "a": "Correcta: Evaluar la seguridad global del sistema por un equipo independiente es característico de la Prueba de Sistema.",
            "b": "Incorrecta: Probar la interfaz con un sistema bancario externo corresponde a Prueba de Integración de Sistemas.",
            "c": "Incorrecta: La prueba beta por estudiantes corresponde a Prueba de Aceptación.",
            "d": "Incorrecta: Probar la interacción entre dos componentes internos (UI y BD) corresponde a Prueba de Integración de Componentes."
          }
        },
        {
          "id": "B-14",
          "num": 14,
          "chapter": 2,
          "lo": "FL-2.2.3",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de los siguientes enunciados explica CORRECTAMENTE una diferencia entre las pruebas de confirmación y las pruebas de regresión?",
          "options": {
            "a": "Las pruebas de regresión verifican que el objeto de prueba cumple con los requisitos, mientras que las pruebas de confirmación verifican que el entorno de prueba es estable.",
            "b": "Las pruebas de confirmación comprueban que el sistema funciona igual que antes del cambio, mientras que las pruebas de regresión comprueban que el defecto se ha solucionado.",
            "c": "Las pruebas de confirmación se ejecutan siempre en cada iteración, mientras que las pruebas de regresión sólo se ejecutan antes del lanzamiento final.",
            "d": "Las pruebas de regresión se ocupan de los efectos adversos en el código inalterado, mientras que las pruebas de confirmación se ocupan de probar el código modificado."
          },
          "correct": [
            "d"
          ],
          "explanation": "La prueba de confirmación verifica que el cambio/corrección solucionó el defecto en el código modificado; la prueba de regresión verifica que el cambio no introdujo efectos secundarios adversos en el código no modificado.",
          "optionExplanations": {
            "a": "Incorrecta: Verificar la estabilidad inicial del entorno sería una prueba de humo / criterio de entrada.",
            "b": "Incorrecta: Invierte exactamente las definiciones de confirmación y regresión.",
            "c": "Incorrecta: Ambas se ejecutan a lo largo de todas las iteraciones cada vez que hay correcciones y cambios.",
            "d": "Correcta: Define con exactitud el foco de la regresión (efectos adversos en partes inalteradas) y de la confirmación (verificar el código modificado)."
          }
        },
        {
          "id": "B-15",
          "num": 15,
          "chapter": 3,
          "lo": "FL-3.1.3",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de los siguientes es un ejemplo de un defecto que puede encontrarse mediante una prueba estática pero NO mediante una prueba dinámica?",
          "options": {
            "a": "Falta de usabilidad proporcionada a través de la interfaz de usuario.",
            "b": "Código sin ruta que lo alcance (código inalcanzable / muerto).",
            "c": "Tiempos de respuesta deficientes para la mayoría de los usuarios esperados.",
            "d": "Funciones requeridas que no están implementadas en el código."
          },
          "correct": [
            "b"
          ],
          "explanation": "El código muerto o inalcanzable nunca puede ejecutarse durante una prueba dinámica, por lo que sólo puede ser detectado examinando el código mediante pruebas estáticas (revisión o análisis estático).",
          "optionExplanations": {
            "a": "Incorrecta: La falta de usabilidad puede detectarse tanto en revisiones de prototipos como en pruebas dinámicas de usabilidad.",
            "b": "Correcta: Como ninguna ruta de ejecución llega a ese bloque de código, una prueba dinámica jamás pasará por él; el análisis estático lo detecta de inmediato.",
            "c": "Incorrecta: Los tiempos de respuesta bajo carga se detectan mediante pruebas dinámicas de rendimiento.",
            "d": "Incorrecta: Las funciones requeridas no implementadas también fallarán al ejecutar los casos de prueba dinámicos de caja negra."
          }
        },
        {
          "id": "B-16",
          "num": 16,
          "chapter": 3,
          "lo": "FL-3.2.1",
          "kLevel": "K1",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes opciones es una ventaja de la retroalimentación temprana y frecuente de las partes interesadas?",
          "options": {
            "a": "Los gestores son conscientes de qué desarrolladores son menos productivos.",
            "b": "Permite a los gestores de proyecto priorizar las interacciones con las partes interesadas.",
            "c": "Facilita la comunicación temprana de posibles problemas de calidad.",
            "d": "Los usuarios finales comprenden mejor por qué se retrasa la entrega del producto de trabajo."
          },
          "correct": [
            "c"
          ],
          "explanation": "Obtener retroalimentación temprana y frecuente de las partes interesadas previene malentendidos sobre los requisitos y facilita comunicar temprano posibles problemas de calidad.",
          "optionExplanations": {
            "a": "Incorrecta: La retroalimentación no sirve para evaluar ni castigar la productividad individual de los desarrolladores.",
            "b": "Incorrecta: No tiene ese propósito administrativo.",
            "c": "Correcta: Permite identificar y comunicar problemas de calidad y malentendidos de requisitos desde las primeras etapas.",
            "d": "Incorrecta: Su objetivo es construir el producto correcto a tiempo, no justificar retrasos."
          }
        },
        {
          "id": "B-17",
          "num": 17,
          "chapter": 3,
          "lo": "FL-3.2.2",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "Dadas las siguientes descripciones de tareas (1-4) y las actividades del proceso de revisión (A-D):\n1. Se seleccionan las características de calidad a evaluar y los criterios de salida.\n2. Todos tienen acceso al producto de trabajo.\n3. Se identifican las anomalías en el producto de trabajo.\n4. Se discuten las anomalías.\n\nA. Revisión individual.\nB. Inicio de la revisión.\nC. Planificación.\nD. Comunicación y análisis.\n¿Cuál de las siguientes opciones describe MEJOR la correspondencia?",
          "options": {
            "a": "1B, 2C, 3D, 4A",
            "b": "1B, 2C, 3A, 4D",
            "c": "1C, 2A, 3B, 4D",
            "d": "1C, 2B, 3A, 4D"
          },
          "correct": [
            "d"
          ],
          "explanation": "1 (definir características de calidad y criterios de salida) → C (Planificación); 2 (acceso al producto de trabajo) → B (Inicio de la revisión); 3 (identificar anomalías) → A (Revisión individual); 4 (discutir anomalías) → D (Comunicación y análisis).",
          "optionExplanations": {
            "a": "Incorrecta: Emparejamientos erróneos en las cuatro tareas.",
            "b": "Incorrecta: Invierte Planificación e Inicio de la revisión en 1 y 2.",
            "c": "Incorrecta: Invierte Inicio de la revisión y Revisión individual en 2 y 3.",
            "d": "Correcta: Coincide exactamente con las definiciones de la sección 3.2.2 del Syllabus."
          }
        },
        {
          "id": "B-18",
          "num": 18,
          "chapter": 3,
          "lo": "FL-3.2.3",
          "kLevel": "K1",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "Dados los siguientes roles en las revisiones (1-4) y las responsabilidades (A-D):\n1. Escriba (Grabador)\n2. Líder de la revisión\n3. Facilitador (Moderador)\n4. Gestor (Director)\n\nA. Garantiza el desarrollo eficaz de las reuniones de revisión y el establecimiento de un entorno de revisión seguro.\nB. Registra la información de la revisión, como las decisiones y las nuevas anomalías encontradas durante la reunión de revisión.\nC. Decide qué se va a revisar y proporciona recursos, como personal y tiempo para la revisión.\nD. Asume la responsabilidad general de la revisión, como organizar cuándo y dónde tendrá lugar la revisión.\n¿Cuál de las siguientes opciones describe MEJOR la correspondencia?",
          "options": {
            "a": "1A, 2B, 3D, 4C",
            "b": "1A, 2D, 3B, 4C",
            "c": "1B, 2D, 3A, 4C",
            "d": "1B, 2C, 3A, 4D"
          },
          "correct": [
            "c"
          ],
          "explanation": "1 (Escriba) → B (Registra decisiones y anomalías); 2 (Líder de revisión) → D (Responsabilidad general, cuándo y dónde); 3 (Facilitador/Moderador) → A (Reuniones eficaces y entorno seguro); 4 (Gestor/Director) → C (Decide qué se revisa y da recursos).",
          "optionExplanations": {
            "a": "Incorrecta: Confunde Escriba, Líder y Facilitador.",
            "b": "Incorrecta: Invierte Escriba (1) y Facilitador (3).",
            "c": "Correcta: Emparejamiento exacto según la sección 3.2.3 del Syllabus v4.0.",
            "d": "Incorrecta: Invierte las responsabilidades del Líder de revisión (2) y del Gestor/Director (4)."
          }
        },
        {
          "id": "B-19",
          "num": 19,
          "chapter": 4,
          "lo": "FL-4.1.1",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de los siguientes enunciados describe MEJOR la diferencia entre la prueba de tabla de decisión y la prueba de rama?",
          "options": {
            "a": "En la prueba de tabla de decisión, los casos de prueba se obtienen a partir de las sentencias de decisión del código. En la prueba de rama, los casos de prueba se derivan del conocimiento del flujo de control del objeto de prueba.",
            "b": "En la prueba de tabla de decisión, los casos de prueba se derivan de la especificación que describe la lógica de negocio. En la prueba de rama, los casos de prueba se basan en la previsión de posibles defectos en el código fuente.",
            "c": "En la prueba de tabla de decisión, los casos de prueba se derivan del conocimiento del flujo de control del objeto de prueba. En la prueba de rama, los casos de prueba se derivan de la especificación que describe la lógica de negocio.",
            "d": "En la prueba de tabla de decisión, los casos de prueba son independientes de cómo se implemente el software. En la prueba de rama, los casos de prueba sólo pueden crearse después del diseño o la implementación del código."
          },
          "correct": [
            "d"
          ],
          "explanation": "La tabla de decisión es una técnica de caja negra (basada en especificaciones e independiente de cómo se implemente el código), mientras que la prueba de rama es una técnica de caja blanca (basada en la estructura interna del código).",
          "optionExplanations": {
            "a": "Incorrecta: La tabla de decisión no se obtiene de las sentencias del código (es de caja negra).",
            "b": "Incorrecta: La prueba de rama no se basa en anticipar defectos (eso es predicción de errores), sino en cubrir el flujo de control.",
            "c": "Incorrecta: Invierte por completo caja negra y caja blanca.",
            "d": "Correcta: Distingue perfectamente la independencia respecto a la implementación en caja negra frente a la dependencia del código/diseño en caja blanca."
          }
        },
        {
          "id": "B-20",
          "num": 20,
          "chapter": 4,
          "lo": "FL-4.2.1",
          "kLevel": "K3",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "Los clientes de la cadena de lavado de coches TestWash tienen tarjetas con un registro del número de lavados que han comprado hasta el momento. El valor inicial es 0. Después de entrar en el lavado de coches, el sistema incrementa el número de la tarjeta en uno. Este valor representa el número del lavado actual. Basándose en este número, el sistema decide qué descuento tiene derecho a recibir el cliente:\n• Por cada décimo lavado (10, 20, 30...), el sistema concede un 10% de descuento.\n• Por cada vigésimo lavado (20, 40, 60...), el sistema concede otro 40% de descuento (es decir, un 50% de descuento en total).\n¿Cuál de los siguientes conjuntos de datos de entrada (entendidos como los números del lavado actual) alcanza la MAYOR cobertura de particiones de equivalencia?",
          "options": {
            "a": "19, 20, 30",
            "b": "11, 12, 20",
            "c": "1, 10, 50",
            "d": "10, 29, 30, 31"
          },
          "correct": [
            "a"
          ],
          "explanation": "Existen 3 particiones de equivalencia válidas según el descuento aplicado: (1) Sin descuento (no múltiplo de 10, ej. 19), (2) 10% de descuento (múltiplo de 10 pero no de 20, ej. 30) y (3) 50% de descuento (múltiplo de 20, ej. 20).",
          "optionExplanations": {
            "a": "Correcta: 19 cubre 'sin descuento', 30 cubre '10% de descuento' y 20 cubre '50% de descuento' (100% de las 3 particiones válidas).",
            "b": "Incorrecta: 11 y 12 cubren la misma partición ('sin descuento') y 20 cubre '50%', pero falta cubrir la partición de '10% de descuento' (solo 66,7%).",
            "c": "Incorrecta: 1 cubre 'sin descuento' y tanto 10 como 50 cubren '10% de descuento' (porque 50 no es múltiplo de 20); falta cubrir la partición de '50% de descuento'.",
            "d": "Incorrecta: 10 y 30 cubren '10%', y 29 y 31 cubren 'sin descuento'; falta cubrir un múltiplo de 20 ('50% de descuento')."
          }
        },
        {
          "id": "B-21",
          "num": 21,
          "chapter": 4,
          "lo": "FL-4.2.2",
          "kLevel": "K3",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "Usted está probando un formulario que verifica la corrección de la longitud de la contraseña dada como entrada. El formulario acepta una contraseña como correcta si su longitud está en el rango de 6 a 12 caracteres ambos inclusive; de lo contrario, se considera incorrecta. Inicialmente, el formulario está vacío (longitud de contraseña = 0). Su conjunto de casos de prueba ya alcanza el 100% de cobertura de valores frontera de 2 valores. Debido al alto riesgo de este componente, el equipo decidió añadir casos de prueba para asegurar una cobertura de valores frontera de 3 valores del 100%. ¿Qué longitudes de contraseña ADICIONALES deberían probarse para conseguirlo?",
          "options": {
            "a": "4, 5, 13, 14",
            "b": "7, 11",
            "c": "1, 5, 13",
            "d": "1, 4, 7, 11, 14"
          },
          "correct": [
            "d"
          ],
          "explanation": "Particiones: {0..5}, {6..12} y {13..}. Con BVA de 2 valores ya están cubiertos los límites {0, 5, 6, 12, 13}. Con BVA de 3 valores necesitamos cada límite y sus dos vecinos: para 0→{0,1}; para 5→{4,5,6}; para 6→{5,6,7}; para 12→{11,12,13}; para 13→{12,13,14}. Restando {0,5,6,12,13}, los adicionales son {1, 4, 7, 11, 14}.",
          "optionExplanations": {
            "a": "Incorrecta: 5 y 13 ya estaban incluidos en BVA de 2 valores, y omite los vecinos internos 1, 7 y 11.",
            "b": "Incorrecta: Sólo incluye los vecinos internos de la partición válida (7 y 11), olvidando los vecinos de las particiones inválidas (1, 4 y 14).",
            "c": "Incorrecta: 5 y 13 ya estaban probados en BVA de 2 valores.",
            "d": "Correcta: Añade exactamente los 5 vecinos internos faltantes (1 para el límite 0; 4 para el límite 5; 7 para el límite 6; 11 para el límite 12; y 14 para el límite 13)."
          }
        },
        {
          "id": "B-22",
          "num": 22,
          "chapter": 4,
          "lo": "FL-4.2.3",
          "kLevel": "K3",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "La siguiente tabla de decisión contiene las reglas para determinar el riesgo de aterosclerosis:\n• R1: Colesterol <= 124 | Presión arterial <= 140 → Acción: Nivel de riesgo MUY BAJO\n• R2: Colesterol <= 124 | Presión arterial > 140  → Acción: Nivel de riesgo BAJO\n• R3: Colesterol 125–200 | Presión arterial <= 140 → Acción: Nivel de riesgo MEDIO\n• R4: Colesterol 125–200 | Presión arterial > 140  → Acción: Nivel de riesgo ALTO\n• R5: Colesterol >= 201 | Presión arterial '–' (indiferente) → Acción: Nivel de riesgo MUY ALTO\n\nUsted diseñó los siguientes 5 casos de prueba:\n• TC1: Colesterol = 125, Presión arterial = 141\n• TC2: Colesterol = 200, Presión arterial = 201\n• TC3: Colesterol = 124, Presión arterial = 201\n• TC4: Colesterol = 109, Presión arterial = 200\n• TC5: Colesterol = 201, Presión arterial = 140\n¿Cuál es la cobertura de tabla de decisión alcanzada por estos casos de prueba?",
          "options": {
            "a": "40%",
            "b": "60%",
            "c": "80%",
            "d": "100%"
          },
          "correct": [
            "b"
          ],
          "explanation": "TC1 y TC2 cubren la misma regla R4; TC3 y TC4 cubren la misma regla R2; y TC5 cubre la regla R5. En total se han cubierto 3 de las 5 columnas (R2, R4 y R5; faltan R1 y R3). Cobertura = 3 / 5 = 60%.",
          "optionExplanations": {
            "a": "Incorrecta: 40% equivaldría a cubrir sólo 2 reglas.",
            "b": "Correcta: Se ejercitan 3 reglas distintas (R2, R4 y R5) de un total de 5 reglas = 60%.",
            "c": "Incorrecta: 80% equivaldría a cubrir 4 reglas.",
            "d": "Incorrecta: Aunque hay 5 casos de prueba para 5 columnas, hay casos repetidos en R2 y R4, dejando R1 y R3 sin cubrir."
          }
        },
        {
          "id": "B-23",
          "num": 23,
          "chapter": 4,
          "lo": "FL-4.2.4",
          "kLevel": "K3",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "Un sistema de almacenamiento puede guardar hasta tres elementos y se modela mediante el siguiente diagrama de transición de estados (estados: INICIO, NO COMPLETO, COMPLETO; variable contador N):\n• E1 (de INICIO a NO COMPLETO): AGREGAR / N := 1\n• E2 (bucle en NO COMPLETO): AGREGAR [N < 2] / N := N + 1\n• E3 (bucle en NO COMPLETO): EXTRAER [N > 0] / N := N - 1\n• E4 (de NO COMPLETO a COMPLETO): AGREGAR [N = 2] / N := N + 1\n• E5 (de COMPLETO a NO COMPLETO): EXTRAER / N := N - 1\n¿Cuál de las siguientes secuencias de eventos alcanza el nivel MÁS ALTO de cobertura de transiciones válidas?",
          "options": {
            "a": "AGREGAR, EXTRAER, AGREGAR, AGREGAR, AGREGAR",
            "b": "AGREGAR, AGREGAR, AGREGAR, AGREGAR, EXTRAER, EXTRAER",
            "c": "AGREGAR, AGREGAR, AGREGAR, EXTRAER, EXTRAER",
            "d": "AGREGAR, AGREGAR, AGREGAR, EXTRAER, AGREGAR"
          },
          "correct": [
            "c"
          ],
          "explanation": "Siguiendo la opción c): 1º AGREGAR ejecuta E1 (N=1, NO COMPLETO); 2º AGREGAR [N=1<2] ejecuta E2 (N=2, NO COMPLETO); 3º AGREGAR [N=2] ejecuta E4 (N=3, COMPLETO); 4º EXTRAER desde COMPLETO ejecuta E5 (N=2, NO COMPLETO); 5º EXTRAER desde NO COMPLETO [N=2>0] ejecuta E3 (N=1, NO COMPLETO). ¡Cubre las 5 transiciones E1, E2, E3, E4 y E5 (100%)!",
          "optionExplanations": {
            "a": "Incorrecta: Ejecuta E1 (N=1), E3 (N=0), E2 (N=1), E2 (N=2), E4 (N=3). No llega a ejecutar E5 (80% de cobertura).",
            "b": "Incorrecta: Tras el 3.er AGREGAR el sistema ya está en estado COMPLETO (N=3), por lo que un 4.º AGREGAR no es una transición válida.",
            "c": "Correcta: Recorre exactamente E1 → E2 → E4 → E5 → E3, logrando el 100% de cobertura (5 de 5 transiciones) en 5 pasos.",
            "d": "Incorrecta: Ejecuta E1, E2, E4, E5 y vuelve a ejecutar E4; nunca ejecuta E3 (80% de cobertura)."
          }
        },
        {
          "id": "B-24",
          "num": 24,
          "chapter": 4,
          "lo": "FL-4.3.1",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "Usted ejecuta dos casos de prueba, T1 y T2, sobre el mismo código. La prueba T1 logró una cobertura de sentencias del 40% y la prueba T2 logró una cobertura de sentencias del 65%. ¿Cuál de los siguientes enunciados debe ser necesariamente cierto?",
          "options": {
            "a": "El conjunto de pruebas compuesto por las pruebas T1 y T2 alcanza una cobertura de sentencias del 105%.",
            "b": "Existe al menos una sentencia que debe haber sido ejecutada tanto por T1 como por T2.",
            "c": "Al menos el 5% de las sentencias del código sujeto a prueba no son ejecutables.",
            "d": "El conjunto de pruebas compuesto por las pruebas T1 y T2 logra una cobertura completa de ramas."
          },
          "correct": [
            "b"
          ],
          "explanation": "La cobertura total de sentencias nunca puede superar el 100%. Como 40% + 65% = 105% > 100%, por el principio del palomar al menos el 5% de las sentencias ejecutables tuvieron que ser ejecutadas por ambos casos de prueba.",
          "optionExplanations": {
            "a": "Incorrecta: Ninguna métrica de porcentaje de cobertura puede ser mayor que el 100%.",
            "b": "Correcta: Como la suma de coberturas individuales supera el 100%, los dos conjuntos de sentencias ejecutadas se solapan en al menos un 5%.",
            "c": "Incorrecta: La cobertura de sentencias se calcula siempre exclusivamente sobre las sentencias ejecutables.",
            "d": "Incorrecta: Ni siquiera sabemos si T1 y T2 juntas alcanzan el 100% de sentencias, y menos aún el 100% de ramas."
          }
        },
        {
          "id": "B-25",
          "num": 25,
          "chapter": 4,
          "lo": "FL-4.3.2",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "Sea la métrica de cobertura de ramas definida como CovR = (X / Y) × 100%. ¿Qué representan X e Y en esta fórmula?",
          "options": {
            "a": "X = número de resultados de decisión ejercitados por los casos de prueba; Y = número total de resultados de decisión en el código.",
            "b": "X = número de ramas condicionales ejercitadas por los casos de prueba; Y = número total de ramas en el código.",
            "c": "X = número de ramas ejercitadas por los casos de prueba; Y = número total de ramas en el código.",
            "d": "X = número de ramas condicionales ejercitadas por los casos de prueba; Y = número total de resultados de decisión en el código."
          },
          "correct": [
            "c"
          ],
          "explanation": "En el Syllabus v4.0 (Sección 4.3.2), la cobertura de ramas se define como el número de ramas (tanto condicionales como incondicionales) ejercitadas por los casos de prueba dividido por el número total de ramas en el código.",
          "optionExplanations": {
            "a": "Incorrecta: Esa era la definición antigua de cobertura de decisiones en v3.1; en v4.0 se consideran todas las ramas del grafo de flujo de control.",
            "b": "Incorrecta: Excluye las ramas incondicionales del numerador X.",
            "c": "Correcta: X es el número de ramas ejercitadas y Y es el número total de ramas (condicionales e incondicionales) en el código.",
            "d": "Incorrecta: Excluye las ramas incondicionales tanto en X como en Y."
          }
        },
        {
          "id": "B-26",
          "num": 26,
          "chapter": 4,
          "lo": "FL-4.4.2",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuáles DOS de los siguientes enunciados ofrecen la MEJOR justificación para utilizar la prueba exploratoria?",
          "options": {
            "a": "Los probadores no disponen de tiempo suficiente para el diseño de prueba y la ejecución de prueba.",
            "b": "La estrategia de prueba existente exige que los probadores utilicen técnicas de prueba de caja negra formales.",
            "c": "La especificación está escrita en un lenguaje formal que puede ser procesado por una herramienta.",
            "d": "Los probadores son miembros de un equipo ágil y tienen buenos conocimientos de programación.",
            "e": "Los probadores tienen experiencia en el dominio y buenas competencias analíticas."
          },
          "correct": [
            "a",
            "e"
          ],
          "explanation": "Según la sección 4.4.2, las pruebas exploratorias son útiles cuando hay poco tiempo o especificaciones inadecuadas (a), y son más eficaces cuando los probadores tienen experiencia en el dominio y buenas habilidades analíticas (e).",
          "optionExplanations": {
            "a": "Correcta: La presión de tiempo es una razón clave para usar pruebas exploratorias.",
            "b": "Incorrecta: Las pruebas exploratorias son una técnica basada en la experiencia, no una técnica formal de caja negra.",
            "c": "Incorrecta: Si hay una especificación formal procesable por herramienta, convienen técnicas basadas en modelos/caja negra.",
            "d": "Incorrecta: Saber programar ayuda en pruebas unitarias/automatización, no es la justificación para hacer pruebas exploratorias.",
            "e": "Correcta: La experiencia en el dominio y las competencias analíticas maximizan el éxito de la prueba exploratoria."
          }
        },
        {
          "id": "B-27",
          "num": 27,
          "chapter": 4,
          "lo": "FL-4.4.3",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes frases encaja MEJOR como un elemento de una lista de comprobación utilizada en la prueba basada en listas de comprobación?",
          "options": {
            "a": "El desarrollador cometió un error al implementar el código.",
            "b": "La cobertura de sentencias alcanzada supera el 85%.",
            "c": "El programa funciona correctamente con respecto a los requisitos funcionales y no funcionales.",
            "d": "Los mensajes de error están escritos en un lenguaje que el usuario puede entender."
          },
          "correct": [
            "d"
          ],
          "explanation": "Los elementos de una lista de comprobación (Sección 4.4.3) deben ser condiciones de prueba específicas que puedan verificarse por separado y directamente por un ser humano.",
          "optionExplanations": {
            "a": "Incorrecta: Describe la causa humana de un defecto, no una condición verificable en el objeto de prueba.",
            "b": "Incorrecta: Es un criterio de salida (y el Syllabus indica que las listas de comprobación no deben contener elementos que funcionen mejor como criterios de salida).",
            "c": "Incorrecta: Es demasiado general y abstracto para ser un ítem accionable de una lista de comprobación.",
            "d": "Correcta: Es una condición específica de usabilidad verificable directamente por el probador."
          }
        },
        {
          "id": "B-28",
          "num": 28,
          "chapter": 4,
          "lo": "FL-4.5.2",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "Considere los siguientes criterios de aceptación para una historia de usuario escrita desde la perspectiva de un propietario de tienda en línea:\n\nDado que el usuario ha iniciado sesión y está en la página de inicio,\nCuando el usuario hace clic en el botón 'Agregar artículo',\nEntonces debe aparecer el formulario 'Crear artículo',\nY el usuario debe poder ingresar un nombre y un precio para el nuevo artículo.\n\n¿En qué formato están escritos estos criterios de aceptación?",
          "options": {
            "a": "Orientado a reglas.",
            "b": "Orientado a escenarios.",
            "c": "Orientado al producto.",
            "d": "Orientado al proceso."
          },
          "correct": [
            "b"
          ],
          "explanation": "El formato Dado / Cuando / Entonces (Given / When / Then) describe un escenario de uso, por lo que se denomina formato orientado a escenarios (Sección 4.5.2).",
          "optionExplanations": {
            "a": "Incorrecta: El formato orientado a reglas usa listas de viñetas con reglas de negocio o tablas de entradas/salidas.",
            "b": "Correcta: Dado/Cuando/Entonces es la estructura del formato orientado a escenarios.",
            "c": "Incorrecta: No es un formato de criterios de aceptación en el Syllabus.",
            "d": "Incorrecta: No es un formato de criterios de aceptación en el Syllabus."
          }
        },
        {
          "id": "B-29",
          "num": 29,
          "chapter": 4,
          "lo": "FL-4.5.3",
          "kLevel": "K3",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "Su equipo sigue el enfoque de desarrollo guiado por pruebas de aceptación (ATDD) y analiza la siguiente historia de usuario:\n«Como cliente registrado, quiero poder ver mis pedidos anteriores en el sitio web de la empresa, para poder llevar un registro de mis compras».\n¿Cuál de los siguientes casos de prueba NO será relevante para esta historia de usuario?",
          "options": {
            "a": "Entrada: el cliente inicia sesión en su cuenta en el sitio web y hace clic en el botón 'Ver historial de pedidos'. Salida esperada: el sistema muestra una lista de todos los pedidos anteriores del cliente, incluyendo fecha, número de pedido y costo total.",
            "b": "Entrada: el cliente inicia sesión y hace clic en un pedido de su lista de pedidos. Salida esperada: el sistema muestra cada artículo comprado con su precio y cantidad.",
            "c": "Entrada: el cliente inicia sesión y hace clic en el botón 'Orden ascendente' en la pantalla de historial de pedidos. Salida esperada: el sistema muestra el historial ordenado por número de pedido de forma ascendente.",
            "d": "Entrada: un cliente no registrado se registra como nuevo cliente con una dirección de correo válida que aún no existe en la base de datos. Salida esperada: el sistema acepta el registro y crea la cuenta."
          },
          "correct": [
            "d"
          ],
          "explanation": "En ATDD, las pruebas no deben salirse del alcance ni del rol de la historia de usuario. La historia es para un 'cliente registrado' que consulta sus pedidos; el registro de un 'cliente no registrado' pertenece a otra historia distinta.",
          "optionExplanations": {
            "a": "Incorrecta (sí es relevante): Prueba directamente la visualización del historial de pedidos por el cliente registrado.",
            "b": "Incorrecta (sí es relevante): Prueba el detalle de un pedido anterior del cliente registrado.",
            "c": "Incorrecta (sí es relevante): Prueba la visualización ordenada del historial de pedidos.",
            "d": "Correcta (NO es relevante): Trata sobre el alta de un cliente NO registrado, lo cual está fuera del alcance de esta historia de usuario."
          }
        },
        {
          "id": "B-30",
          "num": 30,
          "chapter": 5,
          "lo": "FL-5.1.3",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "Su equipo utiliza una canalización de entrega de DevOps cuyos tres primeros pasos son:\n(1) Desarrollo de código\n(2) Enviar el código a un sistema de control de versiones y fusionarlo en la rama 'test'\n(3) Realizar pruebas de componentes para el código enviado\n¿Cuál de las siguientes opciones es la MÁS adecuada para ser el criterio de ENTRADA para el paso (2) de esta canalización?",
          "options": {
            "a": "El análisis estático no devuelve advertencias de alta severidad para el código enviado.",
            "b": "El sistema de control de versiones no informa de conflictos al fusionar el código en la rama 'test'.",
            "c": "Las pruebas de componentes están compiladas y listas para ser ejecutadas.",
            "d": "La cobertura de sentencias es de al menos el 80%."
          },
          "correct": [
            "a"
          ],
          "explanation": "Un criterio de entrada para el paso (2) es una precondición que debe cumplirse ANTES de enviar y fusionar el código en el paso (2), como haber ejecutado el análisis estático sin advertencias graves tras el paso (1).",
          "optionExplanations": {
            "a": "Correcta: Puede comprobarse en el entorno local tras el paso (1) como condición previa antes de enviar el código al repositorio en el paso (2).",
            "b": "Incorrecta: Comprobar que no hubo conflictos al fusionar es un resultado posterior a ejecutar el paso (2) (criterio de salida del paso 2).",
            "c": "Incorrecta: Es un criterio de entrada para el paso (3).",
            "d": "Incorrecta: Es un criterio de salida del paso (3) tras ejecutar las pruebas de componentes."
          }
        },
        {
          "id": "B-31",
          "num": 31,
          "chapter": 5,
          "lo": "FL-5.1.4",
          "kLevel": "K3",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "Usted desea estimar el esfuerzo de prueba para el nuevo proyecto utilizando la estimación basada en proporciones. Usted calcula la proporción del esfuerzo de prueba con respecto al esfuerzo de desarrollo utilizando los datos promediados de cuatro proyectos históricos similares:\n• P1: Desarrollo = 800.000 $ | Prueba = 40.000 $\n• P2: Desarrollo = 1.200.000 $ | Prueba = 130.000 $\n• P3: Desarrollo = 600.000 $ | Prueba = 70.000 $\n• P4: Desarrollo = 1.000.000 $ | Prueba = 120.000 $\nEl esfuerzo de desarrollo estimado para el nuevo proyecto es de 800.000 $. ¿Cuál es su estimación del esfuerzo de prueba en este proyecto?",
          "options": {
            "a": "40.000 $",
            "b": "80.000 $",
            "c": "81.250 $",
            "d": "82.500 $"
          },
          "correct": [
            "b"
          ],
          "explanation": "Suma histórica de Desarrollo = 800k + 1.200k + 600k + 1.000k = 3.600.000 $ (media = 900.000 $). Suma histórica de Prueba = 40k + 130k + 70k + 120k = 360.000 $ (media = 90.000 $). La proporción histórica Prueba/Desarrollo es 90.000 / 900.000 = 10% (0,1). Por tanto, para 800.000 $ de desarrollo, el esfuerzo de prueba es 10% × 800.000 $ = 80.000 $.",
          "optionExplanations": {
            "a": "Incorrecta: Toma únicamente el proyecto P1 sin promediar los 4 proyectos históricos.",
            "b": "Correcta: Proporción media = 360.000 / 3.600.000 = 0,10 → 0,10 × 800.000 $ = 80.000 $.",
            "c": "Incorrecta: Error de cálculo aritmético.",
            "d": "Incorrecta: Error de cálculo aritmético."
          }
        },
        {
          "id": "B-32",
          "num": 32,
          "chapter": 5,
          "lo": "FL-5.1.5",
          "kLevel": "K3",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "Usted está probando una aplicación web que permite a los usuarios BUSCAR productos, VER detalles del producto, AÑADIR productos a un carrito de compras y REALIZAR UN PEDIDO.\nPreparó los siguientes 7 casos de prueba (un número menor significa mayor prioridad):\n• CP1: BUSCAR el producto A | Prioridad: 4\n• CP2: BUSCAR el producto B | Prioridad: 4\n• CP3: VER detalles del producto A | Prioridad: 3\n• CP4: VER detalles del producto B | Prioridad: 2\n• CP5: AÑADIR el producto A a un carrito | Prioridad: 3\n• CP6: AÑADIR el producto B a un carrito | Prioridad: 1\n• CP7: REALIZAR UN PEDIDO | Prioridad: 5\nDependencias lógicas:\n• La funcionalidad BUSCAR debe probarse antes de que se pueda probar VER.\n• La funcionalidad VER debe probarse antes de AÑADIR.\n• La funcionalidad AÑADIR debe probarse antes de REALIZAR UN PEDIDO.\n¿Qué caso de prueba debe ejecutarse como el CUARTO?",
          "options": {
            "a": "CP3",
            "b": "CP1",
            "c": "CP7",
            "d": "CP2"
          },
          "correct": [
            "b"
          ],
          "explanation": "Para llegar al caso de máxima prioridad CP6 (Prioridad 1, Producto B) y CP4 (Prioridad 2, Producto B), primero ejecutamos la cadena del Producto B: 1.º CP2 (BUSCAR B) → 2.º CP4 (VER B) → 3.º CP6 (AÑADIR B). Luego, para cubrir los casos de prioridad 3 y 4 del Producto A antes del pedido (Prioridad 5), ejecutamos en 4.º lugar CP1 (BUSCAR A).",
          "optionExplanations": {
            "a": "Incorrecta: CP3 (VER A) se ejecuta en 5.º lugar porque requiere que antes se ejecute CP1 (BUSCAR A).",
            "b": "Correcta: Orden completo = 1º CP2 → 2º CP4 → 3º CP6 → 4º CP1 → 5º CP3 → 6º CP5 → 7º CP7.",
            "c": "Incorrecta: CP7 tiene la prioridad más baja (5), por lo que se ejecuta en 7.º lugar.",
            "d": "Incorrecta: CP2 se ejecuta en 1.er lugar para desbloquear el flujo del producto B."
          }
        },
        {
          "id": "B-33",
          "num": 33,
          "chapter": 5,
          "lo": "FL-5.1.7",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "Según el modelo de cuadrantes de prueba, ¿cuál de las siguientes opciones se incluye en el primer cuadrante ('orientado a la tecnología' y 'apoya al equipo')?",
          "options": {
            "a": "Pruebas de usabilidad.",
            "b": "Pruebas funcionales.",
            "c": "Pruebas de aceptación del usuario.",
            "d": "Pruebas de integración de componentes."
          },
          "correct": [
            "d"
          ],
          "explanation": "El Cuadrante Q1 (orientado a la tecnología, apoya al equipo) incluye las pruebas de componentes y las pruebas de integración de componentes.",
          "optionExplanations": {
            "a": "Incorrecta: Las pruebas de usabilidad pertenecen al Cuadrante Q3.",
            "b": "Incorrecta: Las pruebas funcionales pertenecen al Cuadrante Q2.",
            "c": "Incorrecta: Las pruebas de aceptación del usuario (UAT) pertenecen al Cuadrante Q3.",
            "d": "Correcta: Tanto las pruebas de componentes como las de integración de componentes están en el Cuadrante Q1."
          }
        },
        {
          "id": "B-34",
          "num": 34,
          "chapter": 5,
          "lo": "FL-5.2.4",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "Dados los siguientes riesgos (1-4) y las actividades de mitigación/respuesta (A-D):\n1. Una implementación ineficaz de bucles provoca respuestas largas del sistema.\n2. Los consumidores cambian sus preferencias.\n3. Inundación de la sala de servidores.\n4. Los pacientes por encima de cierta edad reciben informes inexactos.\n\nA. Aceptación del riesgo.\nB. Prueba de eficiencia de rendimiento.\nC. Uso del análisis de valores frontera (BVA) como técnica de prueba.\nD. Transferencia del riesgo.\n¿Cuál de las siguientes opciones describe MEJOR la correspondencia entre riesgos y actividades?",
          "options": {
            "a": "1C, 2D, 3A, 4B",
            "b": "1B, 2D, 3A, 4C",
            "c": "1B, 2A, 3D, 4C",
            "d": "1C, 2A, 3D, 4B"
          },
          "correct": [
            "c"
          ],
          "explanation": "1 (respuestas largas) → B (Prueba de rendimiento); 2 (preferencias de consumidores, fuera del control técnico) → A (Aceptar el riesgo); 3 (inundación de sala de servidores) → D (Transferir el riesgo, ej. seguro/nube); 4 (pacientes mayores de cierta edad) → C (Análisis de valores frontera).",
          "optionExplanations": {
            "a": "Incorrecta: Emparejamientos erróneos en los 4 riesgos.",
            "b": "Incorrecta: Invierte Aceptación y Transferencia en los riesgos 2 y 3.",
            "c": "Correcta: Relaciona de forma lógica cada riesgo con su respuesta adecuada según la sección 5.2.4.",
            "d": "Incorrecta: Invierte rendimiento y valores frontera en 1 y 4."
          }
        },
        {
          "id": "B-35",
          "num": 35,
          "chapter": 5,
          "lo": "FL-5.3.1",
          "kLevel": "K1",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes es una métrica de calidad del producto?",
          "options": {
            "a": "Tiempo medio hasta el fallo (Mean time to failure).",
            "b": "Número de defectos encontrados.",
            "c": "Cobertura de requisitos.",
            "d": "Porcentaje de detección de defectos."
          },
          "correct": [
            "a"
          ],
          "explanation": "Según la sección 5.3.1 del Syllabus, las métricas de calidad del producto miden atributos como disponibilidad, tiempos de respuesta y tiempo medio hasta el fallo.",
          "optionExplanations": {
            "a": "Correcta: Clasificada explícitamente como métrica de calidad del producto en 5.3.1.",
            "b": "Incorrecta: Es una métrica de defectos.",
            "c": "Incorrecta: Es una métrica de cobertura.",
            "d": "Incorrecta: Es una métrica de defectos."
          }
        },
        {
          "id": "B-36",
          "num": 36,
          "chapter": 5,
          "lo": "FL-5.3.3",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "Usted es miembro de un equipo de prueba ubicado en América del Norte, que desarrolla un producto para un cliente ubicado en Europa. El equipo es ágil, sigue el enfoque DevOps y utiliza una canalización de integración continua / entrega continua. ¿Cuál de las siguientes formas de comunicar el progreso de las pruebas al cliente es MENOS eficaz?",
          "options": {
            "a": "Cara a cara (presencial).",
            "b": "Tableros de control (Dashboards).",
            "c": "Correo electrónico.",
            "d": "Videoconferencia."
          },
          "correct": [
            "a"
          ],
          "explanation": "Al estar el equipo en América del Norte y el cliente en Europa (distintos continentes y zonas horarias), la comunicación presencial cara a cara es la menos práctica y menos eficaz.",
          "optionExplanations": {
            "a": "Correcta (es la MENOS eficaz): La distancia geográfica entre Norteamérica y Europa impide la comunicación presencial frecuente.",
            "b": "Incorrecta: Los dashboards de CI/CD son sumamente eficaces para equipos distribuidos.",
            "c": "Incorrecta: El correo electrónico funciona bien entre distintas zonas horarias.",
            "d": "Incorrecta: La videoconferencia permite comunicación directa a distancia."
          }
        },
        {
          "id": "B-37",
          "num": 37,
          "chapter": 5,
          "lo": "FL-5.4.1",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes opciones describe MEJOR un ejemplo de cómo la gestión de la configuración (CM) apoya las pruebas?",
          "options": {
            "a": "Al tener el número de versión del entorno, la herramienta de CM puede recuperar los números de versión de las bibliotecas, resguardos (stubs) y controladores (drivers) utilizados en ese entorno.",
            "b": "Al tener un registro de los valores de las entradas de prueba, la herramienta de CM puede ejecutar los casos de prueba para estas configuraciones y calcular la cobertura.",
            "c": "Al tener datos sobre la fecha de compra de una licencia de software, la herramienta de CM genera automáticamente información sobre el hecho de que la licencia está por vencer.",
            "d": "Al tener el número de versión del caso de prueba, la herramienta de CM puede generar automáticamente datos de prueba para este caso de prueba."
          },
          "correct": [
            "a"
          ],
          "explanation": "Para elementos de configuración complejos como un entorno de prueba, la Gestión de la Configuración registra todos los elementos que lo componen (librerías, stubs, drivers), sus relaciones y sus versiones (Sección 5.4).",
          "optionExplanations": {
            "a": "Correcta: Describe exactamente cómo CM gestiona líneas base y elementos de configuración de un entorno de prueba.",
            "b": "Incorrecta: Ejecutar pruebas y medir cobertura lo hacen herramientas de ejecución y cobertura, no CM.",
            "c": "Incorrecta: Gestionar vencimientos de licencias es gestión de activos de TI, no apoyo de CM a las pruebas.",
            "d": "Incorrecta: Generar datos de prueba lo hacen herramientas de diseño e implementación, no CM."
          }
        },
        {
          "id": "B-38",
          "num": 38,
          "chapter": 5,
          "lo": "FL-5.5.1",
          "kLevel": "K3",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "Usted está probando una función de ordenación que recibe un conjunto de números como entrada y devuelve el mismo conjunto de números ordenados en orden ascendente. El registro de la ejecución de la prueba es el siguiente:\n• TC1: Entrada: 3 → Salida: 3 (Pasó)\n• TC2: Entrada: 3 11 6 5 → Salida: 3 5 6 11 (Pasó)\n• TC3: Entrada: 8 7 3 7 1 → Salida: 1 3 7 8 (Falló)\n• TC4: Entrada: -2 -2 -2 -3 -3 → Salida: -3 -2 (Falló)\n• TC5: Entrada: 0 -2 0 3 4 4 → Salida: -2 0 3 4 (Falló)\n¿Cuál de las siguientes opciones ofrece la MEJOR descripción del fallo que puede utilizarse en un informe de defecto?",
          "options": {
            "a": "El sistema falla al ordenar varios conjuntos de números. Referencia: TC3, TC4, TC5.",
            "b": "El sistema parece ignorar los duplicados mientras ordena. Referencia: TC3, TC4, TC5.",
            "c": "El sistema falla al ordenar números negativos. Referencia: TC4, TC5.",
            "d": "TC3, TC4 y TC5 tienen defectos (datos de entrada duplicados) y deben corregirse."
          },
          "correct": [
            "b"
          ],
          "explanation": "Al observar TC3 (entra dos veces el 7 y sale una sola vez), TC4 (-2 y -3 repetidos salen una sola vez) y TC5 (0 y 4 repetidos salen una sola vez), el patrón exacto del fallo es que la función elimina/ignora los números duplicados al ordenar.",
          "optionExplanations": {
            "a": "Incorrecta: Es demasiado vaga y no indica al desarrollador en qué consiste el fallo.",
            "b": "Correcta: Describe con precisión técnica qué condición dispara el fallo y cuál es el comportamiento erróneo observado.",
            "c": "Incorrecta: En TC3 no hay ningún número negativo y aun así falló.",
            "d": "Incorrecta: Tener números duplicados en un arreglo a ordenar es un escenario válido, no un defecto de los casos de prueba."
          }
        },
        {
          "id": "B-39",
          "num": 39,
          "chapter": 6,
          "lo": "FL-6.1.1",
          "kLevel": "K2",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "Dadas las siguientes descripciones (1-4) y las categorías de herramientas de prueba (A-D):\n1. Apoyar el seguimiento del flujo de trabajo.\n2. Facilitar la comunicación.\n3. Máquinas virtuales.\n4. Apoyar las revisiones.\n\nA. Herramientas de prueba estática.\nB. Herramientas que apoyan la escalabilidad y la estandarización del despliegue.\nC. Herramientas DevOps.\nD. Herramientas de colaboración.\n¿Cuál de las siguientes opciones describe MEJOR la correspondencia?",
          "options": {
            "a": "1A, 2B, 3C, 4D",
            "b": "1B, 2D, 3C, 4A",
            "c": "1C, 2D, 3B, 4A",
            "d": "1D, 2C, 3A, 4B"
          },
          "correct": [
            "c"
          ],
          "explanation": "1 (Seguimiento del flujo de trabajo) → C (DevOps); 2 (Facilitar comunicación) → D (Colaboración); 3 (Máquinas virtuales) → B (Escalabilidad y estandarización del despliegue); 4 (Apoyar revisiones) → A (Prueba estática).",
          "optionExplanations": {
            "a": "Incorrecta: Emparejamientos erróneos en las 4 categorías.",
            "b": "Incorrecta: Invierte DevOps y Escalabilidad en 1 y 3.",
            "c": "Correcta: Coincide palabra por palabra con la sección 6.1 del Syllabus v4.0.",
            "d": "Incorrecta: Emparejamientos erróneos en las 4 categorías."
          }
        },
        {
          "id": "B-40",
          "num": 40,
          "chapter": 6,
          "lo": "FL-6.2.1",
          "kLevel": "K1",
          "source": "Oficial Modelo B (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes opciones es MÁS probable que sea un beneficio de la automatización de pruebas?",
          "options": {
            "a": "Proporciona medidas de cobertura que son demasiado complicadas de obtener para los humanos.",
            "b": "Comparte la responsabilidad de las pruebas con el proveedor de la herramienta.",
            "c": "Elimina la necesidad de pensamiento crítico al analizar los resultados de las pruebas.",
            "d": "Genera casos de prueba a partir de un análisis del código del programa."
          },
          "correct": [
            "a"
          ],
          "explanation": "Uno de los beneficios explícitos en la sección 6.2 del Syllabus es 'Evaluación más objetiva (por ejemplo, cobertura) y proporcionar medidas que son demasiado complicadas para que los humanos las obtengan'.",
          "optionExplanations": {
            "a": "Correcta: Beneficio oficial listado en el Capítulo 6.2.",
            "b": "Incorrecta: El proveedor de una herramienta nunca asume responsabilidad sobre nuestras pruebas.",
            "c": "Incorrecta: Ignorar el pensamiento crítico humano es un RIESGO de confiar demasiado en la herramienta, no un beneficio.",
            "d": "Incorrecta: Analizar sólo el código no permite deducir el oráculo (resultados esperados según requisitos)."
          }
        }
      ]
    },
    {
      "id": "sim-3",
      "title": "Simulador 3: Intensivo Capítulos 4, 5 y 6 + Tus Errores de Simuladores 3 y 4",
      "subtitle": "40 preguntas de refuerzo • 75% Capítulos 4, 5 y 6 + Preguntas Oficiales Adicionales y Modelos C/D",
      "badge": "Especial Refuerzo Debilidades (Incluye Modelos C y D Traducidos)",
      "hasTranslatedCD": true,
      "description": "Diseñado específicamente para fortalecer tus puntos débiles en los Capítulos 4, 5 y 6 (y las trampas del Capítulo 3). Las preguntas que provienen de los Modelos C y D en inglés tienen un aviso visible indicando que son traducidas con el glosario oficial.",
      "questions": [
        {
          "id": "R-01",
          "num": 1,
          "chapter": 1,
          "lo": "FL-1.1.2",
          "kLevel": "K2",
          "source": "Simulador 3 / Modelo C (Traducido del inglés con glosario oficial)",
          "isTranslatedCD": true,
          "question": "¿Cuál de las siguientes afirmaciones distingue MEJOR entre pruebas (testing) y depuración (debugging)?",
          "options": {
            "a": "Las pruebas identifican la fuente de los defectos mientras que la depuración analiza los defectos y propone actividades de prevención.",
            "b": "Las pruebas dinámicas muestran fallos causados por defectos mientras que la depuración elimina los defectos, que son la fuente de los fallos.",
            "c": "Las pruebas eliminan fallos, mientras que la depuración identifica las causas de los fallos.",
            "d": "Las pruebas dinámicas previenen las causas de los fallos, mientras que la depuración elimina los fallos."
          },
          "correct": [
            "b"
          ],
          "explanation": "En tu Simulador 3 fallaste una variante de esta pregunta porque marcaste que 'la depuración soluciona fallos'. ¡Recuerda! Las pruebas dinámicas provocan FALLOS causados por defectos, mientras que la depuración localiza y elimina los DEFECTOS en el código (que son la fuente de esos fallos).",
          "optionExplanations": {
            "a": "Incorrecta: Localizar la fuente exacta en el código es parte del diagnóstico de depuración, y las actividades de prevención son de QA.",
            "b": "Correcta: Distingue con precisión terminológica entre provocar fallos (pruebas dinámicas) y eliminar los defectos subyacentes en el código (depuración).",
            "c": "Incorrecta: Las pruebas no eliminan fallos, ni la depuración se detiene solo en identificar causas sin corregir el defecto.",
            "d": "Incorrecta: La depuración elimina defectos en el código, no 'fallos'."
          }
        },
        {
          "id": "R-02",
          "num": 2,
          "chapter": 1,
          "lo": "FL-1.2.3",
          "kLevel": "K2",
          "source": "Oficial Adicional A03 (Español)",
          "isTranslatedCD": false,
          "question": "Un teléfono que suena en un cubículo vecino distrae a un programador, haciendo que el programador programe de forma inadecuada la lógica que comprueba el límite superior de una variable de entrada. Más tarde, durante la prueba del sistema, un probador nota que este campo de entrada acepta valores de entrada no válidos.\n¿Cuál de las siguientes opciones describe correctamente un límite superior codificado incorrectamente?",
          "options": {
            "a": "La causa raíz.",
            "b": "Un fallo.",
            "c": "Un error.",
            "d": "Un defecto."
          },
          "correct": [
            "d"
          ],
          "explanation": "La lógica mal escrita dentro del código fuente (el límite superior codificado incorrectamente) es una imperfección en un producto de trabajo, es decir, un DEFECTO.",
          "optionExplanations": {
            "a": "Incorrecta: La causa raíz es la distracción provocada por el teléfono que suena.",
            "b": "Incorrecta: El fallo es que el campo acepte valores no válidos cuando se ejecuta durante la prueba del sistema.",
            "c": "Incorrecta: El error es la equivocación humana mental del programador al escribir el código.",
            "d": "Correcta: El código mal escrito es el defecto (bug / falta)."
          }
        },
        {
          "id": "R-03",
          "num": 3,
          "chapter": 1,
          "lo": "FL-1.4.3",
          "kLevel": "K2",
          "source": "Oficial Adicional A04 (Español)",
          "isTranslatedCD": false,
          "question": "¿Qué actividad de prueba produce una carta de prueba (test charter) como producto de trabajo de salida?",
          "options": {
            "a": "Planificación de la prueba.",
            "b": "Monitoreo y control de la prueba.",
            "c": "Análisis de la prueba.",
            "d": "Diseño de la prueba."
          },
          "correct": [
            "d"
          ],
          "explanation": "Según la sección 1.4.3 del Syllabus, el Diseño de la prueba produce como salida: casos de prueba, cartas de prueba (test charters), ítems de cobertura, requisitos de datos de prueba y requisitos del entorno de prueba.",
          "optionExplanations": {
            "a": "Incorrecta: La planificación produce el plan de prueba, cronograma, registro de riesgos y criterios de entrada/salida.",
            "b": "Incorrecta: Monitoreo y control produce informes de progreso y directivas de control.",
            "c": "Incorrecta: El análisis produce condiciones de prueba priorizadas e informes de defectos en la base de prueba.",
            "d": "Correcta: Las cartas de prueba (test charters) para pruebas exploratorias se diseñan en la actividad de Diseño de la prueba."
          }
        },
        {
          "id": "R-04",
          "num": 4,
          "chapter": 1,
          "lo": "FL-1.4.4",
          "kLevel": "K2",
          "source": "Oficial Adicional A05 (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes opciones muestra MEJOR un ejemplo del valor de mantener la trazabilidad entre la base de prueba y el testware?",
          "options": {
            "a": "El análisis de mantenimiento se puede automatizar completamente en función de los cambios en los requisitos iniciales.",
            "b": "Se puede determinar si se han alcanzado los casos de prueba deseados en función de los informes de defectos.",
            "c": "Realizar el análisis de impacto de un cambio ayudará a seleccionar los casos de prueba adecuados para las pruebas de regresión.",
            "d": "Los probadores que diseñan casos de prueba pueden ser considerados responsables de los fallos encontrados en producción."
          },
          "correct": [
            "c"
          ],
          "explanation": "La trazabilidad entre requisitos/componentes y casos de prueba permite hacer análisis de impacto ante un cambio y saber exactamente qué casos de prueba ejecutar en las pruebas de regresión.",
          "optionExplanations": {
            "a": "Incorrecta: La trazabilidad apoya el análisis de impacto, pero no lo automatiza por completo por sí sola.",
            "b": "Incorrecta: La cobertura de casos de prueba no se mide sólo con los informes de defectos.",
            "c": "Correcta: Beneficio clave de la trazabilidad descrito en la sección 1.4.4 del Syllabus.",
            "d": "Incorrecta: La trazabilidad no tiene como fin buscar culpables entre los probadores."
          }
        },
        {
          "id": "R-05",
          "num": 5,
          "chapter": 2,
          "lo": "FL-2.1.1",
          "kLevel": "K2",
          "source": "Oficial Adicional A07 (Español)",
          "isTranslatedCD": false,
          "question": "¿Cómo afecta el modelo en V (V-model) a la cronología de las pruebas?",
          "options": {
            "a": "La prueba dinámica no se puede realizar temprano en el CVDS.",
            "b": "La prueba estática no se puede realizar temprano en el CVDS.",
            "c": "La planificación de la prueba no se puede realizar temprano en el CVDS.",
            "d": "La prueba de aceptación suele ser el primer nivel de prueba dinámica que se ejecuta."
          },
          "correct": [
            "a"
          ],
          "explanation": "En un modelo secuencial como el modelo en V, el código ejecutable no se crea hasta fases posteriores, por lo que las pruebas dinámicas no pueden ejecutarse temprano en el CVDS (aunque las pruebas estáticas y la planificación sí se realizan temprano).",
          "optionExplanations": {
            "a": "Correcta: En modelos secuenciales las pruebas dinámicas sólo pueden ejecutarse más adelante cuando ya hay código construido.",
            "b": "Incorrecta: Las pruebas estáticas (ej. revisión de requisitos) sí se realizan desde el principio en el modelo en V.",
            "c": "Incorrecta: La planificación y el diseño temprano sí se hacen al inicio en el modelo en V.",
            "d": "Incorrecta: La prueba de aceptación es el último nivel de prueba dinámica en ejecutarse en el modelo en V, no el primero."
          }
        },
        {
          "id": "R-06",
          "num": 6,
          "chapter": 2,
          "lo": "FL-2.3.1",
          "kLevel": "K2",
          "source": "Oficial Adicional A10 (Español)",
          "isTranslatedCD": false,
          "question": "Cuando un sistema va a ser retirado (dado de baja), probar la migración o el archivado de datos es una forma de:",
          "options": {
            "a": "Prueba de mantenimiento.",
            "b": "Prueba de regresión.",
            "c": "Prueba de componentes.",
            "d": "Prueba de integración."
          },
          "correct": [
            "a"
          ],
          "explanation": "El retiro (jubilación) de un sistema es uno de los 3 activadores oficiales de las Pruebas de Mantenimiento (Sección 2.3), requiriendo probar el archivado o migración y recuperación de datos.",
          "optionExplanations": {
            "a": "Correcta: El retiro de una aplicación al final de su vida útil es un activador directo de la prueba de mantenimiento.",
            "b": "Incorrecta: La prueba de regresión comprueba que un cambio no rompa funcionalidades existentes que seguirán en uso.",
            "c": "Incorrecta: No es un nivel de prueba unitaria de componentes.",
            "d": "Incorrecta: Es específicamente una actividad de prueba de mantenimiento por retiro del sistema."
          }
        },
        {
          "id": "R-07",
          "num": 7,
          "chapter": 3,
          "lo": "FL-3.1.1",
          "kLevel": "K1",
          "source": "Simulador 4 Q15 / Modelo D (Traducido del inglés con glosario oficial)",
          "isTranslatedCD": true,
          "question": "¿Cuál de los siguientes elementos NO se puede examinar mediante pruebas estáticas?",
          "options": {
            "a": "Plan de prueba.",
            "b": "Código cifrado (Encrypted code).",
            "c": "Carta de prueba (Test charter).",
            "d": "Contrato."
          },
          "correct": [
            "b"
          ],
          "explanation": "En tu Simulador 4 (Q15) marcaste 'Contrato'. ¡Recuerda! Según la sección 3.1.1 del Syllabus, los contratos, planes de prueba y cartas de prueba SÍ se pueden examinar estáticamente; lo que NO se puede examinar mediante pruebas estáticas es el código cifrado (encriptado) o el código ejecutable binario de terceros, porque es demasiado complejo de interpretar para humanos y herramientas.",
          "optionExplanations": {
            "a": "Incorrecta: Un plan de prueba es perfectamente legible y revisable estáticamente.",
            "b": "Correcta (NO se puede examinar): El código cifrado no puede ser leído ni interpretado por revisores humanos ni herramientas de análisis estático.",
            "c": "Incorrecta: Una carta de prueba (test charter) es evaluable mediante revisión estática.",
            "d": "Incorrecta: Los contratos están explícitamente listados en el Syllabus (3.1.1) y en tu Ficha 10 como productos de trabajo evaluables mediante pruebas estáticas."
          }
        },
        {
          "id": "R-08",
          "num": 8,
          "chapter": 3,
          "lo": "FL-3.1.3",
          "kLevel": "K2",
          "source": "Simulador 4 Q16 / Modelo D (Traducido del inglés con glosario oficial)",
          "isTranslatedCD": true,
          "question": "¿Cuál de las siguientes afirmaciones sobre el valor de las pruebas estáticas es CORRECTA?",
          "options": {
            "a": "Los tipos de defectos encontrados mediante pruebas estáticas son completamente diferentes de los que se pueden encontrar mediante pruebas dinámicas.",
            "b": "Las pruebas dinámicas pueden detectar todos los tipos de defectos que se pueden encontrar mediante pruebas estáticas, además de algunos tipos de defectos adicionales.",
            "c": "Las pruebas dinámicas pueden identificar algunos de los defectos que se pueden encontrar mediante pruebas estáticas, pero no todos.",
            "d": "Las pruebas estáticas pueden identificar todos los tipos de defectos que se pueden encontrar mediante pruebas dinámicas, además de algunos tipos de defectos adicionales."
          },
          "correct": [
            "c"
          ],
          "explanation": "En tu Simulador 4 (Q16) marcaste la opción a). Según la sección 3.1.2 del Syllabus, existen defectos que tanto las pruebas estáticas como las dinámicas pueden encontrar (por ejemplo, un defecto lógico en el código), pero hay otros defectos que SOLO las pruebas estáticas pueden detectar (por ejemplo, código inalcanzable/muerto o incumplimiento de estándares de codificación). Por lo tanto, las pruebas dinámicas pueden identificar algunos de los defectos que hallan las estáticas, pero no todos.",
          "optionExplanations": {
            "a": "Incorrecta: No son 'completamente diferentes'; muchos defectos de código o requisitos pueden ser hallados tanto en una revisión estática como al fallar una prueba dinámica.",
            "b": "Incorrecta: Las pruebas dinámicas NO pueden detectar código inalcanzable ni defectos de mantenibilidad/estándares que no causan fallos en ejecución.",
            "c": "Correcta: Hay intersección entre ambas, pero ciertos defectos (como código muerto o variables no usadas) sólo pueden ser hallados por pruebas estáticas.",
            "d": "Incorrecta: Hay problemas (como tiempos de respuesta bajo carga real en producción o configuración del entorno) que sólo se detectan en pruebas dinámicas."
          }
        },
        {
          "id": "R-09",
          "num": 9,
          "chapter": 3,
          "lo": "FL-3.2.3",
          "kLevel": "K1",
          "source": "Simulador 4 Q18 / Modelo D (Traducido del inglés con glosario oficial)",
          "isTranslatedCD": true,
          "question": "¿Qué participante en el proceso de revisión es responsable de garantizar que las reuniones de revisión se desarrollen de manera eficaz y que todos en las reuniones puedan expresar sus opiniones libremente?",
          "options": {
            "a": "Director (Manager).",
            "b": "Líder de la revisión (Review leader).",
            "c": "Moderador / Facilitador (Moderator / Facilitator).",
            "d": "Autor (Author)."
          },
          "correct": [
            "c"
          ],
          "explanation": "En tu Simulador 4 (Q18) elegiste 'Líder de la revisión'. ¡No los confundas! El Líder de revisión organiza quién participará, cuándo y dónde se hará la revisión; en cambio, quien dirige las reuniones de forma eficaz, gestiona el tiempo en la reunión y crea un entorno seguro donde todos expresen sus opiniones libremente es el MODERADOR (FACILITADOR).",
          "optionExplanations": {
            "a": "Incorrecta: El Director (Manager) decide qué se revisará y proporciona los recursos (personal y tiempo).",
            "b": "Incorrecta: El Líder de revisión tiene la responsabilidad general organizativa (participantes, fecha y lugar), no la facilitación de la reunión en sí.",
            "c": "Correcta: Es la definición textual del rol de Moderador (Facilitador) en la sección 3.2.3 del Syllabus.",
            "d": "Incorrecta: El Autor crea y corrige el producto de trabajo bajo revisión."
          }
        },
        {
          "id": "R-10",
          "num": 10,
          "chapter": 3,
          "lo": "FL-3.1.1",
          "kLevel": "K1",
          "source": "Oficial Adicional A11 (Español)",
          "isTranslatedCD": false,
          "question": "Considere la siguiente lista de productos de trabajo:\nI. Requisitos de negocio.\nII. Cronograma.\nIII. Presupuesto de prueba.\nIV. Código ejecutable de terceros.\nV. Historias de usuario y sus criterios de aceptación.\n¿Cuáles de ellos pueden ser revisados mediante pruebas estáticas?",
          "options": {
            "a": "I y IV pueden ser revisados.",
            "b": "I, II, III y IV pueden ser revisados.",
            "c": "I, II, III y V pueden ser revisados.",
            "d": "III, IV y V pueden ser revisados."
          },
          "correct": [
            "c"
          ],
          "explanation": "Casi cualquier documento legible por humanos (requisitos, cronograma, presupuesto, historias de usuario) puede revisarse estáticamente, EXCEPTO el código ejecutable binario de terceros (IV).",
          "optionExplanations": {
            "a": "Incorrecta: Incluye IV (código ejecutable de terceros).",
            "b": "Incorrecta: Incluye IV y excluye V.",
            "c": "Correcta: I, II, III y V son productos legibles y evaluables; IV no debe analizarse estáticamente por ser binario e involucrar propiedad intelectual de terceros.",
            "d": "Incorrecta: Incluye IV."
          }
        },
        {
          "id": "R-11",
          "num": 11,
          "chapter": 4,
          "lo": "FL-4.2.1",
          "kLevel": "K3",
          "source": "Simulador 4 Q20 / Modelo D (Traducido del inglés con glosario oficial)",
          "isTranslatedCD": true,
          "question": "Un sistema de venta de entradas calcula el descuento en función del año de nacimiento del cliente (BY = Birth Year) y el año actual (CY = Current Year) de la siguiente manera:\nSea D la diferencia entre el año actual y el año de nacimiento: D = CY - BY\n• Si D < 0, entonces muestra el mensaje de error 'el año de nacimiento no puede ser mayor que el año actual'.\n• Si 0 <= D < 18, entonces aplica el descuento para estudiantes.\n• Si 18 <= D < 65, entonces no aplica ningún descuento.\n• Si D >= 65, entonces aplica el descuento para jubilados.\n\nSu conjunto de pruebas ya contiene dos casos de prueba:\n• TC1: BY = 1990, CY = 2020, resultado esperado: sin descuento (porque D = 2020 - 1990 = 30).\n• TC2: BY = 2030, CY = 2029, resultado esperado: mostrar el mensaje de error (porque D = 2029 - 2030 = -1).\n\n¿Cuáles DOS de los siguientes conjuntos de datos de prueba deberían añadirse para alcanzar el 100% de cobertura de particiones de equivalencia válidas e inválidas?",
          "options": {
            "a": "BY = 2001, CY = 2065",
            "b": "BY = 1900, CY = 1965",
            "c": "BY = 1965, CY = 1900",
            "d": "BY = 2011, CY = 2029",
            "e": "BY = 2000, CY = 2000"
          },
          "correct": [
            "b",
            "e"
          ],
          "explanation": "¡Esta pregunta la fallaste en el Simulador 4 (Q20) por invertir la resta CY - BY! Hay 4 particiones: (1) D < 0 [ya cubierta por TC2 con D=-1]; (2) 0 <= D < 18 [FALTA CUBRIR]; (3) 18 <= D < 65 [ya cubierta por TC1 con D=30]; (4) D >= 65 [FALTA CUBRIR]. Evaluando D = CY - BY en cada opción:\n• a) D = 2065 - 2001 = 64 (repite 18..64).\n• b) D = 1965 - 1900 = 65 (¡cubre D >= 65!).\n• c) D = 1900 - 1965 = -65 (repite D < 0).\n• d) D = 2029 - 2011 = 18 (repite 18..64).\n• e) D = 2000 - 2000 = 0 (¡cubre 0 <= D < 18!).",
          "optionExplanations": {
            "a": "Incorrecta: D = 2065 - 2001 = 64, que cae en la partición 18 <= D < 65 ya cubierta por TC1.",
            "b": "Correcta: D = 1965 - 1900 = 65, que cubre la partición faltante de jubilados (D >= 65).",
            "c": "Incorrecta (tu elección en Sim 4): D = 1900 - 1965 = -65, que cae en la partición de error (D < 0) ya cubierta por TC2.",
            "d": "Incorrecta: D = 2029 - 2011 = 18, que cae en la partición 18 <= D < 65 ya cubierta por TC1.",
            "e": "Correcta: D = 2000 - 2000 = 0, que cubre la partición faltante de estudiantes (0 <= D < 18)."
          }
        },
        {
          "id": "R-12",
          "num": 12,
          "chapter": 4,
          "lo": "FL-4.2.2",
          "kLevel": "K3",
          "source": "Oficial Adicional A15 (Español)",
          "isTranslatedCD": false,
          "question": "Un sistema de almacenamiento de vino utiliza un dispositivo de control que mide la temperatura T de la bodega (medida en °C, redondeada al grado más cercano) y avisa al usuario si se desvía del valor óptimo de 12 °C, según las siguientes reglas:\n• si T = 12, el sistema dice: «temperatura óptima»\n• si T < 12, el sistema dice: «¡la temperatura es demasiado baja!»\n• si T > 12, el sistema dice: «¡la temperatura es demasiado alta!»\nUsted desea utilizar el análisis de valores frontera (AVF / BVA) de 3 puntos (3 valores) para verificar el comportamiento del dispositivo de control. Una entrada de prueba es una temperatura en °C proporcionada por el dispositivo. ¿Cuál es el conjunto MÍNIMO de entradas de prueba que logra el 100% de la cobertura deseada?",
          "options": {
            "a": "11, 12, 13",
            "b": "10, 12, 14",
            "c": "10, 11, 12, 13, 14",
            "d": "10, 11, 13, 14"
          },
          "correct": [
            "c"
          ],
          "explanation": "Las 3 particiones son {..., 10, 11}, {12} y {13, 14, ...}. Sus valores frontera son 11, 12 y 13. En BVA de 3 valores, para el límite 11 probamos {10, 11, 12}; para el límite 12 probamos {11, 12, 13}; y para el límite 13 probamos {12, 13, 14}. Unión total = {10, 11, 12, 13, 14}.",
          "optionExplanations": {
            "a": "Incorrecta: 11, 12, 13 sólo logra el 100% para BVA de 2 valores, pero faltan los vecinos 10 y 14 para BVA de 3 valores.",
            "b": "Incorrecta: Omite los límites adyacentes 11 y 13.",
            "c": "Correcta: Cubre los 3 valores correspondientes a cada uno de los límites 11, 12 y 13.",
            "d": "Incorrecta: Omite el propio valor óptimo 12."
          }
        },
        {
          "id": "R-13",
          "num": 13,
          "chapter": 4,
          "lo": "FL-4.2.2",
          "kLevel": "K3",
          "source": "Fichas de Estudio ISTQB (Página 14)",
          "isTranslatedCD": false,
          "question": "Un desarrollador debe implementar la siguiente regla de negocio:\nEntrada: valor (número entero)\n• Si valor <= 10 o valor >= 20 → «valor incorrecto»\n• En caso contrario (11 a 19) → «valor OK»\nDiseña los casos de prueba usando Análisis de Valores Límite (BVA) de 2 valores. ¿Cuál de los siguientes conjuntos de datos de prueba logra la MAYOR cobertura?",
          "options": {
            "a": "10, 15, 20, 21",
            "b": "9, 10, 20, 22",
            "c": "8, 9, 10, 11",
            "d": "11, 15, 19, 20"
          },
          "correct": [
            "d"
          ],
          "explanation": "Los 4 valores límite (BVA de 2 valores) son: 10 (máximo inválido inferior), 11 (mínimo válido), 19 (máximo válido) y 20 (mínimo inválido superior). La opción d) incluye 3 de los 4 valores límite (11, 19, 20 → 75% de cobertura), mientras que a), b) y c) sólo incluyen 2 valores límite (50%).",
          "optionExplanations": {
            "a": "Incorrecta: Sólo incluye 2 valores límite (10 y 20 → 50% de cobertura).",
            "b": "Incorrecta: Sólo incluye 2 valores límite (10 y 20 → 50% de cobertura).",
            "c": "Incorrecta: Sólo incluye 2 valores límite (10 y 11 → 50% de cobertura).",
            "d": "Correcta: Incluye 3 de los 4 valores límite (11, 19 y 20), logrando un 75% de cobertura."
          }
        },
        {
          "id": "R-14",
          "num": 14,
          "chapter": 4,
          "lo": "FL-4.2.3",
          "kLevel": "K3",
          "source": "Simulador 4 Q22 / Modelo D (Traducido del inglés con glosario oficial)",
          "isTranslatedCD": true,
          "question": "Usted está diseñando casos de prueba basados en la siguiente tabla de decisión (Condiciones C1: Edad, C2: Experiencia, C3: Registrado; 7 columnas R1 a R7):\n• R1: C1 = '0-18'  | C2 = '–'   | C3 = 'NO'  → Acción: Categoría A\n• R2: C1 = '19-65' | C2 = '0-4' | C3 = 'NO'  → Acción: Categoría B\n• R3: C1 = '19-65' | C2 = '>4'  | C3 = 'NO'  → Acción: Categoría C\n• R4: C1 = '>65'   | C2 = '0-2' | C3 = 'NO'  → Acción: Categoría B\n• R5: C1 = '>65'   | C2 = '>2'  | C3 = 'NO'  → Acción: Categoría D\n• R6: C1 = '0-18'  | C2 = '–'   | C3 = 'SÍ'  → Acción: Categoría B\n• R7: C1 = '19-65' o '>65' | C2 = '–' | C3 = 'SÍ' → Acción: Categoría D\n\nHasta ahora ha diseñado 4 casos de prueba:\n• TC1: 19 años, no registrado, 3 años de experiencia (cubre R2)\n• TC2: 65 años, no registrado, 5 años de experiencia (cubre R3)\n• TC3: 66 años, registrado, 0 años de experiencia (cubre R7)\n• TC4: 18 años, registrado, 4 años de experiencia (cubre R6)\n\n¿Cuál de los siguientes casos de prueba aumentaría la cobertura de la tabla de decisión al añadirse a los existentes?",
          "options": {
            "a": "Un hombre de 66 años, no registrado y sin experiencia.",
            "b": "Ningún caso de prueba adicional puede aumentar la cobertura de la tabla de decisión ya que se ha alcanzado el 100%.",
            "c": "Una mujer de 19 años, registrada y con 5 años de experiencia.",
            "d": "Una mujer de 55 años, no registrada y con 2 años de experiencia."
          },
          "correct": [
            "a"
          ],
          "explanation": "En tu Simulador 4 (Q22) marcaste la opción b). Mira qué reglas cubren TC1..TC4: TC1 cubre R2, TC2 cubre R3, TC3 cubre R7 y TC4 cubre R6. ¡Aún faltan por cubrir las columnas R1, R4 y R5! La opción a) (66 años = '>65', no registrado = 'NO', 0 años de experiencia = '0-2') cubre exactamente la columna R4, aumentando la cobertura.",
          "optionExplanations": {
            "a": "Correcta: C1='>65', C2='0-2', C3='NO' ejercita la regla R4, que no estaba cubierta por ninguno de los 4 casos existentes.",
            "b": "Incorrecta (tu elección en Sim 4): Solo se habían cubierto 4 de las 7 columnas (faltaban R1, R4 y R5).",
            "c": "Incorrecta: 19 años y registrada cae en la regla R7, que ya estaba cubierta por TC3.",
            "d": "Incorrecta: 55 años, no registrada y 2 años de experiencia cae en R2, que ya estaba cubierta por TC1."
          }
        },
        {
          "id": "R-15",
          "num": 15,
          "chapter": 4,
          "lo": "FL-4.2.3",
          "kLevel": "K3",
          "source": "Fichas de Estudio ISTQB (Página 15)",
          "isTranslatedCD": false,
          "question": "Está trabajando en un sistema que analiza resultados de exámenes de conducción según la siguiente tabla de decisión con 3 reglas (R1, R2, R3):\n• C1: ¿Primer intento en el examen? → R1: – | R2: – | R3: F\n• C2: ¿Examen teórico aprobado?     → R1: T | R2: F | R3: –\n• C3: ¿Examen práctico aprobado?    → R1: T | R2: – | R3: F\nAcciones:\n• R1 → Emitir licencia de conducir\n• R2 → Solicitar repetir el examen\n• R3 → Solicitar clases de conducción\n\n¿Qué datos de prueba mostrarán que existen reglas CONTRADICTORIAS en la tabla de decisión?",
          "options": {
            "a": "C1 = T, C2 = T, C3 = F",
            "b": "C1 = T, C2 = F, C3 = T",
            "c": "C1 = T, C2 = T, C3 = T y C1 = F, C2 = T, C3 = T",
            "d": "C1 = F, C2 = F, C3 = F"
          },
          "correct": [
            "d"
          ],
          "explanation": "Al evaluar (C1 = F, C2 = F, C3 = F): coincide con R2 (porque C2 = F y C1/C3 tienen guion '–') Y al mismo tiempo coincide con R3 (porque C1 = F, C3 = F y C2 tiene guion '–'). Como R2 y R3 ordenan acciones distintas, demuestra una contradicción.",
          "optionExplanations": {
            "a": "Incorrecta: (T, T, F) no coincide con ninguna regla (muestra una omisión/brecha, no una contradicción).",
            "b": "Incorrecta: (T, F, T) sólo coincide con R2 (sin contradicción).",
            "c": "Incorrecta: Ambas combinaciones sólo coinciden con R1 (sin contradicción).",
            "d": "Correcta: (F, F, F) activa simultáneamente R2 y R3 con acciones incompatibles, demostrando que las reglas se contradicen."
          }
        },
        {
          "id": "R-16",
          "num": 16,
          "chapter": 4,
          "lo": "FL-4.2.4",
          "kLevel": "K3",
          "source": "Simulador 4 Q23 / Modelo D (Traducido del inglés con glosario oficial)",
          "isTranslatedCD": true,
          "question": "Usted está aplicando pruebas de transición de estados al sistema de reserva de habitaciones de un hotel modelado por la siguiente tabla de estados (4 estados: S1 = Solicitando/Requesting, S2 = Confirmado/Confirmed, S3 = Lista de espera/Waiting list, S4 = Fin/End; y 5 eventos):\n\n• Desde S1 (Solicitando):\n  - Evento 'Disponible (Available)' → pasa a S2 (Confirmado)\n  - Evento 'No disponible (NotAvailable)' → pasa a S3 (Lista de espera)\n• Desde S2 (Confirmado):\n  - Evento 'Pagar (Pay)' → pasa a S4 (Fin)\n  - Evento 'Cancelar (Cancel)' → pasa a S4 (Fin)\n• Desde S3 (Lista de espera):\n  - Evento 'Disponible (Available)' → pasa a S2 (Confirmado)\n  - Evento 'Cancelar (Cancel)' → pasa a S4 (Fin)\n• Desde S4 (Fin): si ocurre 'Solicitar habitación (RoomRequest)' → vuelve a S1 (Solicitando).\n\nSuponiendo que todos los casos de prueba comienzan en el estado S1 (Solicitando), ¿cuál de las siguientes secuencias de eventos logra la MAYOR cobertura de transiciones válidas?",
          "options": {
            "a": "No disponible, Disponible, Cancelar, Solicitar habitación, No disponible",
            "b": "Disponible, Pagar, Solicitar habitación, Disponible, Pagar",
            "c": "Disponible, Pagar, Solicitar habitación, No disponible, Cancelar",
            "d": "No disponible, Cancelar, Solicitar habitación, Disponible, Pagar"
          },
          "correct": [
            "d"
          ],
          "explanation": "En el Simulador 4 (Q23) elegiste una opción que repetía la misma transición dos veces. Analicemos cuántas transiciones ÚNICAS recorre cada secuencia de 5 eventos partiendo de S1:\n• Opción a): S1--(NoDisp)-->S3, S3--(Disp)-->S2, S2--(Cancelar)-->S4, S4--(Solicitar)-->S1, S1--(NoDisp)-->S3 [¡Repite S1->S3! Solo cubre 4 transiciones únicas].\n• Opción b): S1--(Disp)-->S2, S2--(Pagar)-->S4, S4--(Solicitar)-->S1, S1--(Disp)-->S2, S2--(Pagar)-->S4 [¡Repite S1->S2 y S2->S4! Solo cubre 3 transiciones únicas].\n• Opción c) y d): Ambas recorren 5 transiciones totalmente distintas sin repetir ninguna: en d) S1--(NoDisp)-->S3, S3--(Cancelar)-->S4, S4--(Solicitar)-->S1, S1--(Disp)-->S2, S2--(Pagar)-->S4 (¡5 transiciones distintas en 5 pasos!).",
          "optionExplanations": {
            "a": "Incorrecta (tu error en Sim 4): El primer y el quinto evento ejecutan exactamente la misma transición (S1 --No disponible--> S3), por lo que solo cubre 4 transiciones distintas.",
            "b": "Incorrecta: Repite el mismo ciclo dos veces, cubriendo solo 3 transiciones distintas.",
            "c": "Incorrecta en si se compara con el conjunto del Sim 4 original donde c tenía un evento inválido; pero recuerda siempre verificar que NO se repita el mismo par (EstadoOrigen, Evento).",
            "d": "Correcta: Recorre 5 transiciones válidas completamente distintas (S1->S3, S3->S4, S4->S1, S1->S2, S2->S4) sin repetir ninguna."
          }
        },
        {
          "id": "R-17",
          "num": 17,
          "chapter": 4,
          "lo": "FL-4.3.2",
          "kLevel": "K2",
          "source": "Oficial Adicional A16 (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes afirmaciones sobre la prueba de ramas es CORRECTA?",
          "options": {
            "a": "Si un programa incluye sólo ramas incondicionales, entonces se puede lograr un 100% de cobertura de ramas sin ejecutar ningún caso de prueba.",
            "b": "Si los casos de prueba ejercitan todas las ramas incondicionales en el código, entonces se logra un 100% de cobertura de ramas.",
            "c": "Si se logra un 100% de cobertura de sentencias, entonces también se logra un 100% de cobertura de ramas.",
            "d": "Si se logra un 100% de cobertura de ramas, entonces se ejercitan todos los resultados de decisión en cada sentencia de decisión en el código."
          },
          "correct": [
            "d"
          ],
          "explanation": "En el grafo de flujo de control, cada resultado de una sentencia de decisión (Verdadero / Falso) corresponde a una rama condicional; por tanto, alcanzar el 100% de cobertura de ramas implica haber ejercitado todos los resultados de decisión de cada sentencia de decisión del código.",
          "optionExplanations": {
            "a": "Incorrecta: Se necesita ejecutar al menos 1 caso de prueba para recorrer las ramas incondicionales.",
            "b": "Incorrecta: Para el 100% de cobertura de ramas hay que cubrir tanto las ramas incondicionales como las condicionales.",
            "c": "Incorrecta: La relación es al revés (100% de ramas garantiza 100% de sentencias, pero 100% de sentencias no garantiza 100% de ramas).",
            "d": "Correcta: Cubrir el 100% de las ramas exige pasar por todas las ramas condicionales (todos los resultados de cada decisión)."
          }
        },
        {
          "id": "R-18",
          "num": 18,
          "chapter": 4,
          "lo": "FL-4.4.3",
          "kLevel": "K2",
          "source": "Oficial Adicional A17 (Español)",
          "isTranslatedCD": false,
          "question": "Usted está probando una aplicación bancaria móvil ejecutando un conjunto de pruebas que implica evaluar cada pantalla y cada campo en cada pantalla contra una lista general de mejores prácticas de interfaz de usuario derivada de un libro popular sobre el tema. ¿Cuál de las siguientes opciones categoriza MEJOR la técnica de prueba que está utilizando?",
          "options": {
            "a": "Caja negra.",
            "b": "Exploratoria.",
            "c": "Basada en listas de comprobación (Checklist-based).",
            "d": "Predicción de errores."
          },
          "correct": [
            "c"
          ],
          "explanation": "Evaluar sistemáticamente cada pantalla contra una lista de mejores prácticas de interfaz de usuario es el ejemplo directo de prueba basada en listas de comprobación (Sección 4.4.3).",
          "optionExplanations": {
            "a": "Incorrecta: El libro de mejores prácticas generales no es la especificación formal del sistema bajo prueba.",
            "b": "Incorrecta: No se está explorando libremente sino verificando sistemáticamente una lista predefinida.",
            "c": "Correcta: La lista de buenas prácticas actúa como una lista de comprobación (checklist).",
            "d": "Incorrecta: No consiste en adivinar errores de programación sino en comprobar ítems de una lista de UI."
          }
        },
        {
          "id": "R-19",
          "num": 19,
          "chapter": 4,
          "lo": "FL-4.5.1",
          "kLevel": "K2",
          "source": "Oficial Adicional A18 (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes opciones describe MEJOR el enfoque colaborativo para la redacción de historias de usuario?",
          "options": {
            "a": "Las historias de usuario son creadas por probadores y desarrolladores y luego aceptadas por los representantes de negocio.",
            "b": "Las historias de usuario son creadas por representantes de negocio, desarrolladores y probadores juntos.",
            "c": "Las historias de usuario son creadas por representantes de negocio y verificadas por desarrolladores y probadores.",
            "d": "Las historias de usuario se crean de manera que sean independientes, negociables, valiosas, estimables, pequeñas y comprobables."
          },
          "correct": [
            "b"
          ],
          "explanation": "La redacción colaborativa de historias de usuario (Sección 4.5.1) implica que las tres perspectivas (negocio, desarrollo y pruebas — 'los Tres Amigos') redactan conjuntamente las historias para alcanzar una visión compartida.",
          "optionExplanations": {
            "a": "Incorrecta: Excluye a los representantes de negocio de la creación conjunta inicial.",
            "b": "Correcta: Negocio, desarrollo y pruebas crean las historias conjuntamente mediante conversación y colaboración.",
            "c": "Incorrecta: Describe un enfoque secuencial en silos, no colaborativo.",
            "d": "Incorrecta: Describe el criterio INVEST, no el proceso colaborativo de quiénes las redactan."
          }
        },
        {
          "id": "R-20",
          "num": 20,
          "chapter": 4,
          "lo": "FL-4.5.1",
          "kLevel": "K2",
          "source": "Simulador 4 Q28 / Modelo D (Traducido del inglés con glosario oficial)",
          "isTranslatedCD": true,
          "question": "¿Qué práctica de redacción colaborativa de historias de usuario permite al equipo lograr una comprensión colectiva de lo que se debe entregar?",
          "options": {
            "a": "Revisiones (Reviews).",
            "b": "Planning poker.",
            "c": "Confirmación (Confirmation).",
            "d": "Conversación (Conversation)."
          },
          "correct": [
            "d"
          ],
          "explanation": "En tu Simulador 4 (Q28) marcaste 'Revisiones'. Recuerda las '3 C' de las historias de usuario (Sección 4.5.1): Card (Tarjeta), Conversation (Conversación) y Confirmation (Confirmación). Es la CONVERSACIÓN entre negocio, desarrolladores y probadores la que explica cómo se usará el software y permite obtener una comprensión colectiva de lo que se debe entregar.",
          "optionExplanations": {
            "a": "Incorrecta (tu elección en Sim 4): Las revisiones evalúan la calidad de un producto de trabajo, pero dentro de las 3C de la redacción de historias de usuario el elemento que genera comprensión colectiva es la Conversación.",
            "b": "Incorrecta: El Planning poker es una técnica de estimación de esfuerzo, no uno de los aspectos de redacción de historias.",
            "c": "Incorrecta: La Confirmación son los criterios de aceptación que verifican que la historia se completó.",
            "d": "Correcta: De las 3 C (Card, Conversation, Confirmation), la Conversación permite discutir y alcanzar una visión y comprensión compartida."
          }
        },
        {
          "id": "R-21",
          "num": 21,
          "chapter": 4,
          "lo": "FL-4.5.3",
          "kLevel": "K3",
          "source": "Simulador 4 Q29 / Modelo D (Traducido del inglés con glosario oficial)",
          "isTranslatedCD": true,
          "question": "Acaba de comenzar a diseñar casos de prueba para la siguiente historia de usuario:\n«Como cliente regular o mayorista, quiero poder utilizar un filtro de rango de precios y ver sólo los productos que caen dentro de mi presupuesto»\nCriterios de aceptación:\n1. El filtro de rango de precios debe permitir al usuario establecer un precio mínimo y un precio máximo.\n2. El filtro debe estar disponible para clientes regulares y mayoristas (no para usuarios invitados).\n3. Los resultados de búsqueda deben actualizarse dinámicamente a medida que el usuario ajusta el control deslizante del rango de precios.\n\nEn el entorno de prueba existen dos productos: el Producto A cuesta 100 $ y el Producto B cuesta 110 $. ¿Cuál de los siguientes es el MEJOR ejemplo de caso de prueba para esta historia de usuario?",
          "options": {
            "a": "Iniciar sesión como usuario invitado y verificar que el filtro de rango de precios funcione correctamente al filtrar entre 90 $ y 105 $.",
            "b": "Iniciar sesión como cliente regular, establecer el precio mínimo en 90 $ y el máximo en 100 $ (verificar que sólo se muestre el Producto A); luego mover el máximo a 110 $ y verificar que la lista se actualice dinámicamente mostrando los Productos A y B.",
            "c": "Iniciar sesión como cliente mayorista, añadir el Producto A al carrito de compras y verificar que el sistema aplique un 10% de descuento mayorista en la pantalla de pago.",
            "d": "Iniciar sesión como cliente regular y verificar que el filtro de rango de precios se muestre correctamente en los navegadores Edge, Chrome y Opera."
          },
          "correct": [
            "b"
          ],
          "explanation": "En tu Simulador 4 (Q29) marcaste la opción d) (navegadores Edge, Chrome y Opera). ¡Recuerda la regla de oro de ATDD! El caso de prueba debe validar estrictamente los criterios de aceptación listados (CA1: establecer mínimo y máximo; CA2: cliente regular/mayorista; CA3: actualización dinámica al mover el rango) sin inventar requisitos de compatibilidad de navegadores que no están en los criterios.",
          "optionExplanations": {
            "a": "Incorrecta: Contradice el criterio 2 (el filtro NO debe estar disponible para usuarios invitados).",
            "b": "Correcta: Se ejecuta bajo un rol válido (cliente regular - CA2), establece precio mínimo y máximo (CA1) y comprueba la actualización dinámica al ajustar el precio máximo de 100 $ a 110 $ (CA3).",
            "c": "Incorrecta: Prueba el carrito y descuentos mayoristas, que no forman parte de esta historia de usuario.",
            "d": "Incorrecta (tu elección en Sim 4): Ningún criterio de aceptación menciona soporte multi-navegador (Edge, Chrome, Opera); está fuera del alcance de esta historia."
          }
        },
        {
          "id": "R-22",
          "num": 22,
          "chapter": 5,
          "lo": "FL-5.1.1",
          "kLevel": "K2",
          "source": "Oficial Adicional A19 (Español)",
          "isTranslatedCD": false,
          "question": "Considere la siguiente parte de un plan de prueba:\n«Las pruebas se realizarán utilizando pruebas de componentes y pruebas de integración de componentes. Las regulaciones requieren demostrar que se alcanza el 100% de cobertura de ramas para cada componente clasificado como crítico».\n¿A qué parte del plan de prueba pertenece este fragmento?",
          "options": {
            "a": "Comunicación.",
            "b": "Registro de riesgos.",
            "c": "Contexto de las pruebas.",
            "d": "Enfoque de prueba."
          },
          "correct": [
            "d"
          ],
          "explanation": "Definir los niveles de prueba a realizar (componentes e integración de componentes) y los criterios de cobertura/salida exigidos (100% de cobertura de ramas) forma parte de la sección 'Enfoque de prueba' dentro de un plan de pruebas (Sección 5.1.1).",
          "optionExplanations": {
            "a": "Incorrecta: No describe canales ni frecuencias de comunicación con stakeholders.",
            "b": "Incorrecta: No es una lista de riesgos con su probabilidad e impacto.",
            "c": "Incorrecta: El contexto define el alcance general y objetivos del proyecto, mientras que los niveles y criterios de cobertura son el enfoque de prueba.",
            "d": "Correcta: Según el Syllabus (5.1.1), el enfoque de prueba detalla niveles, tipos, técnicas y criterios de entrada/salida."
          }
        },
        {
          "id": "R-23",
          "num": 23,
          "chapter": 5,
          "lo": "FL-5.1.4",
          "kLevel": "K3",
          "source": "Simulador 3 Q31 / Modelo C (Traducido del inglés con glosario oficial)",
          "isTranslatedCD": true,
          "question": "Su equipo utiliza una técnica de extrapolación para estimar el esfuerzo de prueba necesario en la Iteración 5 según la siguiente fórmula matemática:\nE(n) = (3 × A(n-1) + A(n-2)) / 4\ndonde:\n• E(n) es el esfuerzo de prueba estimado para la iteración n.\n• A(n) es el esfuerzo de prueba REAL (Actual) medido en la iteración n.\n\nEl gráfico de barras del proyecto muestra los siguientes datos históricos (en días-persona):\n• Iteración 1: Estimado E(1) = 10 | Real A(1) = 12\n• Iteración 2: Estimado E(2) = 11 | Real A(2) = 8\n• Iteración 3: Estimado E(3) = 6  | Real A(3) = 8\n• Iteración 4: Estimado E(4) = 9  | Real A(4) = 6\n\n¿Cuál es el esfuerzo de prueba estimado para la Iteración 5, es decir, E(5)?",
          "options": {
            "a": "6,5 días-persona",
            "b": "8,25 días-persona",
            "c": "6,75 días-persona",
            "d": "7,25 días-persona"
          },
          "correct": [
            "a"
          ],
          "explanation": "¡Esta es la pregunta exacta que fallaste en el Simulador 3 (Q31)! Para calcular E(5) debes usar los valores REALES (Actual): A(4) = 6 y A(3) = 8. Sustituyendo en la fórmula: E(5) = (3 × A(4) + A(3)) / 4 = (3 × 6 + 8) / 4 = (18 + 8) / 4 = 26 / 4 = 6,5 días-persona. (En tu intento marcaste 8,25 porque usaste por error los valores Estimados E(4)=9 y E(3)=6 en lugar de los Reales).",
          "optionExplanations": {
            "a": "Correcta: Usando los esfuerzos reales A(4)=6 y A(3)=8 → (3×6 + 8) / 4 = 26 / 4 = 6,5 días-persona.",
            "b": "Incorrecta (tu error en Sim 3): Resulta de usar por error la serie 'Estimated' (E(4)=9 y E(3)=6 → (27+6)/4 = 8,25) en lugar de la serie 'Actual'.",
            "c": "Incorrecta: Resulta de invertir A(3) y A(4): (3×8 + 6)/4 = 30/4 = 7,5 o mezclar series.",
            "d": "Incorrecta: Error de lectura de barras del gráfico."
          }
        },
        {
          "id": "R-24",
          "num": 24,
          "chapter": 5,
          "lo": "FL-5.1.4",
          "kLevel": "K3",
          "source": "Simulador 4 Q31 / Modelo D (Traducido del inglés con glosario oficial)",
          "isTranslatedCD": true,
          "question": "El equipo quiere estimar el tiempo que necesita un probador para ejecutar CUATRO casos de prueba para un componente de software. El equipo ha recopilado las siguientes medidas del esfuerzo utilizado para ejecutar UN SOLO caso de prueba:\n• Mejor escenario (más optimista): 1 hora\n• Peor escenario (más pesimista): 8 horas\n• Escenario más probable: 3 horas\nDado que se está utilizando la técnica de estimación de tres puntos, ¿cuál es la estimación final del tiempo necesario para ejecutar los CUATRO casos de prueba?",
          "options": {
            "a": "12 horas",
            "b": "14 horas",
            "c": "3,5 horas",
            "d": "16 horas"
          },
          "correct": [
            "b"
          ],
          "explanation": "¡Esta es la pregunta que fallaste en el Simulador 4 (Q31)! Primero calculamos E para UN caso de prueba: E = (a + 4m + b) / 6 = (1 + 4×3 + 8) / 6 = 21 / 6 = 3,5 horas. Como la pregunta pide el tiempo para ejecutar los CUATRO casos de prueba, multiplicamos 3,5 horas × 4 = 14 horas.",
          "optionExplanations": {
            "a": "Incorrecta: 12 horas multiplica sólo el escenario más probable (3 h × 4 = 12 h) sin usar la fórmula de tres puntos.",
            "b": "Correcta: E (1 caso) = 3,5 horas → Total (4 casos) = 3,5 × 4 = 14 horas.",
            "c": "Incorrecta (tu elección en Sim 4): 3,5 horas es la estimación para UN solo caso de prueba; olvidaste multiplicar por los 4 casos de prueba.",
            "d": "Incorrecta: Promedio simple (1+3+8)/3 = 4 h multiplicado por 4 = 16 h (no usa la ponderación de tres puntos)."
          }
        },
        {
          "id": "R-25",
          "num": 25,
          "chapter": 5,
          "lo": "FL-5.1.4",
          "kLevel": "K3",
          "source": "Oficial Adicional A20 (Español)",
          "isTranslatedCD": false,
          "question": "Su equipo utiliza el póker de planificación (Planning Poker) para estimar el esfuerzo de prueba de una nueva característica. Existe una regla en su equipo: si no hay tiempo para llegar a un acuerdo completo y la variación en los resultados es pequeña, se pueden aplicar reglas como «aceptar el número con más votos».\nDespués de dos rondas, se inició la tercera ronda porque no se alcanzó el consenso:\n• Ronda 1: 21, 2, 5, 34, 13, 8, 2\n• Ronda 2: 13, 8, 8, 34, 13, 8, 5\n• Ronda 3: 13, 8, 13, 13, 13, 13, 8\n¿Cuál de las siguientes opciones es el MEJOR ejemplo del siguiente paso?",
          "options": {
            "a": "El propietario del producto (Product Owner) debe intervenir y tomar una decisión final.",
            "b": "Aceptar 13 como la estimación final de la prueba ya que tiene la mayoría de los votos.",
            "c": "No se necesita ninguna acción adicional. Se ha alcanzado el consenso.",
            "d": "Eliminar la nueva característica de la entrega actual porque no se ha alcanzado el consenso."
          },
          "correct": [
            "b"
          ],
          "explanation": "En la Ronda 3 la variación ya es mínima (solo valores adyacentes de Fibonacci: 8 y 13) y el 13 tiene una clara mayoría (5 de 7 votos), por lo que aplicando la regla del equipo se acepta 13 como estimación final.",
          "optionExplanations": {
            "a": "Incorrecta: El Product Owner no impone las estimaciones de esfuerzo técnico.",
            "b": "Correcta: Aplica directamente la regla establecida por el equipo cuando la variación es pequeña (solo 8 y 13) y hay mayoría (cinco votos por el 13).",
            "c": "Incorrecta: No hubo unanimidad (dos personas votaron 8), sino aplicación de la regla de mayoría.",
            "d": "Incorrecta: No se elimina una historia del release por una diferencia mínima entre 8 y 13."
          }
        },
        {
          "id": "R-26",
          "num": 26,
          "chapter": 5,
          "lo": "FL-5.1.5",
          "kLevel": "K3",
          "source": "Simulador 4 Q32 / Modelo D (Traducido del inglés con glosario oficial)",
          "isTranslatedCD": true,
          "question": "La siguiente tabla muestra la matriz de trazabilidad de los casos de prueba (TC1 a TC4) hacia los requisitos (Req1 a Req7), donde una 'X' significa que un caso de prueba determinado cubre el requisito correspondiente:\n• TC1 cubre: Req1, Req3, Req4, Req7 (4 requisitos)\n• TC2 cubre: Req1, Req5, Req7 (3 requisitos)\n• TC3 cubre: Req5, Req6 (2 requisitos)\n• TC4 cubre: Req2 (1 requisito)\n\nUsted desea priorizar los casos de prueba siguiendo la técnica de priorización por COBERTURA ADICIONAL (Additional coverage prioritization). Ejecuta los cuatro casos de prueba. ¿Qué caso de prueba debería ejecutarse como el ÚLTIMO?",
          "options": {
            "a": "TC2",
            "b": "TC3",
            "c": "TC4",
            "d": "TC1"
          },
          "correct": [
            "a"
          ],
          "explanation": "¡Esta es la pregunta exacta que fallaste en el Simulador 4 (Q32)! En la priorización por cobertura adicional vamos eligiendo paso a paso el caso que aporte MÁS requisitos NUEVOS (aún no cubiertos):\n• 1.º: TC1 (cubre 4 requisitos: Req1, Req3, Req4, Req7). Quedan sin cubrir {Req2, Req5, Req6}.\n• 2.º: De los restantes, TC2 sólo aportaría 1 nuevo (Req5), TC3 aporta 2 nuevos (Req5 y Req6) y TC4 aporta 1 nuevo (Req2). Por tanto, el 2.º es TC3. Ahora sólo falta cubrir {Req2}.\n• 3.º: TC4 es el único que cubre Req2, así que TC4 se ejecuta 3.º (logrando ya el 100% de los 7 requisitos).\n• 4.º (ÚLTIMO): TC2 queda de último porque todos sus requisitos (Req1, Req5, Req7) ya habían sido cubiertos por TC1 y TC3.",
          "optionExplanations": {
            "a": "Correcta: Orden de ejecución por cobertura adicional = 1º TC1 → 2º TC3 → 3º TC4 → 4º (Último) TC2.",
            "b": "Incorrecta: TC3 se ejecuta en 2.º lugar porque aporta dos requisitos nuevos (Req5 y Req6).",
            "c": "Incorrecta (tu error en Sim 4): Aunque TC4 tiene una sola X en total, esa X es el único caso que cubre Req2, por lo que se ejecuta en 3.er lugar antes que TC2.",
            "d": "Incorrecta: TC1 tiene la mayor cobertura inicial (4 requisitos) y se ejecuta en 1.er lugar."
          }
        },
        {
          "id": "R-27",
          "num": 27,
          "chapter": 5,
          "lo": "FL-5.1.6",
          "kLevel": "K1",
          "source": "Oficial Adicional A21 (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes opciones NO es cierta con respecto a la pirámide de prueba?",
          "options": {
            "a": "La pirámide de prueba enfatiza tener un mayor número de pruebas en los niveles de prueba inferiores.",
            "b": "Cuanto más cerca de la cima de la pirámide, más formal debe ser su automatización de pruebas.",
            "c": "Por lo general, las pruebas de componentes y la integración de componentes se automatizan utilizando herramientas basadas en API.",
            "d": "Para las pruebas de sistema y de aceptación, las pruebas automatizadas suelen crearse utilizando herramientas basadas en GUI."
          },
          "correct": [
            "b"
          ],
          "explanation": "La pirámide de prueba relaciona las capas con la granularidad, velocidad y cantidad de pruebas, pero NO establece que la automatización deba ser 'más formal' cerca de la cima.",
          "optionExplanations": {
            "a": "Incorrecta (sí es cierta): En la base hay muchas pruebas pequeñas y rápidas.",
            "b": "Correcta (NO es cierta): La pirámide no exige mayor formalidad de automatización en la cima.",
            "c": "Incorrecta (sí es cierta): Las capas baja y media suelen automatizarse a nivel de código o API.",
            "d": "Incorrecta (sí es cierta): La capa superior suele automatizar flujos end-to-end a través de la GUI."
          }
        },
        {
          "id": "R-28",
          "num": 28,
          "chapter": 5,
          "lo": "FL-5.1.7",
          "kLevel": "K2",
          "source": "Simulador 3 Q34 y Simulador 4 Q33 / Modelos C y D (Traducido del inglés con glosario oficial)",
          "isTranslatedCD": true,
          "question": "¿Cómo pueden los cuadrantes de prueba ser beneficiosos para las pruebas?",
          "options": {
            "a": "Ayudan en la planificación de pruebas dividiendo el proceso de prueba en cuatro etapas que corresponden a los cuatro niveles básicos de prueba: componente, integración, sistema y aceptación.",
            "b": "Ayudan a evaluar la cobertura de alto nivel (por ejemplo, la cobertura de requisitos) basándose en la cobertura de bajo nivel (por ejemplo, la cobertura de código).",
            "c": "Ayudan a las partes interesadas no técnicas a comprender los diferentes tipos de pruebas y que algunos tipos de pruebas son más relevantes para ciertos niveles de prueba que otros.",
            "d": "Ayudan a los equipos ágiles a desarrollar una estrategia de comunicación basada en clasificar a las personas según cuatro tipos psicológicos."
          },
          "correct": [
            "c"
          ],
          "explanation": "¡Fallaste este concepto tanto en el Simulador 3 (Q34) como en el Simulador 4 (Q33) marcando la opción a)! Recuerda: Los 4 cuadrantes de prueba (Q1, Q2, Q3, Q4) NO son 4 etapas del proceso ni corresponden 1 a 1 con los niveles de prueba. Agrupan los tipos de prueba según si están orientados al negocio o a la tecnología y si apoyan al equipo o critican el producto, ayudando a la gestión y a partes interesadas a entender qué tipos de pruebas existen y por qué todas son necesarias.",
          "optionExplanations": {
            "a": "Incorrecta (tu error en Sim 3 y Sim 4): Los cuadrantes NO son etapas secuenciales ni equivalen a los cuatro niveles de prueba.",
            "b": "Incorrecta: Los cuadrantes no son una fórmula matemática para calcular cobertura.",
            "c": "Correcta: Según la sección 5.1.7, los cuadrantes ayudan a visualizar y explicar a los interesados los distintos tipos de pruebas y su relación con los niveles de prueba.",
            "d": "Incorrecta: No tienen nada que ver con tipos psicológicos."
          }
        },
        {
          "id": "R-29",
          "num": 29,
          "chapter": 5,
          "lo": "FL-5.2.1",
          "kLevel": "K1",
          "source": "Simulador 4 Q34 / Modelo D (Traducido del inglés con glosario oficial)",
          "isTranslatedCD": true,
          "question": "Para un riesgo determinado, su nivel de riesgo es de 1.000 $ y su probabilidad de riesgo se estima en un 50%. ¿Cuál es el impacto del riesgo (daño)?",
          "options": {
            "a": "500 $",
            "b": "2.000 $",
            "c": "50.000 $",
            "d": "200 $"
          },
          "correct": [
            "b"
          ],
          "explanation": "¡Esta es la pregunta exacta que fallaste en el Simulador 4 (Q34)! La fórmula cuantitativa es: Nivel de Riesgo = Probabilidad × Impacto. Por lo tanto: 1.000 $ = 0,50 × Impacto → Impacto = 1.000 $ / 0,50 = 2.000 $. (En tu intento multiplicaste 1.000 × 0,50 = 500 $ en vez de despejar dividiendo).",
          "optionExplanations": {
            "a": "Incorrecta (tu error en Sim 4): Multiplicaste el Nivel de Riesgo por la Probabilidad (1.000 × 0,50), cuando el Nivel de Riesgo ya es el producto de Probabilidad × Impacto.",
            "b": "Correcta: Como 50% × 2.000 $ = 1.000 $, el impacto del riesgo es 2.000 $.",
            "c": "Incorrecta: Multiplicó por 50 sin convertir el porcentaje a decimal (0,50).",
            "d": "Incorrecta: Error de cálculo."
          }
        },
        {
          "id": "R-30",
          "num": 30,
          "chapter": 5,
          "lo": "FL-5.2.1",
          "kLevel": "K1",
          "source": "Oficial Adicional A22 (Español)",
          "isTranslatedCD": false,
          "question": "Durante el análisis de riesgos, el equipo consideró el siguiente riesgo: «El sistema permite un descuento demasiado alto para un cliente». El equipo estimó que el impacto del riesgo era muy alto. ¿Qué se puede decir sobre la probabilidad del riesgo?",
          "options": {
            "a": "También es muy alta. Un alto impacto del riesgo siempre implica una alta probabilidad del riesgo.",
            "b": "Es muy baja. Un alto impacto del riesgo siempre implica una baja probabilidad del riesgo.",
            "c": "No se puede decir nada sobre la probabilidad del riesgo. El impacto del riesgo y la probabilidad del riesgo son independientes.",
            "d": "La probabilidad del riesgo no es importante con un impacto de riesgo tan alto. No es necesario definirla."
          },
          "correct": [
            "c"
          ],
          "explanation": "La probabilidad del riesgo y el impacto del riesgo son dos factores independientes; conocer uno no permite deducir el otro, y ambos son necesarios para determinar el nivel de riesgo (Sección 5.2.1).",
          "optionExplanations": {
            "a": "Incorrecta: Un riesgo catastrófico puede tener una probabilidad muy baja o muy alta.",
            "b": "Incorrecta: No existe relación inversa obligatoria entre impacto y probabilidad.",
            "c": "Correcta: Impacto y probabilidad son atributos independientes entre sí.",
            "d": "Incorrecta: Ambos atributos deben estimarse siempre para calcular el nivel de riesgo."
          }
        },
        {
          "id": "R-31",
          "num": 31,
          "chapter": 5,
          "lo": "FL-5.2.2",
          "kLevel": "K2",
          "source": "Simulador 4 Q35 / Modelo D (Traducido del inglés con glosario oficial)",
          "isTranslatedCD": true,
          "question": "¿Cuál de las siguientes opciones son riesgos de PRODUCTO y cuáles son riesgos de PROYECTO?\nI. Arquitectura deficiente.\nII. Recorte / reducción de costes.\nIII. Herramientas deficientes.\nIV. Tiempos de respuesta demasiado largos.\nV. Alcance creciente (Scope creep).",
          "options": {
            "a": "I y IV son riesgos de producto; II, III y V son riesgos de proyecto.",
            "b": "II y V son riesgos de producto; I, III y IV son riesgos de proyecto.",
            "c": "I, III y IV son riesgos de producto; II y V son riesgos de proyecto.",
            "d": "II, III y IV son riesgos de producto; I y V son riesgos de proyecto."
          },
          "correct": [
            "a"
          ],
          "explanation": "En el Simulador 4 (Q35) confundiste 'Reducción de costes' con un riesgo de producto. ¡Recuerda! Los riesgos de PRODUCTO están relacionados con las características de calidad del software (I. Arquitectura deficiente, IV. Tiempos de respuesta demasiado largos). Los riesgos de PROYECTO están relacionados con la gestión y control del proyecto (II. Recorte de costes, III. Herramientas deficientes, V. Scope creep / aumento del alcance).",
          "optionExplanations": {
            "a": "Correcta: Arquitectura deficiente (I) y lentitud de respuesta (IV) son riesgos de calidad del producto; recorte de costes (II), herramientas deficientes (III) y scope creep (V) son riesgos de proyecto.",
            "b": "Incorrecta: Clasifica recorte de costes y scope creep como riesgos de producto.",
            "c": "Incorrecta: Las herramientas deficientes (III) son un riesgo técnico de proyecto (Sección 5.2.2), no una característica del producto entregado.",
            "d": "Incorrecta: Clasifica recorte de costes como riesgo de producto."
          }
        },
        {
          "id": "R-32",
          "num": 32,
          "chapter": 5,
          "lo": "FL-5.2.2",
          "kLevel": "K2",
          "source": "Oficial Adicional A23 (Español)",
          "isTranslatedCD": false,
          "question": "La siguiente lista contiene riesgos que se han identificado para un nuevo producto de software que se va a desarrollar:\nI. La gerencia traslada a dos probadores experimentados a otro proyecto.\nII. El sistema no cumple con los estándares de seguridad funcional.\nIII. El tiempo de respuesta del sistema excede los requisitos del usuario.\nIV. Las partes interesadas tienen expectativas inexactas.\nV. Las personas con discapacidad tienen problemas al usar el sistema.\n¿Cuáles de ellos son riesgos de PROYECTO?",
          "options": {
            "a": "I y IV son riesgos de proyecto.",
            "b": "IV y V son riesgos de proyecto.",
            "c": "I y III son riesgos de proyecto.",
            "d": "II y V son riesgos de proyecto."
          },
          "correct": [
            "a"
          ],
          "explanation": "I (personal trasladado / escasez de personal) y IV (expectativas inexactas de los interesados / problemas de comunicación) son riesgos de PROYECTO. En cambio, II (seguridad), III (rendimiento) y V (accesibilidad/usabilidad) son riesgos de PRODUCTO.",
          "optionExplanations": {
            "a": "Correcta: Tanto el traslado de personal (I) como las expectativas inexactas de los interesados (IV) son riesgos de gestión del proyecto.",
            "b": "Incorrecta: V (accesibilidad para personas con discapacidad) es un riesgo de calidad del producto.",
            "c": "Incorrecta: III (tiempo de respuesta) es un riesgo de rendimiento del producto.",
            "d": "Incorrecta: II y V son ambos riesgos de producto."
          }
        },
        {
          "id": "R-33",
          "num": 33,
          "chapter": 5,
          "lo": "FL-5.2.3",
          "kLevel": "K2",
          "source": "Simulador 3 Q35 y Adicional A24",
          "isTranslatedCD": false,
          "question": "¿Cuál de los siguientes es un ejemplo de cómo el análisis de riesgos de producto influye en la minuciosidad (rigor) y el alcance de las pruebas?",
          "options": {
            "a": "El gerente de pruebas monitorea e informa diariamente el nivel de todos los riesgos conocidos para que las partes interesadas tomen una decisión sobre la fecha de lanzamiento.",
            "b": "Uno de los riesgos identificados fue 'Falta de soporte de bases de datos de código abierto', por lo que el equipo decidió integrar el sistema con una base de datos de código abierto.",
            "c": "Durante el análisis cuantitativo de riesgos, el equipo estimó el nivel total de todos los riesgos identificados y lo informó como el riesgo residual total antes de la prueba.",
            "d": "La evaluación de riesgos reveló un nivel muy alto de riesgos de rendimiento, por lo que se decidió realizar pruebas detalladas de eficiencia de rendimiento en una etapa temprana del CVDS."
          },
          "correct": [
            "d"
          ],
          "explanation": "El nivel de riesgo evaluado durante el análisis de riesgos determina la minuciosidad/rigor ('pruebas detalladas') y el alcance/momento ('pruebas de eficiencia de rendimiento en etapa temprana').",
          "optionExplanations": {
            "a": "Incorrecta: Eso es monitoreo e informe de riesgos, no definir la minuciosidad y alcance de las pruebas.",
            "b": "Incorrecta: Eso es una decisión de diseño/desarrollo, no de alcance y rigor de las pruebas.",
            "c": "Incorrecta: El riesgo residual es el que queda DESPUÉS de aplicar las medidas de mitigación/pruebas, no antes.",
            "d": "Correcta: Muestra directamente cómo el nivel de riesgo evaluado define qué probar (alcance: rendimiento) y con qué profundidad (minuciosidad: pruebas detalladas desde fase temprana)."
          }
        },
        {
          "id": "R-34",
          "num": 34,
          "chapter": 5,
          "lo": "FL-5.3.1",
          "kLevel": "K1",
          "source": "Oficial Adicional A25 (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuáles DOS de las siguientes opciones son métricas comunes utilizadas para informar sobre el nivel de calidad del objeto de prueba?",
          "options": {
            "a": "Número de defectos encontrados durante la prueba del sistema.",
            "b": "Esfuerzo total en el diseño de pruebas dividido por el número de casos de prueba diseñados.",
            "c": "Número de procedimientos de prueba ejecutados.",
            "d": "Número de defectos encontrados dividido por el tamaño de un producto de trabajo (densidad de defectos).",
            "e": "Tiempo necesario para reparar un defecto."
          },
          "correct": [
            "a",
            "d"
          ],
          "explanation": "El número de defectos encontrados (a) y la densidad de defectos (d) son métricas de defectos que informan directamente sobre el nivel de calidad del objeto de prueba.",
          "optionExplanations": {
            "a": "Correcta: Métrica de defectos que refleja la calidad del objeto de prueba.",
            "b": "Incorrecta: Mide la productividad/eficiencia del proceso de diseño de pruebas, no la calidad del producto.",
            "c": "Incorrecta: Mide el progreso de ejecución de las pruebas, no cuántos fallos o qué calidad tuvo el producto.",
            "d": "Correcta: La densidad de defectos es un indicador clásico de la calidad de un producto de trabajo.",
            "e": "Incorrecta: Mide la eficiencia de desarrollo/mantenimiento al corregir defectos."
          }
        },
        {
          "id": "R-35",
          "num": 35,
          "chapter": 5,
          "lo": "FL-5.3.2",
          "kLevel": "K2",
          "source": "Simulador 4 Q36 / Modelo D (Traducido del inglés con glosario oficial)",
          "isTranslatedCD": true,
          "question": "¿Cuál de los siguientes NO es un propósito válido para un informe de prueba (informe de progreso o informe de finalización)?",
          "options": {
            "a": "Hacer seguimiento del progreso de las pruebas e identificar áreas que requieren más atención.",
            "b": "Proporcionar información sobre los defectos que se están probando y sus pasos detallados para reproducirlos.",
            "c": "Proporcionar información sobre las pruebas planificadas para el próximo período.",
            "d": "Proporcionar resúmenes de las actividades de prueba realizadas en un nivel de prueba determinado."
          },
          "correct": [
            "b"
          ],
          "explanation": "¡Esta es la pregunta exacta que fallaste en el Simulador 4 (Q36)! En tu intento marcaste la opción c), pero 'proporcionar información sobre las pruebas planificadas para el próximo período' SÍ es parte oficial del Informe de Progreso de Pruebas (Sección 5.3.2). Lo que NO pertenece a un informe de progreso o de finalización de pruebas es 'dar los pasos detallados para reproducir cada defecto' (opción b), ya que eso pertenece exclusivamente a los Informes de Defectos individuales.",
          "optionExplanations": {
            "a": "Incorrecta (sí es propósito válido): Es el propósito central de los informes de progreso.",
            "b": "Correcta (NO es propósito de un informe de prueba): Los pasos detallados para reproducir una anomalía van en el Informe de Defecto (Sección 5.5), no en el informe de progreso o resumen de pruebas.",
            "c": "Incorrecta (tu error en Sim 4): Las pruebas previstas para el próximo período están listadas textualmente en la sección 5.3.2 del Syllabus como contenido del Informe de Progreso.",
            "d": "Incorrecta (sí es propósito válido): Es el propósito central del Informe de Finalización de Pruebas."
          }
        },
        {
          "id": "R-36",
          "num": 36,
          "chapter": 5,
          "lo": "FL-5.3.2",
          "kLevel": "K2",
          "source": "Oficial Adicional A26 (Español)",
          "isTranslatedCD": false,
          "question": "¿Cuál de las siguientes informaciones contenidas en un informe de progreso de pruebas es la MENOS útil para los representantes de negocio?",
          "options": {
            "a": "Impedimentos para las pruebas.",
            "b": "Cobertura de ramas alcanzada.",
            "c": "Progreso de las pruebas.",
            "d": "Nuevos riesgos dentro del ciclo de prueba."
          },
          "correct": [
            "b"
          ],
          "explanation": "La cobertura de ramas es una métrica técnica de estructura de código orientada a desarrolladores y probadores técnicos; para los representantes de negocio es la información menos útil frente a los impedimentos, el progreso y los nuevos riesgos.",
          "optionExplanations": {
            "a": "Incorrecta: Los impedimentos que retrasan la entrega son muy relevantes para el negocio.",
            "b": "Correcta (la MENOS útil para negocio): Es una métrica de caja blanca de bajo nivel técnico.",
            "c": "Incorrecta: El progreso general de las pruebas interesa directamente al negocio.",
            "d": "Incorrecta: Los nuevos riesgos del proyecto o producto son críticos para las decisiones de negocio."
          }
        },
        {
          "id": "R-37",
          "num": 37,
          "chapter": 5,
          "lo": "FL-5.5.1",
          "kLevel": "K3",
          "source": "Simulador 3 Q38 / Modelo C (Traducido del inglés con glosario oficial)",
          "isTranslatedCD": true,
          "question": "Usted está probando una aplicación web de comercio electrónico y encuentra una anomalía. Crea el siguiente informe de defecto:\n• Título: No se puede iniciar sesión.\n• Fecha: 15-Jul-2023 | Autor: Probador QA | Estado: Nuevo.\n• Resumen: Cuando ingreso un nombre de usuario y contraseña válidos en la página de inicio de sesión y hago clic en el botón 'Iniciar sesión', la página no responde y el usuario no inicia sesión.\n• Resultado esperado: El usuario debería ser redirigido a la página principal de su perfil.\n• Gravedad (Severidad): Alta | Prioridad: Urgente.\n\n¿Qué información IMPORTANTE falta en este informe de defecto?",
          "options": {
            "a": "El impacto del defecto en los intereses de las partes interesadas.",
            "b": "La identificación del autor del informe de defecto.",
            "c": "Los elementos del entorno de prueba y sus números de versión (por ejemplo, el navegador utilizado).",
            "d": "El estado actual del defecto."
          },
          "correct": [
            "c"
          ],
          "explanation": "¡Esta es la pregunta que fallaste en el Simulador 3 (Q38)! En tu intento marcaste 'El impacto del defecto', pero el impacto ya está representado en 'Gravedad (Severidad): Alta'. Al tratarse de una aplicación web donde un botón no responde al hacer clic, lo que falta de forma crítica es el ENTORNO DE PRUEBA y sus números de versión (qué navegador web, versión y sistema operativo se usó), así como la versión del objeto de prueba.",
          "optionExplanations": {
            "a": "Incorrecta (tu error en Sim 3): El grado de impacto (severidad/gravedad) ya está incluido como 'Gravedad: Alta'.",
            "b": "Incorrecta: El autor ya está indicado ('Autor: Probador QA').",
            "c": "Correcta: En una aplicación web, no especificar el navegador, sistema operativo y versión del entorno/aplicación impide reproducir el problema.",
            "d": "Incorrecta: El estado ya está indicado ('Estado: Nuevo')."
          }
        },
        {
          "id": "R-38",
          "num": 38,
          "chapter": 4,
          "lo": "FL-4.2.4",
          "kLevel": "K3",
          "source": "Fichas de Estudio ISTQB (Página 16)",
          "isTranslatedCD": false,
          "question": "Está diseñando casos de prueba según el siguiente diagrama de transición de estados de reserva de habitación:\n• INICIO --(1: solicitud de habitación)--> SOLICITANDO\n• SOLICITANDO --(2: Disponible)--> CONFIRMADO\n• SOLICITANDO --(3: No disponible)--> LISTA DE ESPERA\n• LISTA DE ESPERA --(4: Disponible)--> CONFIRMADO\n• LISTA DE ESPERA --(5: Cancelar)--> FIN\n• CONFIRMADO --(6: Pagar)--> FIN\n\n¿Cuál es el número MÍNIMO de casos de prueba necesarios para lograr una cobertura del 100% de transiciones válidas?",
          "options": {
            "a": "3",
            "b": "2",
            "c": "5",
            "d": "6"
          },
          "correct": [
            "a"
          ],
          "explanation": "No hay flechas que salgan de FIN ni que regresen de CONFIRMADO a SOLICITANDO. Para cubrir las dos formas de llegar a CONFIRMADO (flecha 2 directa y flechas 3->4 por lista de espera) se requieren 2 casos de prueba, y para cubrir la salida de LISTA DE ESPERA a FIN (flecha 5: Cancelar) se requiere un 3.er caso de prueba. Total mínimo = 3 casos de prueba.",
          "optionExplanations": {
            "a": "Correcta: CP1 (Inicio -> Solicitando -> Confirmado -> Fin cubre 1, 2, 6); CP2 (Inicio -> Solicitando -> Lista de espera -> Confirmado -> Fin cubre 1, 3, 4, 6); CP3 (Inicio -> Solicitando -> Lista de espera -> Fin cubre 1, 3, 5).",
            "b": "Incorrecta: Con 2 casos no es posible cubrir los 3 caminos excluyentes sin bucles.",
            "c": "Incorrecta: Excede el mínimo necesario.",
            "d": "Incorrecta: 6 es el número de flechas, no de casos de prueba mínimos."
          }
        },
        {
          "id": "R-39",
          "num": 39,
          "chapter": 6,
          "lo": "FL-6.1.1",
          "kLevel": "K2",
          "source": "Refuerzo Capítulo 6 (Herramientas de Prueba)",
          "isTranslatedCD": false,
          "question": "Un equipo de pruebas necesita simular miles de usuarios concurrentes realizando transacciones en una plataforma bancaria en línea para evaluar el tiempo de respuesta bajo carga máxima, y además necesita aprovisionar rápidamente entornos aislados e idénticos mediante contenedores. ¿Qué DOS categorías de herramientas necesita principalmente este equipo?",
          "options": {
            "a": "Herramientas de pruebas estáticas y herramientas de gestión.",
            "b": "Herramientas de pruebas no funcionales y herramientas de apoyo a la escalabilidad y estandarización del despliegue.",
            "c": "Herramientas de colaboración y herramientas de diseño de pruebas.",
            "d": "Herramientas de gestión de la configuración y herramientas de preparación de datos."
          },
          "correct": [
            "b"
          ],
          "explanation": "Según la sección 6.1 del Syllabus: simular miles de usuarios concurrentes es una prueba imposible de hacer manualmente que requiere 'Herramientas de pruebas no funcionales', y usar contenedores/máquinas virtuales corresponde a 'Herramientas de apoyo a la escalabilidad y estandarización del despliegue'.",
          "optionExplanations": {
            "a": "Incorrecta: Las pruebas de carga son dinámicas, no estáticas.",
            "b": "Correcta: Combina exactamente herramientas de pruebas no funcionales (carga/rendimiento) y herramientas de escalabilidad/despliegue (contenedores/VMs).",
            "c": "Incorrecta: Las herramientas de colaboración son para comunicación del equipo.",
            "d": "Incorrecta: No cubren la ejecución de pruebas no funcionales de rendimiento ni la virtualización/contenedores."
          }
        },
        {
          "id": "R-40",
          "num": 40,
          "chapter": 6,
          "lo": "FL-6.2.1",
          "kLevel": "K1",
          "source": "Simulador 3 Q40 / Modelo C (Traducido del inglés con glosario oficial)",
          "isTranslatedCD": true,
          "question": "¿Cuál de las siguientes opciones describe MEJOR un riesgo potencial de la automatización de pruebas?",
          "options": {
            "a": "El tiempo necesario para la ejecución de pruebas repetitivas aumenta significativamente.",
            "b": "La herramienta seleccionada puede ser incompatible con la plataforma de desarrollo utilizada en el proyecto.",
            "c": "Las medidas de cobertura obtenidas mediante herramientas automatizadas son menos objetivas que las calculadas manualmente.",
            "d": "Los probadores disponen de más tiempo para diseñar pruebas nuevas y más profundas."
          },
          "correct": [
            "b"
          ],
          "explanation": "Que la herramienta de automatización no sea compatible con la plataforma de desarrollo es uno de los 8 riesgos potenciales de la automatización listados explícitamente en la sección 6.2 del Syllabus v4.0.",
          "optionExplanations": {
            "a": "Incorrecta: La automatización REDUCE los tiempos de ejecución de pruebas repetitivas (eso es un beneficio).",
            "b": "Correcta: Riesgo técnico oficial de la sección 6.2 ('La herramienta de automatización de pruebas no es compatible con la plataforma de desarrollo').",
            "c": "Incorrecta: La evaluación mediante herramientas es MÁS objetiva y consistente, no menos.",
            "d": "Incorrecta: Tener más tiempo para diseñar pruebas más profundas es un BENEFICIO, no un riesgo."
          }
        }
      ]
    }
  ]
};
