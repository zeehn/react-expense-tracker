import React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Chip,
} from '@material-ui/core';
import { removeTransaction } from '../actions';
import { connect } from 'react-redux';

const TransactionsList = (props) => {
  const handleDelete = (transaction) => {
    props.removeTransaction(transaction);
  };
  const listTransactions = () => {
    if (props.transactions) {
      return props.transactions.map((transaction) => {
        return (
          <React.Fragment key={transaction.id}>
            <ListItem>
              <ListItemText>{transaction.description}</ListItemText>
              <Chip
                size="small"
                color="primary"
                variant="outlined"
                label={`$${transaction.amount}`}
              ></Chip>
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(transaction)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </React.Fragment>
        );
      });
    }
  };

  return (
    <Grid item>
      <Typography variant="h6">Transaction History</Typography>
      <Divider />
      <List>{props.transactions ? listTransactions() : null}</List>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTransaction: (id) => dispatch(removeTransaction(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);
