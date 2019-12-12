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

const gateXOR2: ICommonInput = (inputA, inputB) => {
  if (inputA !== undefined && inputB !== undefined) {
    /*

     */
    const a = gateAnd(inputA, gateNot(inputB));
    const b = gateAnd(inputB, gateNot(inputA));
    return gateOr(a, b);
  } else {
    return FALSE;
  }
};

const gateXOR3: ICommonInput = (inputA, inputB) => {
  if (inputA !== undefined && inputB !== undefined) {
    /*

     */
    const a = gateAnd(inputA, gateNot(inputB));
    const b = gateAnd(inputB, gateNot(inputA));
    // return gateAnd(gateAnd(inputA, inputB), gateAnd(gateNot(inputA), gateNot(inputB)))
    // return gateAnd(gateNot(gateAnd(inputA, inputB)), gateNot(gateOr(inputA, inputB)))
    // 不是 2 or 3的情况 === !2 && !3
    return  gateAnd(gateNot(gateAnd(inputA, inputB)), gateOr(inputA, inputB))
    // 取反(是2 or 是3) === a 且b or !(a || b)
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

  function renderItem(valueA: number, valueB: number, valueResult: number) {
    return (
      <tr>
        <th>{valueA}</th>
        <th>{valueB}</th>
        <th>{valueResult}</th>
      </tr>
    );
  }
  function renderList(valueArr: number[], gateFunc: any, gateName: string) {
    const resultDomArr: any[] = [];
    valueArr.forEach((itemA, indexA) => {
      valueArr.forEach((itemB, indexB) => {
        resultDomArr.push(renderItem(itemA, itemB, gateFunc(itemA, itemB)));
      });
    });
    return (
      <div>
        <h3>{gateName}</h3>
        <table>
          <thead>
            <tr>
              <th>inputA</th>
              <th>inputB</th>
              <th>output</th>
            </tr>
          </thead>
          <tbody>{resultDomArr}</tbody>
        </table>
      </div>
    );
  }

  return (
    <div>
      <input value={valueA} onChange={handler.bind({}, setValueA)} />
      <input value={valueB} onChange={handler.bind({}, setValueB)} />
      <div>
        <h2>这个用于动态显示计算</h2>
        <div>result gateOr: {gateOr(valueA, valueB)}</div>
      </div>

      {renderList([0, 1], gateOr, "gateOr")}
      {renderList([0, 1], gateAnd, "gateAnd")}
      {renderList([0, 1], gateNAND, "gateNAND")}
      {renderList([0, 1], (a: number, b: number) => gateNot(gateOr(a, b)), "或非")}

      {renderList([0, 1], gateXOR, "gateXOR")}
      {/*<div>result gateXOR2: {gateXOR2(valueA, valueB)}</div>*/}
      {renderList([0, 1], gateXOR2, "gateXOR2")}


      {renderList([0, 1], gateXOR3, "gateXOR3")}
    </div>
  );
}

/*
实现了一个抽象的异或门.xOr
对抽象电路有了一点点的了解.
但是我没办法将昨天的内容使用20分钟复习法进行复习.因为那个非常业务逻辑.没有意义.

次日复习的时候,我进行了进一步的拓展,将他们做成了可以自己打印的.很爽.感觉接下来,我距离bool运算加法,并不远了.
 */
