import {  useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Game } from "./UseGames";

const apiclient = new apiClient<Game>('games')


const useGame = (slug: string | number) => {
    return useQuery({
        queryKey: ['game', slug],
        queryFn: () => apiclient.get(slug)

    });
}

export default useGame;