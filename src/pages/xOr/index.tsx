import React, { useState } from "react";
import { Input, Form, Button } from "antd";
const { Item } = Form;

const RenderForm: any = Form.create({})(RenderFormInner);

/*
一盒黑盒子
 */
export function GateBox(props: any) {
  const [boolOutput, setBoolOutput] = useState("");
  const { enterArr, logicFunc, children } = props;
  function getResult(result: any) {
    const answer = Object.keys(result)
      .map((item: any) => {
        const haha = Boolean(Number(result[item]));
        return haha;
      })
      .reduce(logicFunc)
      ? "true"
      : "false";
    setBoolOutput(answer);
    return answer;
  }
  console.log(boolOutput);
  return (
    <div>
      <RenderForm
        onChange={(result: any) => {
          console.log(getResult(result));
        }}
      >
        {children}
      </RenderForm>
      <span>answer is {boolOutput}</span>
    </div>
  );
}

function RenderFormInner(props: any) {
  const { form, children, onChange } = props;
  const { getFieldDecorator, getFieldsValue, validateFields } = form;

  function onSubmitHandler(e: any) {
    e.preventDefault();
    const result = getFieldsValue();
    validateFields((errors: any, values: any) => {
      if (errors) {
      } else {
        onChange(values);
      }
    });
  }
  return (
    <Form onSubmit={onSubmitHandler} onChange={onSubmitHandler}>
      {/*<Item>{getFieldDecorator("hehe", {})(<Input />)}</Item>*/}
      {/*{mapInner()}*/}
      <MapInner getFieldDecorator={getFieldDecorator}>{children}</MapInner>
    </Form>
  );
}

function MapInner(props: any) {
  const { children, getFieldDecorator } = props;
  const arr: any[] = [];
  function InnerCom(props: any) {
    return <Input {...props} />;
    // return React.cloneElement(child);
  }

  React.Children.forEach(children, child => {
    const dom = getFieldDecorator(child.props.id, {
      rules: [{ required: true }]
    })(<InnerCom></InnerCom>);
    arr.push(<Item>{dom}</Item>);
  });
  return arr as any;
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
        <Enter id={"h1"} />
        <Enter id={"h2"} />
      </GateBox>
    </div>
  );
}