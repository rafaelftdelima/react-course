import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/').then(
      (res) => res.json()
    ).then(
      (json) => setProducts(json)
    );
  }, []);

  function clearProducts() {
    setProducts(null);
  }

  return (
    <GlobalContext.Provider value={{ products, clearProducts }} >
      {children}
    </GlobalContext.Provider>
  );
};
