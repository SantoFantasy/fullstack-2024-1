import React from 'react';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button
} from '@chakra-ui/react'

const formatter = new Intl.DateTimeFormat(navigator.language, {
  dateStyle: 'medium',
  timeZone: 'UTC'
});

const AutoresTable = ({ autores, handleEdit, handleDelete }) => {

  return (
    <TableContainer w="100%">
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Nome</Th>
            <Th>Data Nascimento</Th>
            <Th>Nacionalidade</Th>
            <Th colSpan={2}>
              Actions
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {autores.length > 0 ? (
            autores.map((autor) => (
              <Tr key={autor.id_autor}>
                <Td>{autor.id_autor}</Td>
                <Td>{autor.nome}</Td>
                <Td>{formatter.format(new Date(autor.data_nascimento))}</Td>
                <Td>{autor.nacionalidade}</Td>
                <Td>
                  <Button colorScheme='blue' onClick={() => handleEdit(autor.id_autor)}>
                    Edit
                  </Button>
                </Td>
                <Td>
                  <Button colorScheme='red' onClick={() => handleDelete(autor.id_autor)}>
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan={5}>Nenhum Autor Cadastrado</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default AutoresTable;
