import React from 'react';
import styled from 'styled-components'


const Header = styled.div `
    background-color: #457667;
    position: relative;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    width: 100%;
    height: 60px;
`

const Navbar = styled.a `
    font-size: 14px;
    font-family: 'Read';
    font-weight: bold;
    color: #ffffff;
    padding: 50px;
`

function header() {
    return (
        <React.Fragment>
                <Header>
                    <Navbar>Home</Navbar>
                    <Navbar>Contato</Navbar>
                    <Navbar>Sobre</Navbar>
                </Header>
        </React.Fragment>
  );
}

export default header;