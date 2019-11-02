import React, { useEffect, useState } from "react";

export default function TestPage() {
  const [number, setNumber] = useState(0);
  const a = [1, 2, 3];
  const b = [1];
  const sum = a.reduce((t, s) => {
    console.log("--");
    console.log(t);
    console.log(s);
    return t + s;
  });
  useEffect(() => {
    setNumber(sum);
  }, [sum]);
  console.log(sum);

  return <div>test page{number}</div>;
}
