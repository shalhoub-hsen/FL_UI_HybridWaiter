import { createTheme } from '@mui/material'

export const accentVariant = '#10ADE4'
const theme = createTheme({
  palette: {
    primary: {
      '100': '#DCE2ED',
      main: '#003DA5',
      light: '#6286C5',
    },
    secondary: {
      main: '#00a1ff',
    },
    success: {
      main: '#28A745',
    },
    warning: {
      main: '#FFC107',
    },
    error: {
      main: '#DC3545',
    },
    grey: { 500: '#DDE1E6', 400: '#D6D8DA', 300: '#6A747D', 200: '#E6E6E6' },
    background: { default: '#ffffff', paper: '#FFFFFF' },
    text: {
      primary: '#5B6770',
      secondary: '#003DA5',
      // secondary: '#FBB549',
    },
    divider: '#D6D8DA',
    // divider: '#A7ADB2',
  },
})
export const brandPalette = theme.palette
