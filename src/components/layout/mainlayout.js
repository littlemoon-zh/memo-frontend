import { Box, Center, Flex, Spacer } from "@chakra-ui/layout"
import Nav from "../navbar"
import Footer from "./footer"
import StatInfo from "../stat"
import Editor from '../editor'

const Homelayout = ({ children }) => {


    return (<>
        <Nav />
        <Flex justify='center'>
            <Spacer />

            {/* <Box pt='80px' w='100px'>
                <Center>   <StatInfo /> </Center>
            </Box> */}

            <Box minH='100%' pt='50px'>{children}</Box>

            <Spacer />
        </Flex>
        <Editor />

    </>)
}


export default Homelayout