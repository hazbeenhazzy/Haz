document.getElementById('generate-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const type = document.getElementById('type').value;
    const description = document.getElementById('description').value;

    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type, description }),
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        if (data.imageUrl) {
            resultDiv.innerHTML = `<img src="${data.imageUrl}" alt="${type}">`;
        } else {
            resultDiv.innerHTML = `<p>Error generating ${type}. Please try again.</p>`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});