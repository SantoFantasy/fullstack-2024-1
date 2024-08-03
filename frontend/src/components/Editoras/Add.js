import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useCreateEditora } from '../../api/editoras'
import { Input, Button, Box, FormControl, FormLabel, Container, Heading, Flex } from '@chakra-ui/react'

const Add = ({ setIsAdding }) => {
  const [nome, setNome] = useState('')
  const [cidade, setCidade] = useState('')

  const mutation = useCreateEditora(
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

    if (!nome || !cidade) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Campos requeridos faltando.',
        showConfirmButton: true,
      });
    }

    mutation.mutate({
      nome,
      cidade
    })
  };

  return (
    <Container maxW="100%" w="100%">
      <form onSubmit={handleAdd}>
        <Heading size='md'>Add Editora</Heading>
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
          <FormLabel htmlFor="cidade">Cidade</FormLabel>
          <Input
            id="cidade"
            type="date"
            name="cidade"
            value={cidade}
            onChange={e => setCidade(e.target.value)}
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
