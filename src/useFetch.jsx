import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let json;

    try {
      setError(null);
      setLoading(true);

      json = await (await fetch(url, options)).json();
    } catch (err) {
      json = null;

      setError('Error');
    } finally {
      setData(json);
      setLoading(false);

      return json;
    }
  }, []);

  return {data, error, loading, request};
};

export default useFetch;
