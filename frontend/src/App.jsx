import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import Navigation from './components/navigation';
import Expenses from './containers/expenses-list';
import Notification from './containers/notification';
import Pagination from './containers/pagination';
import ExpenseDetails from './containers/expense-details';
import Search from './containers/search';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <div className='container'>
        <div className='left'>
          <Search />
          <Expenses />
          <Pagination />
        </div>
        <div className='right'>
          <ExpenseDetails />
        </div>
      </div>
      <Notification />
    </div>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
