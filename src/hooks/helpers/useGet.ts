import useSWR from "swr";

interface Result<T> {
  data: T | undefined;
  isLoading: boolean;
  isValidating: boolean;
  isError: boolean;
}

type Fetcher<T> = () => Promise<T>;

export function useGet<T>(key: string, fetch: Fetcher<T>): Result<T> {
  const { data, error, isValidating, isLoading } = useSWR(key, fetch, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  return {
    data: data,
    isError: !!error,
    isValidating,
    isLoading,
  };
}
