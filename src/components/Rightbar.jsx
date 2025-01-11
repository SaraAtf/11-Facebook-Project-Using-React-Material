import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { postsList } from '../models/PostsList'
import avatar1 from '../assets/posts/post1.jpg'
import avatar2 from '../assets/posts/post2.jpg'
import avatar3 from '../assets/posts/post3.jpg'

export const Rightbar = () => {
    return (
        <Box
            p={2}
            flex={2}
            sx={{
                display: {
                    xs: "none", md: "flex"
                }
            }}>
            <Box sx={{ position: 'fixed' }} width={300}>
                <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
                <AvatarGroup max={8}>
                    {postsList.map( ( post ) => (
                        <Avatar key={post.id} alt={post.text} src={post.avatar} />
                    ) )}
                    {postsList.map( ( post ) => (
                        <Avatar key={post.id} alt={post.text} src={post.avatar} />
                    ) )}

                </AvatarGroup>
                <Typography variant='h6' mt={2} mb={2} fontWeight={100}>Latest Photos</Typography>
                <ImageList variant='masonry' sx={{ width: 400, height: 'auto' }} cols={4} gap={5} rowHeight={100}>
                    {postsList.map( ( item ) => (
                        <ImageListItem key={item.postImg}>
                            <img
                                src={`${item.postImg}`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ) )}
                </ImageList>
                <Typography variant='h6' mt={2} mb={2} fontWeight={100}>Latest Conversation</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={avatar1} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Sara Atef"
                            secondary={
                                <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{ color: 'text.primary', display: 'inline' }}
                                >
                                    Hey Sara I'll come tomorrow......
                                </Typography>
                            }
                        />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={avatar2} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Hoda Elsayed"
                            secondary={
                                <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{ color: 'text.primary', display: 'inline' }}
                                >
                                    I'll be in your neighborhood
                                </Typography>
                            }
                        />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={avatar3} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Salma Mostafa"
                            secondary={
                                <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{ color: 'text.primary', display: 'inline' }}
                                >
                                    Hey Sara How are your ?
                                </Typography>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}


