# Trabalho DM107 

Para se utilizar o serviço, é necessário ter o banco de dados MySQL instalado e duas tabelas criadas.

Utilize o arquivo */DB/dm107_script_database.sql* para criar as tabelas.

Antes de executar o servidor, é necessário executar o seguinte comando na pasta /server para instalar os pacotes ncessários.  
*npm update*

Para iniciar o servidor, é necessario acessar a pasta /server e executar o seguinte comando:  
*node server.js* 

O servirdor está configurado para rodar utilizando a porta 3000.

(Para acessar a "api", é necessário que o servidor esteja rodando.)

Para utilizar a api, é necessário ter o token de acesso em mãos.

Acesse algum aplicativo REST para "logar" e receber o token de acesso.

Utilize a URL http://localhost:3000/login com o método POST e o JSON {"username":"admi@admin.com","password":"admin"} e Content-Type "application/json" .

O Response será algo parecido com:  
{  
	"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0NDY2ODAxNTg2Mzh9.vzxz26uZcWEg2nqysiShnJ6wreDAnB2sQeOXsJ_dLSI",  
	"expires": 1446680158638,  
	"user": {  
		"name": "admin",  
		"role": "ADMIN",  
		"username": "admin@admin.com"  
	}  
}

Após ter o token em mãos, acesse a url http://localhost:3000.

Uma página com a descrição da api será mostrada.

Utilize o token de acesso gerado para ter acesso aos dados.

Caso não esteja disponivel, acesse um aplicativo REST para ter acesso aos dados.

Utilize a URL http://localhost:3000/login , Content-Type "application/json" e Request Parameters "Authorization + token de acesso".


## Relatório
O trabalho possui um relatório que mostra a relação de entregas por status: "entregues", "em transporte" e "novos".
Para acessar o relatório localmente é preciso acesar a págima index, localizada dentro do diretório client.
No AWS é possível acessar esta página atravéz da url *http://dm107.tk/*

Após acessar a página é necessário fazer o login como administrador. Um usuário administrador já está inserido no banco de dados do AWS e existe um INSERT dentro do arquivo dm107_script_database.sql caso a aplicação esteja rodando locammente.

As credenciais de administrador são:

    email: amdin@admin.com
    password: admin
    
## Publicação no AWS
O trabalho foi publicado no AmazonWS nos endereços abaixo:
    Relatório: *http://dm107.tk/*
    Documentação REST Api: *http://dm107.tk:3000*
    Serviços REST: *http://dm107.tk:3000 + #ROTAS#*