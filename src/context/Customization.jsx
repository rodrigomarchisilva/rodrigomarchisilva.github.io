import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const CustomizationContext = createContext();

export const CustomizationProvider = ({ children }) => {
  const [customization, setCustomization] = useState({
    theme: localStorage.getItem('theme') || 'light',
    language: localStorage.getItem('language') || 'pt-BR',
  });

  return (
    <CustomizationContext.Provider
      value={ { customization, setCustomization } }
    >
      { children }
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  if (!context) { throw new Error('useGlobal must be used within a GlobalProvider'); }
  return context;
};

CustomizationProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;