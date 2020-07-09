import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { LanguageProvider } from './hooks/language';

import Routes from './routes';

import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <LanguageProvider>
          <Routes />
        </LanguageProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
