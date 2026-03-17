import { useEffect, useState } from "react";

import type { Call } from "../types/call";

import { fetchCallByIdApi, NotFoundError } from "../services/calls-service";

type UseCallReturn = {
  call: Call | null;
  isLoading: boolean;
  isNotFound: boolean;
  error: string | null;
};

export function useCall(id: number): UseCallReturn {
  const [call, setCall] = useState<Call | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCall = async () => {
      setIsLoading(true);
      setError(null);
      setIsNotFound(false);

      try {
        const data = await fetchCallByIdApi(id);
        setCall(data);
      }
      catch (err) {
        if (err instanceof NotFoundError) {
          setIsNotFound(true);
        }
        else {
          setError("Ocorreu um erro ao carregar o edital.");
          console.error(err);
        }
      }
      finally {
        setIsLoading(false);
      }
    };

    loadCall();
  }, [id]);

  return { call, isLoading, isNotFound, error };
}
