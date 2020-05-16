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
          <a href="https://github.com/canionlabs" target="blank">
            <FaGithubSquare size={35} />
          </a>

          <a href="https://www.instagram.com/canionlabs.io/" target="blank">
            <FaInstagram size={35} />
          </a>

          <a
            href="https://www.linkedin.com/company/canionlabs/about/"
            target="blank"
          >
            <FaLinkedin size={35} />
          </a>
        </div>
        <div className="canion">
          <strong>© CanionLabs</strong>
          <span>(86) 99834-4395</span>
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
