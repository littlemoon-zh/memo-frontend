import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    InputGroup,
    Link,
    chakra,
    Button,
    Heading,
    InputRightElement,
    InputLeftElement,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaLock, FaRegistered } from "react-icons/fa";
import { useHistory } from 'react-router';
import API from '../../util/api';
const CFaLock = chakra(FaLock);



export default function UserRegister() {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);
    const history = useHistory()

    const register = async ({ mail, password }) => {
        const res = await API.post('register',
            JSON.stringify({ username: mail, password }), {
            headers: { 'Content-Type': 'application/json', 'token': localStorage.getItem('token') || "token" }
        });
        const { status, msg } = res.data;

        if (status == 200) {
            history.push('/login', { 'username': mail, 'password': password })
        } else {
            alert(msg);
        }

    }

    const onClick = () => {
        register({ mail, password });
    }
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Welcome to memo</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" onChange={e => setMail(e.target.value)} placeholder='register@gmail.com' />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    color="gray.300"
                                    children={<CFaLock color="gray.300" />}
                                />
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <InputRightElement width="4.5rem">
                                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                        {showPassword ? "Hide" : "Show"}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={8}>
                            <Button
                                bg={'teal.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'teal.500',
                                }}
                                onClick={e=>{history.push('/login')}}
                            >
                                Back to login
                            </Button>
                            <Button
                                bg={'teal.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'teal.500',
                                }}
                                onClick={onClick}
                            >
                                Register
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}