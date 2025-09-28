export interface ApiResponse<T = any> {
  data: T;
  error?: string;
  status: number;
}

export interface ApiRequest {
  [key: string]: any;
}
