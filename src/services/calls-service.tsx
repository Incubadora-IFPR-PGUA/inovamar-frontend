import type { Call } from "../types/call";

export class NotFoundError extends Error {
  constructor(id: number) {
    super(`Edital com id ${id} não encontrado`);
    this.name = "NotFoundError";
  }
}

export class ApiError extends Error {
  constructor(status: number) {
    super(`Erro de rede ao buscar chamada: ${status}`);
    this.name = "ApiError";
  }
}

export async function fetchCallById(id: number): Promise<Call> {
  const url = new URL(`/api/calls/${id}`, window.location.origin);

  const response = await fetch(url.toString());

  if (response.status === 404)
    throw new NotFoundError(id);
  if (!response.ok)
    throw new ApiError(response.status);

  return response.json();
}
