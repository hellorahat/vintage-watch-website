import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../../firebase.js";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        setUser(null);
        return;
      }

      if (!currentUser.emailVerified) return;

      const name = currentUser.email.split("@")[0]; // Extracts the part before @
      setUser({
        ...currentUser,
        name: name,
      });
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
