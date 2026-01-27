import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E4A28', // The dark green from the image
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#E8F5E9', // Light green background for icons
    },
    background: {
      default: '#F5F5F5', // Light gray background
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
          border: '1px solid #EEEEEE',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            backgroundColor: '#F9F9F9',
            '& fieldset': {
              borderColor: '#EEEEEE',
            },
            '&:hover fieldset': {
              borderColor: '#1E4A28',
            },
          },
        },
      },
    },
  },
});

export default theme;
