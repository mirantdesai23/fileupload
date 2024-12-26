import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Default primary color
      contrastText: '#ffffff', // Text color on primary
    },
    secondary: {
      main: '#f50057', // Default secondary color
      contrastText: '#ffffff',
    },
    background: {
      default: '#f4f6f8', // Default background color
      paper: '#ffffff',   // Background for paper components
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ffa726',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '#2e7d32',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif", // Font family
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none', // Disable uppercase for buttons
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8, // Default border radius
  },
  spacing: 8, // Default spacing unit (8px)
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20, // Rounded buttons
          padding: '10px 20px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px', // Consistent spacing for text fields
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1976d2', // App bar color
        },
      },
    },
  },
});

export default theme;

