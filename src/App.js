// Ferramentas
import React from 'react';

// Rotas
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

// CSS
import GlobalStyles from './styles/GlobalStyles';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}
