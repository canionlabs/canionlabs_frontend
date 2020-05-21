import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ProductCard({ title, imageProduct, children }) {
  // <ProcuctCard>  tudo que você passar aqui dentro la na Home,
  // é chamado de CHILDREN. que são os filhos da tag  </ProductCard>

  return (
    <Container>
      <div>
        {imageProduct ? (
          <img src={imageProduct} alt="logo" />
        ) : (
          <strong>{title}</strong>
        )}
      </div>
      <div className="content-hover">{children}</div>
    </Container>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string,
  imageProduct: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
};

ProductCard.defaultProps = {
  title: '',
  imageProduct: '',
};
