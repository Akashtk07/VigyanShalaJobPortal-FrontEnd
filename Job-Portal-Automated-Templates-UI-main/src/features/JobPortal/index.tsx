import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import JobPortal from './JobPortal';
import { ThemeProvider } from '@mui/material';
import theme from '../../themes/theme';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <JobPortal />
    </ThemeProvider>
    
  </React.StrictMode>
);
