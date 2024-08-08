import React from "react";
import useFetch from "../utils/useFetch";

const Fetch2 = () => {
  const [data, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h2>Error: {error}</h2>;
  }
  return (
    <>
      <h2>Fetch Data 2:</h2>
      {data.map((elem) => (
        <div key={elem.id}>
          {elem.id} {elem.title}
        </div>
      ))}
    </>
  );
};

export default Fetch2;
