import React, { useCallback, useState } from "react";

export default function() {
  const [count, setCount] = useState();
  function test() {
    console.log(count);
  }
  const a = useCallback(() => {
    return test();
  }, []);
  return (
    <div>
      <div
        onClick={() => {
          a();
        }}
      >
        button 1
      </div>
      <div
        onClick={() => {
          a();
        }}
      >
        button 2
      </div>
      <div>{count}</div>
    </div>
  );
}
