export type Link = {
  link: string;
  title?: string;
};

export type Organization = {
  title: string;
  image_url: string;
};

export type Call = {
  id: number;
  title: string;
  description: string;
  inscription?: string;
  initial_funding?: string;
  organization: Organization;
  links?: Link[];
};

export type PaginatedCallsResponse = {
  data: Call[];
  total: number;
};

export type ApiCallError = {
  status: number;
  message: string;
};
