import { useEffect, useState } from "react";

import type { ApiCallError, Call } from "../types/call";

import { ApiError, fetchCallById, NotFoundError } from "../services/calls-service";

type UseCallReturn = {
  call: Call | null;
  isLoading: boolean;
  error: ApiCallError | null;
};

export function useCall(id: number): UseCallReturn {
  const [call, setCall] = useState<Call | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<ApiCallError | null>(null);

  useEffect(() => {
    const loadCall = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchCallById(id);
        setCall(data);
      }
      catch (err) {
        if (err instanceof NotFoundError) {
          setError({ status: err.status, message: err.message });
        }
        else if (err instanceof ApiError) {
          setError({ status: err.status, message: err.message });
        }
        else {
          setError({ status: 500, message: "Erro inesperado." });
        }
      }
      finally {
        setIsLoading(false);
      }
    };

    loadCall();
  }, [id]);

  return { call, isLoading, error };
}
