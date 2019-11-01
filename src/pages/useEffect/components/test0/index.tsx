import React, { useEffect, useState } from "react";
export default function TestFunc() {
  const [count, setCount] = useState(0);
  const handler = () => {
    console.log(count);
    window.setTimeout(() => {
      console.log(count);
    }, 3000);
  };
  // useEffect(() => {
  //   window.setTimeout(() => {
  //     console.log(count);
  //   }, 3000);
  // }, [count]);
  document.title = `you click ${count} time`;

  return (
    <div>
      <div
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
        }}
      >
        {" "}
        {count}click add count
      </div>
      <div onClick={handler}>click to log count</div>
    </div>
  );
}
