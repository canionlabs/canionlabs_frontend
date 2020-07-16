import React from 'react';

import { Container } from './styles';

interface ProductCardProps {
  title: string;
  imageProduct: string;
  hasLink: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  imageProduct,
  hasLink,
  children,
}) => {
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
};

export default ProductCard;
