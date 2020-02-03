import styled from 'styled-components'

export const TeamStyled = styled.div `
  width: 100%;

  background-color: white;
  margin: 92px auto 50px auto;

  overflow: hidden;

  h1 {
    text-align: center;
    font-weight: 200;
    color: rgba(0,0,0,.54);
    margin: 12px 0px;
    padding-top: 12px;
  }

  h2 {
    text-align: center;
    font-weight: 200;
    color: rgba(0,0,0,.54);
  }

  .results-container{
    height: 1000px;
    max-height: calc(100% + 200px); 
  }
`;

export const TeamLogoStyled = styled.img `
  margin: auto;
  display: block;
`;

export const TeamResultsContainerStyled = styled.div `
  width: 100%;
  height: 560px;
  position: fixed;
  overflow: auto;

  background-color: white;
`
