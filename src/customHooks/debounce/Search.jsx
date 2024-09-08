import React, { useState } from "react";
import useDebounce from "../utils/useDebounce";

const Search = () => {
  const [search, setSearch] = useState("");
  const debounceValue = useDebounce(search, 2000);
  return (
    <>
      <h1>4. useDebounce</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <br />
      <h3>Normal Search: {search}</h3>
      <h3>Debounce Search: {debounceValue}</h3>
    </>
  );
};

export default Search;
