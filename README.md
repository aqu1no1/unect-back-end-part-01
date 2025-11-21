<div align="center">

  <img src="https://github.com/user-attachments/assets/1b3712d1-6b61-4f46-8447-cb9e1d6bc399" width="200"/>

  <br><br>

  <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Mongoose-880000?logo=mongoose&logoColor=white" />
  <img src="https://img.shields.io/badge/Swagger-85EA2D?logo=swagger&logoColor=black" />

</div>






---


#  API de Alunos – Semana 1 da Capacitação Back-End  
**Autor:** Mauricio Alves de Aquino  
**Curso:** Engenharia de Software  
**Área de Atuação:** Back-End  
**Instrutores:** Felipe Gomes e João Vitor Romani  

---

##  Sobre o Projeto
Este repositório contém a entrega da **Semana 1 da capacitação Back-End**, cujo objetivo é desenvolver uma API em **Node.js + TypeScript** utilizando **Express** e **Mongoose**, incluindo rotas CRUD completas para o recurso **Alunos**.

A aplicação segue boas práticas de organização, tipagem e uso de datas com **dayjs**.

##  Parte da Capacitação Back-End – Objetivos da Semana 1

Este projeto faz parte da **Parte 1 da capacitação Back-End**, ministrada por:

- **Felipe Gomes**  
- **João Vitor Romani**

Durante esta etapa, o foco é praticar:

- Node.js  
- TypeScript  
- Express  
- MongoDB  
- Controllers e Rotas  
- Boas práticas de arquitetura de API  

---

###  Requisitos da Semana 1

A API deve conter **todas as rotas CRUD funcionais** relacionadas ao recurso **Alunos**, desenvolvidas em **TypeScript**:

- Criar aluno  
- Listar todos os alunos  
- Buscar aluno por ID  
- Atualizar um aluno por ID  
- Deletar um aluno por ID  
- **Extra:** Filtrar alunos por `name` ou `ra` via query params  

---


##  Como Rodar o Projeto

Para configurar e executar a API localmente, siga os comandos abaixo (assumindo que você já instalou as dependências):

### 1. Instalação e Execução

| Comando | Descrição |
| :--- | :--- |
| `npm install` | Instala todas as dependências do projeto listadas no `package.json`. |
| `npm run dev` | Inicia o servidor em **modo de desenvolvimento** usando `ts-node-dev` (com *hot-reload*). |

### 2. Acesso à API

Após a execução, a API estará acessível no endereço base:

➡️ **Base URL:** `http://localhost:3000`

---

##  Modelagem de Dados

### 1. Interface `IStudent` (TypeScript)

A entidade principal do projeto é o **Aluno (`Student`)**, definida com a seguinte interface para garantir a **tipagem** do código:

| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| `_id` | `string` | ID único, gerado automaticamente pelo MongoDB. |
| `name` | `string` | Nome completo do aluno. |
| `age` | `number` | Idade do aluno. |
| `ra` | `string` | Registro Acadêmico (RA) do aluno. |
| `cpf` | `string` | Cadastro de Pessoa Física (CPF) do aluno. |
| `createdAt` | `Date` | Data de criação do registro (gerado com **dayjs**). |
| `updatedAt` | `Date` | Data da última atualização do registro (gerado com **dayjs**). |

> 💡 **Nota:** O **Schema do Mongoose** é criado no arquivo `student.schema.ts` com base nessa interface, adicionando validações e a conexão com o MongoDB.

---


##  Controllers e Rotas (CRUD)

O design da API separa as responsabilidades, garantindo que os **Controllers** contenham a lógica e sejam **assíncronos** (`async/await`), usando a **tipagem do Express** e a manipulação de datas com **dayjs**.

### Endpoints Implementados

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/aluno` | **Cria** um novo registro de aluno. |
| `GET` | `/aluno` | **Lista** todos os alunos. Suporta filtros por `name` ou `ra` via *query params* (ex: `/aluno?name=...`). |
| `GET` | `/aluno/:id` | **Busca** um aluno específico pelo seu ID. |
| `PUT` | `/aluno/:id` | **Atualiza** as informações de um aluno pelo seu ID. |
| `DELETE` | `/aluno/:id` | **Deleta** um registro de aluno pelo seu ID. |

---

##  Documentação Swagger

A API possui documentação interativa e automática usando **Swagger UI**.

### 1. Acesso à Documentação
Acesse a URL abaixo para explorar todos os *endpoints* e modelos de dados da API:

**Documentação Swagger:** `http://localhost:3000/api-docs`

