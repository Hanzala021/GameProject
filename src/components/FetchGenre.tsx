import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import  useGenres, { Genre } from "../hooks/UseGenres";
import OptimizedUrl from "../optimizedimageUrl";


interface Props {
  OnselectGenre : (genre: Genre) => void
  selectedGenre : Genre | null
}

const FetchGenre = ({OnselectGenre ,selectedGenre} : Props) => {
  const { data , isLoading } = useGenres();

  console.log("data" , data)
  

  if (isLoading) return <Spinner />

  return (
    <>
    <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={'5px'}>
            <HStack>
              <Image src={OptimizedUrl(genre.image_background)} objectFit={'cover'} boxSize={"32px"} borderRadius={8} />
             <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal' } whiteSpace={'normal'}textAlign={"left"} variant= 'link' fontSize={'lg'} onClick={() => OnselectGenre(genre)}>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default FetchGenre;
