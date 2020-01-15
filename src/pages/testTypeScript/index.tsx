import React, { useEffect } from "react";
import { getTotalName } from "./util/miaowu";

export default function TestTs() {
  useEffect(() => {}, []);
  const result = getTotalName({
    firstName: 'yiran'
  }, '1', 2, 3, 'adfadf');
  return <div>{result}</div>;
}
