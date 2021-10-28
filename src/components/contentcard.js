import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    Image,
    useColorModeValue,
} from '@chakra-ui/react';

export default function NoteTemplate(props) {
    const time = new Date(props.create_time).toLocaleString();

    return (
        <Center py={6} w={[380, 400, 500]}>
            <Box
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={3}
                overflow={'hidden'}>
                {/* <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    overflow={'hidden'}
                    >
                    <Image
                        display={'block'}
                        src='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        fit={'fill'}
                    />
                </Box> */}
                <Stack>
                    <Text
                        color={useColorModeValue('teal.700', 'teal.400')}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        {time}
                    </Text>
                    <Heading
                        color={useColorModeValue('teal.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        {/* {props.content} */}
                    </Heading>
                    <Text color={'gray.500'} fontSize='large'>
                        {props.content}
                    </Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    {/* <Avatar
                        pos={'inherit'}
                        // src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                        alt={'Author'}
                    /> */}
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>by you</Text>
                        <Text color={'gray.500'}>{time}</Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}