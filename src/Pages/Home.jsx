import { Box, Stack } from '@mui/material'
import { Sidebar, Feed, Rightbar, Navbar } from '../components'
export const Home = () => {
    return (
        <Box>
            <Navbar />
            <Stack direction="row" spacing={{ xs: 0, sm: 2 }}>
                <Sidebar />
                <Feed />
                <Rightbar />
            </Stack>
        </Box>
    )
}


