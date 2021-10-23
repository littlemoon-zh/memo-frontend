import { Box, Flex } from "@chakra-ui/layout"
import Nav from "../navbar"
import Footer from "./footer"

import Editor from '../editor'

const Homelayout = ({ children }) => {


    return (<>
        <Nav />
        <Box minH='100%'>
            <Box minH='100%' pt='50px'>{children}</Box>
            <Footer />
        </Box>
        <Editor />

    </>)
}


export default Homelayout