import React, { useEffect, useState } from 'react';

const QuoteDisplay = () => {
  const [quote, setQuote] = useState({
    loading: false,
    error: false,
    loadingData: [],
  });
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        setQuote((State) => ({ ...State, loading: true }));
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=family',
          {
            headers: {
              'X-Api-Key': 'iBbkx3sRtVSUUTVrcH90+A==li5LiENpC7ZgNO5z',
            },
          },
        );

        if (!res.ok) {
          throw new Error('Error Occurred...');
        }
        const result = await res.json();

        setQuote((State) => ({
          ...State,
          loadingData: result,
          loading: false,
        }));
      } catch (err) {
        setQuote((State) => ({ ...State, error: true, loading: false }));
      }
    };
    fetchQuotes();
  }, []);
  let content = '';
  if (quote.loading) content = 'Loading ...';
  if (quote.error) content = 'Error Occurred...';

  return (
    <>
      {quote.error ? (
        <p className="error">{content}</p>
      ) : (
        <div className="Container">
          <h2 className="Header">Quotes</h2>
          <p className="loading">{content}</p>
          {quote.loadingData.map((data) => (
            <div className="Text" key={data.id}>
              <h2>{`"${data.category}":`}</h2>
              <p>{`"${data.quote}" - ${data.author}`}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default QuoteDisplay;
