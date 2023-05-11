import React from 'react';

const types = {
  cep: {
    rule: /^\d{5}-?\d{3}$/,
    message: 'Preencha um CEP válido',
  },
  email: {
    rule: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um e-mail válido',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false)
      return true;

    if (value.length === 0) {
      setError('Preencha um valor');

      return false;
    }
    
    if (types[type] && !types[type].rule.test(value)) {
      setError(types[type].message);

      return false;
    }

    setError(null);
    return true;
  }

  function onChange({ target }) {
    if (error)
      validate(target.value);
    
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
