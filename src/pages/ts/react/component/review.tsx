import React from "react";


interface IProps {
    log: string,
}

const TestTsReact : React.FC<IProps> = (props) => {
    return <div>
        {props.children}
    </div>
}

export default function () {
    return <TestTsReact log="hello world">
        <div>123</div>
    </TestTsReact>
}