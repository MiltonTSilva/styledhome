import React from 'react';
import styled from 'styled-components'

const Footer = styled.footer `
    position: fixed  ;
    bottom: 0;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center; 
    align-items: center;
    background-color: #457667;   
`

const Item = styled.div `
    font-size: 16px;
    font-weight: bold;
    color: #fff;

`

function footer() {
    return (
        <React.Fragment>
            <Footer>
                <Item><h4>Criado com Styled Components</h4></Item>
            </Footer>
        </React.Fragment>
    );
  }
  
  export default footer;