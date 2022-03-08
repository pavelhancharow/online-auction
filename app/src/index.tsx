import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { setupStore } from './store';
import { GlobalStyle } from './styles/globalStyles';

const store = setupStore();

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
