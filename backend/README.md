# Biblioteca backend

## Requisitos

- Docker/docker-compose (recomendado)
- Node 20.x (caso queira iniciar a aplicação sem docker)
- Postgresql 16 (caso queira iniciar a aplicação sem docker)

## Rodando o projeto

### Inicializando com o docker

Acesse a pasta [../docker](../docker/) inicie a stack com o comando:

```bash
docker compose up -d --build
```

O packages.json do projeto já possui um script para inicializar o projeto, para isso, acesse a pasta [../backend](../backend/) e execute o comando:

```bash
npm run docker:run
```

Para finalizar:

```bash
npm run docker:stop'
```

### Inicializando sem o docker

Garanta que o banco postgres esteja disponível e configurado corretamente, após isso, acesse a pasta [../backend](../backend/) execute os comandos:

```bash

```

## Informações úteis

- O usuário do banco e senha são `postgres` e `postgres` respectivamente.  
  > O container do postgres utiliza um script de autostart para criar o banco padrão da aplicação.
- Para acesso ao pgadmin, o usuário e senha são `postgres@postgres.com` e `postgres` respectivamente.  
  > O container do pgadmin utiliza do arquivo [servers.json](../docker/servers.json) para configurar o acesso de forma mais simples, a senha para acesso é a senha do banco
- A aplicação utiliza o banco `biblioteca` e o schema `public`, para acesso é utilizado o usuário superadmin do banco.  
