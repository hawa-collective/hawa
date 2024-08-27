'use client';
import { Jost } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const jost = Jost({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: jost.style.fontFamily,
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)"
    }
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#600c00',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  shadows: ["none", "0px 1px 3px rgba(0, 0, 0, 0.2)", "0px 1px 5px rgba(0, 0, 0, 0.2)"]
});

export default theme;
