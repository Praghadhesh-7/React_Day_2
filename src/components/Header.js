import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
// import logo from './logo.png';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    height: '40px',
    marginRight: theme.spacing(2),
  },
  navLink: {
    marginRight: theme.spacing(2),
    color: 'white',
    textDecoration: 'none',
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        {/* <img src={logo} alt="My Logo" className={classes.logo} /> */}
        <Typography variant="h6">
          My Website
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <Typography variant="subtitle1">
          <a href="/" className={classes.navLink}>Home</a>
          <a href="/products" className={classes.navLink}>Products</a>
          <a href="/about" className={classes.navLink}>About Us</a>
          <a href="/contact" className={classes.navLink}>Contact</a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;