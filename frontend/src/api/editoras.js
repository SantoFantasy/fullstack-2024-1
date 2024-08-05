import { useQuery, useMutation } from "react-query";
import apiClient from "./client";
import { queryClient } from "../components/App";

const fetcheditoras = async () => {
  const { data } = await apiClient.get(`/editoras`);
  return data;
};

const fetchEditoraById = async (id) => {
  const { data } = await apiClient.get(`/editoras/${id}`);
  return data;
};

export const useGetEditoras = (params) => {
  return useQuery(["editoras"], () => fetcheditoras(params), {
    staleTime: Infinity
  });
};

export const useGetEditora = (id, onSuccess) => {
  return useQuery(["editoras", id], () => fetchEditoraById(id), {
    onSuccess
  });
};

export const useCreateEditora = (onSuccess, onError) =>{
  return useMutation(editora => apiClient.post("/editoras", editora), {
    onSuccess: data => {
      onSuccess(data);
      queryClient.refetchQueries(['editoras'])
    },
    onError
  });
}

export const useEditEditora = (onSuccess, onError) => {
  return useMutation(editora => apiClient.patch(`/editoras/${editora.id_editora}`, editora),
    {
      onSuccess: data => {
        onSuccess(data);
        queryClient.refetchQueries(['editoras'])
      },
      onError,
    }
  );
}

export const useDeleteEditora = (onError) => {
  return useMutation(id_editora => apiClient.delete(`/editoras/${id_editora}`),
    {
      onSuccess: () => {
        queryClient.refetchQueries(['editoras'])
      },
      onError,
    }
  );
}