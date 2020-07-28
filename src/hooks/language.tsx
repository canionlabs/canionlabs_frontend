import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import api from '../services/api';

interface ProductItem {
  name: string;
  description: string;
  link: string;
}

interface ApiResponseData {
  about_link: string;
  product_link: string;
  contact_link: string;
  header_description: string;
  about_description: string;
  products: ProductItem[];
  send_button: string;
  go_back_button: string;
  name_description_form: string;
  message_description_form: string;
  message_placeholder_form: string;
  cellphone_description_form: string;
}

interface LanguageContextData extends ApiResponseData {
  handleLanguagePT(): Promise<void>;
  handleLanguageEN(): Promise<void>;
}

const LanguageContext = createContext<LanguageContextData>(
  {} as LanguageContextData,
);

const LanguageProvider: React.FC = ({ children }) => {
  const [about_link, setAboutLink] = useState('');
  const [product_link, setProductsLink] = useState('');
  const [contact_link, setContactLink] = useState('');

  const [header_description, setHeaderText] = useState('');
  const [about_description, setAboutText] = useState('');
  const [products, setProducts] = useState<ProductItem[]>([]);

  const [send_button, setSendButton] = useState('');
  const [go_back_button, setGoBackButton] = useState('');

  const [name_description_form, setNameDescriptionForm] = useState('');
  const [cellphone_description_form, setCellphoneDescriptionForm] = useState(
    '',
  );
  const [message_description_form, setMessageDescriptionForm] = useState('');
  const [message_placeholder_form, setMessagePlaceholderForm] = useState('');

  // set all states
  const handleStates = useCallback((data: ApiResponseData) => {
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
    const response = await api.get<ApiResponseData>('/homepage-en');

    handleStates(response.data);
  }, [handleStates]);

  // handle Portuguese Texts
  const handleLanguagePT = useCallback(async () => {
    const response = await api.get<ApiResponseData>('/homepage-pt');

    handleStates(response.data);
  }, [handleStates]);

  // when the page starts, this function is called
  useEffect(() => {
    handleLanguagePT();
  }, [handleLanguagePT]);

  return (
    <LanguageContext.Provider
      value={{
        about_link,
        product_link,
        contact_link,
        header_description,
        about_description,
        products,
        send_button,
        go_back_button,
        name_description_form,
        message_description_form,
        message_placeholder_form,
        cellphone_description_form,
        handleLanguagePT,
        handleLanguageEN,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

function useLanguage(): LanguageContextData {
  const context = useContext(LanguageContext);

  return context;
}

export { LanguageProvider, useLanguage };
