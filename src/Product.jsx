import React from 'react';

import { GlobalContext } from './GlobalContext';

const Product = () => {
  const global = React.useContext(GlobalContext);

  if (global.products === null)
    return null;
  
  return (
    <ul>
      {global.products.map((product) => (
        <li key={product.id}>{product.nome}</li>
      ))}
    </ul>
  );
};

export default Product;
