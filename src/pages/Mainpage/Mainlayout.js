import { Box, Center, Flex, Spacer } from "@chakra-ui/layout"
import Nav from "../Common/Navbar"
import StatInfo from "./Statistics"
import Editor from './Editor'

const Homelayout = ({ children }) => {
    return (<>
        <Nav />
        <Flex justify='center'>
            <Spacer />

            <Box minH='100%' pt='60px'>{children}</Box>

            <Spacer />
        </Flex>
        <Editor />

    </>)
}


export default Homelayout