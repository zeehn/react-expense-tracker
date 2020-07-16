import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  balance: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5px',
  },
  span: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
}));

const Balance = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid item container className={classes.balance}>
        <Grid item align="center">
          <span className={classes.span}>CURRENT BALANCE</span>
          <Typography variant="h5">${props.balance}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    balance: state.income - state.expense,
  };
};
export default connect(mapStateToProps)(Balance);
