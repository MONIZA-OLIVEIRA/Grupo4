const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

const weatherstackAccessKey = '8d0256b38fd8744969424d8afde24b6c';

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para lidar com a consulta à API
app.get('/weather', async (req, res) => {
    const city = req.query.city; // Obtém o nome da cidade da query string

    try {
        // Faz a requisição à API da weatherstack
        const response = await axios.get(`http://api.weatherstack.com/current?access_key=${weatherstackAccessKey}&query=${city}`);

        const data = response.data; // Dados da resposta da API

        // Retorna os dados em formato JSON
        res.json(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).send('Error fetching weather data');
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});