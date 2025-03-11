import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({children}) {
  const [state, setState] = useState(""); // Define some initial state

  return (
     <GlobalContext.Provider value={{state}}>{children}</GlobalContext.Provider>
  );
};
