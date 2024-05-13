import React, { useState, createContext, useEffect } from "react";


export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
 
  const [mode,setMode]=useState(false);
  


  

  

  return (
    <AccountContext.Provider
      value={{
        mode,setMode
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;