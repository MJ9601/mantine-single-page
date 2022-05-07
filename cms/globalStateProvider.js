import { createContext, useReducer, useContext } from "react";

export const GlobalContext = createContext();

export const StateProvider = ({ reducer, initState, children }) => (
  <GlobalContext.Provider value={useReducer(reducer, initState)}>
    {children}
  </GlobalContext.Provider>
);

export const useGlobalState = () => useContext(GlobalContext);