### 2. Funcionalidades do Swagger
O Swagger permite que você visualize e teste:
* Todos os **Endpoints** disponíveis.
* Os **Parâmetros** de cada rota (path, query, body).
* Os **Tipos** e **Modelos** de dados esperados.
* **Exemplos de Respostas** da API (status codes e payloads).

---


###  Estrutura do Projeto

A aplicação segue o padrão de arquitetura de separação de responsabilidades (Controllers, Models, Routes) para garantir a escalabilidade e a manutenção.

###  Explicação das Responsabilidades

A tabela a seguir detalha o papel de cada pasta e arquivo principal na arquitetura do projeto:

| Pasta / Arquivo | Propósito Principal |
| :--- | :--- |
| **`📁 controllers`** | Contém a **lógica de negócio** das rotas (CRUD), processando requisições e interagindo com os Models. |
| **`📁 models`** | Define a **estrutura do banco de dados** (Schemas e Models Mongoose) para a coleção de `Alunos`. |
| **`📁 routes`** | Gerencia a definição e o mapeamento das **rotas da API** (endpoints) para os respectivos Controllers. |
| **`📁 schema`** | Armazena os **esquemas de validação** (ex: usando Zod) para garantir que os dados de entrada sejam válidos. |
| **`📁 utils`** | Funções de utilidade e serviços compartilhados: conexão com DB, logging e documentação Swagger. |
| **`index.ts`** | O **ponto de entrada** da aplicação, inicializando o servidor Express e as configurações globais. |


```bash
📂 projeto
├── 📁 src
│   ├── 📁 controllers
│   │   └── student.controller.ts
│   ├── 📁 models
│   │   └── student.models.ts
│   ├── 📁 routes
│   │   └── student.router.ts
│   ├── 📁 schema
│   │   └── student.schema.ts
│   ├── 📁 utils
│   │   ├── connect.ts
│   │   ├── logger.ts
│   │   └── swagger.ts
│   └── index.ts
├── package.json
├── package-lock.json
└── README.md
```

---
##  Referências & Recursos

Aqui estão alguns projetos, tutoriais e documentação que serviram de inspiração para este projeto, além de fontes úteis para aprendizado:

- [curso_node – API REST + Mongoose (YouTube)](https://github.com/matheusbattisti/curso_node/tree/main/17_API_REST_NODE_MONGOOSE_YT)  
  Projeto de Node + Mongoose com estrutura REST, usado como exemplo prático para APIs.

- [REST-API-Tutorial-Updated](https://github.com/TomDoesTech/REST-API-Tutorial-Updated)  
  Tutorial completo de API REST, muito útil para entender boas práticas de estrutura e rotas.

- [expressjs-full-course](https://github.com/stuyy/expressjs-full-course)  
  Curso completo de Express.js, cobrindo desde o básico até tópicos mais avançados.

- Canal YouTube: [Anson the Dev](https://www.youtube.com/@ansonthedev/videos)  
  Vídeos com tutoriais sobre Node.js, Express, MongoDB e outras tecnologias backend.

- Documentação do **Mongoose**:  
  Guia oficial para modelagem, schemas e uso do Mongoose. :contentReference[oaicite:0]{index=0}  

- Portal MongoDB (login / gestão): [MongoDB Cloud / Atlas](https://account.mongodb.com/account/login)

---



###  Sobre as Referências

Esses recursos foram escolhidos por serem altamente pedagógicos e bem estruturados.  
- Os repositórios do GitHub ajudam a entender como montar uma API real de produção.  
- O canal do YouTube do Anson é ótimo para tutoriais passo a passo.  
- A **documentação oficial do Mongoose** é essencial para entender como criar schemas, modelos e usar validação.
- Ter a referência para o **MongoDB Cloud / Atlas** é útil caso você configure um banco em nuvem para desenvolvimento ou produção.

---




