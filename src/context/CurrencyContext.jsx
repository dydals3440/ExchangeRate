import React, { createContext, useState } from 'react';

export const CurrencyContext = createContext();

function CurrencyProvider({ children }) {
  const [fromCurrency, setFromCurrency] = useState('🇶🇦 QAR - Qatar');
  const [toCurrency, setToCurrency] = useState('🇧🇴 BOB - Bolivia');
  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
  };
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export default CurrencyProvider;
