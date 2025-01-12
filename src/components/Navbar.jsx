import { useState } from 'react';
//Material Components
import { AppBar, Box, Menu, MenuItem, Typography } from '@mui/material'
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
//React Icons
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
//imgs
import messengerImg from '../assets/messanger.svg'
import profileImg from '../assets/profileImg.jpg'
import { Icons, MessengerIcon, Search, StyledBadge, StyledToolBar, UserBox } from './Styled Components/Styled';
//styledComponent

export const Navbar = () => {
    const [ anchorEl, setAnchorEl ] = useState( null );

    const handleClick = ( event ) => {
        setAnchorEl( event.currentTarget );
    };
    const handleClose = () => {
        setAnchorEl( null );
    };
    return (
        <AppBar position='sticky'>
            <StyledToolBar>
                <Typography sx={{ display: { xs: "none", sm: "flex" } }} variant='h6'>Facebook</Typography>
                <FacebookOutlinedIcon sx={{ display: { xs: "flex", sm: "none" } }} />
                <Search>
                    <InputBase placeholder='Search .... ' sx={{ width: "100%" }} />
                </Search>
                <Icons >
                    <Badge badgeContent={4} color="error">
                        <MessengerIcon src={messengerImg} />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>
                    <StyledBadge variant='dot' overlap='circular' color="success" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                        <Avatar alt="Remy Sharp" src={profileImg} onClick={handleClick} sx={{ cursor: 'pointer' }} />
                    </StyledBadge>
                </Icons>
                <UserBox>
                    <StyledBadge variant='dot' overlap='circular' color="success" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                        <Avatar alt="Remy Sharp" src={profileImg} onClick={handleClick} />
                    </StyledBadge>
                    <Typography variant='span'>Sara</Typography>
                </UserBox>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean( anchorEl )}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </StyledToolBar>
        </AppBar>
    )
}

