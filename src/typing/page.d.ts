export interface Page {
  page: number;
  limit: number;
  [props: string]: any;
}
export interface PageConfig<T> {
  pager: Partial<T & Page>;
  total: number;
  loading: boolean;
  listing: Array<T>;
}
