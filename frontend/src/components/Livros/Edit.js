import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Input, Button, Box, FormControl, FormLabel, Container, Heading, Flex, Select } from '@chakra-ui/react'
import {
  Select as MultiSelect,
} from "chakra-react-select";

import { useGetAutores } from '../../api/autores'
import { useGetEditoras } from '../../api/editoras';
import { useCreateLivro, useEditLivro, useGetLivro } from '../../api/livros';

export const Edit = ({ codISBN, setIsEditing }) => {
  const { data, isFetching } = useGetLivro(codISBN);
  const { data: autores, isFetching: autoresFetching} = useGetAutores()
  const { data: editoras, isFetching: editorasFetching } = useGetEditoras()
  
  const mutation = useEditLivro(
    () =>  Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${data.titulo} atualizado com sucesso.`,
      showConfirmButton: false,
      timer: 1500,
      didClose: () => setIsEditing(false)
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
      cod_isbn: codISBN,
      autores: data.getAll("autores")
    })
  };

  if (autoresFetching || editorasFetching || isFetching) {
    return <div> Loading...</div>
  }

  return (
    <Container maxW="100%" w="100%">
      <Heading size='md'>Adicionar Livro</Heading>
      <form onSubmit={handleAdd}>
        <FormControl>
          <FormLabel htmlFor="titulo">titulo</FormLabel>
          <Input
            id="titulo"
            type="text"
            name="titulo"
            defaultValue={data.titulo}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="tipo_capa">tipo_capa</FormLabel>
          <Input
            id="tipo_capa"
            type="text"
            name="tipo_capa"
            defaultValue={data.tipo_capa}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="ano_publicacao">ano_publicacao</FormLabel>
          <Input
            id="ano_publicacao"
            type="number"
            name="ano_publicacao"
            defaultValue={data.ano_publicacao}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="genero">genero</FormLabel>
          <Input
            id="genero"
            type="text"
            name="genero"
            defaultValue={data.genero}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="cdd">cdd</FormLabel>
          <Input
            id="cdd"
            type="text"
            name="cdd"
            defaultValue={data.cdd}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="qtd_paginas">qtd_paginas</FormLabel>
          <Input
            id="qtd_paginas"
            type="number"
            name="qtd_paginas"
            defaultValue={data.qtd_paginas}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="edicao">edicao</FormLabel>
          <Input
            id="edicao"
            type="number"
            name="edicao"
            defaultValue={data.edicao}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="idioma">idioma</FormLabel>
          <Input
            id="idioma"
            type="text"
            name="idioma"
            defaultValue={data.idioma}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="qtd_copias">qtd_copias</FormLabel>
          <Input
            id="qtd_copias"
            type="number"
            name="qtd_copias"
            defaultValue={data.qtd_copias}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="editora">Editora</FormLabel>
          <MultiSelect
            id="editora"
            type="number"
            name="editora"
            defaultValue={{ value: data.editora, label: editoras.find(e => e.id === data.editora).nome}}
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
            defaultValue={data.autores.map(({ id_autor}) => {
                const selectedAutor = autores.find(a => a.id_autor === id_autor)
                return {
                  value: selectedAutor.id_autor,
                  label: selectedAutor.nome
                }
              }
            )}
            options={autores.map(autor => ({value: autor.id_autor, label: autor.nome}))}
          />
        </FormControl> 
        <Flex pt="1rem" justifyContent="flex-end">
          <Box mr="1rem">
            <Button type="submit" colorScheme='blue'>Salvar</Button>
          </Box>
          <Box>
            <Button onClick={() => setIsEditing(false)}>Cancelar</Button>
          </Box>
        </Flex>
      </form>
    </Container>
  );
};
