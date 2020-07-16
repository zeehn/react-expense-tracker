import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    left: 0,
    right: 0,
    color: 'white',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '20px',
    marginTop: '7rem',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" color="secondary" className={classes.appBar}>
        <Toolbar>&copy; Zakir H. 2020 - Project-01</Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
