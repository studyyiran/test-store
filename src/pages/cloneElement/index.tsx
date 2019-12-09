import React, { useEffect, useRef } from "react";

export default function CloneElement() {
  const eleRef = useRef(null);
  function render1() {
    return <div>123</div>;
  }

  function render2() {
    // 1 2 肯定没有区别
  }

  function render3(jsx: any) {
    // clone似乎对ref有效果.
    return React.cloneElement(jsx, { style: { color: "green" } });
  }

  return (
    <div>
      <button
        onClick={() => {
          console.log(eleRef);
          // @ts-ignore
          eleRef && eleRef.current && eleRef.current.helloRender1 && eleRef.current.helloRender1();
        }}
      >
        onClick
      </button>
      {/*<Render2>*/}
      {/*  <Render1 ref={eleRef} />*/}
      {/*</Render2>*/}
      <Render3>
        <Render1 ref={eleRef} />
      </Render3>
    </div>
  );
}

class Render1 extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "Rneder 1 name"
    };
  }
  private helloRender1() {
    console.log((this.state as any).name);
  }
  render() {
    return React.createElement("div", {
      children: "123123",
      style: { color: "red" }
    });
  }
}

class Render2 extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "Rneder 2 name"
    };
  }
  render() {
    // @ts-ignore
    return React.createElement(this.props.children.type, {
      children: this.props.children,
      style: { color: "red" }
    });
  }
}

class Render3 extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    // @ts-ignore
    return React.cloneElement(this.props.children, {
      children: "456",
      style: { color: "green" }
    });
  }
}

/*
cloneElement 他传入一个element 返回一个element.
但是他可以保留ref引用.

createElement 他传入一个 elementType 返回一个jsx 但是他的ref引用显然会丢失

jsx语法和createElement一样.但是他并不是复制元素最好的方式

在antd中没有使用createElement但是大量使用了cloneElement.往往是在复写一些属性的时候
 */