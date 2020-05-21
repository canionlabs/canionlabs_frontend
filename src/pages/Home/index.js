/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { FaAngleLeft, FaAngleRight, FaAngleDoubleDown } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

import BannerLogo from '../../assets/bannerlogo.png';
import MonarLogo from '../../assets/monarlogo.png';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';

import {
  ContentPage,
  About,
  ProductContainer,
  ProductContent,
  Contact,
} from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <ContentPage>
        <img src={BannerLogo} alt="" />
        <p>Nós tornamos a Internet das Coisas simples para sua empresa</p>
        <FaAngleDoubleDown color="#ffffff" size={20} />
      </ContentPage>
      <About id="about">
        <h3>
          Sobre
          <FaAngleLeft size={25} />
        </h3>
        <p>
          A CanionLabs é uma companhia focada no desenvolvimento de soluções de
          IoT para o comércio e indústria. Através de soluções conectadas
          baseadas em Software e Hardware, trazemos modernidade e oportunidades
          para dentro da sua empresa.
        </p>
      </About>
      <ProductContainer id="products">
        <h3>
          <FaAngleRight size={25} />
          Produtos
        </h3>

        <ProductContent>
          {/* imageProduct, será a image que ficar exposta */}
          <ProductCard title="MES">
            {/* Tudo que você passar aqui dentro será colocado no hover */}
            <p>
              A proposta do MES é solucionar as falhas que ocorrem durante a
              produção e contagem de estoque, além de encontrar gargalos nos
              processos de produção industrial e resolver a falta de controle e
              análise dos itens produzidos.
            </p>
            <a target="blank" href="https://monar.canionlabs.io/#/">
              Conheça o MES
              <FiArrowRight size={20} />
            </a>
          </ProductCard>

          <ProductCard imageProduct={MonarLogo}>
            {/* Tudo que você passar aqui dentro será colocado no hover */}
            <p>
              A proposta do MONAR é reduzir perdas, aumentar vida útil e
              melhorar qualidade de produtos sensíveis a temperatura através de
              um sistema de monitoramento baseado em IoT diminuindo custos e
              simplificando logística.
            </p>
            <a target="blank" href="https://monar.canionlabs.io/#/">
              Conheça o Monar
              <FiArrowRight size={20} />
            </a>
          </ProductCard>

          <ProductCard title="GLACIER">
            {/* Tudo que você passar aqui dentro será colocado no hover */}
            <p>
              Plataforma de controle remoto para ar-condicionados, composto por
              sistemas integrados com hardware equipado com sensores/emissores
              de interação.
            </p>
            <a target="blank" href="https://monar.canionlabs.io/#/">
              Conheça o Glacier
              <FiArrowRight size={20} />
            </a>
          </ProductCard>
        </ProductContent>

        {/* No caso de ter outro produto, basta chamar o <ProductCard> e passar os devidos valores */}
      </ProductContainer>
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
