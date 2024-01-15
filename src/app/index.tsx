import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from '@/pages';
import './index.css';

const App = () => {
  return <BrowserRouter>
    <Router />
  </BrowserRouter>
}

export default App;
