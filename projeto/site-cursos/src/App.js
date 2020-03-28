import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';

import { Menu } from './components/menu';
import { Routes } from './components/routes';

function App() {
  return (
    <div>
      <Menu/>
      <Routes/>
    </div>  
  );
}

export default App;