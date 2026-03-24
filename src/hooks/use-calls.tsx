import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import type { ApiCallError, Call } from "../types/call";

import { ApiError, fetchAllCalls } from "../services/calls-service";

const PER_PAGE = 10;

type UseCallsReturn = {
  calls: Call[];
  total: number;
  page: number;
  isLoading: boolean;
  error: ApiCallError | null;
};

export function useCalls(): UseCallsReturn {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);

  const { data, isLoading, error } = useQuery<{ data: Call[]; total: number }, ApiCallError>({
    queryKey: ["calls", page],
    queryFn: async () => {
      try {
        return await fetchAllCalls(page, PER_PAGE);
      }
      catch (err) {
        if (err instanceof ApiError) {
          throw new ApiError(err.status);
        }
        throw new ApiError(500);
      }
    },
    staleTime: 5 * 60 * 1000,
  });

  return {
    calls: data?.data ?? [],
    total: data?.total ?? 0,
    page,
    isLoading,
    error: error ?? null,
  };
}
