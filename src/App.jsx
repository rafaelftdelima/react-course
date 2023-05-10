import React from 'react';

const formFields = [
  {
    value: 'azul',
    label: 'Azul',
  },
  {
    value: 'vermelho',
    label: 'Vermelho',
  },
  {
    value: 'verde',
    label: 'Verde',
  },
  {
    value: 'amarelo',
    label: 'Amarelo',
  },
  {
    value: 'roxo',
    label: 'Roxo',
  },
];

const App = () => {
  const [colors, setColors] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setColors([ ...colors, target.value ]);
    } else {
      setColors(colors.filter((color) => color !== target.value));
    }
  }

  function handleChecked(color) {
    return colors.includes(color);
  }

  return (
    <>
      <form>
        {formFields.map(({ value, label }) => (
          <label key={value}>
            <input type="checkbox" value={value} checked={handleChecked(value)} onChange={handleChange} />
            {label}
          </label>
        ))}
      </form>
      <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
