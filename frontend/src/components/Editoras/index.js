import React, { useState } from "react";
import Swal from "sweetalert2";
import { Container, Button } from "@chakra-ui/react";

import EditorasTable from "./Table";
import Add from "./Add";
import Edit from "./Edit";

import { useGetEditoras, useDeleteEditora } from "../../api/editoras";

export const Editoras = () => {
  const { data: editorasData, isFetching, error } = useGetEditoras();
  const deleteEditora = useDeleteEditora(() =>
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Falha ao apagar autora!",
      showCloseButton: true,
    })
  );

  const [selectedEditora, setSelectedEditora] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    setSelectedEditora(id);
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
        deleteEditora.mutate(id);
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
          <Button onClick={() => setIsAdding(true)}>Add Editora</Button>
          <EditorasTable
            editoras={editorasData}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isEditing && (
        <Edit autoraId={selectedEditora} setIsEditing={setIsEditing} />
      )}
      {isAdding && <Add setIsAdding={setIsAdding} />}
    </Container>
  );
};
