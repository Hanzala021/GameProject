import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";



export interface Genre {
    id: number;
    name?: string;
    image_background?: string
  }
  
  const apiclient = new apiClient<Genre>('genres');


const useGenres = (id? : number) => useQuery({
  queryKey: ['genres'],
  queryFn: ()=>apiclient.getAll({params:{id}}),
  staleTime: 24 * 60 * 60 * 1000
})

export default useGenres;
