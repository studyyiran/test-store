import React from "react";
import { Input, Form } from "antd";
const { Item } = Form;

const RenderForm: any = Form.create({})(RenderFormInner);

/*
一盒黑盒子
 */
export function GateBox(props: any) {
  const { enterArr, logicFunc, children } = props;
  function getResult() {
    const result = enterArr.reduce((a: any, b: any) => logicFunc);
    console.log(result);
    return result ? "true" : "false";
  }

  return (
    <RenderForm
      onChange={(result: any) => {
        console.log(result);
      }}
    >
      {children}
    </RenderForm>
  );
}

function RenderFormInner(props: any) {
  const { form, children, onChange } = props;
  const { getFieldDecorator } = form;

  function mapInner() {
    const arr = [];
    return React.Children.forEach(children, child => {
      arr.push(
        getFieldDecorator(child.props.id, {})(() => {
          return <Item>{child}</Item>;
        })
      );
    });
    return arr as any;
  }
  return <Form onChange={onChange}>{mapInner()}</Form>;
}

/*
最基本的电路输入
 */
export function Enter(props: any) {
  return <Input {...props} />;
}

/*
带有逻辑单元的电路
 */

export function XORGATEBOX() {
  function orLogic(a: any, b: any) {
    if (a === true) {
      return true;
    }
    if (b === true) {
      return true;
    }
  }
  return (
    <div>
      <GateBox logicFunc={orLogic}>
        <Enter id={1} />
        <Enter id={2} />
      </GateBox>
    </div>
  );
}
