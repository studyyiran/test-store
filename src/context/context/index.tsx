import React, { createContext } from "react";

export const StoreTestNameContext = createContext({});

// store name
export const StoreTestName = "StoreTestName";
// store state
interface IStoreTestNameState {
  testValue: number;
}

// store provider
export function StoreTestNameContextProvider(props: any) {
    const state = {
        hehe: 'haha'
    }
  return <StoreTestNameContext.Provider value={state} {...props} />;
}
