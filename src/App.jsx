import React from 'react';

import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';

const App = () => {
  const [product, setProduct] = useLocalStorage('produto', '');
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const json = await request(
        `https://ranekapi.origamid.dev/json/api/produto/`
      );

      console.log(json);
    }

    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduct(target.innerText.toLowerCase());
  }

  if (error)
    return <p>{error}</p>;
  
  if (loading)
    return <p>Carregando...</p>;

  if (data)
    return (
      <div>
        <p>Produto preferido: {product}</p>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>Smartphone</button>

        {data.map((product) => (
          <div key={product.id}>
            <h1>{product.nome}</h1>
          </div>
        ))}
      </div>
    );
  else
    return null;
};

export default App;
