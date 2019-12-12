import React, { createContext, useEffect, useState } from "react";

export const StoreTestNameContext = createContext({});

// store name
export const StoreTestName = "StoreTestName";
// store state
interface IStoreTestNameState {
  testValue: number;
}

// store provider
export function StoreTestNameContextProvider(props: any) {
  const [value, setValue] = useState(0);
  // useEffect(() => {
  //   window.setInterval(() => {
  //     setValue(Date.now());
  //   }, 1000);
  // }, []);
  return (
    <StoreTestNameContext.Provider
      value={{
        timeNow: value,
        addValue: () => {
          setValue(value => value + 1);
        }
      }}
      {...props}
    />
  );
}
