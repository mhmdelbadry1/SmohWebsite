import React, { createContext, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial direction and language based on current language
    const updateDocumentAttributes = (language) => {
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
      
      // Add specific classes for styling
      if (language === 'ar') {
        document.documentElement.classList.add('arabic');
        document.documentElement.classList.remove('english');
      } else {
        document.documentElement.classList.add('english');
        document.documentElement.classList.remove('arabic');
      }
    };

    // Update on initial load
    updateDocumentAttributes(i18n.language);

    // Listen for language changes
    const handleLanguageChange = (lng) => {
      updateDocumentAttributes(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={{ toggleLanguage, currentLanguage: i18n.language }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
