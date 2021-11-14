import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Flex,
  Badge,
  Spacer,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  Button,
  PopoverArrow,
  PopoverContent,
  PopoverCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import {InfoIcon} from '@chakra-ui/icons';
import {useDispatch} from "react-redux";
import {deleteNote, frontDeleteNote} from "./slice/noteSlice";

export default function NoteTemplate(props) {
  const time = new Date(props.create_time).toLocaleString();
  const dispatch = useDispatch();
  const {onOpen, onClose, isOpen} = useDisclosure()
  const onDelete = (id) => {
    onClose();
    dispatch(deleteNote(id))
    dispatch(frontDeleteNote(id))
  }
  return (
    <Center py={3} w={[300, 400, 500]}>
      <Box
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'md'}
        rounded={'md'}
        p={3}
        overflow={'hidden'}>
        <Stack>
          <Flex justifyItems='center'>
            <Text
              color={useColorModeValue('teal.600', 'teal.500')}
              fontWeight={800}
              fontSize={'sm'}>
              {props.tags.map((tag) => {
                return <><Badge key={tag} colorScheme={'teal'}>{tag}</Badge> </>;
              })}
            </Text>
            <Spacer/>
            <Popover
              isOpen={isOpen}
              onClose={onClose}
              onOpen={onOpen}
            >
              <PopoverTrigger>
                <InfoIcon color={useColorModeValue('gray.500', 'gray.400')}/>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow/>
                <PopoverCloseButton/>
                {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
                {/* <PopoverBody> */}
                <Button size='sm' onClick={() => onDelete(props.id)}>Delete</Button>
                {/* </PopoverBody> */}
              </PopoverContent>
            </Popover>

          </Flex>
          <Heading
            color={useColorModeValue('teal.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {/* <Kbd>Tags</Kbd> */}
          </Heading>
          <Text color={useColorModeValue('gray.700', 'gray.200')} fontSize='large' noOfLines={10}>
            {props.content}
          </Text>

        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text color={useColorModeValue('gray.900', 'gray.500')}>
              {time}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}