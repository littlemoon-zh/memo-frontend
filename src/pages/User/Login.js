import {useEffect, useState} from "react";
import {
  useHistory,
} from "react-router-dom";

import {Link as RLink} from "react-router-dom";

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
  InputRightElement,
  useToast
} from "@chakra-ui/react";
import {FaUserAlt, FaLock} from "react-icons/fa";
import API from "../../util/api";
import {useDispatch, useSelector} from "react-redux";
import {userLogin} from "./slice/userSlice";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, SetPassword] = useState('');
  const [username, SetUsername] = useState('');

  const handleShowClick = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword)
  };
  const toast = useToast()
  let history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const onsubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast({
        title: "Please complete the fields",
        status: "error",
        duration: 1200,
        isClosable: false,
      })
      return;
    }
    dispatch(userLogin({username, password}))
  }
  if (user.token) {
    history.push('/home')
  }
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
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
        <Avatar bg='teal.400'/>
        <Heading color='teal.500'>Welcome</Heading>
        <Box minW={{base: "90%", md: "468px"}}>
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
                    children={<CFaUserAlt color="gray.300"/>}
                  />
                  <Input type="text" value={username} onChange={e => SetUsername(e.target.value)}/>
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300"/>}
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
        <Link as={RLink} color="teal.500" to="/register">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
