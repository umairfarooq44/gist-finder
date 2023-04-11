import useSWR from 'swr';

export const useGistForks = (id: string) => {
  const { data, error, ...rest } = useSWR(`/gists/${id}/forks`);

  return {
    ...rest,
    data: data && data.reverse(),
    error,
    hasError: Boolean(error),
    isLoading: !data && !error,
  };
};
