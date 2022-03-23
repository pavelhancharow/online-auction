import './wdyr';

import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { setupStore } from './store';
import { GlobalStyle } from './styles/globalStyles';
setConfig({
  showReactDomPatchNotification: false,
});
const store = setupStore();
const HotApp = hot(App);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <HotApp />
  </Provider>,
  document.getElementById('root')
);
