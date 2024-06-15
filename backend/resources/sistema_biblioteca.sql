--CREATE DATABASE Sistema_controle_biblioteca

-- Tabela de Administradores
CREATE TABLE admin (
    cod_admin SERIAL PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

-- Tabela de Bibliotecários
CREATE TABLE bibliotecarios (
    cod_bibliotecario SERIAL PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

-- Tabela de Categorias
CREATE TABLE categorias (
    cod_categoria SERIAL PRIMARY KEY,
    categoria VARCHAR(50) NOT NULL
);

-- Tabela de Funcionários
CREATE TABLE funcionarios (
    cod_funcionario SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    endereco TEXT NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    data_nascimento DATE NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    data_contratacao DATE NOT NULL,
    salario DECIMAL(10, 2) NOT NULL,
    sexo CHAR(1) NOT NULL
);

-- Tabela de Livros
CREATE TABLE livros (
    cod_catalogacao SERIAL PRIMARY KEY,
    cod_livro SERIAL UNIQUE NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    nome_autores TEXT NOT NULL,
    editora VARCHAR(100) NOT NULL,
    ano_publicacao INTEGER NOT NULL,
    cod_isbn VARCHAR(20) NOT NULL,
    area VARCHAR(100) NOT NULL,
    idioma VARCHAR(50) NOT NULL,
    subarea VARCHAR(100) NOT NULL,
    data_tombo DATE NOT NULL,
    cod_categoria INTEGER REFERENCES categorias(cod_categoria),
    quantidade_paginas INTEGER NOT NULL,
    quantidade_livros INTEGER NOT NULL,
    classificacao VARCHAR(50) NOT NULL,
    codigo_catalogacao VARCHAR(50) NOT NULL
);

-- Tabela de Usuários Comuns
CREATE TABLE users_comuns (
    cod_users SERIAL PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

-- Tabela de Usuários
CREATE TABLE usuarios (
    cod_usuario SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    rg VARCHAR(20) NOT NULL,
    data_nascimento DATE NOT NULL,
    sexo CHAR(1) NOT NULL,
    endereco TEXT NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL,
    curso VARCHAR(100) NOT NULL,
    semestre INTEGER NOT NULL,
    cod_livro INTEGER REFERENCES livros(cod_livro)
);

-- Tabela de Empréstimos
CREATE TABLE emprestimos (
    cod_emprestimo SERIAL PRIMARY KEY,
    cod_usuario INTEGER REFERENCES usuarios(cod_usuario),
    nome VARCHAR(100) NOT NULL,
    atendente VARCHAR(100) NOT NULL,
    situacao VARCHAR(50) NOT NULL,
    data_retirada DATE NOT NULL,
    data_prevista DATE NOT NULL,
    exemplares INTEGER NOT NULL,
    CONSTRAINT chk_exemplares CHECK (exemplares >= 1 AND exemplares <= 2)
);

-- Tabela de Devoluções
CREATE TABLE devolucoes (
    cod_devolucao SERIAL PRIMARY KEY,
    cod_usuario INTEGER REFERENCES usuarios(cod_usuario),
    nome VARCHAR(100) NOT NULL,
    atendente VARCHAR(100) NOT NULL,
    situacao VARCHAR(50) NOT NULL,
    data_retirada DATE NOT NULL,
    data_prevista DATE NOT NULL,
    exemplares INTEGER NOT NULL
);

-- Regra para garantir que um usuário não possa pegar mais de dois livros
ALTER TABLE emprestimos
ADD CONSTRAINT unique_livros_per_usuario UNIQUE (cod_usuario, exemplares);
