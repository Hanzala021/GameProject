import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Button, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
 import GameTrailer from "../components/GameTrailer";
import GameScreenshot from "../components/GameScreenshot";




const GameDetail = () => {

  const { slug } = useParams();
  const { data, error, isLoading } = useGame(slug!);


  if (isLoading) return <Spinner />;

  if (error || !data) throw error;



  return (
    <SimpleGrid columns={{base:1 , md:2}} spacing={2}>
      <div>
      <Heading >{data.name}</Heading>
      <ExpandableText>{data.description_raw}</ExpandableText>
      </div>
      <div>
      <GameTrailer />
      <GameScreenshot />
      </div>
    </SimpleGrid>
  );
};

export default GameDetail;
