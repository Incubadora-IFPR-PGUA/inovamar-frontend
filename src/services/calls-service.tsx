import type { Call, PaginatedCallsResponse } from "../types/call";

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

async function apiFetch(path: string): Promise<Response> {
  const url = new URL(path, window.location.origin);

  let response: Response;

  try {
    response = await fetch(url.toString());
  }
  catch {
    throw new ApiError(503);
  }

  if (!response.ok)
    throw new ApiError(response.status);

  return response;
}

export async function fetchCallById(id: number): Promise<Call> {
  const response = await apiFetch(`/api/calls/${id}`).catch((err: ApiError) => {
    if (err.status === 404)
      throw new NotFoundError();
    throw err;
  });

  return response.json();
}

export async function fetchAllCalls(page: number, perPage: number): Promise<PaginatedCallsResponse> {
  const response = await apiFetch(`/api/calls?page=${page}&per_page=${perPage}`).catch((err: ApiError) => {
    if (err.status === 404)
      throw new NotFoundError();
    throw err;
  });

  return response.json();
}

export async function searchCalls(query: string, page: number, perPage: number): Promise<PaginatedCallsResponse> {
  const params = new URLSearchParams({
    q: query,
    page: String(page),
    per_page: String(perPage),
  });

  const response = await apiFetch(`/api/calls/search?${params}`).catch((err: ApiError) => {
    throw err;
  });

  return response.json();
}
