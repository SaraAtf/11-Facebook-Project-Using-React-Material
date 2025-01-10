import { Badge, Box, ListItemButton, Toolbar, styled } from "@mui/material";

const StyledToolBar = styled( Toolbar )( ( { theme } ) => ( {
    display: 'flex',
    justifyContent: 'space-between'
} ) )


const Search = styled( 'div' )( ( { theme } ) => ( {
    width: "40%",
    backgroundColor: 'white',
    padding: "0px 0.85rem",
    borderRadius: theme.shape.borderRadius
} ) )
const Icons = styled( Box )( ( { theme } ) => ( {
    display: 'none',
    gap: '1.5rem',
    alignItems: 'center',
    [ theme.breakpoints.up( 'sm' ) ]: {
        display: 'flex'
    }
} ) )
const UserBox = styled( Box )( ( { theme } ) => ( {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    cursor: 'pointer',
    [ theme.breakpoints.up( 'sm' ) ]: {
        display: 'none'
    }
} ) )
const MessengerIcon = styled( "img" )( ( { theme } ) => ( {
    cursor: 'pointer',

} ) )

const StyledBadge = styled( Badge )( ( { theme } ) => ( {
    '& .MuiBadge-badge': {
        width: "10px",
        height: "10px",
        backgroundColor: '#44b700',
        color: '#44b700',
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    }
} ) );


const StyledListItemButton = styled( ListItemButton )( ( theme ) => ( {
    "&:hover": {
        backgroundColor: 'transparent'
    },
    ".Mui-selected": {
        backgroundColor: 'red'
    },
} ) )
export { StyledToolBar, StyledBadge, Icons, Search, MessengerIcon, UserBox, StyledListItemButton }