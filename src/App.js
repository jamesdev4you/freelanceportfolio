import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ECEBF3',
    },
    secondary: {
      main: '#0C120C',
    },
    error: {
      main: '#C20114',
    },
    info: {
      main: '#D9D9D9',
    },
    success: {
      main: '#C7D6D5',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <></>
    </ThemeProvider>
  );
}

export default App;
