const questions = [
  {
    q: "1. ¿De qué forma los espacios aislados (sandboxes) ayudan a analizar el malware?",
    options: [
      "Especifican las aplicaciones autorizadas en la red.",
      "Permiten que las aplicaciones sospechosas se ejecuten en un entorno seguro y aislado.",
      "Definen las aplicaciones malintencionadas que deben bloquearse.",
      "Impiden que el tráfico pase de una red a otra."
    ],
    correct: 1,
    expl: "Un sandbox permite ejecutar código potencialmente dañino de forma aislada sin poner en riesgo los sistemas de producción."
  },
  {
    q: "2. Relacione las fases del ciclo de respuesta a incidentes de NIST con su objetivo principal:",
    options: [
      "Contención, erradicación y recuperación: Mitiga el impacto directo del incidente.",
      "Detección y análisis: Previene que ocurran incidentes futuros.",
      "Preparación: Evalúa indicadores en tiempo real durante un ataque.",
      "Actividad posterior: Detiene la propagación del malware en la red."
    ],
    correct: 0,
    expl: "Fases NIST: 1. Preparación, 2. Detección/Análisis, 3. Contención/Erradicación/Recuperación (mitiga el impacto), 4. Actividad posterior."
  },
  {
    q: "3. ¿Qué tres funciones críticas proporcionan las VPN a los empleados remotos?",
    options: [
      "Administración de contraseñas, WAN y Autorización.",
      "Confidencialidad de la información, Integridad de los datos y Autenticación de usuarios.",
      "Cifrado de disco, Antivirus y Control de ancho de banda.",
      "Filtrado MAC, Monitoreo Syslog y Reglas NAT."
    ],
    correct: 1,
    expl: "Las VPNs garantizan confidencialidad (cifrado), integridad (los datos no cambian) y autenticación del usuario remoto."
  },
  {
    q: "4. ¿Qué tipo de datos se protege con el cifrado de disco duro?",
    options: ["Datos en proceso", "Datos en uso", "Datos en tránsito", "Datos en reposo"],
    correct: 3,
    expl: "Los datos guardados en almacenamiento físico (discos duros, SSDs) se clasifican como datos en reposo (data at rest)."
  },
  {
    q: "5. ¿Por qué es necesario actualizar el firmware a la última versión?",
    options: [
      "Para aplicar revisiones en el kernel del SO.",
      "Para corregir los agujeros de seguridad y las vulnerabilidades.",
      "Para admitir los sistemas operativos más recientes.",
      "Para explorar nuevas funciones de hardware."
    ],
    correct: 1,
    expl: "Las actualizaciones de firmware corrigen fallos de seguridad críticos a nivel de hardware/microcódigo."
  },
  {
    q: "6. ¿Qué requisitos se incluyen normalmente en una directiva BYOD?",
    options: [
      "Instalación de apps seguras, Cifrado de datos confidenciales y Configuración de contraseña segura.",
      "Eliminación de datos personales y sincronización obligatoria de contraseñas.",
      "Aumento de plan de datos al máximo y eliminación de Wi-Fi personal.",
      "Formateo total del dispositivo al entrar a las instalaciones."
    ],
    correct: 0,
    expl: "Las políticas BYOD buscan proteger los datos corporativos exigiendo contraseñas, cifrado y el uso exclusivo de apps seguras."
  },
  {
    q: "7. ¿Qué aplicación de Windows es una CLI con scripting avanzado para automatizar tareas?",
    options: ["MS-DOS", "PowerShell", "Símbolo del sistema", "Microsoft Management Console"],
    correct: 1,
    expl: "PowerShell combina una línea de comandos con un potente lenguaje de scripting basado en .NET."
  },
  {
    q: "8. ¿En qué orden se deben completar las acciones de administración de riesgos?",
    options: [
      "1. Identificar, 2. Priorizar, 3. Implementar respuesta, 4. Supervisar resultados",
      "1. Priorizar, 2. Identificar, 3. Supervisar, 4. Responder",
      "1. Implementar, 2. Identificar, 3. Priorizar, 4. Supervisar",
      "1. Identificar, 2. Implementar, 3. Priorizar, 4. Supervisar"
    ],
    correct: 0,
    expl: "El ciclo de gestión de riesgos siempre inicia identificando las amenazas y termina supervisando los controles implementados."
  },
  {
    q: "9. ¿Qué contraseña sigue las directrices de una política de contraseñas seguras?",
    options: ["Fluffy#", "Feb121978", "Wh@tareyouDo1ngtoday4", "1mPressm3!"],
    correct: 2,
    expl: "'Wh@tareyouDo1ngtoday4' combina longitud extensa (frase de paso), mayúsculas, minúsculas, números y símbolos."
  },
  {
    q: "10. ¿Qué tipo de cifrado se utiliza normalmente para proteger las redes Wi-Fi (WPA2/WPA3)?",
    options: ["AES", "RSA", "Triple DES", "DES"],
    correct: 0,
    expl: "WPA2 y WPA3 utilizan el estándar AES (Advanced Encryption Standard) para cifrar el tráfico inalámbrico."
  },
  {
    q: "11. Para cumplir con HIPAA en dispositivos móviles que acceden a ePHI, ¿qué medida es esencial?",
    options: [
      "Un plan de contingencia",
      "Una directiva que rija cómo se elimina la ePHI de los dispositivos móviles",
      "Una directiva de propiedad exclusiva de la empresa",
      "Uso obligatorio de pantallas protectoras"
    ],
    correct: 1,
    expl: "HIPAA exige procedimientos claros para el borrado seguro de datos de salud protegidos (ePHI) en dispositivos móviles."
  },
  {
    q: "12. ¿Qué debe hacer un cliente para que sus dispositivos IoT sean menos vulnerables a ataques?",
    options: [
      "Actualizar el firmware en los dispositivos IoT periódicamente",
      "Habilitar la difusión de SSID en el router",
      "Conectarlos a diferentes puntos de acceso",
      "Usar la máxima frecuencia de radio disponible"
    ],
    correct: 0,
    expl: "Mantener el firmware actualizado aplica los parches de seguridad necesarios en dispositivos IoT."
  },
  {
    q: "13. ¿Cómo lanzan los atacantes ataques de ransomware?",
    options: [
      "Modifican el sitio web público",
      "Bloquean los datos (cifrándolos) y deniegan el acceso hasta recibir un pago",
      "Espían en secreto a los empleados",
      "Solo destruyen el hardware del servidor"
    ],
    correct: 1,
    expl: "El ransomware cifra la información de la víctima y exige un rescate económico para restablecer el acceso."
  },
  {
    q: "14. ¿Qué evaluación comprueba la disponibilidad, precisión y confidencialidad de los datos personales?",
    options: ["Administración de flujos de trabajo", "Framework de riesgos", "Cyber Kill Chain", "Comprobación de información (Information Audit)"],
    correct: 3,
    expl: "Una auditoría o comprobación de información evalúa el cumplimiento de las propiedades CIA de los datos sensibles."
  },
  {
    q: "15. ¿Qué protocolo seguro debe usar para cifrar la transferencia de archivos de configuración a un router?",
    options: ["TFTP", "Telnet", "HTTP", "SSH / SCP"],
    correct: 3,
    expl: "SSH proporciona un canal cifrado seguro. Telnet, TFTP y HTTP transmiten datos en texto plano."
  },
  {
    q: "16. Un portátil no logra asociarse a un WAP en una sucursal. ¿Cuál es una causa probable?",
    options: [
      "El SSID no se transmite",
      "La IP del portátil no es correcta",
      "El WAP tiene activo el filtrado por direcciones MAC",
      "El WAP usa autenticación abierta"
    ],
    correct: 2,
    expl: "Si el filtrado MAC está activo, la dirección física del portátil nuevo será bloqueada aunque tenga la clave correcta."
  },
  {
    q: "17. ¿Qué característica de seguridad de macOS cifra todo el volumen del disco?",
    options: ["Gatekeeper", "FileVault", "System Integrity Protection (SIP)", "XProtect"],
    correct: 1,
    expl: "FileVault es la herramienta nativa de cifrado completo de disco en macOS."
  },
  {
    q: "18. Un formulario se envía por el puerto 80 (HTTP) y los datos pierden confidencialidad. ¿Cuál fue la causa?",
    options: [
      "La base de datos se dañó",
      "Los datos se transfirieron a la base de datos por un canal inseguro",
      "Navegador desactualizado",
      "Se accedió al sitio mediante HTTP, un protocolo sin cifrado"
    ],
    correct: 3,
    expl: "El puerto 80 transmite datos web en texto plano. Se debió usar HTTPS (Puerto 443) para cifrar el envío del formulario."
  },
  {
    q: "19. ¿Qué marco o normativa protege la información académica de los estudiantes?",
    options: ["FERPA", "FISMA", "RGPD", "HIPAA"],
    correct: 0,
    expl: "FERPA (Family Educational Rights and Privacy Act) protege la privacidad de los expedientes académicos."
  },
  {
    q: "20. ¿De qué forma mejora un señuelo (honeypot) la seguridad de la red?",
    options: [
      "Actúa como una trampa y desvía el tráfico malintencionado de los sistemas reales",
      "Inspecciona paquetes en tiempo real",
      "Aísla los servicios web de Internet",
      "Envía alertas de fallos de hardware"
    ],
    correct: 0,
    expl: "Un honeypot es un sistema trampa diseñado para atraer, distraer y estudiar a los atacantes."
  },
  {
    q: "21. ¿Qué debe crear en el firewall/router para evitar la suplantación de identidad (spoofing) de la red interna?",
    options: ["Un registro de DNS", "Un archivo host", "Una Lista de Control de Acceso (ACL)", "Una regla NAT"],
    correct: 2,
    expl: "Una ACL puede denegar el tráfico entrante de la interfaz externa que intente usar direcciones IP de la red interna."
  },
  {
    q: "22. ¿Qué dos herramientas permiten capturar paquetes IP entrantes en un archivo para su análisis?",
    options: ["tcpdump y Wireshark", "netstat y Nmap", "ping y traceroute", "nslookup y dig"],
    correct: 0,
    expl: "tcpdump (línea de comandos) y Wireshark (interfaz gráfica) son los analizadores/capturadores de paquetes estándar."
  },
  {
    q: "23. Finalidad principal de un Plan de Recuperación ante Desastres (DRP) frente a un Plan de Continuidad (BCP):",
    options: [
      "Restaurar la infraestructura TI y los datos lo antes posible",
      "Mantener la operación comercial abierta durante la crisis",
      "Atender clientes por vías alternativas",
      "Reducir costos operativos"
    ],
    correct: 0,
    expl: "El DRP se enfoca técnicamente en restaurar sistemas y TI; el BCP se enfoca en mantener la operación global del negocio."
  },
  {
    q: "24. ¿Qué dos hallazgos en un escaneo representan posibles vulnerabilidades a investigar?",
    options: [
      "Puertos abiertos innecesarios y Firewalls deshabilitados",
      "Contraseñas cifradas y paquetes SSH",
      "Servicios HTTPS activos y túneles VPN",
      "Copias de seguridad al día y logs de auditoría"
    ],
    correct: 0,
    expl: "Los puertos sin uso abiertos y la desactivación de firewalls aumentan la superficie de ataque."
  },
  {
    q: "25. ¿Qué comando muestra el servidor DNS configurado y resuelve la IP de un dominio?",
    options: ["traceroute", "nslookup", "ping", "Nmap"],
    correct: 1,
    expl: "nslookup (o dig) consulta servidores DNS para obtener la correspondencia entre nombres de dominio y direcciones IP."
  },
  {
    q: "26. Un mensaje Syslog con gravedad 'Advertencia' (Warning) en el servidor DNS indica que:",
    options: [
      "El servidor está inutilizable",
      "Existe una condición que causará errores futuros si no se resuelve",
      "Hay un error grave e inmediato",
      "Hay un fallo mecánico permanente"
    ],
    correct: 1,
    expl: "El nivel Warning alerta sobre eventos no críticos de inmediato, pero que pueden degradar el servicio con el tiempo."
  },
  {
    q: "27. Ciberdelincuentes contratados para mantener una presencia prolongada y sigilosa en la red rival:",
    options: ["APT (Amenaza Persistente Avanzada)", "Man-in-the-middle", "DDoS", "Ransomware"],
    correct: 0,
    expl: "Una APT se caracteriza por el acceso continuo, furtivo y no autorizado a una red durante un período extendido."
  },
  {
    q: "28. ¿Qué proceso permite dar seguimiento a versiones de SO, parches y actualizaciones en dispositivos?",
    options: ["Continuidad de negocio", "Políticas de seguridad", "Administración de activos (Asset Management)", "Gestión de incidentes"],
    correct: 2,
    expl: "La gestión de activos mantiene el inventario detallado del hardware y del software/parches instalados."
  },
  {
    q: "29. Para permitir que empleados remotos accedan de forma segura a la red interna desde sus casas:",
    options: ["BYOD", "IDS", "VPN", "SNMP"],
    correct: 2,
    expl: "La VPN (Virtual Private Network) establece un túnel cifrado sobre una red pública como Internet."
  },
  {
    q: "30. Los usuarios entran por URL a una intranet con errores tipográficos pero la IP sí funciona. ¿Qué revisar?",
    options: [
      "Restaurar la BD de contraseñas",
      "Desconectar el servidor",
      "Actualizar Apache/IIS",
      "Comprobar la exactitud de los registros en el servidor DNS local"
    ],
    correct: 3,
    expl: "Es un ataque de envenenamiento de DNS o error de resolución; la URL fue redirigida a una IP falsa/clonada."
  },
  {
    q: "31. ¿Qué finalidad tiene el comando 'ls -l' en Linux?",
    options: [
      "Mostrar el contenido de un archivo",
      "Mostrar los permisos de archivo y la propiedad del mismo",
      "Cambiar de directorio",
      "Abrir el editor de texto"
    ],
    correct: 1,
    expl: "El parámetro '-l' en ls muestra el formato detallado: permisos (rwx), dueño, grupo, tamaño y fecha de modificación."
  },
  {
    q: "32. Correo dirigido a contabilidad con un enlace a un sitio malicioso específico. ¿Qué amenaza es?",
    options: ["Smishing", "Vishing", "Phishing de objetivo definido (Spear Phishing)", "Ransomware"],
    correct: 2,
    expl: "El Spear Phishing está personalizado y dirigido específicamente a un grupo o individuo en concreto."
  },
  {
    q: "33. ¿Qué proporcionan los algoritmos hash a la comunicación de datos?",
    options: ["Irrenunciabilidad", "Autenticación de origen", "Cifrado", "Integridad de los datos"],
    correct: 3,
    expl: "Un hash genera una huella digital única. Si el archivo cambia un solo bit, el hash resultante cambia radicalmente."
  },
  {
    q: "34. ¿Qué ataque busca recopilar directamente las credenciales del usuario?",
    options: [
      "Listado de directorios del servidor",
      "Escaneo de puertos Nmap",
      "Puertas traseras",
      "Enviar un correo con un vínculo a una página de inicio de sesión falsa"
    ],
    correct: 3,
    expl: "Las páginas de login falsas (clonadas) se utilizan para engañar al usuario y capturar sus claves."
  },
  {
    q: "35. Un sitio web se cae repetidamente a los 30 minutos de reiniciar. ¿Qué ataque sospechar?",
    options: ["Ransomware", "Spear Phishing", "Ingeniería Social", "Denegación de Servicio (DoS/DDoS)"],
    correct: 3,
    expl: "Ataques DoS/DDoS inundan de tráfico el servidor hasta agotar los recursos y tirar la aplicación web."
  },
  {
    q: "36. Sacar un seguro y contratar a un tercero para mantener servidores y mitigar riesgos es:",
    options: ["Reducción de riesgos", "Elusión de riesgos", "Aceptación de riesgos", "Transferencia de riesgos"],
    correct: 3,
    expl: "La transferencia traslada el impacto financiero u operativo del riesgo a un tercero (aseguradora/proveedor)."
  },
  {
    q: "37. El SIEM detecta usuarios conectándose a una URL sospechosa. ¿Qué acción inicial tomar?",
    options: [
      "Visitar la URL desde el PC personal",
      "Bloquear el dominio sin analizar",
      "Entrevistar usuarios",
      "Enviar la URL a un portal de inteligencia de amenazas (Threat Intelligence) para su análisis"
    ],
    correct: 3,
    expl: "Herramientas como VirusTotal permiten analizar la reputación de la URL en un entorno seguro de inteligencia."
  },
  {
    q: "38. ¿Qué actividad es un ejemplo de reconocimiento ACTIVO en pentesting?",
    options: [
      "Consultar bases de datos WHOIS",
      "Realizar un análisis de puertos con Nmap en la LAN",
      "Inspeccionar el código HTML público",
      "Buscar empleados en LinkedIn"
    ],
    correct: 1,
    expl: "El reconocimiento activo interactúa directamente con los objetivos (p. ej., enviando paquetes de red con Nmap)."
  },
  {
    q: "39. Para ver el resultado de un análisis antivirus completo en un equipo Windows:",
    options: ["Seguridad de Windows", "Event Viewer (Registros)", "Task Manager", "Control Panel"],
    correct: 0,
    expl: "El centro de 'Seguridad de Windows' concentra el estado y los reportes de análisis del antivirus Defender."
  },
  {
    q: "40. ¿Qué alerta representa la mayor amenaza para una organización por ser un ataque NO detectado?",
    options: ["Falso negativo", "Falso positivo", "Verdadero negativo", "Verdadero positivo"],
    correct: 0,
    expl: "Un Falso Negativo significa que hay un ataque real ocurriendo pero los sistemas de seguridad NO enviaron ninguna alerta."
  },

  {
    q: "41. ¿Cuáles son las metacaracterísticas clave del Modelo Diamante en el análisis de amenazas?",
    options: [
      "Marca de hora, Fase, Resultado, Dirección, Metodología, Recursos",
      "Confidencialidad, Integridad, Disponibilidad, Autenticación",
      "Detección, Prevención, Corrección, Aceptación",
      "Adversario, Víctima, Infraestructura, Capacidad"
    ],
    correct: 0,
    expl: "Las 6 metacaracterísticas agregan contexto al evento: Marca de hora, Fase del ataque, Resultado, Dirección del flujo, Metodología utilizada y Recursos requeridos."
  }
];
// ESTADO DE LA APLICACIÓN
let currentQuizIndex = 0;
let score = 0;
const correctSound = new Audio('correct.mp3');
const incorrectSound = new Audio('error.mp3');
let selectedOption = null;
let currentCardIndex = 0;

