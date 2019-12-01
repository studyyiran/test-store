import { StoreTestNameContextProvider } from "../context/context";
import React from "react";

export function ShareComponent(props: any) {
  const { children } = props;

  return (
    <StoreTestNameContextProvider>{children}</StoreTestNameContextProvider>
  );
}
