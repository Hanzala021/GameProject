import axios, { AxiosRequestConfig } from "axios";

export interface TypeOfResponse<T> {
  count: number;
  next : string | null
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6e9757dd5c1549fabb2c00bb00c3fa6b",
  },
});

class apiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (axiosRequest?: AxiosRequestConfig) =>
    axiosInstance
      .get<TypeOfResponse<T>>(this.endpoint, axiosRequest)
      .then((res) => res.data);

  get = (id?: string | number) =>{
    return axiosInstance.get<T>(this.endpoint + '/' + id).then(res=>res.data)
  }

  getTrailer = (id: string | number) =>{
    return axiosInstance.get<TypeOfResponse<T>>(this.endpoint + '/' + id + '/movies').then(res=>res.data)
  }
}

export default apiClient;
