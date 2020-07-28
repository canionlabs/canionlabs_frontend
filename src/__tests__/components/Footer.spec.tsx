import React from 'react';
import { render } from '@testing-library/react';

import Footer from '../../components/Footer';

jest.mock('../../hooks/language', () => {
  return {
    useLanguage: () => ({
      go_back_button: 'voltar ao topo',
    }),
  };
});

describe('Footer component', () => {
  it('should be able to render Footer component', () => {
    const { getByText } = render(<Footer />);

    expect(getByText('voltar ao topo')).toBeTruthy();
  });
});
