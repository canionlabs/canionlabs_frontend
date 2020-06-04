import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import api from '../services/api';

const INITIAL_VALUES = {
  aboutLink: '',
  productLink: '',
  contactLink: '',
  headerText: '',
  aboutText: '',
  products: [],
  sendButton: '',
  goBackButton: '',
  nameDescriptionForm: '',
  messageDescriptionForm: '',
  messagePlaceholderForm: '',
  cellphoneDescriptionForm: '',
  handleLanguageEN: Promise,
  handleLanguagePT: Promise,
};

const LanguageContext = createContext(INITIAL_VALUES);

function LanguageProvider({ children }) {
  const [aboutLink, setAboutLink] = useState('');
  const [productLink, setProductsLink] = useState('');
  const [contactLink, setContactLink] = useState('');

  const [headerText, setHeaderText] = useState('');
  const [aboutText, setAboutText] = useState('');
  const [products, setProducts] = useState([]);

  const [sendButton, setSendButton] = useState('');
  const [goBackButton, setGoBackButton] = useState('');

  const [nameDescriptionForm, setNameDescriptionForm] = useState('');
  const [cellphoneDescriptionForm, setCellphoneDescriptionForm] = useState('');
  const [messageDescriptionForm, setMessageDescriptionForm] = useState('');
  const [messagePlaceholderForm, setMessagePlaceholderForm] = useState('');

  // set all states
  const handleStates = useCallback((data) => {
    setAboutLink(data.about_link);
    setProductsLink(data.product_link);
    setContactLink(data.contact_link);

    setHeaderText(data.header_description);
    setAboutText(data.about_description);
    setProducts([...data.products]);

    setNameDescriptionForm(data.name_description_form);
    setCellphoneDescriptionForm(data.cellphone_description_form);
    setMessageDescriptionForm(data.message_description_form);
    setMessagePlaceholderForm(data.message_placeholder_form);

    setSendButton(data.send_button);
    setGoBackButton(data.go_back_button);
  }, []);

  // handle English Texts
  const handleLanguageEN = useCallback(async () => {
    const response = await api.get('/homepage-en');

    handleStates(response.data);
  }, [handleStates]);

  // handle Portuguese Texts
  const handleLanguagePT = useCallback(async () => {
    const response = await api.get('/homepage-pt');

    handleStates(response.data);
  }, [handleStates]);

  // when the page starts, this function is called
  useEffect(() => {
    handleLanguagePT();
  }, [handleLanguagePT]);

  return (
    <LanguageContext.Provider
      value={{
        aboutLink,
        productLink,
        contactLink,
        headerText,
        aboutText,
        products,
        sendButton,
        goBackButton,
        nameDescriptionForm,
        cellphoneDescriptionForm,
        messageDescriptionForm,
        messagePlaceholderForm,
        handleLanguagePT,
        handleLanguageEN,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}

LanguageProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};

export { LanguageProvider, useLanguage };
