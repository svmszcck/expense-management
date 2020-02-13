import React from "react";
import { Provider } from "react-redux";
import store from "./store/reducers/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">app</div>
    </Provider>
  );
}

export default App;
