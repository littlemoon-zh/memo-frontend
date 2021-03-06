import {Center, Flex} from "@chakra-ui/layout";
import {EditIcon} from '@chakra-ui/icons';
import {
  Button,
  Textarea,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {useState} from "react";
import api from "../../util/api";
import {postNote, fetchNote} from "./slice/noteSlice";
import {useDispatch} from "react-redux";

// async function postNote(data) {
//   await api.post("/api/note",
//     JSON.stringify(data),
//     {
//       headers: {
//         "Content-Type": "application/json",
//         'token': localStorage.getItem('token')
//       },
//     });
// }

export default function Editor() {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const onClick = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      const data = {'content': input};
      dispatch(postNote(data))
      setInput('')
    }
    onClose()
  };

  return (<>
    <Flex direction='column'>
      <Modal isOpen={isOpen} onClose={onClose} size='xl' pos='relative' bottom='10px'>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader size='sm'>Start a note</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <Textarea h='180px' value={input} onChange={e => setInput(e.target.value)}/>
          </ModalBody>


          <ModalFooter h='50px' display='flex' justifyItems='center' justifyContent='center'>
            <Button colorScheme="blue" size='sm' mr={3} onClick={e => onClick(e)}>
              That's it!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Center width='100%' bottom='20px' pos={'fixed'}>
        <Button
          onClick={onOpen}
          bg='teal.400'
          borderRadius='15px'>
          <EditIcon/>
        </Button>
      </Center>
    </Flex>
  </>);
}