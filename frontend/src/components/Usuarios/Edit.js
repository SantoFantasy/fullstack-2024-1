import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useEditUsuario, useGetUsuario } from '../../api/usuarios';
import {
  Input,
  Box,
  FormControl,
  FormLabel,
  Container,
  Checkbox,
  Flex,
  Button,
} from '@chakra-ui/react';

const Edit = ({ usuarioId, setIsEditing }) => {
  const { data, isFetching, error } = useGetUsuario(usuarioId, (usuario) => {
    setAdmin(usuario.admin_status);
    setFuncionario(usuario.func_status);
  });

  const mutation = useEditUsuario(
    () =>
      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: `${data.nome} criado com sucesso.`,
        showConfirmButton: false,
        timer: 1500,
        didClose: () => setIsEditing(false),
      }),
    () =>
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Problemas!',
        showConfirmButton: true,
      }),
  );

  const [admin, setAdmin] = useState(false);
  const [funcionario, setFuncionario] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    mutation.mutate({
      ...data,
      id: usuarioId,
      admin_status: admin,
      func_status: funcionario,
    });
  };

  if (isFetching) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <Container maxW="100%" w="100%">
      <form onSubmit={handleAdd}>
        <FormControl>
          <FormLabel>Nome</FormLabel>
          <Input
            id="nome"
            type="text"
            name="nome"
            isRequired
            defaultValue={data.nome}
          />
        </FormControl>
        <FormControl>
          <FormLabel>CPF</FormLabel>
          <Input
            id="CPF"
            type="text"
            name="CPF"
            isRequired
            defaultValue={data.cpf}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Sexo</FormLabel>
          <Input
            placeholder="(M)masculino, F(feminino), O(outro)"
            id="sexo"
            type="text"
            name="sexo"
            isRequired
            defaultValue={data.sexo}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Nascimento</FormLabel>
          <Input
            placeholder="dd/mm/aaaa"
            id="nascimento"
            type="date"
            name="nascimento"
            isRequired
            defaultValue={data.data_nascimento.substring(0, 10)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Endereço</FormLabel>
          <Input
            id="endereco"
            type="text"
            name="endereco"
            isRequired
            defaultValue={data.endereco}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Bairro</FormLabel>
          <Input
            id="bairro"
            type="text"
            name="bairro"
            isRequired
            defaultValue={data.bairro}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Cidade</FormLabel>
          <Input
            id="cidade"
            type="text"
            name="cidade"
            isRequired
            defaultValue={data.cidade}
          />
        </FormControl>
        <FormControl>
          <FormLabel>CEP</FormLabel>
          <Input
            id="cep"
            type="text"
            name="cep"
            isRequired
            defaultValue={data.cep}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Telefone</FormLabel>
          <Input
            id="telefone"
            type="text"
            name="telefone"
            isRequired
            defaultValue={data.telefone}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            isRequired
            defaultValue={data.email}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Senha</FormLabel>
          <Input
            id="senha"
            name="senha"
            type="password"
            isRequired
            defaultValue={data.senha}
          />
        </FormControl>
        <Box>
          <Flex pt="1rem" justifyContent="flex-end">
            <Box mr="1rem">
              <FormControl>
                <FormLabel>É Funcionário?</FormLabel>
                <Checkbox
                  id="funcionario"
                  name="funcionario"
                  value={funcionario}
                  isChecked={funcionario}
                  onChange={(e) => setFuncionario(Boolean(e.target.checked))}
                />
              </FormControl>
            </Box>
            <Box mr="1rem">
              <FormControl>
                <FormLabel>Administrador</FormLabel>
                <Checkbox
                  id="admin"
                  name="admin"
                  value={admin}
                  isChecked={admin}
                  onChange={(e) => setAdmin(Boolean(e.target.checked))}
                />
              </FormControl>
            </Box>
            <Box mr="1rem">
              <Button type="submit" colorScheme="blue">
                Salvar
              </Button>
            </Box>
            <Box>
              <Button onClick={() => setIsEditing(false)}>Cancelar</Button>
            </Box>
          </Flex>
        </Box>
      </form>
    </Container>
  );
};

export default Edit;
