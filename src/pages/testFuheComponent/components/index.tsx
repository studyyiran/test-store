import React, { useEffect, useRef, useState } from "react";

/*
提供isEdit注入

 */

interface IHehe {
    children: any;
    title: string;
}

/*
1.让内部组件,有isEdit状态.
2.让内部组件,可以使用已经写好的组件.

方案1
通过复合组件穿进去(配合cloneElement)
通过renderProps传入进去?
 */
export function UpdateFormLayout(props: IHehe) {
    const { title, children } = props;
    const [isEdit, setIsEdit] = useState(false);

    function onSubmitHandler() {
        console.log("123");
    }

    function renderChildren(children: any) {
        // 反射
        return React.Children.map(children, (child) => {
            console.log(child instanceof UpdateFormLayout.RenderButton)
            // 注入
            return React.cloneElement(child, {
                isEdit,
                setIsEdit
            });
            if (child.type instanceof UpdateFormLayout.RenderButton) {
                debugger
                // 如果有那啥 就注入进去
                // 这块为什么不能直接返还jsx?
                // 这个方法三个参数是什么含义
                return React.cloneElement(child, {
                    isEdit,
                    setIsEdit
                });
            } else {
                return child
            }
        });
    }
    // 遇到一个问题.children如何获取这个注入的值???
    // 获取不了.children默认被注入state.
    // 深层次的内容自己使用context解决
    return (
        <div>
            <h2>{title}</h2>
            {renderChildren(children)}
        </div>
    );
}

UpdateFormLayout.RenderButton = function RenderButton(props: any) {
    const { isEdit, setIsEdit, children } = props;
    if (isEdit) {
        return (
            <div
                onClick={() => {
                    setIsEdit(false);
                }}
            >
                Update{children}
            </div>
        );
    } else {
        return (
            <div
                onClick={() => {
                    setIsEdit(true);
                }}
            >
                Edit
            </div>
        );
    }
};
