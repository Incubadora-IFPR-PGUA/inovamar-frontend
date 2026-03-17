export type Link = {
  link: string;
  title?: string;
};

export type Call = {
  id: number;
  title: string;
  description: string;
  inscription?: string;
  initial_funding?: string;
  source: string;
  links?: Link[];
};

export type PaginatedCallsResponse = {
  data: Call[];
  total: number;
};
