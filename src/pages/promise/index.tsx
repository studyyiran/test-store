import React, { useEffect } from "react";
import { start } from "./promise";

export default function() {
  useEffect(() => {
  }, []);

  return <div onClick={start}>123</div>;
}
