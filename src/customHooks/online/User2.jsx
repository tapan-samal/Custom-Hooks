import React from "react";
import useOnline from "../utils/useOnline";

const User2 = () => {
  useOnline();
  return (
    <>
      <h2>User 2: {useOnline() ? "Online 🟢" : "Offline 🔴"}</h2>
    </>
  );
};

export default User2;
