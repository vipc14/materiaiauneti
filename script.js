// script.js

// Preguntas y respuestas predefinidas sobre tecnología de IA
const faqData = {
    "hola": "La inteligencia artificial se refiere a la capacidad de las máquinas para realizar tareas que normalmente requieren inteligencia humana.",
    "¿Cuáles son los tipos de inteligencia artificial?": "Existen dos tipos principales: IA débil (específica para tareas) y IA fuerte (capaz de razonamiento general).",
    "¿Cuál es la diferencia entre aprendizaje automático y IA?": "El aprendizaje automático es una técnica dentro del campo de la IA que permite a las máquinas aprender a partir de datos sin ser programadas explícitamente.",
    "¿Qué es el aprendizaje profundo (deep learning)?": "El aprendizaje profundo es una técnica de aprendizaje automático que utiliza redes neuronales profundas para aprender representaciones de datos.",
    "¿Cuáles son los beneficios de la inteligencia artificial?": "Algunos beneficios incluyen automatización de tareas, análisis de grandes cantidades de datos, mejoras en la precisión y eficiencia, entre otros.",
    "¿Cómo funciona un sistema de recomendación basado en IA?": "Los sistemas de recomendación utilizan algoritmos de IA para analizar datos históricos de usuarios y hacer predicciones sobre qué productos o contenido podrían interesar a un usuario específico.",
    "¿Qué es el procesamiento del lenguaje natural (NLP)?": "El procesamiento del lenguaje natural es una rama de la IA que permite a las máquinas entender, interpretar y generar texto y voz en lenguaje humano.",
    "¿Cuáles son algunos ejemplos de aplicaciones de NLP?": "Chatbots, traducción automática, análisis de sentimientos en redes sociales, resumen automático de texto, entre otros.",
    "¿Qué es la visión por computadora?": "La visión por computadora es el campo de la IA que permite a las máquinas interpretar y comprender el contenido visual del mundo real, como imágenes y videos.",
    "¿Qué es el reconocimiento de voz?": "El reconocimiento de voz es una tecnología que permite a las máquinas convertir señales de voz en texto."
    // Continuar con el resto de preguntas y respuestas
};

document.getElementById('sendBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value.trim().toLowerCase();
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = "";

    if (userInput === "") {
        responseDiv.innerHTML = "Por favor ingresa una pregunta.";
        return;
    }

    // Buscamos la respuesta en los datos predefinidos
    const answer = faqData[userInput];

    if (answer) {
        responseDiv.innerHTML = answer;
    } else {
        responseDiv.innerHTML = "Lo siento, no tengo respuesta para esa pregunta.";
    }

    // Limpiamos el campo de entrada
    document.getElementById('userInput').value = "";
});



