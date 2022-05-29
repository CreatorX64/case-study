import { useState, useContext, useEffect, createContext } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) ?? null
  );
  const [locale, setLocale] = useState(
    JSON.parse(localStorage.getItem("locale")) ?? "en"
  );

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  // Sync state with Local Storage. We wouldn't include sensitive info here
  // in prod, plus we wouldn't verify whether a user is logged in by *just*
  // checking Local Storage. We would probably verify a token through our
  // auth API & store that in Local Storage. This is just to make your job
  // easier & to prevent re-logging everytime you refresh the page.
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    localStorage.setItem("locale", JSON.stringify(locale));
  }, [locale]);

  const exposedState = {
    user,
    locale,
    setUser,
    setLocale,
    logout
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
