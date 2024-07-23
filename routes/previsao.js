const axios = require('axios');
const moment = require('moment');

const descricaoEmPortugues = {
  "clear sky": "Céu limpo",
  "few clouds": "Poucas nuvens",
  "scattered clouds": "Nuvens dispersas",
  "broken clouds": "Nuvens quebradas",
  "shower rain": "Chuva de banho",
  "rain": "Chuva",
  "thunderstorm": "Tempestade",
  "snow": "Neve",
  "mist": "Névoa"
};

async function getPrevisao(cidade, bairro) {
  try {
    const apiKey = '5030f75610c84ab3325fd152ad7fd932'; // Substitua pela sua chave válida
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade},${bairro}&appid=${apiKey}&units=metric`;

    const response = await axios.get(apiUrl);
    const previsao = response.data;
    
    // Filtra apenas as previsões do dia
    const previsoesFiltradas = previsao.list.slice(0, 2); // Exemplo: pegando as primeiras 9 previsões

    // Traduz as descrições do tempo para português
    previsoesFiltradas.forEach(previsao => {
      previsao.weather[0].description = descricaoEmPortugues[previsao.weather[0].description] || previsao.weather[0].description;
      let date = moment(previsao.dt_txt);
      date.subtract(6, 'hours');
      previsao.dt_txt = date.format('DD/MM/YYYY HH:mm');
    });

    return {
      cidade: previsao.city.name,
      previsoes: previsoesFiltradas
    };
  } catch (error) {
    console.error('Erro ao obter os dados da API:', error.response?.data || error);
    throw error;
  }
}

module.exports = {
  getPrevisao
};
