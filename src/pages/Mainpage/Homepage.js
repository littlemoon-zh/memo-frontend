import { Stack } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogPostWithImage from "./Contentcard";
import Homelayout from "./Mainlayout";
import { fetchNote } from "./slice/noteSlice";

function HomePage() {
    const dispatch = useDispatch();
    const notes = useSelector((state) => state.notes);

    useEffect(() => { dispatch(fetchNote()) }, [])

    return (
        <Homelayout>
            <Stack direction='column' spacing={'3px'}>
                {notes.notes.map((note) => {
                    return <BlogPostWithImage content={note.content} tags={note.tags} create_time={note.create_time} />
                })}
            </Stack>
        </Homelayout>)


}

export default HomePage


