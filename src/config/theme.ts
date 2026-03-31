import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B4EFF',
    },
    error: {
      main: '#B91C1C',
    },
    warning: {
      main: '#F59E0B',
    },
    background: {
      default: '#F3F4F8',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#111827',
      secondary: '#6B7280',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 10,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          borderRadius: 14,
        },
      },
    },
  },
});

export default theme;