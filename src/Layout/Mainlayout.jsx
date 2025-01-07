import { Button } from "@mui/material"
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles( {
    test: {
        color: 'red',
        backgroundColor: 'green'
    }
} );
const Mainlayout = () => {
    const classes = useStyles();
    console.log( classes )
    return (
        <main>
            <Button variant="contained" className={classes.test}>Click</Button>
        </main>
    )
}

export default Mainlayout
