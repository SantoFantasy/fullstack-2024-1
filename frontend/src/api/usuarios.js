import { useQuery, useMutation } from "react-query";
import apiClient from "./client";
import { queryClient } from "../components/App";

const fetchUsuarioes = async () => {
  const { data } = await apiClient.get(`/usuarios`);
  return data;
};

const fetchUsuarioById = async (id) => {
  const { data } = await apiClient.get(`/usuarios/${id}`);
  return data;
};

export const useGetUsuarios = (params) => {
  return useQuery(["usuarios"], () => fetchUsuarioes(params));
};

export const useGetUsuario = (id, onSuccess) => {
  return useQuery(["usuarios", id], () => fetchUsuarioById(id), {
    onSuccess
  });
};

export const useCreateUsuario = (onSuccess, onError) =>{
  return useMutation(usuario => apiClient.post("/usuarios", usuario), {
    onSuccess: data => {
      onSuccess(data);
      queryClient.refetchQueries(['usuarios'])
    },
    onError
  });
}

export const useEditUsuario = (onSuccess, onError) => {
  return useMutation(usuario => apiClient.patch(`/usuarios/${usuario.id}`, usuario),
    {
      onSuccess: data => {
        onSuccess(data);
        queryClient.refetchQueries(['usuarios'])
      },
      onError,
    }
  );
}

export const useDeleteUsuario = (onError) => {
  return useMutation(cod_usuario => apiClient.delete(`/usuarios/${cod_usuario}`),
    {
      onSuccess: () => {
        queryClient.refetchQueries(['usuarios'])
      },
      onError,
    }
  );
}