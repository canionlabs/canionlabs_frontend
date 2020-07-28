import React, { useState, useCallback } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { useLanguage } from '../../hooks/language';

import Logo from '../../assets/logo.png';
import IconBrazil from '../../assets/brasil-flag.svg';
import IconUSA from '../../assets/usa-flag.svg';

import { Container, Content, SmallMenu, LargeMenu, MenuIcon } from './styles';

const NavBar: React.FC = () => {
  const {
    about_link,
    product_link,
    contact_link,
    handleLanguagePT,
    handleLanguageEN,
  } = useLanguage();

  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = useCallback(() => {
    setShowMenu((prevState) => !prevState);
  }, []);

  return (
    <Container>
      <Content>
        <img src={Logo} alt="Canionlabs" />

        {/* When the page is MORE than 850px wide, this Menu will have display: block */}
        <LargeMenu>
          <a href={`#${about_link}`}>{about_link}</a>
          <a href={`#${product_link}`}>{product_link}</a>
          <a href={`#${contact_link}`} className="contact">
            {contact_link}
          </a>

          <button
            data-testid="large_button_pt"
            type="button"
            onClick={handleLanguagePT}
            className="first-button"
          >
            <img src={IconBrazil} alt="Brazil's flag" />
          </button>
          <button
            data-testid="large_button_en"
            type="button"
            onClick={handleLanguageEN}
          >
            <img src={IconUSA} alt="United states's flag" />
          </button>
        </LargeMenu>

        {/* and when the page is LESS than 850px wide, this Menu will have display: block */}
        <SmallMenu>
          {showMenu ? (
            <div className="links">
              <a href={`#${about_link}`}>{about_link}</a>
              <a href={`#${product_link}`}>{product_link}</a>
              <a href={`#${contact_link}`} className="contact">
                {contact_link}
              </a>
              <div>
                <button
                  data-testid="small_button_pt"
                  type="button"
                  onClick={handleLanguagePT}
                >
                  <img src={IconBrazil} alt="Brazil's flag" />
                </button>
                <button
                  data-testid="small_button_en"
                  type="button"
                  onClick={handleLanguageEN}
                >
                  <img src={IconUSA} alt="United states's flag" />
                </button>
              </div>
            </div>
          ) : null}

          {showMenu ? (
            <MenuIcon
              data-testid="hide_menu_button"
              type="button"
              onClick={handleShowMenu}
            >
              <FaTimes size={20} color="#fff" />
            </MenuIcon>
          ) : (
            <MenuIcon
              data-testid="show_menu_button"
              type="button"
              onClick={handleShowMenu}
            >
              <FaBars size={20} color="#fff" />
            </MenuIcon>
          )}
        </SmallMenu>
      </Content>
    </Container>
  );
};

export default NavBar;
