import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from './global/GlobalStyle'

ReactDOM.render(
  <> 
    <GlobalStyle/>
    <App /> 
  </>,
  document.getElementById('root')
  );
