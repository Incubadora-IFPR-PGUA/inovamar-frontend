import type { Call } from "../types/call";

export class NotFoundError extends Error {
  status: number;
  constructor() {
    super("Este edital não está disponível ou pode ter sido encerrado.");
    this.name = "NotFoundError";
    this.status = 404;
  }
}

export class ApiError extends Error {
  status: number;
  constructor(status: number) {
    super(`O servidor retornou um erro inesperado.`);
    this.name = "ServerError";
    this.status = status;
  }
}

export async function fetchCallById(id: number): Promise<Call> {
  const url = new URL(`/api/calls/${id}`, window.location.origin);

  let response: Response;

  try {
    response = await fetch(url.toString());
  }
  catch {
    throw new ApiError(503);
  }

  if (response.status === 404)
    throw new NotFoundError();
  if (!response.ok)
    throw new ApiError(response.status);

  return response.json();
}
