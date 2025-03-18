import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Using createRoot() (React 18+ standard). // createRoot() is the modern rendering API.

import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
