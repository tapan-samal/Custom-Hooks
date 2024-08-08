import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response not ok!");
      }
      const result = await response.json();
      setData(result.slice(0, 5));
      setloading(false);
    } catch (error) {
      setError(error.message);
      setloading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [url]);

  return [data, loading, error];
};

export default useFetch;
