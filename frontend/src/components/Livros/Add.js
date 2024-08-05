import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Input, Button, Box, FormControl, FormLabel, Container, Heading, Flex, Select } from '@chakra-ui/react'
import {
  Select as MultiSelect,
} from "chakra-react-select";

import { useGetAutores } from '../../api/autores'
import { useGetEditoras } from '../../api/editoras';
import { useCreateLivro } from '../../api/livros';

const Add = ({ setIsAdding }) => {
  const { data: autores, isFetching: autoresFetching} = useGetAutores()
  const { data: editoras, isFetching: editorasFetching } = useGetEditoras()
  
  const mutation = useCreateLivro(
    () =>  Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${nome} criado com sucesso.`,
      showConfirmButton: false,
      timer: 1500,
      didClose: () => setIsAdding(false)
    }),
    () => Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'Problemas!',
      showConfirmButton: true,
    })
  )

  const handleAdd = e => {
    e.preventDefault();
    const data = new FormData(e.target)
    mutation.mutate({
      ...Object.fromEntries(data),
      autores: data.getAll("autores")
    })
  };

  if (autoresFetching || editorasFetching) {
    return <div> Loading...</div>
  }

  // autores: number[];
  // editora: number;

  return (
    <Container maxW="100%" w="100%">
      <Heading size='md'>Adicionar Livro</Heading>
      <form onSubmit={handleAdd}>
        <FormControl>
          <FormLabel htmlFor="cod_isbn">Cod ISBN</FormLabel>
          <Input
            id="cod_isbn"
            type="text"
            name="cod_isbn"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="titulo">titulo</FormLabel>
          <Input
            id="titulo"
            type="text"
            name="titulo"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="tipo_capa">tipo_capa</FormLabel>
          <Input
            id="tipo_capa"
            type="text"
            name="tipo_capa"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="ano_publicacao">ano_publicacao</FormLabel>
          <Input
            id="ano_publicacao"
            type="number"
            name="ano_publicacao"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="genero">genero</FormLabel>
          <Input
            id="genero"
            type="text"
            name="genero"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="cdd">cdd</FormLabel>
          <Input
            id="cdd"
            type="text"
            name="cdd"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="qtd_paginas">qtd_paginas</FormLabel>
          <Input
            id="qtd_paginas"
            type="number"
            name="qtd_paginas"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="edicao">edicao</FormLabel>
          <Input
            id="edicao"
            type="number"
            name="edicao"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="idioma">idioma</FormLabel>
          <Input
            id="idioma"
            type="text"
            name="idioma"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="qtd_copias">qtd_copias</FormLabel>
          <Input
            id="qtd_copias"
            type="number"
            name="qtd_copias"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="editora">Editora</FormLabel>
          <MultiSelect
            id="editora"
            type="number"
            name="editora"
            options={editoras.map(editora => ({value : editora.id, label: editora.nome}))}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="autores">autor</FormLabel>
          <MultiSelect
            id="autores"
            type="number"
            name="autores"
            isMulti
            options={autores.map(autor => ({value: autor.id_autor, label: autor.nome}))}
          />
        </FormControl> 
        <Flex pt="1rem" justifyContent="flex-end">
          <Box mr="1rem">
            <Button type="submit" colorScheme='blue'>Salvar</Button>
          </Box>
          <Box>
            <Button onClick={() => setIsAdding(false)}>Cancelar</Button>
          </Box>
        </Flex>
      </form>
    </Container>
  );
};

export default Add;
