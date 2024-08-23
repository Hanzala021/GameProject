import { platform } from "../hooks/UseGames"
import { Text } from "@chakra-ui/react"

interface Prop {
    platform : platform[]
}

const PlatformName = ({platform} : Prop) => {
  return (
    <>
    {platform.map(p => <Text> {p.name} </Text>)}
    </>
  )
}

export default PlatformName