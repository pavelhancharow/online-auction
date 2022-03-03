import ReactDOM from 'react-dom';
import { App } from './App';
import { GlobalStyle } from './styles/globalStyles';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
