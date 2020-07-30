import React from 'react';
import Contenedor from './components/header/Contenedor'
import CardsGeneral from './components/cards/CardsGeneral'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './temaconfig'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Contenedor  />
      <CardsGeneral/>
    </ThemeProvider>
  );
}

export default App;
