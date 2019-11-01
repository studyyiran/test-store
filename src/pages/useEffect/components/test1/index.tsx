import React, { useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";
export default function TestProps(props: { outCount: number; children: any }) {
  const initState = {
    localCount: 0
  };
  const localHistory = useHistory();
  function reducer(state: any, action: any) {
    console.log(props.outCount);
    console.log(action);
    return { ...state };
  }
  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    const id = window.setInterval(() => {
      dispatch({
        type: "addCount",
        value: props.outCount
      });
    }, 1000);
    return () => {
      window.clearInterval(id);
    };
  }, [props.outCount]);
  return (
    <div>
      {props.outCount}
      <div>{props.children}</div>
      <a
        onClick={() => {
          localHistory.push("/b");
        }}
      >
        router
      </a>
    </div>
  );
}
