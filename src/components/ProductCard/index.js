import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ProductCard({
  title,
  imageProduct,
  hasLink,
  children,
}) {
  return (
    <Container hasLink={hasLink}>
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
  hasLink: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
};

ProductCard.defaultProps = {
  title: '',
  imageProduct: '',
  hasLink: true,
};
