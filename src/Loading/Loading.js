
import React from 'react';
import styled, {keyframes} from 'styled-components'; 

const LoadingStyled = styled.div`
  position: fixed;
  
  margin: auto auto;
  color: white;

  top: 50%;
  left: 50%;

`;

const LoadingShadowStyled = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 4;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const LoadingSpinner = styled.div`
  margin: 0 auto 20px;
  height: 64px;
  width: 64px;
  animation: ${rotate} 0.8s infinite linear;
  border: 5px solid white;
  border-right-color: transparent;
  border-radius: 50%;
  
`;

export const Loading = () => {
  return (
    <LoadingShadowStyled>
      <LoadingStyled> 
        <LoadingSpinner/>
        Loading ...
      </LoadingStyled>
    </LoadingShadowStyled>
  );
}