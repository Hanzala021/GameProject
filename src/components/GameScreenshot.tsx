import { useParams } from "react-router-dom"
import useGameScreenshot from "../hooks/useGameScreenshot"
import { SimpleGrid } from "@chakra-ui/react";



const GameScreenshot = () => {

    const {slug} = useParams()

    if (!slug) return;

    const {data}=  useGameScreenshot(slug)

    console.log(data , 'data of screenshots')

  return (

    <SimpleGrid columns={{base: 1 , md: 2}} spacing={2}>
    {data?.results.map(img => <img key={img.id} src={img.image}></img>)}
    </SimpleGrid>
  )
}

export default GameScreenshot