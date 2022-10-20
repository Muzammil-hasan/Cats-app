import { lightTheme, Provider } from '@adobe/react-spectrum';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider theme={lightTheme} colorScheme="light">
      <App />
    </Provider>
  </React.StrictMode>
);
