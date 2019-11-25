import React from "react";
import { Form, Input } from "antd";

export const FormWithAsyncValidComponent = Form.create({})(FormWithAsyncValid);

function FormWithAsyncValid(props: any) {
  const { form } = props;
  const { getFieldDecorator, setFields, validateFields } = form;
  const configArr = [
    {
      id: "email",
      label: "email",
      validateTrigger: "onBlur",
      render: () => {
        return <Input />;
      },
      rules: [
        {
          required: true,
          message: "hehe",
          type: "email"
        }
      ]
    },
    {
      id: "phone",
      label: "phone",
      render: () => {
        return <Input />;
      },
      rules: [
        {
          type: 'number',
          required: true,
          message: 'enen'
        },
        {
          validator: (rules: any, values: any, callback: any) => {
            console.log(values);
            if (values) {
              callback();
            } else {
              callback("empty?");
            }
          }
        }
      ]
    },
    {
      render: () => {
        return <button>on submit</button>;
      }
    }
  ];

  function onSubmitHandler(e: any) {
    e.preventDefault();
    validateFields(null, {firstFields: 'phone'}, (errors: any, values: any) => {
      if (!errors) {
        console.log(values);
        alert('success')
      }
    });
  }

  return (
    <Form onSubmit={onSubmitHandler}>
      {configArr.map(({ label, id, render, ...other }: any) => {
        if (id) {
          return (
            <Form.Item label={label}>
              {getFieldDecorator(id, { ...other })(render())}
            </Form.Item>
          );
        } else {
          return render();
        }
      })}
    </Form>
  );
}
