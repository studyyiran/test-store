import React from "react";

export function TestReactDom() {
  // @ts-ignore
  console.log(Test());
  return <Test />;
}

function Test(props: any) {
  if (props && props.see) {
    return <div>123</div>;
  } else {
    return null;
  }
}

