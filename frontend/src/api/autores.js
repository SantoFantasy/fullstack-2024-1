import { useQuery, useMutation } from "react-query";
import apiClient from "./client";
import { queryClient } from "../components/App";

const fetchAutores = async () => {
  const { data } = await apiClient.get(`/autores`);
  return data;
};

const fetchAutorById = async (id) => {
  const { data } = await apiClient.get(`/autores/${id}`);
  return data;
};

export const useGetAutores = (params) => {
  return useQuery(["autores"], () => fetchAutores(params), {
    staleTime: Infinity
  });
};

export const useGetAutor = (id, onSuccess) => {
  return useQuery(["autores", id], () => fetchAutorById(id), {
    onSuccess
  });
};

export const useCreateAutor = (onSuccess, onError) =>{
  return useMutation(autor => apiClient.post("/autores", autor), {
    onSuccess: data => {
      onSuccess(data);
      queryClient.refetchQueries(['autores'])
    },
    onError
  });
}

export const useEditAutor = (onSuccess, onError) => {
  return useMutation(autor => apiClient.patch(`/autores/${autor.id_autor}`, autor),
    {
      onSuccess: data => {
        onSuccess(data);
        queryClient.refetchQueries(['autores'])
      },
      onError,
    }
  );
}

export const useDeleteAutor = (onError) => {
  return useMutation(id_autor => apiClient.delete(`/autores/${id_autor}`),
    {
      onSuccess: () => {
        queryClient.refetchQueries(['autores'])
      },
      onError,
    }
  );
}