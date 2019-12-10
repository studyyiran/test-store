import React, { useEffect, useState } from "react";
import { Input, Form, Button } from "antd";
const { Item } = Form;

const RenderForm: any = Form.create({})(RenderFormInner);

/*

 */
export function GateBox(props: any) {
  const { logicFunc, children, getAnswerCallBack } = props;
  function getResult(result: any) {
    const arr = Object.keys(result).map((item: any) => {
      return Boolean(Number(result[item]));
    });
    return arr.reduce(logicFunc, arr[0]);
  }
  return (
    <RenderForm
      onChange={(result: any) => {
        const answer = getResult(result);
        // console.log(answer)
        getAnswerCallBack && getAnswerCallBack(answer);
      }}
      {...props}
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
    window.setTimeout(() => {
      const result = getFieldsValue();
      console.log(result);
      onChange(result);
    }, 0);

    // validateFields((errors: any, values: any) => {
    //   if (errors) {
    //   } else {
    //     //
    //   }
    // });
  }
  return (
    <Form onChange={onSubmitHandler}>
      {/*<Item>{getFieldDecorator("hehe", {})(<Input />)}</Item>*/}
      {/*{mapInner()}*/}
      <MapInner getFieldDecorator={getFieldDecorator} {...props}>
        {children}
      </MapInner>
    </Form>
  );
}

function MapInner(props: any) {
  const { children, getFieldDecorator } = props;
  const arr: any[] = [];

  React.Children.forEach(children, child => {
    if (child.props.id) {
      const dom = getFieldDecorator(child.props.id, {
        initialValue: child.props["data-value"],
        rules: [{ required: true }]
      })(<Input {...child.props} />);
      arr.push(<Item>{dom}</Item>);
    } else {
      arr.push(child);
    }
  });
  return arr as any;
}

/*
带有逻辑单元的
 */

function OrGate(props: any) {
  const { id = "" } = props;
  const [boolOutput, setBoolOutput] = useState(123);
  function orLogic(a: any, b: any) {
    if (a === true) {
      return 1;
    }
    if (b === true) {
      return 1;
    }
    return 0;
  }

  return [
    <GateBox
      logicFunc={orLogic}
      getAnswerCallBack={(value: any) => {
        // console.log(value)
        setBoolOutput(value);
      }}
    >
      <Enter id={"h1"} />
      <Enter id={"h2"} />
    </GateBox>,
    <div>
      {id}:{boolOutput}
    </div>,
    Output({ id: id, boolOutput: props.boolOutput || boolOutput })
  ] as any;
}

function AndGate(props: any) {
  const { id = "" } = props;
  const [boolOutput, setBoolOutput] = useState(123);
  function orLogic(a: any, b: any) {
    if (a && b) {
      return 1;
    } else {
      return 0;
    }
  }

  return [
    <GateBox
      logicFunc={orLogic}
      getAnswerCallBack={(value: any) => {
        // console.log(value)
        setBoolOutput(value);
      }}
    >
      <Enter id={"h1"} />
      <Enter id={"h2"} />
    </GateBox>,
    <div>
      {id}:{boolOutput}
    </div>,
    Output({ id: id, boolOutput: props.boolOutput || boolOutput })
  ] as any;
}

function NotGate(props: any) {
  const { id = "" } = props;
  const [boolOutput, setBoolOutput] = useState(123);
  function orLogic(a: any) {
    if (a === true) {
      return 0;
    } else {
      return 1;
    }
  }

  return [
    <GateBox
      logicFunc={orLogic}
      getAnswerCallBack={(value: any) => {
        // console.log(value)
        setBoolOutput(value);
      }}
    >
      <Enter id={"e1"} />
    </GateBox>,
    <div>
      {id}:{boolOutput}
    </div>,
    Output({ id: id, boolOutput: props.boolOutput || boolOutput })
  ] as any;
}

export default function XOR(props: any) {
  const { id = "XOR" } = props;
  const [boolOutput, setBoolOutput] = useState(456);
  function orLogic(a: any, b: any) {
    if (a === true) {
      return 0;
    } else {
      return 1;
    }
  }
  // @ts-ignore
  return [
    <GateBox
      logicFunc={orLogic}
      getAnswerCallBack={(value: any) => {
        // console.log(value)
        setBoolOutput(value);
      }}
    >
      {AndGate({ id: "and" })}
      {/*{NotGate({ id: "not" })}*/}
      {/*{OrGate("or")}*/}
    </GateBox>,
    <div>
      {id}: {boolOutput}
    </div>,
    Output({ id: "good", boolOutput })
  ];
}
/*

最基本的输入
 */
export function Enter(props: any) {
  return <Input {...props} />;
}

/*

最基本的输出
 */
export function Output(props: any) {
  return <Input {...props} data-value={props.boolOutput} disabled={true} />;
}
