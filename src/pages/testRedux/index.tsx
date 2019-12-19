import React from "react";
export default function () {
    return <div>123</div>
}

// // import React from "react";
// // // eslint-disable-next-line @typescript-eslint/no-unused-vars
// // import { createStore, combineReducers, applyMiddleware } from "redux";
// //
// // function reducer(state: any, actions: any) {
// //   return { ...state };
// // }
// //
// // const store = createStore(reducer, applyMiddleware(logger));
// //
// //
// //
// // // applyMiddleware(logger)(createStore)(reducer, preloadState)
// //
// // const { dispatch, getState, subscribe } = store;
// //
// // subscribe(() => {
// //   console.log(getState());
// // });
// //
// // function logger({ getState }: any) {
// //   return (next: any) => (action: any) => {
// //     console.log("will dispatch", action);
// //
// //     // Call the next dispatch method in the middleware chain.
// //     const returnValue = next(action);
// //
// //     console.log("state after dispatch", getState());
// //
// //     // This will likely be the action itself, unless
// //     // a middleware further in chain changed it.
// //     return returnValue;
// //   };
// // }
// //
// // export default function TestRedux() {
// //   return (
// //     <div
// //       onClick={() => {
// //         dispatch({
// //           type: "hehe",
// //           value: 1
// //         });
// //       }}
// //     >
// //       click me
// //     </div>
// //   );
// // }
//
// import React from "react";
// import { applyMiddleware, createStore } from "redux";
//
// function reducer(state: any, action: any) {
//   console.log(action);
//   console.log(state);
//   return { ...state };
// }
// const store = createStore(reducer, { a: "abc" }, applyMiddleware(logger));
//
// function logger(reducer: any) {
//   return () => (state: any, action: any) => {
//     //
//     console.log("hello");
//     console.log("state is" + state);
//     console.log("action is" + action);
//     const nextState = reducer(state, action);
//     return nextState;
//   };
// }
//
// const { dispatch, getState, subscribe } = store;
//
// store.subscribe(() => {
//   console.log(getState());
// });
//
// export default function() {
//   return (
//     <div
//       onClick={() => {
//         dispatch({
//           type: "hello",
//           value: "world"
//         });
//       }}
//     >
//       123
//     </div>
//   );
// }
//
// function myapplayMiddlerWare(...middlewares) {
//     return (createStore) => {
//         return (reducer, preState) => {
//             // 先获取当前的store
//             const store = createStore(reducer, preState)
//             const {getState, dispatch} = store
//             // 那么这样第一层,就填充好了
//             arr = middlerArr.map((item) => {
//                 return item({getState})
//             })
//
//             // 包裹调用arr
//             const superDispatch = compose(arr, dispatch)
//             /*
//             这层每一步,都注入了一个dispatch(至少第一步如此)
//             logger(dispatch)
//
//             然后获得了一个新的dispatch
//              */
//
//
//             return {
//                 newSiapatch// 并且最终返回了
//             }
//         }
//
//     }
//
//
// }
//
// createStore(a, b ,c)
//
// // 三层颗粒化
// (arr)(createStore)(action, state)
//
//
//
// // cstore内部实现
// function cStore(a, b, c) {
//     if(a) {
//         realDispatch = c(createStore)(a, b)
//     }
//     return {
//         dispatch: realDispatch
//     }
// }
//
// // 我来试着反推下
// /*
// 第一波,传入的是一个store的getState方法,那么就是讲store对象穿进去了.怎么做到的呢
//
//
// 最后一波,传入的是一个action,就像dispatch一样.
//  */