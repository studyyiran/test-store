import React, { useState } from "react";

export default function CostTimeContainer() {
  const [count, setCount] = useState(0);
  function handler() {
      console.log('handler')
    setCount(count => count + 1);
  }
  return (
    <div>
      <div onClick={handler}>add</div>
      <input onChange={handler} />
      <CostTime count={count} />
    </div>
  );
}

function CostTime(props: any) {
  console.log(props.count);
  function renderList() {
    const arr = [];
    for (let i = 0; i < 10000; i++) {
      arr.push(<li key={i}>{i}</li>);
    }
    return arr;
  }
  return <ul>{renderList()}</ul>;
}
