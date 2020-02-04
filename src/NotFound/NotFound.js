import React from 'react';
import styled from 'styled-components'; 

import { ShadowStyled } from '../Loading/Loading'

const NotFoundStyled = styled.div`
  height: 240px;
  width: 400px;
  background-image: url('img/404-error.png');
  background-position: center;
  background-size: cover;

  position: fixed;
  margin: auto auto;

  top: calc(50% - 120px);
  left: calc(50% - 200px);

`;

const GenericStyled = styled.h1 `
  position: fixed;
  
  text-align: center;
  color: white;

  top: calc(50% - 76px);
  left: calc(50% - 180px);

`;

export const NotFound = ({generic}) => {
  return (
    <ShadowStyled>
      {(!generic) ? 
          <NotFoundStyled/>
        :
          <GenericStyled>
            Something went wrong! <br/>
            Please try again.
          </GenericStyled>
      }
      
    </ShadowStyled>
  );
};