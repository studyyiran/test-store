import React, { useEffect, useState } from "react";
import { Input, Form, Button } from "antd";
const { Item } = Form;

const RenderForm: any = Form.create({})(RenderFormInner);

/*

 */
export function GateBox(props: any) {
  const { enterArr, logicFunc, children, getAnswerCallBack } = props;
  function getResult(result: any) {
    const answer = Object.keys(result)
      .map((item: any) => {
        const haha = Boolean(Number(result[item]));
        return haha;
      })
      .reduce(logicFunc);
    return answer;
  }
  return (
    <RenderForm
      onChange={(result: any) => {
        // const answer = getResult(result);
        // getAnswerCallBack && getAnswerCallBack(answer);
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
    validateFields((errors: any, values: any) => {
      if (errors) {
      } else {
        // onChange(values);
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
    console.log(child);
    if (child.props.id) {
      console.log(child.props);
      console.log(child.props["data-value"]);
      const dom = getFieldDecorator(child.props.id, {
        initialValue: child.props["data-value"],
        rules: [{ required: true }]
      })(<InnerCom></InnerCom>);
      arr.push(<Item>{dom}</Item>);
    } else {
      console.log(child);
      arr.push(child);
    }
  });
  return arr as any;
}

/*
带有逻辑单元的
 */

function OrGate() {
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
  useEffect(() => {
    window.setInterval(() => {
      setBoolOutput(count => count + 1);
    }, 1000);
  }, []);
  return [
    <GateBox
      logicFunc={orLogic}
      getAnswerCallBack={(value: any) => {
          debugger
        setBoolOutput(value);
      }}
    >
      <Enter id={"h1"} />
      <Enter id={"h2"} />
    </GateBox>,
    <div>hehe:{boolOutput}</div>,
    <Input data-value={boolOutput} id={"or"} />
  ] as any;
}

export default function A() {
  const [boolOutput, setBoolOutput] = useState("");
  function orLogic(a: any, b: any) {
    if (a === true) {
      return 1;
    }
    if (b === true) {
      return 1;
    }
    return 0;
  }
  return (
    <GateBox
      logicFunc={orLogic}
      getAnswerCallBack={(value: any) => {
        setBoolOutput(value);
      }}
    >
      {OrGate()}
    </GateBox>
  );

  // @ts-ignore
  return [
    <GateBox
      logicFunc={orLogic}
      setBoolOutput={(value: any) => {
        setBoolOutput(value);
      }}
    >
      {/*<OrGate />*/}
      {OrGate()}
    </GateBox>,
    <Input value={boolOutput} id={"good"} />
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
  return <Input {...props} />;
}
