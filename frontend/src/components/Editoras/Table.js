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
            <Th>editora.id</Th>
            <Th>editora.nome</Th>
            <Th>editora.endereco</Th>
            <Th>editora.cidade</Th>
            <Th>editora.cep</Th>
            <Th>editora.telefone</Th>
            <Th>editora.email</Th>
            <Th colSpan={2}>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {editoras.length > 0 ? (
            editoras.map((editora) => (
              <Tr key={editora.id_editora}>
                <Td>{editora.id}</Td>
                <Td>{editora.nome}</Td>
                <Td>{editora.endereco}</Td>
                <Td>{editora.cidade}</Td>
                <Td>{editora.cep}</Td>
                <Td>{editora.telefone}</Td>
                <Td>{editora.email}</Td>
                <Td>
                  <Button
                    colorScheme="blue"
                    onClick={() => handleEdit(editora.id_editora)}>
                    Edit
                  </Button>
                </Td>
                <Td>
                  <Button
                    colorScheme="red"
                    onClick={() => handleDelete(editora.id_editora)}>
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
