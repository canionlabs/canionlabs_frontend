import React from 'react';
import { render } from '@testing-library/react';

import Home from '../../pages/Home';

jest.mock('../../hooks/language', () => {
  return {
    useLanguage: () => ({
      about_link: 'Sobre',
      product_link: 'Produtos',
      contact_link: 'Contato',
      header_description: 'cabeça descrição',
      about_description: 'sobredescrição',
      products: [
        {
          name: 'produto 1',
          description: 'descrição do produto',
          link: '',
        },
      ],
      name_description_form: 'nome completo',
      cellphone_description_form: 'bota telefone ai',
      message_description_form: 'manda mensagem pra nois',
      message_placeholder_form: 'aqui',
      send_button: 'enviar',
      handleLanguagePT: jest.fn(),
      handleLanguageEN: jest.fn(),
    }),
  };
});

describe('Home page', () => {
  it('should be able to render Home page', async () => {
    const { getByText } = render(<Home />);

    expect(getByText('cabeça descrição')).toBeTruthy();
    expect(getByText('sobredescrição')).toBeTruthy();
    expect(getByText('nome completo:')).toBeTruthy();
    expect(getByText('bota telefone ai:')).toBeTruthy();
    expect(getByText('manda mensagem pra nois:')).toBeTruthy();
    expect(getByText('enviar')).toBeTruthy();

    expect(getByText('produto 1')).toBeTruthy();
  });
});
