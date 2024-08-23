import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useGames, { platform } from "../hooks/UseGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import { Genre } from "../hooks/UseGenres";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: platform | null;

  searchValue: string;
}

const GameGrid = ({ selectedGenre, selectedPlatform, searchValue }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames(selectedGenre, selectedPlatform, searchValue);

  const skeletons = [1, 2, 3, 4, 5, 6];

  const FecthedGamesCount = data?.pages.reduce((total , page) => total + page.results.length , 0 ) || 0

  return (
    <>
      {error && <p>{error.message}</p>}
      <InfiniteScroll  
         dataLength={FecthedGamesCount} //This is important field to render the next data
          next={()=>fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={<Spinner />}
        >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={3}
        padding={"10px"}
      >
        
          {isLoading &&
            skeletons.map((skeleton) => <SkeletonCard key={skeleton} />)}
          {data?.pages.map((page) => (
            <React.Fragment>
              {page.results.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </React.Fragment>
            
          ))}
      </SimpleGrid>
        </InfiniteScroll>
    </>
  );
};

export default GameGrid;
