import React from "react";
import useFetch from "../utils/useFetch";

const Fetch1 = () => {
  const [data, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Error: {error}</h3>;
  }

  return (
    <>
    <h1>2. useFetch</h1>
      <h2>Fetch Data 1:</h2>
      {data.map((elem) => (
        <div key={elem.id}>
          {elem.id} {""}
          {elem.name}
        </div>
      ))}
    </>
  );
};

export default Fetch1;
