import { Box, Stack } from '@mui/material'
import { Sidebar, Feed, Rightbar, Navbar } from '../components'
import NewPost from '../components/NewPost'
export const Home = ( { setMode, mode } ) => {
    return (
        <Box>
            <Navbar />
            <Stack direction="row" spacing={{ xs: 0, sm: 2 }}>
                <Sidebar setMode={setMode} mode={mode} />
                <Feed />
                <Rightbar />
            </Stack>
            <NewPost setMode={setMode} />
        </Box>
    )
}


