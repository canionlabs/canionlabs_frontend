import React from 'react';
import { render } from '@testing-library/react';

import ProductCard from '../../components/ProductCard';

describe('ProductCard component', () => {
  it('should be able to render ProductCard component with link', () => {
    const { getByText } = render(
      <ProductCard title="test title" hasLink>
        <p>some description</p>
        <a href="some-link" target="blank">
          Conheça o produto
        </a>
      </ProductCard>,
    );

    expect(getByText('test title')).toBeTruthy();
    expect(getByText('Conheça o produto')).toBeTruthy();
  });

  it('should be able to render ProductCard component without link', () => {
    const { getByText } = render(
      <ProductCard title="test title 2" hasLink={false}>
        <p>some description</p>
        <a href="without-link" target="blank">
          Conheça o test
        </a>
      </ProductCard>,
    );

    expect(getByText('test title 2')).toBeTruthy();
    expect(getByText('Conheça o test')).toHaveStyle('opacity: 0.7;');
    expect(getByText('Conheça o test')).toHaveStyle('cursor: not-allowed;');
    expect(getByText('Conheça o test')).toHaveStyle('pointer-events: none;');
  });
});
