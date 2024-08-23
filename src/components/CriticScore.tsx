import { Badge } from "@chakra-ui/react"

interface Prop {
    metacritics : number
}

const CriticScore = ({metacritics}: Prop) => {

    const Color = metacritics > 80 ? "green" : metacritics > 60 ? "yellow" : '' 
  return (
    <Badge colorScheme={Color}>{metacritics}</Badge>
  )
}

export default CriticScore