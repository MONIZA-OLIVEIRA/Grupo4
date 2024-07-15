const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const previsaoAPI = require('./rotues/previsao');

// Configuração do middleware e rotas
app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: 'index' }));
app.set('view engine', '.hbs');
app.set('views', './views');   // Diretório onde os arquivos .hbs estão localizados

app.use(express.static('public'));

// Rota para renderizar a página inicial
app.get('/', (req, res) => {
  res.render('index');
});

// Rota para processar a busca da cidade
app.get('/search', async (req, res) => {
  try {
    const cidade = req.query.cidade; // Obtém o nome da cidade do query string
    const bairro = req.query.bairro.toUpperCase();
    // Chama a função para obter os dados da previsão do tempo
    const previsao = await previsaoAPI.getPrevisao(cidade,bairro);

    // Renderiza novamente o template index.hbs com os dados da cidade e da previsão do tempo
    res.render('index', { cidade, previsao, bairro });
  } catch (error) {
    console.error('Erro ao mostrar a previsão do tempo:', error);
    res.status(500).send('Erro ao obter a previsão do tempo');
  }
});


// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
