import { Provider } from 'react-redux'

import Router from 'router';
import store from 'store';
import Styled from './styles';

function App() {
  return (
    <Provider store={store}>
      <Styled>
        <Router />
      </Styled>
    </Provider>
  );
}

export default App;
