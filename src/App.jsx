import React from 'react';

const App = () => {
  const [cart, setCart] = React.useState(0);
  const [notification, setNotification] = React.useState(null);
  const timeoutRef = React.useRef();

  const handleClick = () => {
    setCart(cart + 1);
    setNotification('Item adicionado ao carrinho');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  return (
    <div>
      <p>{notification}</p>
      <button onClick={handleClick}>Adicionar novo item ao carrinho</button>
      <p>Número de itens: {cart}</p>
    </div>
  );
};

export default App;
