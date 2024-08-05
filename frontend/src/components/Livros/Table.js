import React from 'react';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from '@chakra-ui/react';

const formatter = new Intl.DateTimeFormat(navigator.language, {
  dateStyle: 'medium',
  timeZone: 'UTC',
});

const LivroesTable = ({ livros, handleEdit, handleDelete }) => {
  return (
    <TableContainer w="100%">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>cod_isbn</Th>
            <Th>titulo</Th>
            <Th>tipo_capa</Th>
            <Th>ano_publicacao</Th>
            <Th>genero</Th>
            <Th>cdd</Th>
            <Th>qtd_paginas</Th>
            <Th>edicao</Th>
            <Th>idioma</Th>
            <Th>qtd_copias</Th>
            <Th colSpan={2}>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {livros.length > 0 ? (
            livros.map((livro) => (
              <Tr key={livro.cod_isbn}>
                <Td>{livro.cod_isbn}</Td>
                <Td>{livro.titulo}</Td>
                <Td>{livro.tipo_capa}</Td>
                <Td>{livro.ano_publicacao}</Td>
                <Td>{livro.genero}</Td>
                <Td>{livro.cdd}</Td>
                <Td>{livro.qtd_paginas}</Td>
                <Td>{livro.edicao}</Td>
                <Td>{livro.idioma}</Td>
                <Td>{livro.qtd_copias}</Td>
                <Td>
                  <Button
                    colorScheme="blue"
                    onClick={() => handleEdit(livro.cod_isbn)}
                  >
                    Edit
                  </Button>
                </Td>
                <Td>
                  <Button
                    colorScheme="red"
                    onClick={() => handleDelete(livro.cod_isbn)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan={5}>Nenhum Livro Cadastrado</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default LivroesTable;
