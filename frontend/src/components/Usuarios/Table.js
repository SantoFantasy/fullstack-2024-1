import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";

const formatter = new Intl.DateTimeFormat(navigator.language, {
  dateStyle: "medium",
  timeZone: "UTC",
});

const AutoresTable = ({ usuarios, handleEdit, handleDelete }) => {
  return (
    <TableContainer w="100%">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>cod_usuario</Th>
            <Th>nome</Th>
            <Th>cpf</Th>
            <Th>data_nascimento</Th>
            <Th>sexo</Th>
            <Th>endereco</Th>
            <Th>bairro</Th>
            <Th>cidade</Th>
            <Th>cep</Th>
            <Th>telefone</Th>
            <Th>email</Th>
            <Th>func_status</Th>
            <Th>admin_status</Th>
            <Th>usuario</Th>
            <Th>senha</Th>
            <Th colSpan={2}>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {usuarios.length > 0 ? (
            usuarios.map((usuario) => (
              <Tr key={usuario.id_usuario}>
                <Td>{usuario.id_usuario}</Td>
                <Td>{usuario.cod_usuario}</Td>
                <Td>{usuario.func_status}</Td>
                <Td>{usuario.admin_status}</Td>
                <Td>{usuario.nome}</Td>
                <Td>{usuario.cpf}</Td>
                <Td>{formatter.format(new Date(usuario.data_nascimento))}</Td>
                <Td>{usuario.sexo}</Td>
                <Td>{usuario.endereco}</Td>
                <Td>{usuario.bairro}</Td>
                <Td>{usuario.cidade}</Td>
                <Td>{usuario.cep}</Td>
                <Td>{usuario.telefone}</Td>
                <Td>{usuario.email}</Td>
                <Td>{usuario.usuario}</Td>
                <Td>{usuario.senha}</Td>
                <Td>
                  <Button
                    colorScheme="blue"
                    onClick={() => handleEdit(usuario.id_usuario)}>
                    Edit
                  </Button>
                </Td>
                <Td>
                  <Button
                    colorScheme="red"
                    onClick={() => handleDelete(usuario.id_usuario)}>
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan={5}>Nenhum Usuario Cadastrado</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default AutoresTable;
