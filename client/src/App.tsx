import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ExpensesPage from './pages/ExpensesPage/ExpensesPage';
import ExpensePage from './pages/ExpensePage/ExpensePage';

import './App.css';


function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          {/* <Route exact path='/about' component={AboutPage} /> */}
          <Route exact path='/expenses' component={ExpensesPage} />
          <Route exact path='/expenses/:id' component={ExpensePage} />
          {/* <Route exact path='/*' component={ErrorPage} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
