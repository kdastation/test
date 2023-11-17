import axios, {
  AxiosInstance,
  CreateAxiosDefaults,
  RawAxiosRequestConfig,
} from "axios";

type RequestParams = RawAxiosRequestConfig;

type BaseConfig = CreateAxiosDefaults;

export class HttpClient {
  readonly api: AxiosInstance;

  constructor(baseConfig: BaseConfig) {
    this.api = axios.create(baseConfig);
  }
  public request<Result = any>(args: RequestParams) {
    return this.api<Result>(args);
  }
}
