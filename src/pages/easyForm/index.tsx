import React from "react";
import { Form, Button, Input } from "antd";
const { Item } = Form;

const EasyFormReview = Form.create({})(FormInnerWrapper);
export default EasyFormReview
function FormInnerWrapper(props: any) {
  const config = [
    {
      id: "i1",
      rules: [
        {
          required: true
        }
      ]
    }
  ];
  return (
    <FormInner {...props}>
      {config.map(item => {
        return <Input {...item} />;
      })}
    </FormInner>
  );
}

function FormInner(props: any) {
  const { form, children } = props;
  const { getFieldDecorator, getFieldValue } = form;
  function onSubmitHandler(e: any) {
    e.preventDefault();
    const values = getFieldValue();
    console.log(values);
  }
  return (
    <Form onSubmit={onSubmitHandler}>
      {ChildrenToDomArr(children, getFieldDecorator)}
      <Button htmlType="submit">submit</Button>
    </Form>
  );
}

function ChildrenToDomArr(children: any, getFieldDecorator: any) {
  const arr: any[] = [];
  // 反射
  React.Children.forEach(children, child => {
    const { id, rules } = child.props;
    arr.push(
      <Item>
        {getFieldDecorator(id, {
          rules
        })(React.cloneElement(child))}
      </Item>
    );
  });
  return arr;
}
