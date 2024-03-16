interface Page {
  page: number;
  limit: number;
  [props: string]: any;
}
interface PageConfig<T> {
  pager: {
    page: number;
    limit: number;
    [props: string]: any;
  };
  total: number;
  loading: boolean;
  listing: Array<T>;
}

interface ApiInstance {}
