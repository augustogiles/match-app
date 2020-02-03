import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const ResultsContainerStyled = styled.div `
  margin: 20px auto;
  padding: 40px 20px;
  
  width: 80%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  overflow: auto;

`;

export const ResultStyled = styled.div `

  padding: 20px 16px;
  color: rgba(0,0,0,.87);

  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.20);

  transition-property: box-shadow margin-top filter;
  transition-duration: .2s;

  &:hover {
    background-color: #dddddd;
    margin-top: 5px;
    margin-bottom: 0px;
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.20);
  }
`;

export const ImgResultStyled = styled.img `
  width: 24px;
  height: 24px;
  margin: 12px;
`;

export const TeamResultStyled = styled(Link)`
  position: relative;
  bottom: 20px;

  transition-property: color filter;
  transition-duration: .2s;
  &:hover {
    color: grey;
  }
`;

export const TeamScoreStyled = styled.div `
  
  float: right;
  top: 12px;
  position: relative;
  
`;