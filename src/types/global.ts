export interface HttpResponse<T = any> {
  success: boolean;
  data: T;
  errorCode: number;
  errorMessage: string;
}

export interface PageResponse<T = any> {
  list: T[];
  current: number;
  pageSize: number;
  total: number;
}
