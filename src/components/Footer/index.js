import React from 'react';
import {
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaAngleUp,
} from 'react-icons/fa';

import { Content, Container } from './styles';

function Footer() {
  return (
    <Content>
      <Container>
        <div className="social-media">
          <a href="#test">
            <FaGithubSquare size={35} />
          </a>

          <a href="#test">
            <FaInstagram size={35} />
          </a>

          <a href="#test">
            <FaLinkedin size={35} />
          </a>
        </div>
        <div className="canion">
          <span>© CanionLabs</span>
        </div>
        <div className="go-back">
          <a href="#top">
            Voltar ao início
            <FaAngleUp size={20} />{' '}
          </a>
        </div>
      </Container>
    </Content>
  );
}

export default Footer;
