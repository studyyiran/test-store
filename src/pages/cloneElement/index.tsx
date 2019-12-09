import React from "react";

export default function CloneElement() {
    function render1() {
        return <div>123</div>
    }

    function render2() {
        return React.createElement('div', {children: '123', style: {color: 'red'}})
    }
    return <div>
        {render1()}
        {render2()}
    </div>
}