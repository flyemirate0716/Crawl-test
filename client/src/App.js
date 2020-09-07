import React from 'react';
import configureStore from './Redux/store';
import { createBrowserHistory } from 'history';
import { Provider as StoreProvider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Routes from './Routes';
import theme from "./Theme";
import './Assets/css/common.css';
import './App.css';
import {LanguageProvider} from "./Components/Container/Language";

const history = createBrowserHistory();
const store = configureStore(history);

const App = () => {
  return (
      <LanguageProvider>
        <StoreProvider store={store}>
          <MuiThemeProvider theme={theme}>
            <Routes />
          </MuiThemeProvider>
        </StoreProvider>
      </LanguageProvider>
  );
};

export default App;
