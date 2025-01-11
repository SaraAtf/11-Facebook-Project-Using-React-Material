import { Favorite, Share } from '@mui/icons-material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'


const Post = ( { post } ) => {

    return (
        <Card sx={{ margin: { xs: 1, md: 5 } }}>
            <CardHeader
                avatar={
                    <Avatar src={post.avatar} sx={{ bgcolor: red[ 500 ] }} aria-label="recipe">

                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={post.username}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="500px"
                image={post.postImg}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {post.text}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="Like">
                    <ThumbUpIcon color="primary" />
                </IconButton>
                <IconButton aria-label="add to favorites">
                    <Favorite color='error' />
                </IconButton>
                <IconButton aria-label="add to favorites">
                    <SentimentVerySatisfiedIcon color='warning' />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>

        </Card>
    )
}

export default Post
