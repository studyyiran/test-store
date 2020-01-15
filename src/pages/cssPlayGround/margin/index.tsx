import React from "react";
import './index.scss';

export function Margin1() {
    function getWidth(e: any) {
        console.log(e.target.clientWidth)
    }
    return <div className="margin">
        <div className="test-margin-container" onClick={getWidth}>
            {/*margin水平方向*/}
            <img src={require('../../../res/test.png')}/>
            <p className="test-margin">当为标准block 并且没有设定 width的时候 通过设置margin-left 会影响容器的宽度</p>
        </div>
        <ul>
            <li></li>
            <li></li>
        </ul>
    </div>
}