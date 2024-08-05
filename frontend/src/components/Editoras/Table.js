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

const EditorasTable = ({ editoras, handleEdit, handleDelete }) => {
  return (
    <TableContainer w="100%">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Nome</Th>
            <Th>Endereco</Th>
            <Th>Cidade</Th>
            <Th>Cep</Th>
            <Th>Telefone</Th>
            <Th>Email</Th>
            <Th colSpan={2}>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {editoras.length > 0 ? (
            editoras.map((editora) => (
              <Tr key={editora.id}>
                <Td>{editora.id}</Td>
                <Td>{editora.nome}</Td>
                <Td>{editora.endereco}</Td>
                <Td>{editora.cidade}</Td>
                <Td>{editora.cep}</Td>
                <Td>{editora.telefone}</Td>
                <Td>{editora.email}</Td>
                <Td>
                  <Button colorScheme='blue' onClick={() => handleEdit(editora.id)}>
                      Edit
                  </Button>
                </Td>
                <Td>
                  <Button colorScheme='red' onClick={() => handleDelete(editora.id)}>
                      Delete
                  </Button>
                </Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan={5}>Nenhum Editora Cadastrada</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default EditorasTable;
