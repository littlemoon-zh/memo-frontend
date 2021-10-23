import { useState } from "react";
import {
    useHistory,
} from "react-router-dom";

import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    useColorModeValue,
    FormHelperText,
    InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import API from "../util/api";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);


const Login = (props) => {
    // console.log(props);
    let defaultPassword = '';
    let defaultUsername = '';
    if ('password' in (props.history.location.state || {})) {
        const { password: ps, username: un } = props.history.location.state;
        defaultPassword = ps;
        defaultUsername = un;
    }
    const [showPassword, setShowPassword] = useState(false);

    const [password, SetPassword] = useState(defaultPassword);
    const [username, SetUsername] = useState(defaultUsername);

    const handleShowClick = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    };


    let history = useHistory();

    const onsubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            alert('Input complete info')
            return;
        }

        const { data } = await API.post('login',
            JSON.stringify({ username, password }), {
            headers: { 'Content-Type': 'application/json', 'token': localStorage.getItem('token') || "token" }
        });
        const { status, msg, token } = data;
        console.log(data);
        if (token) {
            localStorage.setItem('token', token);
            history.replace('/home');
        } else {
            alert('validation error');
        }

    }



    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            // backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
            bg={useColorModeValue('white.200', 'gray.700')}
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar bg='teal.400' />
                <Heading color='teal.500' >Welcome</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form onSubmit={(e) => onsubmit(e)}>
                        <Stack
                            spacing={4}
                            p="1rem"

                            boxShadow="md"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input type="email" value={username} onChange={e => SetUsername(e.target.value)} />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300" />}
                                    />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={e => SetPassword(e.target.value)}
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={e => handleShowClick(e)}>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormHelperText textAlign="right">
                                    <Link>forgot password?</Link>
                                </FormHelperText>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                width="full"
                                bg={useColorModeValue('teal.200', 'teal.500')}
                            >
                                Login
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            <Box>
                New to us?{" "}
                <Link color="teal.500" href="#" >
                    Sign Up
                </Link>
            </Box>
        </Flex>
    );
};

export default Login;