# Relatório de Desenvolvimento do Projeto Full Stack
## Introdução
Este relatório descreve o desenvolvimento de uma aplicação full stack para a avaliação técnica, seguindo um layout específico e incluindo funcionalidades de cadastro, login, uma to-do list e envio de e-mails.

## Estrutura do Projeto
O projeto foi dividido em duas partes principais: front-end e back-end.

# Front-end
Tecnologias Utilizadas:

React.js: Construção da interface.
CSS3: Estilização, com foco em design responsivo (Mobile First).
React Router: Navegação entre páginas.
Axios: Comunicação com a API.
Componentes Principais:

Header: Inclui o botão "Entrar".
Hero Section: Imagem de fundo e texto de boas-vindas.
To-Do List: CRUD de tarefas.
Contact Form: Envio de e-mails.
## Desafios:
Responsividade: Garantir a adaptação para diferentes tamanhos de tela usando media queries.
Fidelidade ao Design: Ajustes finos para corresponder ao layout do Figma.
# Back-end
## Tecnologias Utilizadas:

Node.js: Servidor.
Express.js: Criação de rotas.
JWT: Autenticação.
bcrypt.js: Criptografia de senhas.
Nodemailer: Envio de e-mails.
Google APIs: OAuth2 para envio seguro de e-mails.
Funcionalidades:

Autenticação: Login e registro de usuários com JWT.
CRUD de To-Do List: Cada usuário pode gerenciar suas próprias tarefas.
Envio de E-mails: Implementação do Nodemailer com OAuth2.
Desafios:

Configuração OAuth2: Gerenciamento de tokens de acesso e atualização para envio de e-mails.
Autenticação: Garantir acesso seguro às rotas da API.
Deploy
A aplicação foi implantada no Heroku.

Scripts de Deploy no package.json:

json
Copy code
{
  "scripts": {
    "start": "node coopers-to-do-server/server.js",
    "heroku-postbuild": "cd coopers-to-do && npm install && npm run build"
  }
}
## Desafios:

Estrutura do Projeto: Ajustes na estrutura para deploy correto no Heroku.
Dependências: Resolver problemas de dependências ausentes.
Conclusão
O projeto atendeu aos requisitos de layout, funcionalidades e envio de e-mails. A principal dificuldade foi a configuração de autenticação e envio de e-mails usando OAuth2, que foi resolvida com pesquisa e implementação cuidadosa.
