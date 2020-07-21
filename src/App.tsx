import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { LanguageProvider } from './hooks/language';

import Routes from './routes';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
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
};

export default App;
