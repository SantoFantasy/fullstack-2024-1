import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
import { queryClient } from '../components/App';

const fetchLivros = async () => {
  const { data } = await axios.get(`http://localhost:3000/livros`);
  return data;
};

const fetchLivroById = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/livros/${id}`);
  return data;
};

export const useGetLivros = (params) => {
  return useQuery(['livros'], () => fetchLivros(params));
};

export const useGetLivro = (id, onSuccess) => {
  return useQuery(['livros', id], () => fetchLivroById(id), {
    onSuccess,
  });
};

export const useCreateLivro = (onSuccess, onError) => {
  return useMutation(
    (livro) => axios.post('http://localhost:3000/livros', livro),
    {
      onSuccess: (data) => {
        onSuccess(data);
        queryClient.refetchQueries(['livros']);
      },
      onError,
    },
  );
};

export const useEditLivro = (onSuccess, onError) => {
  return useMutation(
    (livro) =>
      axios.patch(`http://localhost:3000/livros/${livro.cod_isbn}`, livro),
    {
      onSuccess: (data) => {
        onSuccess(data);
        queryClient.refetchQueries(['livros']);
      },
      onError,
    },
  );
};

export const useDeleteLivro = (onError) => {
  return useMutation(
    (id_livro) => axios.delete(`http://localhost:3000/livros/${id_livro}`),
    {
      onSuccess: () => {
        queryClient.refetchQueries(['livros']);
      },
      onError,
    },
  );
};
