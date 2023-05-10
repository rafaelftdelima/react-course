import React from 'react';

import Product from './Product';

const App = () => {
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    const preferencial_product = localStorage.getItem('preferencial_product');

    if (preferencial_product)
      setProduct(preferencial_product);
  }, []);

  React.useEffect(() => {
    if (product !== null)
      localStorage.setItem('preferencial_product', product);
  }, [product]);

  const handleClick = ({ target }) => {
    const product_name = target.innerText.toLowerCase();

    setProduct(product_name);
  };

  return (
    <div>
      <h1>Preferência</h1>
      <button onClick={handleClick} style={{marginRight: '1rem'}}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>

      <Product product_name={product} />
    </div>
  );
};

export default App;
