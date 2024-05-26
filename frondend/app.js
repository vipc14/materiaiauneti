document.getElementById('submitQuestion').addEventListener('click', async () => {
    const userQuestion = document.getElementById('userQuestion').value;
    const responseArea = document.getElementById('responseArea');
    
    try {
        const response = await fetch('http://localhost:3000/api/chatgpt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userQuestion })
        });

        const data = await response.json();
        responseArea.textContent = data.response;
    } catch (error) {
        responseArea.textContent = 'Error al obtener la respuesta. Intenta nuevamente.';
    }
});