// COPIA ORIGINAL PARA MODO ALEATORIO
const originalQuestions = typeof questions !== 'undefined' ? [...questions] : [];

// INICIALIZACIÓN
window.onload = () => {
  loadQuizQuestion();
  loadFlashcard();
  if (typeof setupDragAndDrop === 'function') setupDragAndDrop();
};

// Navegación - Pestañas
function switchMode(mode) {
  const buttons = document.querySelectorAll('.nav-tabs .tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  // Ocultar todas las vistas
  document.getElementById('quiz-view').classList.add('hidden');
  document.getElementById('flashcards-view').classList.add('hidden');
  document.getElementById('interactive-view').classList.add('hidden');
  document.getElementById('results-view').classList.add('hidden');
  
  const glossaryView = document.getElementById('glossary-view');
  if (glossaryView) glossaryView.classList.add('hidden');

  // Mostrar la vista seleccionada y activar la pestaña correspondiente
  if (mode === 'flashcards') {
    if (buttons[0]) buttons[0].classList.add('active');
    document.getElementById('flashcards-view').classList.remove('hidden');
  } else if (mode === 'quiz') {
    if (buttons[1]) buttons[1].classList.add('active');
    document.getElementById('quiz-view').classList.remove('hidden');
  } else if (mode === 'interactive') {
    if (buttons[2]) buttons[2].classList.add('active');
    document.getElementById('interactive-view').classList.remove('hidden');
  } else if (mode === 'glossary') {
    if (buttons[3]) buttons[3].classList.add('active');
    if (glossaryView) glossaryView.classList.remove('hidden');
  }
}

// RANDOMIZACIÓN
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function toggleRandomMode(isEnabled) {
  if (isEnabled) {
    shuffleArray(questions); // Mezclar si se enciende (ON)
  } else {
    // Restaurar orden original si se apaga (OFF)
    questions.splice(0, questions.length, ...originalQuestions);
  }

  // Reiniciar a la primera pregunta
  currentQuizIndex = 0;
  currentCardIndex = 0;
  score = 0;
  selectedOption = null;

  const scoreElem = document.getElementById('quiz-score');
  if (scoreElem) scoreElem.textContent = `Puntos: 0`;

  const explDiv = document.getElementById('quiz-explanation');
  if (explDiv) explDiv.classList.add('hidden');

  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) nextBtn.classList.add('hidden');

  loadQuizQuestion();
  loadFlashcard();
}

