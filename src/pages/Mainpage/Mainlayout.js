import { Box, Center, Flex, Spacer } from "@chakra-ui/layout"
import Nav from "./Navbar"
import StatInfo from "./Statistics"
import Editor from './Editor'

const Homelayout = ({ children }) => {
    console.log('props');
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