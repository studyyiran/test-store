import React from "react";
import { Form, Button, Input } from "antd";
const { Item } = Form;

const EasyFormReview = Form.create({})(FormInnerWrapper);
export default EasyFormReview;
function FormInnerWrapper(props: any) {
  const config = [
    {
      id: "i1",
      validateTrigger: 'onBlur',
      rules: [
        {
          required: true
        }
      ]
    },
    {
      id: "i2",
      validateTrigger: 'onBlur',
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
        return <Input key={item.id} {...item} />;
      })}
    </FormInner>
  );
}

function FormInner(props: any) {
  const { form, children } = props;
  const { getFieldDecorator, getFieldsValue, validateFields } = form;
  function onSubmitHandler(e: any) {
    e.preventDefault();
    const values = getFieldsValue();
    validateFields((errors: any, values: any) => {
      if (!errors) {
        console.log(values);
      } else {
        console.error(errors)
      }
    });
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
    const { id, ...other } = child.props;
    if (id) {
      arr.push(
        <Item key={id}>
          {getFieldDecorator(id, { ...other })(React.cloneElement(child))}
        </Item>
      );
    }
  });
  return arr;
}
