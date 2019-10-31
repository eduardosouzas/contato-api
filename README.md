## API para sistema de Contato.

1. Para instalar faça o clone do projeto, o seu o comando 
#### git remote add origin https://github.com/eduardosouzas/contato-api.git 

2. rode o comando para instalar as dependências
#### npm install

3. rode o comando para rodar o servidor em desenvolvimento
#### npm run dev

4. rode o comando para rodar com o server pm2 para produção
#### npm run production


## exemplo de chamada da api, com o server rodando.

[get](http://localhost:3003/api/contato)
[get, id = 5dbadbf91c5da1266dc431ac](http://localhost:3003/api/5dbadbf91c5da1266dc431ac)
[post, coloque os parametros no corpo](http://localhost:3003/api/contato)
[put, id = 5dbadbf91c5da1266dc431ac](http://localhost:3003/api/5dbadbf91c5da1266dc431ac)
[delete, id = 5dbadbf91c5da1266dc431ac](http://localhost:3003/api/5dbadbf91c5da1266dc431ac)

#### observação, os métodos ( post, put ),  precisam que coloque os paramêtros no body da requisição, eles são obrigatórios.