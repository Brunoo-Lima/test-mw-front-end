import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyle } from './styles/GlobalStyle.ts';
import { UserProvider } from './UserContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <GlobalStyle />
      <App />
    </UserProvider>
  </React.StrictMode>
);
