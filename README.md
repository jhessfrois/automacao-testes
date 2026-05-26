<p align="center"> 
  <img alt="Logo Faculdade Unyleya" src="https://portalgraduacao.unyleya.edu.br/b50f33bcb2dd5f603598a7d6dcc4c58c.png" width="220px" />
</p>

<p align="center">
Projeto de Automação de Testes Web e API utilizando Cypress, Cucumber, Postman e Newman.
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-estrutura-do-projeto">Estrutura</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-funcionalidades-testadas">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-execução-dos-testes">Execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-validações-implementadas">Validações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contato">Contato</a>
</p>

<br>

<p align="center">
  <img alt="Preview do Projeto" src="https://i.imgur.com/A8gDOdm.png" width="80%">
</p>

> Projeto desenvolvido para automação de testes Web e API.

## 🚀 Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

### 💻 Automação Web

* ![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge\&logo=cypress\&logoColor=white)
* ![Cucumber](https://img.shields.io/badge/Cucumber-23D96C?style=for-the-badge\&logo=cucumber\&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge\&logo=javascript\&logoColor=%23F7DF1E)

### 🔌 Automação API

* ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge\&logo=postman\&logoColor=white)
* ![Newman](https://img.shields.io/badge/Newman-FF6C37?style=for-the-badge\&logo=postman\&logoColor=white)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge\&logo=node.js\&logoColor=white)

---

## 📂 Estrutura do Projeto

```bash
automacao-testes/
│
├── cypress/
│     ├── e2e/
│     ├── support/
│     ├── pedido.feature
│     └── step_definitions/
│
├── dummyjson-tests.json
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🌐 Site Utilizado

* [https://automationexercise.com/](https://automationexercise.com/)

---

## 🔗 API Utilizada

* [https://dummyjson.com/](https://dummyjson.com/)

---

## 📖 Funcionalidades Testadas

### 🖥️ Web

1. Login de usuário
2. Fluxo de realização de pedido
3. Adição de produtos ao carrinho
4. Checkout
5. Finalização da compra

---

### 🔌 API

#### Products

* Adicionar produto
* Atualizar produto
* Remover produto

#### Users

* Adicionar usuário
* Atualizar usuário
* Remover usuário

#### Auth

* Captura de token
* Validação de autenticação
* Verificação de usuário autenticado

---

## ✅ Validações Implementadas

* Código de retorno da API
* Tempo de resposta abaixo de 2 segundos
* Estrutura da resposta
* Validação de autenticação
* Fluxo completo de compra

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/jhessfrois/automacao-testes.git
```

Acesse a pasta do projeto:

```bash
cd automacao-testes
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Execução dos Testes

### Cypress

Abrir interface do Cypress:

```bash
npx cypress open
```

Executar via terminal:

```bash
npx cypress run
```

---

### Newman

Executar collection da API:

```bash
newman run dummyjson-tests.json
```

---

## 🛠️ Ferramentas Utilizadas

* Cypress
* Cucumber
* Postman
* Newman
* GitHub
* Testomat
* VS Code

---

## 🤍 Contato

[<img src='https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white' alt='Instagram' height='30'>](https://www.instagram.com/jhessfrois.tech)
[<img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white' alt='Linkedin' height='30'>](https://www.linkedin.com/in/jhessfrois/)
[<img src='https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white' alt='Gmail' height='30'>](mailto:jhessfsantos@gmail.com)

---

## 📝 Licença

Este projeto foi desenvolvido para fins acadêmicos e educacionais.

---

## 👩‍💻 Autor

Jhessica Frois
