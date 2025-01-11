import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
// React Icons
import { StyledListItemButton } from './Styled Components/Styled';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { listItems } from '../models/NavListItems';
import { useState } from 'react';

export const Sidebar = ( { setMode, mode } ) => {
    const [ selectedIndex, setSelectedIndex ] = useState( 1 );

    const handleListItemClick = ( event, index ) => {
        setSelectedIndex( index );
    };

    return (
        <Box
            p={2}
            flex={1}
            sx={{ display: { xs: "none", sm: "flex" } }}
        >
            <Box sx={{ position: 'fixed' }}>
                <List component="nav" aria-label='main Links' sx={{ width: '100%' }}>
                    {
                        listItems.map( ( item ) => (
                            <ListItem key={item.id} disablePadding >
                                <StyledListItemButton
                                    onClick={( e ) => handleListItemClick( e, item.id )}
                                    selected={item.id == selectedIndex}
                                    disableTouchRipple disableRipple component='a' href='#home'>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </StyledListItemButton>
                            </ListItem>

                        ) )
                    }
                    <ListItem disablePadding >
                        <StyledListItemButton
                            disableTouchRipple disableRipple component='a' href='#home'>
                            <ListItemIcon>
                                {mode == 'light' ?
                                    < DarkModeIcon onClick={() => setMode( `${mode == 'light' ? 'dark' : 'light'}` )} />
                                    :
                                    <WbSunnyIcon onClick={() => setMode( `${mode == 'light' ? 'dark' : 'light'}` )} />
                                }
                            </ListItemIcon>
                            <ListItemText primary={`${mode == 'light' ? 'Dark Mode' : 'Light Mode'}`} />
                        </StyledListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box >
    )
}


