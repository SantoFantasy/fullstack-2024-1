import { useQuery, useMutation } from 'react-query';
import apiClient from './client';
import { queryClient } from '../components/App';

const fetchLivros = async () => {
  const { data } = await apiClient.get(`/livros`);
  return data;
};

const fetchLivroById = async (id) => {
  const { data } = await apiClient.get(`/livros/${id}`);
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
    (livro) => apiClient.post('/livros', livro),
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
      apiClient.patch(`/livros/${livro.cod_isbn}`, livro),
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
    (id_livro) => apiClient.delete(`/livros/${id_livro}`),
    {
      onSuccess: () => {
        queryClient.refetchQueries(['livros']);
      },
      onError,
    },
  );
};
