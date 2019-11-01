import React, { useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";
export default function TestProps(props: { outCount: number; children: any }) {
  const initState = {
    localCount: 0
  };
  const localHistory = useHistory();
  function reducer(state: any, action: any) {
    logProps("reducer");
    return { ...state };
  }
  function logProps(name: string) {
    console.log(name);
    console.log(props);
  }
  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    const id = window.setInterval(() => {
      logProps("useEffect");
      dispatch({
        type: "addCount",
        value: props.outCount
      });
    }, 1000);
    return () => {
      window.clearInterval(id);
    };
  }, []);
  useEffect(() => {
    console.log("get it?");
  }, [props]);
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
