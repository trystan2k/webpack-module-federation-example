import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const storedData = JSON.parse(sessionStorage.getItem("authState")) || {
    isAuthenticated: false,
    token: '',
    user: '',
    email: '',
    role: '',
    firstName: '',
    lastName: ''
  };
  const [authState,setAuthState] = useState(storedData);

  useEffect(() => {
    sessionStorage.setItem("authState", JSON.stringify(authState));
  }, [authState]);

  return (
    <AuthContext.Provider value={{ authState,setAuthState }}>
      {props.children}
    </AuthContext.Provider>
  );
};
