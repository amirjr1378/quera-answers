import { createContext, useContext, useState } from "react";

const context = createContext();

const mockFn = () => {};

export const createGlobalState = (instructions) => {
  const ContextProvider = ({ children }) => {
    const findNonFunctionalKey = () => {
      return Object.entries(instructions(mockFn)).find(([, value]) => {
        return typeof value !== "function";
      })?.[0];
    };

    const [state, setState] = useState(() => {
      return instructions(mockFn)[findNonFunctionalKey()];
    });

    return (
      <context.Provider
        value={{ ...instructions(setState), [findNonFunctionalKey()]: state }}
      >
        {children}
      </context.Provider>
    );
  };

  return [ContextProvider, () => useContext(context)];
};
