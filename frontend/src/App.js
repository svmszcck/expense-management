import React from 'react';
import Navigation from './components/navigation'
import Expenses from './components/expenses-list'
import Search from './components/search'
import ExpenseDetails from './components/expense-details'
import './App.scss';

const expenses = [{
  id: '5b995dffebc765e96f98bee1',
  amount: {
    value: '1335.01',
    currency: 'EUR'
  },
  date: '2015-06-06T02:57:22.629Z',
  merchant: 'DIGIRANG',
  receipts: [],
  comment: 'Comment',
  category: '',
  user: {
    first: 'Butler',
    last: 'Maldonado',
    email: 'butler.maldonado@pleo.io'
  },
  selected: true
},
{
  id: '5b995dff75ffa69322e76673',
  amount: {
    value: '18.64',
    currency: 'EUR'
  },
  date: '2017-04-16T16:36:03.758Z',
  merchant: 'QUILITY',
  receipts: [],
  comment: '',
  category: '',
  user: {
    first: 'Sofia',
    last: 'Brady',
    email: 'sofia.brady@pleo.io'
  }
}];

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className='container'>
        <div className='left'>
          <Search />
          <Expenses expenses={expenses} />
        </div>
        <div className='right'>
          <ExpenseDetails {...expenses[0]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
