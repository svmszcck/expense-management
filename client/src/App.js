import React from "react";
import { Provider } from "react-redux";
import store from "./store/reducers";
import Expenses from "./containers/Expenses";
import { GlobalStyles } from "./styles";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Expenses />
    </Provider>
  );
}

export default App;
