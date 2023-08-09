"use client";

import React, { createContext, useMemo, useState } from "react";

export const AppContext = createContext({
  toggleContact: false,
  setToggleContact: (b: boolean) => {},
  activeFilter: "Todos", 
  setActiveFilter: (b: string) => {},
});

interface Props {
  children: React.JSX.Element | React.JSX.Element[];
}

export default function AppContextProvider({ children }: Props) {
  const [toggleContact, setToggleContact] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Todos");

  const contextValue = useMemo(
    () => ({
      toggleContact,
      setToggleContact,
      activeFilter, 
      setActiveFilter
    }),
    [toggleContact, activeFilter]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
