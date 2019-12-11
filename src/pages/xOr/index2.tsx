import React, { useState } from "react";
import { Form } from "antd";
const { Item } = Form;

interface ICommonInput {
  (inputA?: number, inputB?: number): number;
}

const TRUE = 1;
const FALSE = 0;

const gateOr: ICommonInput = (inputA, inputB) => {
  if (inputA !== undefined && inputB !== undefined) {
    return inputA || inputB;
  } else {
    return FALSE;
  }
};

const gateAnd: ICommonInput = (inputA, inputB) => {
  if (inputA !== undefined && inputB !== undefined) {
    return inputA && inputB;
  } else {
    return FALSE;
  }
};

const gateNot: ICommonInput = inputA => {
  if (inputA !== undefined) {
    if (inputA) {
      return FALSE;
    } else {
      return TRUE;
    }
  } else {
    return FALSE;
  }
};

const gateNAND: ICommonInput = (inputA, inputB) => {
  if (inputA !== undefined && inputB !== undefined) {
    return gateNot(gateAnd(inputA, inputB));
  } else {
    return FALSE;
  }
};

const gateXOR: ICommonInput = (inputA, inputB) => {
  if (inputA !== undefined && inputB !== undefined) {
    const a = gateOr(inputA, inputB);
    const b = gateNAND(inputA, inputB);
    console.log(a);
    console.log(b);
    return gateAnd(a, b);
  } else {
    return FALSE;
  }
};

export default function() {
  const [valueA, setValueA] = useState(undefined);
  const [valueB, setValueB] = useState(undefined);
  function handler(func: any, e: any) {
    console.log(e.currentTarget.value);
    if (e.currentTarget.value) {
      func(1);
    } else {
      func(0);
    }
  }
  return (
    <div>
      <input value={valueA} onChange={handler.bind({}, setValueA)} />
      <input value={valueB} onChange={handler.bind({}, setValueB)} />
      <div>result gateOr: {gateOr(valueA, valueB)}</div>
      <div>result gateXOR: {gateXOR(valueA, valueB)}</div>
    </div>
  );
}

/*
实现了一个抽象的异或门.xOr
对抽象电路有了一点点的了解.
但是我没办法将昨天的内容使用20分钟复习法进行复习.因为那个非常业务逻辑.没有意义.
 */