import React from 'react';

const Input = ({
  id,
  label,
  type,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} value={value} placeholder={placeholder} onChange={onChange} onBlur={onBlur} />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
