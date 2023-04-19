import React from 'react';

import {Routes} from './routes';
import {ThemeProvider} from 'styled-components/native';
import theme from './styles/theme';
import {AppProvider} from './context';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
