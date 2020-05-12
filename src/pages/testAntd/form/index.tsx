import {Form} from 'antd'
import React from 'react'


interface IComponent {

}

const TestFormComponent: React.FC<IComponent> = props => {
    const {} = props
    const onSumbitHandler = () => {}
    return <Form onSubmit={onSumbitHandler}>
        <Form.Item>
            <input/>
        </Form.Item>
    </Form>
}

export const TestForm = Form.create({})(TestFormComponent)

