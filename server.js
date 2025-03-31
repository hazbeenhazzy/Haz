const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/generate', async (req, res) => {
    const { type, description } = req.body;

    try {
        // Replace with the actual API endpoint and request details
        const response = await axios.post('https://api.example.com/generate', {
            type,
            description
        });

        const imageUrl = response.data.imageUrl;
        res.json({ imageUrl });
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({ error: 'Error generating image.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});