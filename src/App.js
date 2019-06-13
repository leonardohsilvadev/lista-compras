import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store";

import { createMuiTheme } from "@material-ui/core";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Header from "./common/Header";
import Home from "./home";
import CreateList from "./createList";

import './App.css';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
    main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/lista" component={CreateList} />
              </Switch>
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
