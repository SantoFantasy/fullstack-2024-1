import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useCreateAutor } from '../../api/autores'
import { Input, Button, Box, FormControl, FormLabel, Container, Heading, Flex } from '@chakra-ui/react'

const Add = ({ setIsAdding }) => {
  const [nome, setNome] = useState('')
  const [data_nascimento, setData_nascimento] = useState('')
  const [nacionalidade, setNacionalidade] = useState('')
  const [biografia, setBiografia] = useState('')

  const mutation = useCreateAutor(
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

    if (!nome || !data_nascimento || !nacionalidade ) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Campos requeridos faltando.',
        showConfirmButton: true,
      });
    }

    mutation.mutate({
      nome,
      data_nascimento,
      nacionalidade,
      biografia
    })
  };

  return (
    <Container maxW="100%" w="100%">
      <form onSubmit={handleAdd}>
        <Heading size='md'>Add Autor</Heading>
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
              onClick={() => setIsAdding(false)}
            />
          </Box>
        </Flex>
      </form>
    </Container>
  );
};

export default Add;
