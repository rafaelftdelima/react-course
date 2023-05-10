import React from 'react';

const Product = ({ product_name }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (product_name !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${product_name}`).then(
        (res) => res.json()
      ).then(
        (json) => setData(json)
      ).catch(
        setData(null)
      );
  }, [product_name]);

  if (data === null)
    return null;
  
  return (
    <div>
      <h2>{data.nome}</h2>
      <p>{data.preco}</p>
    </div>
  );
};

export default Product;
