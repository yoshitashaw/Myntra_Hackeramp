import React, { createContext, useState } from "react";

export const DesignContext = createContext();

export const DesignProvider = ({ children }) => {
  const [designs, setDesigns] = useState([]);

  const addDesign = (design) => {
    setDesigns((prevDesigns) => [...prevDesigns, design]);
  };

  return (
    <DesignContext.Provider value={{ designs, addDesign }}>
      {children}
    </DesignContext.Provider>
  );
};
