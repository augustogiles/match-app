import styled from 'styled-components'

export const HeaderStyled = styled.div `
  background-color: #999999;
  padding: 40px 10px 0px 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.30);

`;

export const HeaderMenuItem = styled.li `
    float: left;

    color: ${({selected}) => selected ? '#ffffff;' : '#dddddd;'};
    border-bottom: ${({selected}) => selected ? '2px solid #ffffff;' : 'none;'};
    background-color: ${({selected}) => selected ? 'rgba(0,0,0,.1);' : 'inherit;'};

    a {
      display: block;
      text-align: center;
      padding: 14px 16px;
    }

    &:hover {
      cursor: pointer;
      background-color: rgba(0,0,0,.1);
      color: #ffffff;
    }
`;