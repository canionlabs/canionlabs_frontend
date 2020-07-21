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

const Home: React.FC = () => {
  const {
    about_link,
    product_link,
    contact_link,
    header_description,
    about_description,
    products,
    name_description_form,
    cellphone_description_form,
    message_description_form,
    message_placeholder_form,
    send_button,
  } = useLanguage();

  return (
    <>
      <NavBar />

      <ContentPage>
        <img src={BannerLogo} alt="Canionlabs" />
        <p>{header_description}</p>
        <FaAngleDoubleDown color="#ffffff" size={20} />
      </ContentPage>

      <About id={about_link}>
        <MainTextSections>
          {about_link}
          <FaAngleLeft size={25} />
        </MainTextSections>

        <p>{about_description}</p>
      </About>

      <ProductContainer id={product_link}>
        <MainTextSections right>
          <FaAngleRight size={25} />
          {product_link}
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

      <Contact id={contact_link}>
        <MainTextSections>
          {contact_link}
          <FaAngleLeft size={25} />
        </MainTextSections>

        <div className="contact-form">
          <iframe
            title="Canionlabs"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.265817671421!2d-42.792472685530356!3d-5.060604396326895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e3901197cf71f%3A0xeee72676e742f818!2sThe%20doors%20galerias!5e0!3m2!1spt-BR!2sbr!4v1589500005252!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            frameBorder="0"
            allowFullScreen={undefined}
            aria-hidden="false"
            tabIndex={0}
          />

          <form action="https://formspree.io/caio@canionlabs.io" method="POST">
            <span>{name_description_form}:</span>
            <input type="text" placeholder="John Doe" name="nome" />

            <span>E-mail:</span>
            <input
              type="email"
              placeholder="johndoe@email.com"
              name="_replyto"
            />

            <span>{cellphone_description_form}:</span>
            <input type="text" placeholder="(00) 0 0000-0000" name="telefone" />

            <span>{message_description_form}:</span>
            <textarea
              name="qtd de pontos"
              rows={4}
              placeholder={message_placeholder_form}
            />

            <button type="submit" value="Send">
              {send_button}
            </button>
          </form>
        </div>
      </Contact>

      <Footer />
    </>
  );
};

export default Home;
