import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

const getTime = (time) => {
  const t = new Date(time);
  const localTime = t.toLocaleTimeString();
  const localDate = t.toLocaleDateString();
  return `${localTime}, ${localDate}`
}

function GitInfoCard({content, time}) {
  return (<Box
    m={'10px'}
    boxShadow='md'
    p={6}
    rounded='md'
  >
    <Stack w={[300, 400, 500]}>
      <Heading size='xs'>
        {getTime(time)}
      </Heading>
      <ReactMarkdown
        components={ChakraUIRenderer()}
        children={content}
        escapeHtml={false}
      />


    </Stack>
  </Box>)
}

export default GitInfoCard;