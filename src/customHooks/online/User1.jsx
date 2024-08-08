import React from "react";
import useOnline from "../utils/useOnline";

const User1 = () => {
  useOnline();
  return (
    <>
      <h2>User 1: {useOnline() ? "Online 🟢" : "Offline 🔴"}</h2>
    </>
  );
};

export default User1;
