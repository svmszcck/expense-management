import React from 'react';
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import store from "./store";
import Navigation from './components/navigation';
import Notification from './containers/notification';
import ExpensesPage from './containers/expenses-page';

export default () => (
  <Provider store={store}>
    <Navigation />
    <Router>
      <Switch>
        <Route path='/expenses/:id' component={ExpensesPage} />
        <Route path='/' component={ExpensesPage} />
      </Switch>
    </Router>
    <Notification />
  </Provider>
);
