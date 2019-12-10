import React, { useState } from "react";
import { Input, Form, Button } from "antd";
const { Item } = Form;

const RenderForm: any = Form.create({})(RenderFormInner);

/*
一盒黑盒子
 */
export function GateBox(props: any) {
  const { enterArr, logicFunc, children, setBoolOutput } = props;
  function getResult(result: any) {
    const answer = Object.keys(result)
      .map((item: any) => {
        const haha = Boolean(Number(result[item]));
        return haha;
      })
      .reduce(logicFunc);
    setBoolOutput(answer);
    return answer;
  }
  return (
    <>
      <RenderForm
        onChange={(result: any) => {
          console.log(getResult(result));
        }}
      >
        {children}
      </RenderForm>
    </>
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
带有逻辑单元的电路
 */

export function XORGATEBOX() {
  const [boolOutput, setBoolOutput] = useState("");
  function orLogic(a: any, b: any) {
    if (a === true) {
      return 1;
    }
    if (b === true) {
      return 1;
    }
    return 0
  }
  function hehe() {}
  return (
    <>
      <GateBox
        logicFunc={orLogic}
        setBoolOutput={(value: any) => {
          setBoolOutput(value);
        }}
      >
        <Enter id={"h1"} />
        <Enter id={"h2"} />
      </GateBox>
      <Output value={boolOutput} />
    </>
  );
}
/*

最基本的输入
 */
export function Enter(props: any) {
  console.log('hehehehe')
  console.log(props)
  return <Input id={"o1"} data-type="input" {...props} />;
}

/*

最基本的输出
 */
export function Output(props: any) {
  return <Input data-type="output" {...props} />;
}
