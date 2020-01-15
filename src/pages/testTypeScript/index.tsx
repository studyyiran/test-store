import React, { useEffect } from "react";
import { getTotalName } from "./util/miaowu";

export default function TestTs() {
  useEffect(() => {
    getTotalName({});
  }, []);

  return <div>log..ing...</div>;
}
