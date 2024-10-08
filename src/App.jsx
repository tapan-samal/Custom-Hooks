import React from "react";
import Addition from "./customHooks/counter/Addition";
import Subtraction from "./customHooks/counter/Subtraction";
import Fetch1 from "./customHooks/fetchApi/Fetch1";
import Fetch2 from "./customHooks/fetchApi/Fetch2";
import User1 from "./customHooks/online/User1";
import User2 from "./customHooks/online/User2";
import Search from "./customHooks/debounce/Search";

const App = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <Addition />
      <Subtraction />
      <Fetch1 />
      <Fetch2 />
      <User1 />
      <User2 />
      <Search />
    </div>
  );
};

export default App;
