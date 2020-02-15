import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Expenses from "./containers/Expenses";
import { GlobalStyles } from "./styles";
import IntlProvider from "./containers/IntlProvider";
import SelectLanguage from "./containers/SelectLanguage";
import Filter from "./containers/Filter";

function App() {
  return (
    <Provider store={store}>
      <IntlProvider>
        <GlobalStyles />
        <SelectLanguage />
        <Filter />
        <Expenses />
      </IntlProvider>
    </Provider>
  );
}

export default App;
