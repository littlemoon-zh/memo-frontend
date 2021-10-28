import { Box, Stack } from "@chakra-ui/layout";
import React from "react";
import API from "../util/api";
import BlogPostWithImage from "./contentcard";
import Homelayout from "./layout/mainlayout";
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
        console.log('get notes');
        const { data } = await API.get('api/notes', { headers: { 'token': localStorage.getItem('token') } });

        if (data['status'] === 200) {
            this.setState({ notes: data.notes || [] });
            console.log('notes', data.notes);
        } else {
            alert(data.msg);
        }
    }

    render() {
        return (
            <Homelayout>
                <Stack direction='column'>
                    <Box px={4}>
                        {this.state.notes.length !== 0 ?
                            this.state.notes.map((note, index) => {
                                return <BlogPostWithImage content={note.content} create_time={note.create_time} />
                            })
                            : <></>

                        }

                    </Box >
                </Stack>
            </Homelayout>)
    }

}

export default HomePage


