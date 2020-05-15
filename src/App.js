import React from 'react';
import { StaticRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <StaticRouter>
        <Routes />
      </StaticRouter>
    </>
  );
}

export default App;
