# Trabalho DM107 

Para se utilizar o serviço, é necessário ter o banco de dados MySQL instalado e duas tabelas criadas.

Utilize o arquivo */DB/create_table_entregas.txt* para criar as tabelas.

Antes de executar o servidor, é necessário executar o seguinte comando na pasta /server para instalar os pacotes ncessários.
*npm update*

Para iniciar o servidor, é necessario acessar a pasta /server e executar o seguinte comando
*node server.js* 

O servirdor está configurado para rodar utilizando a porta 3000.

(Para acessar a "api", é necessário que o servidor esteja rodando.)

Para utilizar a api, é necessário ter o token de acesso em mãos.

Acesse algum aplicativo REST para "logar" e receber o token de acesso.

Utilize a URL http://localhost:3000/login , JSON {"username":"admi@admin.com","password":"admin"} e Content-Type "application/json".

O Response será algo parecido com:
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0NDY2NzQ4ODUzNzJ9.H8t9NMDiFOQAbzv88twR8khzFvYysNzKCNAh-hNVxQE",
    "expires": 1446674885372,
    "user": {
        "name": "Luis Felipe",
        "role": "USER",
        "username": "luisfelipelmtc@gmail.com"
    }
}

Após ter o token em mãos, acesse a url http://localhost:3000.

Uma página com a descrição da api será mostrada.

Utilize o token de acesso gerado para ter acesso aos dados.

Caso não esteja disponivel, acesse um aplicativo REST para ter acesso aos dados.

Utilize a URL http://localhost:3000/login , Content-Type "application/json" e Request Parameters "Authorization + token de acesso".