import { Center, Flex } from "@chakra-ui/layout";
import { AddIcon, EditIcon } from '@chakra-ui/icons';
import { Button, Box } from "@chakra-ui/react";
import { useState } from "react";
import InputWindow from "./inputbox";
export default function Editor() {

    const [showInput, setShotInput] = useState(false);

    const onClick = (e) => {
        e.preventDefault();
        setShotInput(!showInput);
    }
    return (<>
        <Flex direction='column'>
            <Box>
                {showInput ? <InputWindow /> : <></>}
            </Box>
            <Center width='100%' bottom='20px' pos={'fixed'} >
                <Button
                    onClick={(e) => onClick(e)}
                    bg='teal.400'
                    borderRadius='15px'>
                    <EditIcon />
                </Button>
            </Center>
        </Flex>
    </>);
}