import React, { useEffect, useState } from "react";

export function TestKey2() {
  const [step, setStep] = useState(false);
  useEffect(() => {
    window.setTimeout(() => {
      setStep(!step);
    }, 1000);
  }, [step]);
  const props = {
      key: 'hehe'
  }
  if (step) {
      return <div>
          <input key="1" />
          <input />
          <C1 key="haha" />
          <div {...props}>
              <input key="hehe"/>
              <span>3</span>

          </div>

      </div>
  } else {
      return <div>
          <input key="2" />
          <C1 key="haha" />
          <input />
          <C2 />
          <input />
          <div {...props}>
            <span>3 newlife</span>
            <input key="hehe"/>
          </div>
      </div>
  }
}

/*
简单来看的话。
key是对于相同dom节点作为父组件的情况下（不同dom节点下无效）
相同type（如果是不同的组件，就算设置key也会被直接更新掉）

key会将元素的状态强行保存。
或者通过设置key将元素强行更新
 */

function C1() {
    useEffect(() => {
        return () => {
            console.log('c1 finish')
        }
    }, [])
    return <div>c1</div>
}

function C2() {
    useEffect(() => {
        return () => {
            console.log('c2 finish')
        }
    }, [])
    return <div>c2</div>
}
