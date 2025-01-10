import { Box } from '@mui/material'
import React from 'react'

export const Rightbar = () => {
    return (
        <Box
            p={2}
            flex={2}
            sx={{
                display: {
                    xs: "none", sm: "flex"
                }
            }}>
            <Box sx={{ position: 'fixed' }}>
                right
            </Box>
        </Box>
    )
}


