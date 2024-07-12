export class CreateLivroDto {
  cod_isbn: string;
  titulo: string;
  autores: number[];
  editora: number;
  tipo_capa: string;
  ano_publicacao: number;
  genero: string;
  cdd: string;
  qtd_paginas: number;
  edicao: number;
  idioma: string;
  qtd_copias: number;
}
