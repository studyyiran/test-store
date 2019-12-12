import React, { useEffect } from "react";
import { log } from "./util";

export default function TestTs() {
  useEffect(() => {
    log(123);
  }, []);

  return <div>log..ing...</div>;
}
