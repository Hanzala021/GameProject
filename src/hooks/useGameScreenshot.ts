import { useQuery } from "@tanstack/react-query";
import apiClient, { TypeOfResponse } from "../services/api-client";
import { Game } from "../hooks/UseGames";
import { useParams } from "react-router-dom";

interface GameScreenshot{
  id: number;

  image: string;

  hidden: boolean;

  width: number;

  height: number;
}

const useGameScreenshot = (id: number | string) => {
  const apiclient = new apiClient <GameScreenshot>(`/games/${id}/screenshots`);
  return useQuery({
    queryKey: ["screenshot", id],
    queryFn: apiclient.getAll,
  });
};

export default useGameScreenshot;
