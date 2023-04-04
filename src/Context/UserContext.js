import React, { useState } from "react";
import { createContext } from "react";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUserName] = useState("");

  return (
    <UserContext.Provider value={{ username, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
