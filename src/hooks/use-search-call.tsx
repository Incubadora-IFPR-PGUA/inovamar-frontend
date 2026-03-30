import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import type { ApiCallError, Call } from "../types/call";

import { ApiError, searchCalls } from "../services/calls-service";

const PER_PAGE = 10;

type UseSearchCallsReturn = {
  calls: Call[];
  total: number;
  page: number;
  query: string;
  isLoading: boolean;
  error: ApiCallError | null;
};

export function useSearchCalls(): UseSearchCallsReturn {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const page = Number(searchParams.get("pagina") ?? 1);

  const { data, isLoading, error } = useQuery<{ data: Call[]; total: number }, ApiCallError>({
    queryKey: ["calls-search", query, page],
    queryFn: async () => {
      try {
        return await searchCalls(query, page, PER_PAGE);
      }
      catch (err) {
        if (err instanceof ApiError)
          throw new ApiError(err.status);
        throw new ApiError(500);
      }
    },
    enabled: query.trim().length > 0,
    staleTime: 2 * 60 * 1000,
  });

  return {
    calls: data?.data ?? [],
    total: data?.total ?? 0,
    page,
    query,
    isLoading,
    error: error ?? null,
  };
}
