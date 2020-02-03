import styled from 'styled-components'; 

export const TableStyled = styled.table `
  width: 800px;
  height: 1000px;
  max-height: calc(100% - 200px);
  
  text-align: left;
  background-color: white;
  
  padding: 0px 8px;
  margin: 120px auto 50px auto;

  border-radius: 8px;
  border-collapse: collapse;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.20);

  td, th {
    padding: 20px 16px;
    border-bottom: 1px solid #dddddd;
  }

  th {
    font-weight: 100;
    color: rgba(0,0,0,.54);
  }
  td {
    color: rgba(0,0,0,.87);
  }

  .no-border {
    border-bottom: none;
    
  }

  .selectable {
    cursor: pointer;
  }

`;

export const TableRowStyled = styled.tr`
  transition-property: box-shadow margin-top filter;
  transition-duration: .2s;
  &:hover {
    cursor: pointer;
    background-color: #dddddd;
    margin-top: 0px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 10px 0px grey;
  }

`;