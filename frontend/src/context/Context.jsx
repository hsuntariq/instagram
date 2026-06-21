import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showPostModal, setShowPostModal] = useState(false);
  return (
    <AppContext.Provider value={{ showPostModal, setShowPostModal }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(AppContext);
};
