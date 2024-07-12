CREATE TABLE livros (
    cod_isbn VARCHAR(13) NOT NULL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    editora REFERENCES editoras(id) NOT NULL,
    tipo_capa CHAR(1) NOT NULL,
    ano_publicacao INTEGER NOT NULL,
    genero VARCHAR(100) NOT NULL,
    cdd VARCHAR(10) NOT NULL,
    qtd_paginas INTEGER NOT NULL,
    edicao INTEGER NOT NULL,
    idioma VARCHAR(4) NOT NULL,
    qtd_copias INTEGER NOT NULL,
)

CREATE TABLE usuarios (
    cod_usuario SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    data_nascimento DATE NOT NULL,
    sexo CHAR(1),
    endereco TEXT NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    cep VARCHAR(8) NOT NULL,
    telefone VARCHAR(11) NOT NULL,
    email UNIQUE VARCHAR(100) NOT NULL,
    func_status BOOLEAN NOT NULL,
    admin_status BOOLEAN NOT NULL,
    usuario UNIQUE VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL,
)

CREATE TABLE emprestimos (
    cod_emprestimo SERIAL PRIMARY KEY,
    cod_usuario INTEGER NOT NULL,
    cod_isbn VARCHAR(13) NOT NULL,
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE NOT NULL,
    FOREIGN KEY (cod_usuario) REFERENCES usuarios(cod_usuario),
    FOREIGN KEY (cod_isbn) REFERENCES livros(cod_isbn),
)

CREATE TABLE editoras (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    endereco TEXT,
    cidade VARCHAR(50),
    cep VARCHAR(10),
    telefone VARCHAR(15),
    email VARCHAR(100) NOT NULL
)

CREATE table autores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    data_nascimento DATE NOT NULL,
    nacionalidade VARCHAR(2) NOT NULL,
    biografia TEXT NOT NULL
)

CREATE table livros_autores (
    cod_isbn VARCHAR(13) NOT NULL,
    id_autor INTEGER NOT NULL,
    FOREIGN KEY (cod_isbn) REFERENCES livros(cod_isbn),
    FOREIGN KEY (id_autor) REFERENCES autores(id)
)