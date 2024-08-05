# Desenvolvimento Fullstack 2024-1

## Grupo:  

- Cleverson Oliveira  
- Jakeline Faria dos Santos  
- Luís Fernando Lima das Chagas  
- Luiz Eduardo Borges Alves  

## Professores

- Hugo Marciano de Melo  
- Sofia Larissa da Costa Paiva  

## Sobre este repositório

Documentaçao e código-fonte do projeto da disciplina.  

- [Documentação](./docs/)  
- [Código-fonte backend](./backend/), escrito em nestjs
- [Código-fonte frontend](./frontend/), escrito em react

## Executando o projeto

<details><summary>Docker</summary>

Acesse a pasta `docker` e execute o seguinte comando:

```sh
docker compose up -d --build
```

</details>

<details><summary>Manualmente</summary>
<h3>Pré-requisitos</h3>

- Node.js
- Postgres (rodando na porta 5432, com um banco de dados chamado `biblioteca`)

<h3>Backend</h3>
Exponha as seguintes variáveis de ambiente: 

- **DB_HOST** com o endereco do banco de dados
- **DB_PORT** com a porta do banco de dados
- **DB_USER** com o usuário do banco de dados
- **DB_PASSWORD** com a senha do banco de dados
- **DB_NAME** com o nome do banco de dados


Acesse a pasta `backend` e execute os seguintes comandos:

```sh
npm install
npm run start
```

<h3>Frontend</h3>
Exponha as seguintes variáveis de ambiente: 

- **REACT_APP_API_URL** com o valor <i>http://localhost:3000</i> ou o endereço do backend, caso esteja em outro servidor.
- **PORT** com o valor <i>3001</i> ou a porta desejada.

Acesse a pasta `frontend` e execute os seguintes comandos:

```sh
npm install

npm run start
```

Acesse o endereço <i>http://localhost:3001</i> no navegador.
</details>


## Considerações

- É necessário cadastrar um autor e uma editora antes de cadastrar um livro.
- Na maioria dos campos não há validação, então é possível cadastrar valores "inválidos", como por exemplo uma data de nascimento no futuro.
- Foi testado apenas o crud simples de autor, editora, livro e usuário.
- Não há autenticação, mesmo que o usuário pode ser do tipo "admin" ou "funcionário" ou "comum".
- Não foi gerado a relação de empréstimo de livros, após muita dor de cabeça e muito tempo gasto com o relacionamento de livros com autores e editoras, não foi possível implementar a relação de empréstimo de livros.
- O frontend foi feito de forma bem simples, sem muitos detalhes visuais.
- A maioria das validações estão diretamente no banco.
