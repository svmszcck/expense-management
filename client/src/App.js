import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Expenses from "./containers/Expenses";
import { GlobalStyles } from "./styles";
import IntlProvider from "./containers/IntlProvider";
import Filter from "./containers/Filter";
import Header from "./components/Header";
import CurrentExpense from "./containers/CurrentExpense";

function App() {
  return (
    <Provider store={store}>
      <IntlProvider>
        <GlobalStyles />
        <Header />
        <Filter />
        <Expenses />
        <CurrentExpense />
      </IntlProvider>
    </Provider>
  );
}

export default App;
