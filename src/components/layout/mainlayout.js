import { Box, Center, Flex, Spacer } from "@chakra-ui/layout"
import Nav from "../navbar"
import Footer from "./footer"
import StatInfo from "../stat"
import Editor from '../editor'

const Homelayout = ({ children, getData }) => {
    console.log('props', getData);
    return (<>
        <Nav />
        <Flex justify='center'>
            <Spacer />

            <Box minH='100%' pt='50px'>{children}</Box>

            <Spacer />
        </Flex>
        <Editor getData={getData} />

    </>)
}


export default Homelayout