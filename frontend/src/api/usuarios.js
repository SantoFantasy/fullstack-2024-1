import { useQuery, useMutation } from "react-query";
import axios from "axios";
import { queryClient } from "../components/App";

const fetchUsuarioes = async () => {
  const { data } = await axios.get(`http://localhost:3000/usuarios`);
  return data;
};

const fetchUsuarioById = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/usuarios/${id}`);
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
  return useMutation(usuario => axios.post("http://localhost:3000/usuarios", usuario), {
    onSuccess: data => {
      onSuccess(data);
      queryClient.refetchQueries(['usuarios'])
    },
    onError
  });
}

export const useEditUsuario = (onSuccess, onError) => {
  return useMutation(usuario => axios.patch(`http://localhost:3000/usuarios/${usuario.id_usuario}`, usuario),
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
  return useMutation(id_usuario => axios.delete(`http://localhost:3000/usuarios/${id_usuario}`),
    {
      onSuccess: () => {
        queryClient.refetchQueries(['usuarios'])
      },
      onError,
    }
  );
}