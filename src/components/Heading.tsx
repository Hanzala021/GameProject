import { Heading } from "@chakra-ui/react"
import  { Genre } from "../hooks/UseGenres"
import { platform } from "../hooks/UseGames"

interface Props{
    selectedGenre : Genre | null
    selectedPlatform :platform | null
}
const HeadingText = ({selectedGenre , selectedPlatform}: Props) => {


    const dynamicHeading = `${selectedGenre?.name || ''} ${selectedPlatform?.name || ''} Games`  
  return (

    <Heading as={'h1'} fontSize='5xl'> {dynamicHeading}</Heading>
  )
}

export default HeadingText