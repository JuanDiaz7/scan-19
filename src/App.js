import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contenedor from './components/header/Contenedor'
import GetNumber from './components/cards/GetNumber'
import GetNumCountries from './components/cardcountries/GetNumCountries'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './temaconfig'

function App() {
  return (

    <ThemeProvider theme={theme}>
      <Router>
          <Switch> 

            <Route path="/:name">
              <Contenedor  />
              <GetNumCountries  />
            </Route> 

            <Route path="/">
              <Contenedor  />
              <GetNumber />
            </Route>

          </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
