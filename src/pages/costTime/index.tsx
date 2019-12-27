import React, { useState } from "react";
import "./index.scss";

function CostTimeCostTime(props: any) {
  console.log(props.count);
  function renderList() {
    const arr = [];
    for (let i = 0; i < 10000; i++) {
      arr.push(<li key={i}>{i}</li>);
    }
    return arr;
  }
  return (
    <ul>
      <h1>{props.finalValue}</h1>
      {renderList()}
    </ul>
  );
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
            return <CostTime {...props} finalValue={'我很快' + props.finalValue} />;
          }}
        />
      </div>
      <div>
        <CostTimeContainer
          render={(props: any) => {
            return <CostTimeCostTime {...props} finalValue={'我很慢' + props.finalValue} />;
          }}
        />
      </div>
    </div>
  );
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
