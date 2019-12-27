import React, { useEffect, useState } from "react";
import "./index.scss";

function CostTimeCostTime(props: any) {
  console.log(props.count);

  return (
    <ul>
      <h1>{props.finalValue}</h1>
      <RenderList max={10000} />
    </ul>
  );
}

function RenderList({ max }: any): any {
  const arr = [];
  for (let i = 0; i < max; i++) {
    arr.push(<li key={i}>{i}</li>);
  }
  return arr;
}

// const CostTime = React.memo(CostTimeCostTime, () => false)
const CostTime = React.memo(CostTimeCostTime, (prevProps, nextProps) => {
  if (prevProps.finalValue !== nextProps.finalValue) {
    return false;
  } else {
    return true;
  }
});

export default function() {
  return (
    <div className="cost-time-container">
      <div>
        <CostTimeContainer
          render={(props: any) => {
            return (
              <CostTime {...props} finalValue={"我很快" + props.finalValue} />
            );
          }}
        />
      </div>
      <div>
        <CostTimeContainer
          render={(props: any) => {
            return (
              <CostTimeCostTime
                {...props}
                finalValue={"我很慢" + props.finalValue}
              />
            );
          }}
        />
      </div>
      <div>
        <ComponentA
          render={(value: any) => {
            return (
              <div>
                <input />
                {value}
                <RenderList max={100000} />
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}

function ComponentA(props: any) {
  const [value, setValue] = useState(0);
  // useEffect(() => {
  //   window.setInterval(() => {
  //     setValue(i => i + 1);
  //   }, 1);
  // }, []);
  return <div>{props.render(value)}</div>;
}

function CostTimeContainer(props: any) {
  const [value, setValue] = useState(0);
  const [finalValue, setFinalValue] = useState(0);
  function onInputHandler(e: any) {
    setValue(e.target.value);
  }
  function onClickHandler(e: any) {
    setFinalValue(value);
    // setValue(e.target.value);
  }
  return (
    <div>
      <input onInput={onInputHandler} />
      <button onClick={onClickHandler}>提交</button>
      {props.render({ value, finalValue })}
    </div>
  );
}
