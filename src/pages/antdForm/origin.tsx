import React from "react";
import ReactDom from "react-dom";
import { Form, Input, Button } from "antd";

function AntdForm(props: any) {
    const { form } = props;
    const { getFieldDecorator, validateFields } = form;
    function onSubmit(e: any) {
        console.log(e);
        e.preventDefault();
        validateFields((error: any, values: any) => {
            console.log(error);
            console.log(values);
        });
    }
    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Form.Item>
                    {getFieldDecorator("one", {
                        rules: [
                            {
                                type: 'number',
                                required: true,
                                validator: (rules:any, values:any, callback:any) => {
                                    console.log(rules)
                                    console.log(values)
                                    console.log(callback)
                                    window.setTimeout(() => {
                                        callback([new Error(values)])
                                    },Number(values))
                                }
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        submit123
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export const AntdFormTest = Form.create()(AntdForm);
// export const AntdFormTest = () => {
//   return React.cloneElement(<AntdForm />, {
//     form: {
//       getFieldDecorator: (name: string, options: any) => {
//         return function decorate(jsx: any) {
//           return jsx;
//         };
//       },
//       validateFields: (func: any) => {
//         func(1, 2);
//       }
//     }
//   });
// };
// export function AntdFormTest() {
//   return <div>123</div>;
// }
