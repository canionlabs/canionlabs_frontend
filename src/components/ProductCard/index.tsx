import React from 'react';

import { Container } from './styles';

interface ProductCardProps {
  title: string;
  hasLink: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  hasLink,
  children,
}) => {
  return (
    <Container hasLink={hasLink}>
      <div>
        <strong>{title}</strong>
      </div>
      <div className="content-hover">{children}</div>
    </Container>
  );
};

export default ProductCard;
