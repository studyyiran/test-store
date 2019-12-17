import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createStore, combineReducers, applyMiddleware } from "redux";

function reducer(state: any, actions: any) {
  return { ...state };
}

const store = createStore(reducer, applyMiddleware(logger));



// applyMiddleware(logger)(createStore)(reducer, preloadState)

const { dispatch, getState, subscribe } = store;

subscribe(() => {
  console.log(getState());
});

function logger({ getState }: any) {
  return (next: any) => (action: any) => {
    console.log("will dispatch", action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log("state after dispatch", getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

export default function TestRedux() {
  return (
    <div
      onClick={() => {
        dispatch({
          type: "hehe",
          value: 1
        });
      }}
    >
      click me
    </div>
  );
}
