import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-client"

interface GameTrailer {
    id	: number,
    name	: string ,
    preview	: string ,
    data : {480 : string , max : string}
}

const apiclient = new apiClient<GameTrailer>('games')

const useGameTrailer = (slug: string | number) => useQuery({

    queryKey : ['trailer' , slug],
    queryFn : () => apiclient.getTrailer(slug)
})

export default useGameTrailer;