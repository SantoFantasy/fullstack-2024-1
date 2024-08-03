import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useCreateUsuario } from '../../api/usuarios'
import { Input, Box, FormControl, FormLabel, Container } from '@chakra-ui/react'

const Add = ({ setIsAdding }) => {
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [nascimento, setNascimento] = useState('')
  const [sexo, setSexo] = useState('')
  const [endereco, setEndereco] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [cep, setCep] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [func_status, setFunc_status] = useState('')
  const [admin_status, setAdmin_status] = useState('')
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  

  const mutation = useCreateUsuario(
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

    if (!nome || !nascimento || !sexo || !endereco || !bairro || !cidade || !cep || !telefone || !email || !func_status || !admin_status || !usuario || !senha) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Campos requeridos faltando.',
        showConfirmButton: true,
      });
    }

    mutation.mutate({
      nome,
      cpf,
      nascimento,
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
      senha
    })
  };

  return (
    <Container maxW="100%" w="100%">
      <FormControl onSubmit={handleAdd}>
        <FormLabel>Nome</FormLabel>
        <Input
          id="nome"
          type="text"
          name="nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <FormLabel>CPF</FormLabel>
        <Input
          id="CPF"
          type="text"
          name="CPF"
          value={cpf}
          onChange={e => setCpf(e.target.value)}
        />
        <FormLabel>Sexo</FormLabel>
        <Input
          placeholder='exemplo: BR para Brasileiro, PT para Português'
          id="sexo"
          type="text"
          name="sexo"
          value={sexo}
          onChange={e => setSexo(e.target.value)}
        />
        <FormLabel>Nascimento</FormLabel>
        <Input
          placeholder='exemplo: BR para Brasileiro, PT para Português'
          id="sexo"
          type="date"
          name="sexo"
          value={sexo}
          onChange={e => setNascimento(e.target.value)}
        />
        <FormLabel>Endereço</FormLabel>
        <Input
          id="endereco"
          type="text"
          name="endereco"
          value={endereco}
          onChange={e => setEndereco(e.target.value)}
        />
        <FormLabel>Bairro</FormLabel>
        <Input
          id="bairro"
          type="text"
          name="bairro"
          value={bairro}
          onChange={e => setBairro(e.target.value)}
        />
        <FormLabel>Cidade</FormLabel>
        <Input
          id="cidade"
          type="text"
          name="cidade"
          value={cidade}
          onChange={e => setCidade(e.target.value)}
        />
        <FormLabel>CEP</FormLabel>
        <Input
          id="cep"
          type="text"
          name="cep"
          value={cep}
          onChange={e => setCep(e.target.value)}
        />
        <FormLabel>Telefone</FormLabel>
        <Input
          id="telefone"
          type="text"
          name="telefone"
          value={telefone}
          onChange={e => setTelefone(e.target.value)}
        />
        <FormLabel>Email</FormLabel>
        <Input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <FormLabel>Funcionário</FormLabel>
        <Input
          id="func_status"
          type="checkbox"
          name="func_status"
          value={func_status}
          onChange={e => setFunc_status(e.target.value)}
        />
        <FormLabel>Administrador</FormLabel>
        <Input
          id="admin_status"
          type="checkbox"
          name="admin_status"
          value={admin_status}
          onChange={e => setAdmin_status(e.target.value)}
        />
        <FormLabel>Usuário</FormLabel>
        <Input
          id="usuario"
          type="text"
          name="usuario"
          value={usuario}
          onChange={e => setUsuario(e.target.value)}
        />
        <FormLabel>Senha</FormLabel>
        <Input
          id="senha"
          type="password"
          name="senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
        />
        <Box>
          <Input type="submit" value="Criar" />
          <Input
            type="Button"
            value="Cancelar"
            onClick={() => setIsAdding(false)}
          />
        </Box>
      </FormControl>
    </Container>
  );
};

export default Add;
