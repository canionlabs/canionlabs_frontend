/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from 'react';
import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleDown,
  FaLongArrowAltRight,
} from 'react-icons/fa';

// só lembra de trocar a url de acesso nessa pasta ai.
import api from '../../services/api';

import BannerLogo from '../../assets/bannerlogo.png';
import MonarLogo from '../../assets/monarlogo.png';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Content, About, Product, Contact } from './styles';

export default function Home() {
  // setHeaderText é como se fosse o seguinte text.push('exemplo'),
  // só que você usa assim: setHeaderText('exemplo') e dentro do: headerText,
  // vai ter o valor que você guardou.
  const [headerText, setHeaderText] = useState('');
  const [aboutText, setAboutText] = useState('');

  // caso a gente tenha mais produtos, podemos mudar para um array ([])
  const [productText, setProductText] = useState('');

  // Essa função vai ser executada assim que o site carregar, que o component for montado em tela.
  // você faz as requests aqui no caso, ai na hora que tela carregar, ele vai na api e busca os textos.
  // com a response, só você usar os "SET" acima.
  useEffect(() => {
    async function loadTexts() {
      // TODO
    }

    loadTexts();
  }, []);

  return (
    <>
      <Header />
      <Content>
        <img src={BannerLogo} alt="" />
        <p>
          {/* com os textos, basta você usar assim: {headerText} */}
          Nós tornamos a Internet das Coisas simples para sua empresa
        </p>
        <FaAngleDoubleDown color="#ffffff" size={20} />
      </Content>
      <About id="about">
        <h3>
          Sobre
          <FaAngleLeft size={25} />
        </h3>
        <p>
          {/* com os textos, basta você usar assim: {aboutText} */}
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
        <div className="product-content">
          <img src={MonarLogo} alt="Logo Monar" />
          <div>
            <p>
              {/* com os textos, basta você usar assim: {productText} */}
              It has survived not only five centuries, is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries.
            </p>
            <a href="https://monar.canionlabs.io/#/" target="blank">
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
        <div className="contact-form">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.265817671421!2d-42.792472685530356!3d-5.060604396326895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e3901197cf71f%3A0xeee72676e742f818!2sThe%20doors%20galerias!5e0!3m2!1spt-BR!2sbr!4v1589500005252!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />

          <form action="https://formspree.io/caio@canionlabs.io" method="POST">
            <span>Nome Completo:</span>
            <input type="text" placeholder="Ex: Caio Victor" name="nome" />

            <span>E-mail:</span>
            <input
              type="email"
              placeholder="Ex: canion@e-mail.com"
              name="_replyto"
            />

            <span>Telefone:</span>
            <input type="text" placeholder="(00) 0 0000-0000" name="telefone" />

            <button type="submit" value="Send">
              Enviar
            </button>
          </form>
        </div>
      </Contact>
      <Footer />
    </>
  );
}
