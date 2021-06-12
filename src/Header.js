import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


function Header() {
    return (
        <header className="root">
            <AppBar className="header" position="fixed">
                <IconButton edge="start" className="menuButton" color="inherit" aria-labelledby="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className="title" aria-labelledby="Title Messages">
                    Messages
                </Typography>
            </AppBar>
        </header>
    )
}

export default React.memo(Header);