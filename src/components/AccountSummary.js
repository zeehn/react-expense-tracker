import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  exp: {
    color: 'red',
  },
  income: {
    color: 'green',
  },
  span: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
}));

const AccountSummary = ({ income, expense }) => {
  const classes = useStyles();
  return (
    <Grid item container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Card variant="outlined" align="center">
          <CardContent>
            <span className={classes.span}>INCOME</span>
            <Typography variant="h6" className={classes.income}>
              ${income}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card variant="outlined" align="center">
          <CardContent>
            <span className={classes.span}>EXPENSE</span>
            <Typography variant="h6" className={classes.exp}>
              ${expense}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    income: state.income,
    expense: state.expense,
  };
};

export default connect(mapStateToProps)(AccountSummary);
