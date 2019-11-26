import React, { useEffect, useState } from "react";
import { FormWithAsyncValidComponent } from "./formWithAsyncValid";

export function AntdFormTest() {
  const [bool, setBool] = useState(false);
  useEffect(() => {
    window.setInterval(() => {
      setBool((value: boolean) => {
        return !value;
      });
    }, 1000);
  }, []);
  const time = Date.now();
  return <FormWithAsyncValidComponent time={time} />;
}
