import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import qs from 'qs';
import { IGist, IFork } from '../typings/gist';

export const useGistForks = (id: string) => {
  const { data, error, ...rest } = useSWR<IFork[]>(`/gists/${id}/forks`);

  return {
    ...rest,
    data: data && [...data].reverse().slice(0, 3),
    error,
    hasError: Boolean(error),
    isLoading: !data && !error,
  };
};

export const useInfiniteGists = (user: string) => {
  const ITEMS_PER_PAGE = 30;
  const getKey = (pageIndex: number) => {
    return user
      ? `/users/${user}/gists${qs.stringify(
          { page: pageIndex + 1 },
          { addQueryPrefix: true }
        )}`
      : null;
  };

  const { data, error, size, setSize, ...rest } = useSWRInfinite<IGist[]>(
    getKey,
    {
      revalidateFirstPage: false,
    }
  );

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined') ||
    false;
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty ||
    (data && data[data.length - 1]?.length < ITEMS_PER_PAGE) ||
    false;

  return {
    ...rest,
    data: data
      ? data
          .reduce((acc, curr: any) => [...acc, ...curr], [])
          .map((gist) => {
            const languages: { [name: string]: boolean } = {};
            Object.values(gist.files).forEach((file) => {
              languages[file.language] = true;
            });
            return { ...gist, languages: Object.keys(languages) };
          })
      : [],
    error,
    isLoading: isLoadingInitialData,
    isLoadingMore,
    isReachingEnd,
    setSize,
    size,
  };
};
