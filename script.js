async function getResponse() {
    const question = document.getElementById('question').value;
    if (question.trim() === "") return;

    const responseDiv = document.getElementById('responses');
    responseDiv.innerHTML += `<p>Usuario: ${question}</p>`;

    const apiKey = 'sk-proj-oyE5bmst3qdZAQXqM77mT3BlbkFJjfcq82l57BauRIfDDhYY';  // Reemplaza con tu clave de API de OpenAI
    const apiUrl = 'https://api.openai.com/v1/completions';

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "text-davinci-003",  // Reemplaza con el modelo apropiado si es necesario
            prompt: question,
            max_tokens: 150
        })
    });

    const data = await response.json();
    const answer = data.choices[0].text.trim();

    responseDiv.innerHTML += `<p>Bot: ${answer}</p>`;
    document.getElementById('question').value = '';
}
