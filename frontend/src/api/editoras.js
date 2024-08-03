import { useQuery, useMutation } from "react-query";
import axios from "axios";
import { queryClient } from "../components/App";

const fetcheditoras = async () => {
  const { data } = await axios.get(`http://localhost:3000/editoras`);
  return data;
};

const fetchEditoraById = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/editoras/${id}`);
  return data;
};

export const useGetEditoras = (params) => {
  return useQuery(["editoras"], () => fetcheditoras(params));
};

export const useGetEditora = (id, onSuccess) => {
  return useQuery(["editoras", id], () => fetchEditoraById(id), {
    onSuccess
  });
};

export const useCreateEditora = (onSuccess, onError) =>{
  return useMutation(editora => axios.post("http://localhost:3000/editoras", editora), {
    onSuccess: data => {
      onSuccess(data);
      queryClient.refetchQueries(['editoras'])
    },
    onError
  });
}

export const useEditEditora = (onSuccess, onError) => {
  return useMutation(editora => axios.patch(`http://localhost:3000/editoras/${editora.id_editora}`, editora),
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
  return useMutation(id_editora => axios.delete(`http://localhost:3000/editoras/${id_editora}`),
    {
      onSuccess: () => {
        queryClient.refetchQueries(['editoras'])
      },
      onError,
    }
  );
}