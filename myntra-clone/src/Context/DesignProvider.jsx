import React, { createContext, useState, useEffect } from "react";

export const DesignContext = createContext();

export const DesignProvider = ({ children }) => {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    const storedDesigns = JSON.parse(localStorage.getItem("designs")) || [];
    setDesigns(storedDesigns);
  }, []);

  const addDesign = (newDesign) => {
    const updatedDesigns = [...designs, newDesign];
    setDesigns(updatedDesigns);
    localStorage.setItem("designs", JSON.stringify(updatedDesigns));
  };

  return (
    <DesignContext.Provider value={{ designs, addDesign }}>
      {children}
    </DesignContext.Provider>
  );
};
