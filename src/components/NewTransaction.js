import React, { useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  makeStyles,
  Divider,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';

import { addTransaction } from '../actions';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  true: {
    background: 'secondary',
  },
}));

const NewTransaction = (props) => {
  const classes = useStyles();
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');
  const [type, setType] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      description,
      amount: parseFloat(amount),
      type,
    };
    props.addTransaction(newTransaction);
    setDescription('');
    setAmount(0);
  };
  return (
    <Grid item container>
      <Typography variant="h6" gutterBottom>
        Add Transaction
        <Divider />
      </Typography>

      <form className={classes.root} onSubmit={(e) => handleSubmit(e)}>
        <TextField
          label="Description"
          value={description}
          placeholder="Description of transaction"
          fullWidth
          margin="normal"
          variant="outlined"
          className={classes.margin}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setDescription(e.target.value)}
          style={{ margin: 8 }}
        />

        <FormControl fullWidth variant="outlined" className={classes.margin}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
            value={amount}
            placeholder="Amount of transaction"
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormControl>
        <FormControl
          component="fieldset"
          value={type}
          className={classes.margin}
          onClick={(e) => setType(e.target.value)}
        >
          <Typography variant="h6" gutterBottom>
            Transaction Type
            <Divider />
          </Typography>

          <RadioGroup
            defaultValue="female"
            aria-label="gender"
            name="customized-radios"
          >
            <FormControlLabel
              value="Income"
              control={<Radio />}
              label="Income"
            />
            <FormControlLabel
              value="Expense"
              control={<Radio />}
              label="Expense"
            />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className={classes.margin}
          type="submit"
        >
          Add Transaction
        </Button>
      </form>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (transaction) => dispatch(addTransaction(transaction)),
  };
};
export default connect(null, mapDispatchToProps)(NewTransaction);
