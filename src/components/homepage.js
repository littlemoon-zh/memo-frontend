import { Box, Stack } from "@chakra-ui/layout";
import React from "react";
import API from "../util/api";
import BlogPostWithImage from "./contentcard";
import Homelayout from "./layout/homelayout";
import SimpleSidebar from "./navbar";
import {
    useColorModeValue,
} from '@chakra-ui/react';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        this.getNotes();
    }

    async getNotes() {
        const { data } = await API.get('api/notes', { headers: { 'token': localStorage.getItem('token') } });
        console.log(data);
        if (data['status'] === 200) {
            this.setState({ notes: data.notes });
        } else {
            alert(data.msg);
        }
    }

    render() {
        console.log(this.state, 'sss');
        return (
            <Homelayout>
                <Stack direction='column'>
                    <Box px={4}>
                        {this.state.notes.length !== 0 ?
                            this.state.notes.map((note, index) => {
                                return <BlogPostWithImage content={note.content} date={note.create_time} />
                            })
                            : <></>

                        }

                    </Box >
                </Stack>
            </Homelayout>)
    }

}

export default HomePage


