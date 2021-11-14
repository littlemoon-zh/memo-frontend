import {
    Box,
    Flex,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router';

import Leftdrawer from './Leftdrawer';

export default function Nav() {

    const history = useHistory();
    const { colorMode, toggleColorMode } = useColorMode();
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        history.push('/login');
    }

    return (
        <>
            <Box position={'fixed'} width={'100%'} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Leftdrawer />
                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    minW={0}>
                                    More
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Settings</MenuItem>
                                    <MenuItem
                                        onClick={logout}
                                    >Logout</MenuItem>
                                </MenuList>
                            </Menu>

                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}