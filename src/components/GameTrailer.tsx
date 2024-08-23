import { Spinner } from "@chakra-ui/react";
import useGameTrailer from "../hooks/useGameTrailer";
import { useParams } from "react-router-dom";

const GameTrailer = () => {
  const { slug } = useParams();

  const { data, error, isLoading } = useGameTrailer(slug!);

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  const first = data?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
