# Projeto Escolar App 🚌

Este é um projeto full-stack desenvolvido como parte de um trabalho acadêmico. O "Escolar App" visa ser uma solução para gerenciamento de rotas de transporte escolar, incluindo funcionalidades como cadastro de usuários, autenticação e futuras implementações de rastreamento em tempo real.

## ✨ Funcionalidades

* ✅ **Autenticação de Usuários:** Sistema completo de cadastro e login com senhas criptografadas.
* ✅ **Backend Robusto:** API RESTful construída com Node.js e Express.
* ✅ **Frontend Reativo:** Interface de usuário construída com React e Vite.
* ✅ **Banco de Dados Relacional:** Estrutura de dados gerenciada com MySQL.
* 🚧 **(Em desenvolvimento)** Cadastro de Escolas, Alunos e Veículos.
* 🔜 **(Planejado)** Geração e visualização de rotas em um mapa.
* 🔜 **(Planejado)** Rastreamento em tempo real da localização do veículo.
* 🔜 **(Planejado)** Controle de presença dos alunos.

## 🛠️ Tecnologias Utilizadas

Este projeto é um monorepo que contém duas aplicações separadas:

#### **Backend (`escolarapp-backend`)**
* **Node.js:** Ambiente de execução JavaScript.
* **Express.js:** Framework para a construção da API.
* **MySQL:** Banco de dados para armazenamento de dados.
* **mysql2:** Driver para conectar a aplicação Node.js ao MySQL.
* **bcryptjs:** Biblioteca para criptografia de senhas.
* **cors:** Middleware para habilitar requisições entre o frontend e o backend.
* **JWT:** Para gerar tokens e validar o login de usuarios.

#### **Frontend (`escolarapp-frontend`)**
* **React:** Biblioteca para construção da interface de usuário.
* **Vite:** Ferramenta de build e servidor de desenvolvimento local.
* **CSS:** Estilização dos componentes.

## 📁 Fucionamento do código
* Abra o terminal do seu computador e digite o comando a seguir para clonar o aplicativo em sua maquina:
  ```git clone https://github.com/SweetJp07/projeto-escolarapp/edit/main/README.md```
* Apos isso entre na pasta 'projeto-escolarapp', abra um novo terminal e rode o comando 
  ```docker-compose up -d --build```
* Pronto a aplicacao ja esta rodando e pode ser acessada em qualquer navegador pelo link: **localhost:5173**
* Para parar a aplicacao, basta ir no mesmo terminal usado anteriormente e usar:
  ```docker-compose down```


