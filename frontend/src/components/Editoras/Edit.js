import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useEditEditora, useGetEditora } from '../../api/editoras'
import { Input, Heading, Button, Box, FormControl, FormLabel, Container, Flex } from '@chakra-ui/react'

const Edit = ({ editoraId,  setIsEditing }) => {

  const { isFetching, error } = useGetEditora(editoraId,
    (editora) => {
      setNome(editora.nome)
      setCidade(editora.data_nascimento)
    }
  );

  const [nome, setNome] = useState('')
  const [cidade, setCidade] = useState('')
  
  const mutation = useEditEditora(
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

    if (!nome || !cidade) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }
    mutation.mutate({
      id_editora: editoraId,
      nome,
      cidade,
    })

  };

  if (isFetching)
    return <div>Loading...</div>

  if (error)
    return <div>Error...</div>

  return (
    <Container maxW="100%" w="100%">
      <form onSubmit={handleUpdate}>
        <Heading size='md'>Edit Editora</Heading>
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
              onClick={() => setIsEditing(false)}
            />
          </Box>
        </Flex>
      </form>
    </Container>
  );
};

export default Edit;
