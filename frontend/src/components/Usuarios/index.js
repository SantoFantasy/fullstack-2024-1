import React, { useState } from "react";
import Swal from "sweetalert2";
import { Container, Button } from "@chakra-ui/react";

import UsuariosTable from "./Table";
import Add from "./Add";
import Edit from "./Edit";

import { useGetUsuarios, useDeleteUsuario } from "../../api/usuarios";

export const Usuarios = () => {
  const { data: usuariosData, isFetching, error } = useGetUsuarios();
  const deleteUsuario = useDeleteUsuario(() =>
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Falha ao apagar usuario!",
      showCloseButton: true,
    })
  );

  const [selectedUsuario, setSelectedUsuario] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    setSelectedUsuario(id);
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
        deleteUsuario.mutate(id);
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
          <Button onClick={() => setIsAdding(true)}>Add Usuario</Button>
          <UsuariosTable
            usuarios={usuariosData}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isEditing && (
        <Edit usuarioId={selectedUsuario} setIsEditing={setIsEditing} />
      )}
      {isAdding && <Add setIsAdding={setIsAdding} />}
    </Container>
  );
};
