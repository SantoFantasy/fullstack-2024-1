import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useEditEditora, useGetEditora } from '../../api/editoras'
import { Input, Heading, Button, Box, FormControl, FormLabel, Container, Flex } from '@chakra-ui/react'

const Edit = ({ id,  setIsEditing }) => {

  const { isFetching, error } = useGetEditora(id,
    (editora) => {
      setNome(editora.nome)
      setCidade(editora.data_nascimento)
      setEndereco(editora.endereco)
      setCep(editora.cep)
      setTelefone(editora.telefone)
      setEmail(editora.email)
    }
  );

  const [nome, setNome] = useState('')
  const [cidade, setCidade] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cep, setCep] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')


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
      id,
      nome,
      cidade,
      endereco,
      telefone,
      cep,
      email
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
            type="text"
            name="cidade"
            value={cidade}
            onChange={e => setCidade(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="Endereço">Endereço</FormLabel>
          <Input
            id="endereco"
            type="text"
            name="endereco"
            value={endereco}
            onChange={e => setEndereco(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="CEP">CEP</FormLabel>
          <Input
            id="cep"
            type="text"
            name="cep"
            value={cep}
            onChange={e => setCep(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="Telefone">Telefone</FormLabel>
          <Input
            id="telefone"
            type="text"
            name="telefone"
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
