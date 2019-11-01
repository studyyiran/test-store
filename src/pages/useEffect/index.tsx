import React, { useState } from "react";
import TestProps from "./components/test1";

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  return (
    <TestProps outCount={count}>
      <div
        onClick={() => {
          setCount(c => {
            return c + 1;
          });
        }}
      >
        add out count
      </div>
    </TestProps>
  );
}
