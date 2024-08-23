import { Grid, GridItem, Flex } from '@chakra-ui/react';
import FetchGenre from '../components/FetchGenre';
import GameGrid from '../components/GameGrid';
import HeadingText from '../components/Heading';
import PlatformSelector from '../components/PlatformSelector';
import SearchInput from '../components/SearchInput';
import { useState } from 'react';
import { Genre } from '../hooks/UseGenres';
import { platform } from '../hooks/UseGames';

const Home = () => {

    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<platform | null>(
      null
    );
    const [searchValue, setSearchValue] = useState("");
    
  return (
    <>
    <Grid
      templateAreas={`"aside main"`}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
      </GridItem>
      <GridItem area="aside" paddingX={"5"}>
        <FetchGenre
          selectedGenre={selectedGenre}
          OnselectGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>
      <GridItem area="main">
       
        <Flex justifyContent={"space-between"} padding={3} alignItems={'center'}>
          
          <PlatformSelector
            selectedPlatf={selectedPlatform}
            selectedPlatform={(selectedPlatform) => {
              setSelectedPlatform(selectedPlatform);
            }}
          />
          <HeadingText selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
          <SearchInput userSearch={searchValue} searchFunc={(searchValue) => setSearchValue(searchValue)}
          />
        </Flex>
        <GameGrid
          searchValue={searchValue}
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  </>
  )
}

export default Home