import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Theme';
import ExpenseTracker from './components/ExpenseTrackerApp';

import store from './store';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ExpenseTracker />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
