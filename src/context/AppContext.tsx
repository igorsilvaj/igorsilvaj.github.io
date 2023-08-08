"use client";

import React, { createContext, useMemo, useState } from "react";

export const AppContext = createContext({
  toggleContact: false,
  setToggleContact: (b: boolean) => {},
});

interface Props {
  children: React.JSX.Element | React.JSX.Element[];
}

export default function AppContextProvider({ children }: Props) {
  const [toggleContact, setToggleContact] = useState(false);

  const contextValue = useMemo(
    () => ({
      toggleContact,
      setToggleContact,
    }),
    [toggleContact]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
