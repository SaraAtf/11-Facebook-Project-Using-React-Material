import { createTheme } from "@mui/material";
import { Button, CssBaseline, ThemeProvider, Typography, styled } from "@mui/material"
import { Home } from "../Pages"
import { useState } from "react"


const Mainlayout = () => {

    const [ mode, setMode ] = useState( "dark" );
    const theme = createTheme( {
        palette: {
            mode: mode,
            primary: {
                main: "#1760a5",
                light: "skyblue",
            },
            secondary: {
                main: "#15c630",
            },
            otherColor: {
                main: "#999",
            },
        },
    } );


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Home setMode={setMode} mode={mode} />
        </ThemeProvider>
    )
}

export default Mainlayout
