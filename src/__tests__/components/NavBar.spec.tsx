import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import NavBar from '../../components/NavBar';

const mockedHandleLanguagePT = jest.fn();
const mockedHandleLanguageEN = jest.fn();

jest.mock('../../hooks/language', () => {
  return {
    useLanguage: () => ({
      about_link: 'Sobre',
      product_link: 'Produtos',
      contact_link: 'Contato',
      handleLanguagePT: mockedHandleLanguagePT,
      handleLanguageEN: mockedHandleLanguageEN,
    }),
  };
});

describe('NavBar component', () => {
  beforeEach(() => {
    mockedHandleLanguagePT.mockClear();
    mockedHandleLanguageEN.mockClear();
  });

  it('should be able to render NavBar component', () => {
    const { getByText } = render(<NavBar />);

    expect(getByText('Sobre')).toBeTruthy();
    expect(getByText('Produtos')).toBeTruthy();
    expect(getByText('Contato')).toBeTruthy();
  });

  it('should be able to handle language portuguese in large menu', () => {
    const { getByTestId } = render(<NavBar />);

    const largeButtonPT = getByTestId('large_button_pt');

    fireEvent.click(largeButtonPT);

    expect(mockedHandleLanguagePT).toHaveBeenCalledTimes(1);
  });

  it('should be able to handle language english in large menu', () => {
    const { getByTestId } = render(<NavBar />);

    const largeButtonEN = getByTestId('large_button_en');

    fireEvent.click(largeButtonEN);

    expect(mockedHandleLanguageEN).toHaveBeenCalledTimes(1);
  });

  it('should be able to show small menu', async () => {
    const { getByTestId } = render(<NavBar />);

    const showMenuButton = getByTestId('show_menu_button');

    fireEvent.click(showMenuButton);

    await wait(() => {
      expect(getByTestId('small_button_pt')).toBeTruthy();
      expect(getByTestId('hide_menu_button')).toBeTruthy();
    });
  });

  it('should be able to handle language portuguese in small menu', async () => {
    const { getByTestId } = render(<NavBar />);

    const showMenuButton = getByTestId('show_menu_button');

    fireEvent.click(showMenuButton);

    await wait(() => {
      expect(getByTestId('small_button_pt')).toBeTruthy();
    });

    const smallButtonPT = getByTestId('small_button_pt');

    fireEvent.click(smallButtonPT);

    expect(mockedHandleLanguagePT).toHaveBeenCalledTimes(1);
  });

  it('should be able to handle language english in small menu', async () => {
    const { getByTestId } = render(<NavBar />);

    const showMenuButton = getByTestId('show_menu_button');

    fireEvent.click(showMenuButton);

    await wait(() => {
      expect(getByTestId('small_button_en')).toBeTruthy();
    });

    const smallButtonEN = getByTestId('small_button_en');

    fireEvent.click(smallButtonEN);

    expect(mockedHandleLanguageEN).toHaveBeenCalledTimes(1);
  });

  it('should be able to hide menu', async () => {
    const { getByTestId } = render(<NavBar />);

    const showMenuButton = getByTestId('show_menu_button');

    fireEvent.click(showMenuButton);

    await wait(() => {
      expect(getByTestId('hide_menu_button')).toBeTruthy();
    });

    const hideMenuButton = getByTestId('hide_menu_button');

    fireEvent.click(hideMenuButton);

    await wait(() => {
      expect(getByTestId('show_menu_button')).toBeTruthy();
    });
  });
});
