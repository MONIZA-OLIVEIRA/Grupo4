<img src="./public/assets/images/bannerlogo.bmp" align="left" height="64px" /><br><br>
# Programa de Bolsas Junho/2024

# Grupo4 - Sprint 2/3

## Índice
1. [Projeto CLIMA Cast](#titulo)
2. [Versão](#versao)
3. [Do Licenciamento](#licenciamento)
4. [Dos Requisitos para Instalação](#instalacao)
5. [Do Aplicativo](#doaplicativo)<br>
    5.1. [Estrutura do Projeto](#projeto)<br>
    5.2. [Obtendo o Código da Aplicação](#codigo)<br>
    5.3. [Obtenha uma API *key* da Open Weather Map](#apikey)<br>
    5.4. [Instalação Passo a Passo](#passoapasso)<br>
    5.5. [Instalar as Dependências](#dependencias)<br>
    5.6. [Sobre o **Front-End**](#front-end)<br>
    5.7. [Sobre o **Back-End**](#back-end)<br>
    5.8. [Sobre o Ambiente na Nuvem](#nuvem)
6. [Dificuldades/Pontos Fracos](#fraquezas)
7. [Pontos Fortes](#forcas)
8. [Oprotunidades de Melhoria](#melhorias)

9. [Autores](#autores)

## Projeto *CLIMA Cast*<a name="titulo"></a>

Este projeto consiste no desenvolvimento e disponibilização de uma **Aplicação Web** que permite consultar a `Previsão do Tempo` para uma  `Cidade` e/ou `Bairro` utilizando uma chamada à  **API da Open Weather Map**.

A previsão do tempo é **fundamental** porque influencia diretamente sobre diversas atividades humanas e na tomada de decisões.

Saber com antecedência como estará o clima permite que  as pessoas e as empresas se preparem adequadamente, seja para planejar viagens, escolher roupas adequadas, realizar cultivos agrícolas, ou até mesmo para se proteger de eventos climáticos adversos.

Além disso, a previsão meteorológica auxilia na gestão de recursos naturais e na mitigação de desastres, fornecendo informações cruciais para a segurança pública e o bem-estar coletivo.

Este aplicativo foi estruturado na forma de um *Front-End*, que recebe as solicitações dos usuários; e um *Back-End* que consome a API de previsão do tempo da **, afim de obter as informações de previsões climáticas.

Este aplicativo foi desenvolvido utilizando as ferramentas  **Javascript-Node.js, Express, Axios e Docker**, sendo hospedado em um ambiente de **Nuvem AWS**.

## Versão<a name="versao"></a>

Atualmente está disponível a **Versão 1.0** do `Aplicativo`, disponibilizada em Agosto/2024.

## Do Licenciamento<a name="licenciamento"></a>

Esta aplicação está licenciada para uso como `Software Livre` podendo ser baixada, utilizada e testada, amplamente por todo e qualquer usuário interessado.

## Dos Requisitos para Instalação<a name="instalacao"></a>

Para a instalação e execução desta **Aplicação** será necessário observar os seguites requisitos:

* Dispor de um Computador com **Windows** ou **Linux** instalados;
* Instalar o <a href="https://nodejs.org/pt" target="_blank">Node.js</a>;<br>
* Cadastrar uma Conta na <a href="https://openweathermap.org/api/hourly-forecast" target="_blank">Open Weather Map"</a> para obter uma `API key`;
* Instalar o <a href="https://www.docker.com/products/docker-desktop/" target="_blank">Docker</a>;
* Cadastrar uma Conta na <a href="https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3FhashArgs%3D%2523%26isauthcode%3Dtrue%26nc2%3Dh_ct%26oauthStart%3D1721853265030%26src%3Dheader-signin%26state%3DhashArgsFromTB_us-east-2_587fc644fa15add5&client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fcanvas&forceMobileApp=0&code_challenge=WXvJVPZ8DJQhZD4BDyT_luZie3H8aTgbwBAXL4R0ycA&code_challenge_method=SHA-256" target="_blank">AWS</a>;
* Implantar a Infraestrutura AWS recomendada.

## Do Aplicativo<a name="doaplicativo"></a>

Nesta seção serão abordados aspectos referentes à disponibilização e estruturação do *Softtware*.

## Estrutura do Projeto<a name="projeto"></a>

        src/
        │
        └── public/
        │   └── assets/
        │       └── images/
        │       │   └── clima.png
        │       │   └── FundoCeu.jpg
        │       │   └── bannerlogo.bmp
        │       │
        │       └── docs/
        │       │   └── G4 EC2 - Calculadora de Preços da AWS.pdf
        │       │   └── G4AWSInfraestructure_wellarchitected.pdf
        │       │        
        │       └── css/
        │       │   └── style.css
        │       │
        │       └── js/
        │           └── modal.js
        │
        └── routes/
        │   └── previsao.js
        │
        └── views/
        │   └── index.hbs
        │
        
        ├── Dockerfile<br>
        ├── package.json<br>
       
        │
        └── server.js
        │
        └── gitignore
        │
        └── README.md

## Obtendo o Código da Aplicação<a name="codigo"></a>

Para efetuar o *download* do código acessar o <a href="https://github.com/Compass-pb-aws-2024-JUNHO/sprints-2-3-pb-aws-junho/tree/Grupo-4/src" target="_blank">github</a> e efetuar um *git clone* do projeto.

## Obtenha uma API *key* da **Open Weather Map**<a name="apikey"></a>

Acesse o site da <a href="https://openweathermap.org/api/hourly-forecast" target="_blank">Open Weather Map</a> e crie uma conta.

Gere uma chave de acesso (*access key*).

*Configure a sua `Chave de acesso`:*

* Abra o arquivo **server.js** na raiz do projeto.

* Substitua 'YOUR_ACCESS_KEY' pela sua chave de acesso da Open Weather Map.

* Inicie o servidor:

## Instalação Passo a Passo<a name="passoapasso"></a>


### Com Docker

1. Construa a imagem Docker:

    ```bash
    docker build -t ClimaCast .
    ```

2. Rode o container:

    ```bash
    docker run -p 3000:3000 ClimaCast
    ```

3. Acesse a aplicação em seu navegador:

    [http://localhost:3000](http://localhost:3000)

### API de Previsão do Tempo

Este projeto utiliza a API do OpenWeatherMap para obter dados de previsão do tempo. Para configurar a API, substitua a variável `apiKey` em `src/routes/previsao.js` com a sua chave da API.

## Criando uma Instância EC2 e Implantando o Contêiner Docker

### Passo 1: Criar uma Instância EC2

1. Acesse o console da AWS e vá para a seção EC2.
2. Clique em "Launch Instance".
3. Escolha uma AMI (Amazon Machine Image). Para este exemplo, use a "Amazon Linux 2 AMI (HVM), SSD Volume Type".
4. Escolha o tipo de instância. Uma `t2.micro` é suficiente para este exemplo.
5. Configure as configurações de instância conforme necessário.
6. Adicione o armazenamento (o padrão é suficiente).
7. Adicione tags (opcional).
8. Configure o grupo de segurança:
   - Adicione uma regra para permitir o tráfego HTTP na porta 80.
   - Adicione uma regra para permitir o tráfego SSH na porta 22 (para acesso ao servidor).
9. Revise e lance a instância.
10. Crie um novo par de chaves ou use um existente para acessar a instância via SSH.

### Passo 2: Conectar-se à Instância EC2

1. Faça o download do arquivo `.pem` do par de chaves.
2. Conecte-se à sua instância via SSH:

    ```bash
    ssh -i "seupar.de.chave.pem" ec2-user@seu-endereco-ec2.amazonaws.com
    ```

### Passo 3: Instalar o Docker na Instância EC2

Execute os seguintes comandos para instalar o Docker:

```bash
sudo yum update -y
sudo amazon-linux-extras install docker
sudo service docker start
sudo usermod -a -G docker ec2-user

Passo 4: Fazer Login no Docker Hub (Opcional)
Se você criou a imagem Docker localmente e a enviou para o Docker Hub, faça login:

docker login

Passo 5: Baixar e Executar o Contêiner Docker na Instância EC2
Puxe a imagem Docker do Docker Hub (substitua seu-usuario e ClimaCast pelo nome do seu repositório e imagem):

docker pull seu-usuario/ClimaCast

Rode o contêiner Docker:

docker run -d -p 80:3000 seu-usuario/ClimaCast

Passo 6: Acessar a Aplicação
Acesse a aplicação em seu navegador usando o endereço público da sua instância EC2:

http://seu-endereco-ec2.amazonaws.com

```

## Instalar as Dependências<a name="dependencias"></a>

Copiar código
npm install;

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

## Sobre o Front-end<a name="front-end"></a>

O **Front-end** é a parte do aplicativo que está muito relacionado com a interface gráfica do projeto; ou seja, é a parte do código que interage diretamente com o usuário, seja em softwares, sites, aplicativos, etc.

É responsável pela parte visual como apresentação, design, linguagens, cores, entre outros.

É essencial nesta codificação que se tenha uma preocupação maior com a experiência do usuário.

## Sobre o Back-end<a name="back-end"></a>

O **Back-end** é a estrutura que possibilita a operação do sistema, propriamente dita, recebendo as solicitações enviadas pelo **Font-end** e realiza as ações solicitadas por parte dos usuários.

A função de um **Backend** está relacionada com servidores, bancos de dados, segurança, estrutura, gerenciamento de conteúdo e atualizações.

Esse tipo de código se aplica para tratar os dados e também é responsável pelas inserções, arquivamentos e leituras de dados, por trás de uma aplicação.

De forma resumida, são recursos que garantem a concretização dos processos em um ambiente eletrônico, como buscas em sites de compra ou até mesmo as ações mais complexas.

## Sobre o Ambiente na Nuvem<a name="nuvem"></a>

Este Aplicativo foi concebido com o intuito de ser executado em um ambiente na `Nuvem`.

De uma forma simples a computação na `Nuvem`, é uma tecnologia que permite acesso remoto a softwares, armazenamento de arquivos e processamento de dados por meio da internet. É uma alternativa para você acessar dados importantes de qualquer computador, em qualquer lugar.

Na presente implementação foi utilizada a `Nuvem` da **AWS - Amazon Web Services**.

Para usuários corporativos se recomenda a utilização da ferramenta *AWS Well-Architected Tool* que efetua uma pré-avaliação do seu ambiente, apontando oportunidades de melhoria. Este <a href="https://github.com/Compass-pb-aws-2024-JUNHO/sprints-2-3-pb-aws-junho/blob/Grupo-4/src/public/assets/images/FundoCeu.jpg" target="_blank">Relatório</a> representa um exemplo da utilização desta ferramenta.

## Dificuldades/Pontos Fracos<a name="fraquezas"></a>


## Pontos Fortes<a name="forcas"></a>


## Oportunidades de Melhorias)<a name="melhorias"></a>



## Autor(es)<a name="autores"></a>

<a href="https://www.linkedin.com/in/moniza-pelegrini-9936a1217/" target="_blank">Moniza de Oliveira Silva S. Pelegrini</a><br>
<a href="https://www.linkedin.com/in/john-sousa-28072212ti/" target="_blank">John Lennon Cavalcante de Sousa</a><br>
<a href="https://www.linkedin.com/in/israel-macedo-da-silva-026969245/" target="_blank">Israel Macedo da Silva</a><br>
<a href="https://www.linkedin.com/in/carlos-catao-88b0b3321/" target="_blank">Carlos Altomare Catao</a>

