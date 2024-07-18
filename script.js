// script.js
document.getElementById('sendBtn').addEventListener('click', async () => {
    const userInput = document.getElementById('userInput').value;
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = "Esperando respuesta...";

    try {
        const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer sk-proj-oyE5bmst3qdZAQXqM77mT3BlbkFJjfcq82l57BauRIfDDhYY',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: userInput,
                max_tokens: 150
            })
        });

        const data = await response.json();
        responseDiv.innerHTML = data.choices[0].text.trim();
    } catch (error) {
        responseDiv.innerHTML = "Error al obtener respuesta";
    }
});




