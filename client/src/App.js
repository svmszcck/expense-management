import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/layout/Navbar';
import NotFound from './components/layout/NotFound';
import Expenses from './components/expenses/Expenses';


const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/expenses" component={Expenses} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
