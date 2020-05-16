import React from 'react';

import Logo from '../../assets/logo.png';

import { NavBar, Container } from './styles';

function Header() {
  return (
    <NavBar>
      <Container>
        <img src={Logo} alt="Logo Canionlabs" />

        <div>
          <a href="#about">Sobre</a>
          <a href="#products">Produtos</a>
          <a href="#contact" className="contact">
            Contato
          </a>
        </div>
      </Container>
    </NavBar>
  );
}

export default Header;
