import { useQuery } from "@tanstack/react-query";

import type { ApiCallError, Call } from "../types/call";

import { ApiError, fetchCallById, NotFoundError } from "../services/calls-service";

type UseCallReturn = {
  call: Call | null;
  isLoading: boolean;
  error: ApiCallError | null;
};

export function useCall(id: number): UseCallReturn {
  const { data, isLoading, error } = useQuery<Call, ApiCallError>({
    queryKey: ["call", id],
    queryFn: async () => {
      try {
        return await fetchCallById(id);
      }
      catch (err) {
        if (err instanceof NotFoundError) {
          throw new NotFoundError();
        }
        if (err instanceof ApiError) {
          throw new ApiError(err.status);
        }
        throw new ApiError(500);
      }
    },
  });

  return {
    call: data ?? null,
    isLoading,
    error: error ?? null,
  };
}
