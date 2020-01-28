import React, { useEffect } from "react";
import { start } from "./promise";

export default function() {
  useEffect( () => {
    start().then((e) => {
      console.log(e)
    }).catch((e) => {
      console.error(e)
    })
  }, []);

  return <div>123</div>;
}
