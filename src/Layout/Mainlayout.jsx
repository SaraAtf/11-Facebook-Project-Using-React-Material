import { Button, ThemeProvider, Typography, styled } from "@mui/material"
import { theme } from '../styles/theme'
import { Home } from "../Pages"

const StyledButton = styled( Button )( ( { theme } ) => (
    {
        background: theme.palette.primary.main
    }
) )

const Mainlayout = () => {

    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    )
}

export default Mainlayout
