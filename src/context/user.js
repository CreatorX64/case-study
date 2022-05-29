import { useState, useContext, createContext } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const exposedState = {
    user,
    setUser
  };

  return (
    <UserContext.Provider value={exposedState}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      "useUserContext() must be called inside UserContextProvider"
    );
  }

  return context;
};
