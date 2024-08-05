import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useCreateUsuario } from '../../api/usuarios';
import {
  Input,
  Box,
  FormControl,
  FormLabel,
  Container,
  Switch,
  Flex,
  Button
} from '@chakra-ui/react';

const Add = ({ setIsAdding }) => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [data_nascimento, setData_nascimento] = useState('');
  const [sexo, setSexo] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [func_status, setFunc_status] = useState(false);
  const [admin_status, setAdmin_status] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const mutation = useCreateUsuario(
    () =>
      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: `${nome} criado com sucesso.`,
        showConfirmButton: false,
        timer: 1500,
        didClose: () => setIsAdding(false),
      }),
    () =>
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Problemas!',
        showConfirmButton: true,
      }),
  );

  const handleAdd = (e) => {
    e.preventDefault();
    mutation.mutate({
      nome,
      cpf,
      data_nascimento,
      sexo,
      endereco,
      bairro,
      cidade,
      cep,
      telefone,
      email,
      func_status,
      admin_status,
      usuario,
      senha,
    });
  };

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
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>CPF</FormLabel>
          <Input
            id="CPF"
            type="text"
            name="CPF"
            isRequired
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Sexo</FormLabel>
          <Input
            placeholder="(M)masculino, F(feminino), O(outro)"
            id="sexo"
            type="text"
            isRequired
            name="sexo"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Nascimento</FormLabel>
          <Input
            placeholder="dd/mm/aaaa"
            id="nascimento"
            type="date"
            isRequired
            name="nascimento"
            value={data_nascimento}
            onChange={(e) => setData_nascimento(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Endereço</FormLabel>
          <Input
            id="endereco"
            type="text"
            name="endereco"
            isRequired
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Bairro</FormLabel>
          <Input
            id="bairro"
            type="text"
            name="bairro"
            isRequired
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Cidade</FormLabel>
          <Input
            id="cidade"
            type="text"
            name="cidade"
            isRequired
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>CEP</FormLabel>
          <Input
            id="cep"
            type="text"
            name="cep"
            isRequired
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Telefone</FormLabel>
          <Input
            id="telefone"
            type="text"
            name="telefone"
            isRequired
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            isRequired
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Usuário</FormLabel>
          <Input
            id="usuario"
            type="text"
            name="usuario"
            isRequired
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Senha</FormLabel>
          <Input
            id="senha"
            type="password"
            name="senha"
            isRequired
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </FormControl>
        <Box>
          <Flex pt="1rem" justifyContent="flex-end">
            <Box mr="1rem">
              <FormControl>
                <FormLabel>É Funcionário?</FormLabel>
                <Switch
                  id="func_status"
                  type="checkbox"
                  name="func_status"
                  value={func_status}
                  onChange={(e) => setFunc_status(e.target.value)}
                />
              </FormControl>
            </Box>
            <Box mr="1rem">
              <FormControl>
                <FormLabel>Administrador</FormLabel>
                <Switch
                  id="admin_status"
                  type="checkbox"
                  name="admin_status"
                  value={admin_status}
                  onChange={(e) => setAdmin_status(e.target.value)}
                />
              </FormControl>
            </Box>
            <Box mr="1rem">
              <Button type="submit" colorScheme="blue">
                Salvar
              </Button>
            </Box>
            <Box>
              <Input
                type="Button"
                value="Cancelar"
                onClick={() => setIsAdding(false)}
              />
            </Box>
          </Flex>
        </Box>
      </form>
    </Container>
  );
};

export default Add;
