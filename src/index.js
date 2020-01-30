import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './routes';

import { Header } from './Header/Header';

const Main = () => (
  <Routes>
    <div>
      <Header/>
    </div>
  </Routes>
);

const mountNode = document.querySelector("#root");
ReactDOM.render(<Main />, mountNode);
