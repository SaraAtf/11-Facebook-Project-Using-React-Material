import { Add } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BoxContainer, StyledModal, UserBox } from './Styled Components/Styled';
import avatar1 from '../assets/posts/post1.jpg'
//React Icons
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DateRangeIcon from '@mui/icons-material/DateRange';

const NewPost = () => {
    const [ open, setOpen ] = useState( false );
    const handleOpen = () => setOpen( true );
    const handleClose = () => setOpen( false );



    return (
        <>

            <Tooltip onClick={handleOpen} title='Add New Post' sx={{ position: 'fixed', bottom: 20, left: 10 }}>
                <Fab color="primary" aria-label="add">
                    <Add />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={handleClose}
                aria-labelledby="New Post"
                aria-describedby="Add New Post"
            >
                <Box width={400} height={280} bgcolor="background.default" p={3} borderRadius={2}>
                    <Typography variant='h6' color='grey' textAlign='center'>Create Post</Typography>
                    <BoxContainer>
                        <Avatar src={avatar1} sx={{ width: 30, height: 30 }} />
                        <Typography fontWeight={500} variant='span'>Sara Atef</Typography>
                    </BoxContainer>
                    <TextField sx={{ width: '100%', mt: 2 }} multiline rows={2} variant="standard" placeholder='What is in your Mind ?' />
                    <Stack gap={1} direction="row" mt={2} mb={3}>
                        <EmojiEmotionsIcon color='primary' />
                        <ImageIcon color='secondary' />
                        <VideoCameraBackIcon color='success' />
                        <PersonAddAlt1Icon color='error' />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="Post Button">
                        <Button>Post</Button>
                        <Button sx={{ width: '100px' }}>
                            <DateRangeIcon />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal >
        </>
    )
}

export default NewPost
