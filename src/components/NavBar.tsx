import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/download.jpeg"
import ColorModeSwitch from "./ColorModeSwitch"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
<HStack justifyContent="space-between" padding="10px">
  <Link to={'/'}>
    <Image src={logo} boxSize="60px"/>
  </Link>
    <ColorModeSwitch />
</HStack>

  )
}

export default NavBar