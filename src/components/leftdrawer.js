import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Center,
    useDisclosure,
    useColorModeValue,
    StatGroup,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    Box
} from "@chakra-ui/react"
import React from "react";

import { HamburgerIcon } from '@chakra-ui/icons'

export default function LeftDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button ref={btnRef}
                color={useColorModeValue('gray.900', 'white')} onClick={onOpen}>
                <HamburgerIcon />
            </Button>

            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Username</DrawerHeader>

                    <DrawerBody>
                        <Box>
                            <StatGroup>
                                <Stat>
                                    <StatLabel>Record stat</StatLabel>
                                    <StatNumber>345,670</StatNumber>
                                    <StatHelpText>
                                        <StatArrow type="increase" />
                                        23.36%
                                    </StatHelpText>
                                </Stat>

                                <Stat>
                                    <StatLabel>Clicked</StatLabel>
                                    <StatNumber>45</StatNumber>
                                    <StatHelpText>
                                        <StatArrow type="decrease" />
                                        9.05%
                                    </StatHelpText>
                                </Stat>
                            </StatGroup>
                        </Box>
                    </DrawerBody>

                    <DrawerFooter display='flex' justifyContent='center'>
                        <Button>Center</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}