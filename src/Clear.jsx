import React from 'react';
import { GlobalContext } from './GlobalContext';

const Clear = () => {
  const { clearProducts } = React.useContext(GlobalContext);

  return <button onClick={clearProducts}>Limpar</button>
};

export default Clear;
