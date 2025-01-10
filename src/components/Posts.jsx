import React from 'react'
import Post from './Post'
import { Box } from '@mui/material'
import { postsList } from '../models/PostsList'

const Posts = () => {
    return (
        <Box>
            {postsList.map( ( post ) => ( <Post key={post.id} post={post} /> ) )}
        </Box>
    )
}

export default Posts
