import React from "react";
import { Input, Form, Button } from "antd";
const { Item } = Form;

const RenderForm: any = Form.create({})(RenderFormInner);

/*
一盒黑盒子
 */
export function GateBox(props: any) {
  const { enterArr, logicFunc, children } = props;
  // function getResult() {
  //   const result = enterArr.reduce((a: any, b: any) => logicFunc);
  //   console.log(result);
  //   return result ? "true" : "false";
  // }

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
  const { getFieldDecorator, getFieldsValue, validateFields } = form;

  function onSubmitHandler(e: any) {
    e.preventDefault();
    const result = getFieldsValue();
    console.log(result);
    validateFields((errors: any, values: any) => {
      console.log(errors);
      console.log(values);
      if (errors) {
      } else {
        onChange(values);
      }
    });
    console.log(e);
  }
  return (
    <Form onSubmit={onSubmitHandler}>
      {/*<Item>{getFieldDecorator("hehe", {})(<Input />)}</Item>*/}
      {/*{mapInner()}*/}
      <MapInner getFieldDecorator={getFieldDecorator}>{children}</MapInner>
      <Button htmlType="submit">post</Button>
    </Form>
  );
}

function MapInner(props: any) {
  const { children, getFieldDecorator } = props;
  const arr: any[] = [];
  React.Children.forEach(children, child => {
    function InnerCom() {
      return <Input />;
      // return React.cloneElement(child);
    }
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
