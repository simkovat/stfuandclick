import './translations/i18n';
import './index.css';

import * as serviceWorker from './serviceWorker';

import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/defaultTheme';
import { store } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
