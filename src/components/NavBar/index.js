import React, { useState, useCallback } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { useLanguage } from '../../hooks/language';

import Logo from '../../assets/logo.png';
import IconBrazil from '../../assets/brasil-flag.svg';
import IconUSA from '../../assets/usa-flag.svg';

import { Container, Content, SmallMenu, LargeMenu, MenuIcon } from './styles';

export default function NavBar() {
  const {
    aboutLink,
    productLink,
    contactLink,
    handleLanguagePT,
    handleLanguageEN,
  } = useLanguage();

  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu]);

  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo Canionlabs" />

        <LargeMenu>
          <a href={`#${aboutLink}`}>{aboutLink}</a>
          <a href={`#${productLink}`}>{productLink}</a>
          <a href={`#${contactLink}`} className="contact">
            {contactLink}
          </a>

          <button
            type="button"
            onClick={handleLanguagePT}
            className="first-button"
          >
            <img src={IconBrazil} alt="brazil flag" />
          </button>
          <button type="button" onClick={handleLanguageEN}>
            <img src={IconUSA} alt="usa flag" />
          </button>
        </LargeMenu>

        <SmallMenu>
          {showMenu ? (
            <div className="links">
              <a href={`#${aboutLink}`}>{aboutLink}</a>
              <a href={`#${productLink}`}>{productLink}</a>
              <a href={`#${contactLink}`} className="contact">
                {contactLink}
              </a>
              <div>
                <button type="button" onClick={handleLanguagePT}>
                  <img src={IconBrazil} alt="brazil flag" />
                </button>
                <button type="button" onClick={handleLanguageEN}>
                  <img src={IconUSA} alt="usa flag" />
                </button>
              </div>
            </div>
          ) : null}

          {showMenu ? (
            <MenuIcon type="button" onClick={handleShowMenu}>
              <FaTimes size={20} color="#fff" />
            </MenuIcon>
          ) : (
            <MenuIcon type="button" onClick={handleShowMenu}>
              <FaBars size={20} color="#fff" />
            </MenuIcon>
          )}
        </SmallMenu>
      </Content>
    </Container>
  );
}
