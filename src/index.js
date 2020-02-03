import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './routes';
import { HashRouter } from 'react-router-dom';
import { Header } from './Header/Header';
import { GlobalStyle } from './Styles/GlobalStyle';

import styled from 'styled-components';

const MainStyled  = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;

`;

const Main = () => (
  <HashRouter>
    <div>
      <GlobalStyle/>
      <Header/>
      <MainStyled>
        <Routes/>
      </MainStyled>
    </div>
  </HashRouter>
);

const mountNode = document.querySelector("#root");
ReactDOM.render(<Main />, mountNode);
