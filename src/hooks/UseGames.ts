import { useInfiniteQuery} from "@tanstack/react-query";
import { Genre } from "./UseGenres";
import apiClient from "../services/api-client";
import { TypeOfResponse } from "../services/api-client";

const apiclient = new apiClient<Game>("games");

export interface platform {
  id?: number;
  name?: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platform }[];
  metacritic: number;
  slug: string,   
  description_raw : string
}

const useGames = (
  SelectedGenre: Genre | null,
  selectedPlatform: platform | null,
  searchvalue: string
) =>
  
  useInfiniteQuery<TypeOfResponse<Game>, Error>({
    
    queryKey: ["game", SelectedGenre?.id, selectedPlatform?.id, searchvalue],
    queryFn: ({pageParam =1}) =>
      apiclient.getAll({
        params: {
          genres : SelectedGenre?.id,
          parent_platforms: selectedPlatform?.id,
          search: searchvalue,
          page:pageParam
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
    getNextPageParam: (lastPage , allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    }
    
    });

export default useGames;
