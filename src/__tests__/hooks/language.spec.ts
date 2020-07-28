import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { LanguageProvider, useLanguage } from '../../hooks/language';
import api from '../../services/api';

const apiMock = new MockAdapter(api, { delayResponse: 200 });

describe('Language hook', () => {
  beforeEach(() => {
    apiMock.reset();
  });

  it('should be able to handle language portuguese when hooks starts', async () => {
    const response = {
      about_link: 'sobre',
      product_link: 'produto',
      contact_link: 'contato',
      header_description: 'alguma descrição',
      about_description: 'outra descrição',
      products: [],
      send_button: 'enviar',
      go_back_button: 'voltar',
      name_description_form: 'nome',
      message_description_form: 'mensagem',
      message_placeholder_form: 'mensagem placeholder',
      cellphone_description_form: 'telefone',
    };

    apiMock.onGet('/homepage-pt').replyOnce(200, response);

    const { result, waitForNextUpdate } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    await waitForNextUpdate();

    expect(result.current.about_link).toEqual('sobre');
    expect(result.current.product_link).toEqual('produto');
    expect(result.current.contact_link).toEqual('contato');
    expect(result.current.message_description_form).toEqual('mensagem');
    expect(result.current.message_placeholder_form).toEqual(
      'mensagem placeholder',
    );
    expect(result.current.cellphone_description_form).toEqual('telefone');
  });

  it('should be able to handle language portuguese', async () => {
    const response = {
      about_link: 'sobre',
      product_link: 'produto',
      contact_link: 'contato',
      header_description: 'alguma descrição',
      about_description: 'outra descrição',
      products: [],
      send_button: 'enviar',
      go_back_button: 'voltar',
      name_description_form: 'nome',
      message_description_form: 'mensagem',
      message_placeholder_form: 'mensagem placeholder',
      cellphone_description_form: 'telefone',
    };

    apiMock.onGet('/homepage-pt').replyOnce(200, response);

    const { result, waitForNextUpdate } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    act(() => {
      result.current.handleLanguagePT();
    });

    await waitForNextUpdate();

    expect(result.current.about_link).toEqual('sobre');
    expect(result.current.product_link).toEqual('produto');
    expect(result.current.contact_link).toEqual('contato');
    expect(result.current.message_description_form).toEqual('mensagem');
    expect(result.current.message_placeholder_form).toEqual(
      'mensagem placeholder',
    );
    expect(result.current.cellphone_description_form).toEqual('telefone');
  });

  it('should be able to handle language english', async () => {
    const response = {
      about_link: 'about',
      product_link: 'product',
      contact_link: 'contact',
      header_description: 'some description',
      about_description: 'another description',
      products: [],
      send_button: 'send',
      go_back_button: 'back',
      name_description_form: 'name',
      message_description_form: 'message',
      message_placeholder_form: 'message placeholder',
      cellphone_description_form: 'cellphone',
    };

    apiMock.onGet('/homepage-en').replyOnce(200, response);

    const { result, waitForNextUpdate } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    act(() => {
      result.current.handleLanguageEN();
    });

    await waitForNextUpdate();

    expect(result.current.about_link).toEqual('about');
    expect(result.current.product_link).toEqual('product');
    expect(result.current.contact_link).toEqual('contact');
    expect(result.current.message_description_form).toEqual('message');
    expect(result.current.message_placeholder_form).toEqual(
      'message placeholder',
    );
    expect(result.current.cellphone_description_form).toEqual('cellphone');
  });

  it('should not be able to handle language english when api fails', async () => {
    const response = {
      about_link: 'sobre',
      product_link: 'produto',
      contact_link: 'contato',
      header_description: 'alguma descrição',
      about_description: 'outra descrição',
      products: [],
      send_button: 'enviar',
      go_back_button: 'voltar',
      name_description_form: 'nome',
      message_description_form: 'mensagem',
      message_placeholder_form: 'mensagem placeholder',
      cellphone_description_form: 'telefone',
    };

    apiMock.onGet('/homepage-pt').replyOnce(200, response);

    const { result, waitForNextUpdate } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    await waitForNextUpdate();

    apiMock.onGet('/homepage-en').networkErrorOnce();

    act(() => {
      result.current.handleLanguageEN();
    });

    expect(result.error).toBe(console.log());
  });
});
