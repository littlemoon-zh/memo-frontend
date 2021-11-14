import {Heading} from "@chakra-ui/react";
import {Center, Flex} from "@chakra-ui/layout";
import {useEffect} from "react";
import {fetchIssues} from "./gitSlice";
import {useDispatch, useSelector} from "react-redux";
import GitInfoCard from "./GitInfoCard";
import Nav from "../Common/Navbar";

function GitIssues() {
  const dispatch = useDispatch()
  const issues = useSelector(state => state.issues.issues)
  useEffect(() => dispatch(fetchIssues()), [])
  const reverseTime = [...issues].reverse();
  return (
    <>
      <Nav/>
      <Center pt={'80px'}>
        <Flex direction={'column'}>
          <Flex justifyContent={'center'}>
            <Heading>Memo Timeline</Heading>
          </Flex>
          {reverseTime.map(item => {
            return <GitInfoCard content={item.content} time={item.time}/>
          })}
        </Flex>
      </Center>

    </>
  )
}

export default GitIssues;