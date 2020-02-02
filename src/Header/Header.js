import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const HeaderStyled = styled.div `
  background-color: #999999;
  padding: 40px 10px 0px 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.30);

`;

const HeaderMenu = styled.ul `
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const HeaderMenuItem = styled.li `
    float: left;

    color: ${({selected}) => selected ? '#ffffff;' : '#dddddd;'};
    border-bottom: ${({selected}) => selected ? '2px solid #ffffff;' : 'none;'};

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

export class Header extends React.Component {
  state = { 
    selected: 0
  };

  changeSelect(selected){
    this.setState({selected})
  }

  render(){
    const { selected } = this.state;

    return (
      <HeaderStyled className="header">
        <HeaderMenu className="unstyled">
          <HeaderMenuItem 
            selected={!selected} 
            onClick={ () => this.changeSelect(0) }>
            <Link to="/table">TABLE STATUS</Link>
          </HeaderMenuItem>
          <HeaderMenuItem 
            selected={selected}
            onClick={ () => this.changeSelect(1) }>
            <Link to="/weeks/1">WEEKS</Link>
          </HeaderMenuItem>
        </HeaderMenu>
      </HeaderStyled>
    )
  }
};