export interface IFindOptions {
  limit?: number;
  order?: 1 | -1;
  sortBy?: 'createdAt';
  page?: number;
  populate?: boolean;
}

export interface IFindPayload {
  page: number;
  perPage: number;
  result: any[];
}
