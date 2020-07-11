import React from 'react';
import { FaAngleLeft, FaAngleRight, FaAngleDoubleDown } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

import { useLanguage } from '../../hooks/language';

import BannerLogo from '../../assets/bannerlogo.png';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';

import {
  ContentPage,
  About,
  ProductContainer,
  ProductContent,
  Contact,
  MainTextSections,
} from './styles';

export default function Home() {
  const {
    aboutLink,
    productLink,
    contactLink,
    headerText,
    aboutText,
    products,
    nameDescriptionForm,
    cellphoneDescriptionForm,
    messageDescriptionForm,
    messagePlaceholderForm,
    sendButton,
  } = useLanguage();

  return (
    <>
      <NavBar />

      <ContentPage>
        <img src={BannerLogo} alt="Canionlabs" />
        <p>{headerText}</p>
        <FaAngleDoubleDown color="#ffffff" size={20} />
      </ContentPage>

      <About id={aboutLink}>
        <MainTextSections>
          {aboutLink}
          <FaAngleLeft size={25} />
        </MainTextSections>

        <p>{aboutText}</p>
      </About>

      <ProductContainer id={productLink}>
        <MainTextSections right>
          <FaAngleRight size={25} />
          {productLink}
        </MainTextSections>

        <ProductContent>
          {products.map((product) => (
            <ProductCard
              key={product.name}
              title={product.name}
              hasLink={!!product.link}
            >
              <p>{product.description}</p>
              <a href={product.link} target="blank">
                Conheça o {product.name}
                <FiArrowRight size={20} />
              </a>
            </ProductCard>
          ))}
        </ProductContent>
      </ProductContainer>

      <Contact id={contactLink}>
        <MainTextSections>
          {contactLink}
          <FaAngleLeft size={25} />
        </MainTextSections>

        <div className="contact-form">
          <iframe
            title="Canionlabs"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.265817671421!2d-42.792472685530356!3d-5.060604396326895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e3901197cf71f%3A0xeee72676e742f818!2sThe%20doors%20galerias!5e0!3m2!1spt-BR!2sbr!4v1589500005252!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />

          <form action="https://formspree.io/caio@canionlabs.io" method="POST">
            <span>{nameDescriptionForm}:</span>
            <input type="text" placeholder="John Doe" name="nome" />

            <span>E-mail:</span>
            <input
              type="email"
              placeholder="johndoe@email.com"
              name="_replyto"
            />

            <span>{cellphoneDescriptionForm}:</span>
            <input type="text" placeholder="(00) 0 0000-0000" name="telefone" />

            <span>{messageDescriptionForm}:</span>
            <textarea
              name="qtd de pontos"
              rows="4"
              placeholder={messagePlaceholderForm}
            />

            <button type="submit" value="Send">
              {sendButton}
            </button>
          </form>
        </div>
      </Contact>

      <Footer />
    </>
  );
}
