import React from 'react';

import { Grid, makeStyles, CssBaseline, Paper } from '@material-ui/core';

import NavBar from './NavBar';
import Balance from './Balance';
import AccountSummary from './AccountSummary';
import TransactionsList from './TransactionsList';
import NewTransaction from './NewTransaction';
import Footer from './Footer';

const useStyle = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    marginBottom: '7em',
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

const ExpenseTrackerApp = () => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item container direction="column" spacing={2}>
              <Balance />
              <AccountSummary />
              <TransactionsList />
              <NewTransaction />
            </Grid>
          </Grid>
        </Paper>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default ExpenseTrackerApp;
