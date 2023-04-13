import React from 'react';

import {Routes} from './routes';
import {ThemeProvider} from 'styled-components/native';
import theme from './styles/theme';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Routes />
    </ThemeProvider>
  );
};

export default App;
