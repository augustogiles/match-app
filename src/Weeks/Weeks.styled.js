import styled from 'styled-components'

export const WeekStyled = styled.div `
  width: 800px;
  height: 100%;
  max-height: calc(100% - 240px);

  background-color: white;
  margin: 120px auto 50px auto;
  
  border-radius: 8px;
  border-collapse: collapse;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.20);

  overflow: hidden;

  h2 {
    text-align: center;
    font-weight: 200;
    color: rgba(0,0,0,.54);
  }
`;

export const WeekHeaderStyled = styled.div `
  background-color: #999999;
  width: 800px;
  height: 80px;
  
  position: fixed;
  left: 50%;
  margin-left: -400px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    padding: 12px 16px;
    font-weight: 400;

    color: #ffffff;
  }
`;

export const WeekListStyled = styled.ul `
  width: calc(100% - 160px);
  display: flex;
  align-items: center;
  height: 100%;
  overflow: auto;
`;

export const WeekListItem = styled.li `
  height: 100%;

  color: ${({selected}) => selected ? '#ffffff;' : '#dddddd;'};
  border-bottom: ${({selected}) => selected ? '4px solid #ffffff;' : 'none;'};
  background-color: ${({selected}) => selected ? 'rgba(0,0,0,.1);' : 'inherit;'};

  a {
    display: block;
    text-align: center;
    padding: ${({selected}) => selected ? '34px 16px 14px;' : '32px 16px 14px;'};
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(0,0,0,.1);
    color: #ffffff;
  }
`;

export const WeekBodyStyled = styled.div `
  width: 800px;
  height: calc(100% - 80px);
  margin-top: 80px;
  overflow: auto;
`;