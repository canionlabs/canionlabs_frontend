/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleDown,
  FaLongArrowAltRight,
} from 'react-icons/fa';

import BannerLogo from '../../assets/bannerlogo.png';
import MonarLogo from '../../assets/monarlogo.png';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Content, About, Product, Contact } from './styles';

function Home() {
  return (
    <>
      <Header />
      <Content>
        <div>
          <img src={BannerLogo} alt="" />
          <p>Frase de efeito sobre a Canionlabs</p>
          <FaAngleDoubleDown size={20} />
        </div>
      </Content>
      <About id="about">
        <h3>
          Sobre
          <FaAngleLeft size={25} />
        </h3>
        <p>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries.
        </p>
      </About>
      <Product id="products">
        <h3>
          <FaAngleRight size={25} />
          Produtos
        </h3>
        <div>
          <img src={MonarLogo} alt="Logo Monar" />
          <div>
            <p>
              It has survived not only five centuries, is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries.
            </p>
            <a href="#sobre">
              Conheça o Monar
              <FaLongArrowAltRight size={20} />
            </a>
          </div>
        </div>
      </Product>
      <Contact id="contact">
        <h3>
          Contato
          <FaAngleLeft size={25} />
        </h3>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.265817671421!2d-42.792472685530356!3d-5.060604396326895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e3901197cf71f%3A0xeee72676e742f818!2sThe%20doors%20galerias!5e0!3m2!1spt-BR!2sbr!4v1589500005252!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />

          <form action="submit">
            <span>Nome Completo:</span>
            <input type="text" placeholder="Ex: Caio Victor" />

            <span>E-mail:</span>
            <input type="email" placeholder="Ex: canion@e-mail.com" />

            <span>Telefone:</span>
            <input type="text" placeholder="(00) 0 0000-0000" />

            <button type="submit">Enviar</button>
          </form>
        </div>
      </Contact>
      <Footer />
    </>
  );
}

export default Home;
