import { Center } from "@chakra-ui/layout";
import {
    Input,
    Flex,
    Heading,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    Textarea,
    FormControl,
    useColorModeValue,
    FormHelperText,
    InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";


const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const InputWindow = () => {
    return (
        <>
            <Box>
                <Box width='100%' pos={'fixed'} bottom='70px' >

                    <Box minW={{ base: "90%", md: "468px" }}>
                        <form onSubmit={(e) => onsubmit(e)}>
                            <Stack
                                spacing={4}
                                p="1rem"
                                backgroundColor="whiteAlpha.900"
                                boxShadow="md"
                            >
                                <Textarea />

                                <Button
                                    borderRadius={0}
                                    type="submit"
                                    variant="solid"
                                    colorScheme="teal"
                                    width="full"
                                >
                                    Login
                                </Button>
                            </Stack>
                        </form>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default InputWindow;