import React, { useState } from "react";
import TestProps from "./components/test1";
import Test0 from "./components/test0";
import TestFunc from "./components/test0";

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  return (
    <>
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
      {/*<TestFunc />*/}
    </>
  );
}
