import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-client";
import { platform } from "./UseGames";


const apiclient = new apiClient<platform>('platforms/lists/parents')

const  usePlatform = () => useQuery({
    queryKey: ['platforms'],
    queryFn : apiclient.getAll,
    staleTime: 24*60*60*1000
})

    //  useData<platform>('platforms/lists/parents')

export default usePlatform;