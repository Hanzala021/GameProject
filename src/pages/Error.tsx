import { Box, Heading } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar"

const Error = () => {

    const error = useRouteError()
  return (
    <>
    <NavBar />
    <Box padding={5}>
        <Heading>SORRY! </Heading>
    <div>{isRouteErrorResponse(error)?"PAGE DOES NOT EXIT..." : 'UNEXPECTED ERROR ACCURED...'}</div>
    </Box>
    </>
  )
}

export default Error