// Cuestionario
function loadQuizQuestion() {
  const q = questions[currentQuizIndex];
  selectedOption = null;

  document.getElementById('quiz-progress').textContent = `Pregunta ${currentQuizIndex + 1} de ${questions.length}`;
  document.getElementById('quiz-score').textContent = `Puntos: ${score}`;
  
  const progressPercent = (currentQuizIndex / questions.length) * 100;
  document.getElementById('progress-bar').style.width = `${progressPercent}%`;

  document.getElementById('quiz-question').textContent = q.q;
  
  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = '';

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = `${String.fromCharCode(65 + idx)}) ${opt}`;
    btn.onclick = () => selectOption(idx);
    optionsContainer.appendChild(btn);
  });

  document.getElementById('quiz-explanation').classList.add('hidden');
  document.getElementById('next-btn').classList.add('hidden');
}

function selectOption(index) {
  if (selectedOption !== null) return; // Evitar doble selección
  
  selectedOption = index;
  const q = questions[currentQuizIndex];
  const buttons = document.querySelectorAll('.option-btn');

  buttons.forEach(btn => btn.disabled = true);

  if (index === q.correct) {
    buttons[index].classList.add('correct');
    
    // Acierto
    correctSound.currentTime = 0;
    correctSound.play().catch(() => {}); 
    
    score++;
    document.getElementById('quiz-score').textContent = `Puntos: ${score}`;
  } else {
    buttons[index].classList.add('incorrect');
    buttons[q.correct].classList.add('correct');

    // Error
    incorrectSound.currentTime = 0;
    incorrectSound.play().catch(() => {});
  }

  const explDiv = document.getElementById('quiz-explanation');
  explDiv.innerHTML = `<strong>Explicación:</strong> ${q.expl}`;
  explDiv.classList.remove('hidden');

  document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
  currentQuizIndex++;
  if (currentQuizIndex < questions.length) {
    loadQuizQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById('quiz-view').classList.add('hidden');
  document.getElementById('results-view').classList.remove('hidden');
  
  document.getElementById('final-score').textContent = `${score} / ${questions.length}`;
  
  const percentage = (score / questions.length) * 100;
  let msg = "";
  if (percentage >= 90) msg = "¡Excelente dominio de los conceptos de ciberseguridad!";
  else if (percentage >= 70) msg = "¡Buen trabajo! Estás listo para repasar detalles puntuales.";
  else msg = "Te recomendamos repasar las flashcards para afianzar los conceptos clave.";
  
  document.getElementById('score-message').textContent = msg;
}

function restartQuiz() {
  currentQuizIndex = 0;
  score = 0;
  document.getElementById('results-view').classList.add('hidden');
  document.getElementById('quiz-view').classList.remove('hidden');
  loadQuizQuestion();
}

/* LÓGICA DE FLASHCARDS */
function loadFlashcard() {
  const q = questions[currentCardIndex];
  document.getElementById('card-progress').textContent = `Tarjeta ${currentCardIndex + 1} de ${questions.length}`;
  document.getElementById('card-question').textContent = q.q;
  document.getElementById('card-answer').textContent = `Respuesta: ${q.options[q.correct]}`;
  document.getElementById('card-expl').textContent = q.expl;

  // Asegurar que la tarjeta no esté rotada al cargar una nueva
  document.getElementById('flashcard').classList.remove('flipped');
}

function flipCard() {
  document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
  if (currentCardIndex < questions.length - 1) {
    currentCardIndex++;
    loadFlashcard();
  }
}

function prevCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    loadFlashcard();
  }
}

/* LÓGICA DE ARRASTRAR Y SOLTAR */
function setupDragAndDrop() {
  const draggables = document.querySelectorAll('.drag-item');
  const dropZones = document.querySelectorAll('.drop-zone, .drop-zone-step');

  draggables.forEach(item => {
    item.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', item.id);
    });
  });

  dropZones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      const itemId = e.dataTransfer.getData('text/plain');
      const expectedId = zone.getAttribute('data-target');

      if (itemId === expectedId) {
        const draggedElement = document.getElementById(itemId);
        zone.textContent = draggedElement.textContent;
        zone.classList.add('correct-drop');
        draggedElement.style.display = 'none';
      }
    });
  });
}