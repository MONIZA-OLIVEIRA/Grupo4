const axios = require('axios');

async function getPrevisao(cidade,bairro) {
  try {
    const apiKey = '8d0256b38fd8744969424d8afde24b6c';
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${cidade},${bairro}`;

    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter os dados da API:', error.response.data);
    throw error;
  }
}

module.exports = {
  getPrevisao
};
