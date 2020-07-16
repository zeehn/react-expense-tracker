import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Toolbar, AppBar } from '@material-ui/core';
import FilterListSharpIcon from '@material-ui/icons/FilterListSharp';

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  toolbar: { height: '5em' },
  title: {
    flexGrow: 1,
  },
  icon: {
    fontSize: 45,
    marginRight: '10px',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Container>
          <Toolbar className={classes.toolbar}>
            <FilterListSharpIcon className={classes.icon} />
            <Typography variant="h4" className={classes.title}>
              Expense Tracker
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
