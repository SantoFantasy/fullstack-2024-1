import { useQuery, useMutation } from "react-query";
import axios from "axios";
import { queryClient } from "../components/App";

const fetchAutores = async () => {
  const { data } = await axios.get(`http://localhost:3000/autores`);
  return data;
};

const fetchAutorById = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/autores/${id}`);
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
  return useMutation(autor => axios.post("http://localhost:3000/autores", autor), {
    onSuccess: data => {
      onSuccess(data);
      queryClient.refetchQueries(['autores'])
    },
    onError
  });
}

export const useEditAutor = (onSuccess, onError) => {
  return useMutation(autor => axios.patch(`http://localhost:3000/autores/${autor.id_autor}`, autor),
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
  return useMutation(id_autor => axios.delete(`http://localhost:3000/autores/${id_autor}`),
    {
      onSuccess: () => {
        queryClient.refetchQueries(['autores'])
      },
      onError,
    }
  );
}