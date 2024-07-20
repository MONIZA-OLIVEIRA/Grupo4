# Grupo4

Projeto Consulta Clima
Este projeto é uma aplicação web simples que permite consultar a previsão do tempo para qualquer cidade usando a API da Weatherstack.

Estrutura do Projeto


projeto-consulta-clima/
│
├── server.js
├── package.json
│
├── public/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/ (trocar para routes)
│   │   └── script.js


Pré-requisitos
Node.js instalado na máquina
Uma conta na Weatherstack para obter uma API key
Passos para Configuração
Clone o repositório:


Copiar código
git clone <URL-do-repositorio>
cd projeto-consulta-clima
Instale as dependências:

Copiar código
npm install
Obtenha uma API key da Weatherstack:

Acesse Weatherstack e crie uma conta.
Gere uma chave de acesso (access key).
Configure a chave de acesso:

Abra o arquivo server.js na raiz do projeto.
Substitua 'YOUR_ACCESS_KEY' pela sua chave de acesso da Weatherstack.
Inicie o servidor:

Copiar código
npm start
Acesse a aplicação no navegador:

Abra um navegador e vá para http://localhost:3000/.
Funcionalidades
Entrada de Cidade: Digite o nome da cidade que deseja consultar.
Consulta de Clima: Clique no botão para buscar a previsão do tempo.
Modal de Resultados: Os dados da previsão do tempo são exibidos em um modal.
Validação de Entradas: O campo de entrada é verificado para garantir que não está vazio.
Tecnologias Utilizadas
Node.js
Express
Axios
HTML, CSS, JavaScript
Validação de Entradas
Campo de Cidade: Antes de enviar a requisição, o campo de entrada é verificado para garantir que não está vazio.
Tratamento de Erros da API: Mensagens de erro detalhadas são exibidas se ocorrer algum problema ao buscar os dados da API.
