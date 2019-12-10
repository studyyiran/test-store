import React, { useMemo } from "react";

export default function TestUseMemo2() {
  const a = useMemo(() => {
    return {
      a: "a"
    };
  }, []);
  return a.a;
}
