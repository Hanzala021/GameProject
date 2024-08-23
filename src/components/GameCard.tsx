import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/UseGames";
import PlatformName from "./PlatformName";
import CriticScore from "./CriticScore";
import OptimizedUrl from "../optimizedimageUrl";
import { useNavigate } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const Navigate = useNavigate();

  return (
    <>
      <Card
        overflow={"hidden"}
        width={"100%"}
        onClick={() => Navigate(`/games/${game.id}`)}
        cursor="pointer"
        transition="all 0.3s ease-in-out"
        _hover={{
          boxShadow: "xl",
          transform: "scale(1.05)",
          transitionDelay: "0.1s",
          zIndex:'1'
        }}
      >
        <Image src={OptimizedUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack justifyContent={"start"}>
            <PlatformName
              platform={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore metacritics={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
