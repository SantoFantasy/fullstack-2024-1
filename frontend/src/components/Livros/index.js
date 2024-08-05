import React, { useState } from "react";
import Swal from "sweetalert2";
import { Container, Button } from "@chakra-ui/react";

import AutoresTable from "./Table";
import Add from "./Add";
import { Edit } from "./Edit";

import { useDeleteLivro, useGetLivros } from "../../api/livros";

export const Livros = () => {
  const { data: livrosData, isFetching, error } = useGetLivros();
  const deleteAutor = useDeleteLivro(() =>
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Falha ao apagar livro!",
      showCloseButton: true,
    })
  );

  const [selectedLivro, setSelectedLivro] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    setSelectedLivro(id);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Certeza?",
      text: "Essa ação não poderá ser desfeita!",
      showCancelButton: true,
      confirmButtonText: "Sim, apague!",
      cancelButtonText: "Não, cancele!",
    }).then(result => {
      if (result.value) {
        deleteAutor.mutate(id);
      }
    });
  };

  if (isFetching || error) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container maxW="100%" w="100%">
      {!isAdding && !isEditing && (
        <>
          <Button onClick={() => setIsAdding(true)}>Add Livro</Button>
          <AutoresTable
            livros={livrosData}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isEditing && (
        <Edit codISBN={selectedLivro} setIsEditing={setIsEditing} />
      )}
      {isAdding && <Add setIsAdding={setIsAdding} />}
    </Container>
  );
};
