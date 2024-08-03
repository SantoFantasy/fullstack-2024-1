import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useEditAutor, useGetAutor } from '../../api/autores'
import { Input, Heading, Button, Box, FormControl, FormLabel, Container, Flex } from '@chakra-ui/react'

const Edit = ({ autorId,  setIsEditing }) => {

  const { isFetching, error } = useGetAutor(autorId,
    (autor) => {
      setNome(autor.nome)
      setData_nascimento(autor.data_nascimento)
      setNacionalidade(autor.nacionalidade)
      setBiografia(autor.biografia)
    }
  );

  const [nome, setNome] = useState('')
  const [data_nascimento, setData_nascimento] = useState('')
  const [nacionalidade, setNacionalidade] = useState('')
  const [biografia, setBiografia] = useState('')

  
  const mutation = useEditAutor(
    () =>  Swal.fire({
      icon: 'success',
      title: 'Atualizado!',
      text: `${nome} atualizado.`,
      showConfirmButton: true,
      didClose: () => setIsEditing(false)
    }),
    () => Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'Problemas!',
      showConfirmButton: true
    })
  )

  const handleUpdate = e => {
    e.preventDefault();

    if (!nome || !data_nascimento || !nacionalidade) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }
    mutation.mutate({
      id_autor: autorId,
      nome,
      data_nascimento,
      nacionalidade,
      biografia
    })

  };

  if (isFetching)
    return <div>Loading...</div>

  if (error)
    return <div>Error...</div>

  return (
    <Container maxW="100%" w="100%">
      <form onSubmit={handleUpdate}>
        <Heading size='md'>Edit Autor</Heading>
        <FormControl>
          <FormLabel htmlFor="nome">Nome</FormLabel>
          <Input
            id="nome"
            type="text"
            name="nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="nascimento">Data Nascimento</FormLabel>
          <Input
            id="nascimento"
            type="date"
            name="nascimento"
            value={data_nascimento.substring(0, 10)}
            onChange={e => setData_nascimento(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="nacionalidade">Nacionalidade</FormLabel>
          <Input
            id="nacionalidade"
            type="text"
            name="nacionalidade"
            value={nacionalidade}
            onChange={e => setNacionalidade(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="biografia">Biografia</FormLabel>
          <Input
            id="biografia"
            type="text"
            name="biografia"
            value={biografia}
            onChange={e => setBiografia(e.target.value)}
          />
        </FormControl>
        <Flex pt="1rem" justifyContent="flex-end">
          <Box mr="1rem">
            <Button type="submit" colorScheme='blue'>Salvar</Button>
          </Box>
          <Box>
            <Input
              type="Button"
              value="Cancelar"
              onClick={() => setIsEditing(false)}
            />
          </Box>
        </Flex>
      </form>
    </Container>
  );
};

export default Edit;
