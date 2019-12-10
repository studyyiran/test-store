import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState
} from "react";
export const TestUseMemoContext = React.createContext({});

function useActions(count: any, setCount: any) {
  const addCount = useCallback(() => {
    setCount((c: any) => c + 1);
  }, [setCount]);
  return {
    addCount
  };
}
interface IContextValue {
  count: number;
  randomValue: number;
  test: string;
  actions: any;
  dispatch: any;
  state: {
    test1: any;
    test2: string;
  };
}
function reducer(state: any, actions: any) {
  const { type, value } = actions;
  switch (type) {
    case "add":
      return { ...state, test2: state.test2 + value };
      break;
    case "add2":
      return { ...state, test1: { value: state.test1.value + value } };
      break;
  }
  return { ...state };
}
export function TestUseMemoContextProvider(props: any) {
  const [count, setCount] = useState(1);
  const [test, setTest] = useState("hello world");
  const [state, dispatch] = useReducer(reducer, {
    test1: {
      value: "test11111"
    },
    test2: "test2"
  });
  const randomValue = useMemo(() => {
    return count * Math.random();
  }, [count]);
  const actions = useActions(count, setCount);

  const value: IContextValue = {
    state,
    test,
    count,
    dispatch,
    randomValue: randomValue,
    actions
  };
  return (
    <TestUseMemoContext.Provider value={value}>
      {props.children}
    </TestUseMemoContext.Provider>
  );
}

export function TestUseMemo2() {
  const testUseMemoContext = useContext(TestUseMemoContext);
  const { actions } = testUseMemoContext as IContextValue;
  useEffect(() => {
    console.log(actions.addCount);
  }, [actions.addCount]);
  return <div onClick={actions.addCount}>add</div>;
}

export function TestUseMemo() {
  const testUseMemoContext = useContext(TestUseMemoContext);
  const {
    count,
    randomValue,
    actions,
    state,
    test,
    dispatch
  } = testUseMemoContext as IContextValue;

  useEffect(() => {
    console.log(dispatch);
  }, [dispatch]);

  useEffect(() => {
    console.log(test);
  }, [test]);

  useEffect(() => {
    console.log(randomValue);
  }, [randomValue]);

  useEffect(() => {
    console.log(state.test2);
  }, [state.test2]);

  useEffect(() => {
    console.log(state.test1.value);
  }, [state.test1]);
  return (
    <div>
      <div>
        <span>count is </span>
        <TestUseMemo2 />
        {count}
      </div>
      <div>
        <span>child value is </span>
        {randomValue}
      </div>
      <div>
        <span
          onClick={() => {
            dispatch({
              type: "add2",
              value: "bbb"
            });
          }}
        >
          test value is
        </span>
        {state.test2}
      </div>
      {state.test1.value}
    </div>
  );
}

/*
这个Demo  并不是验证useMemo  他验证了这种写法的可行性.useReducer虽然每次都是全新的值,但是很神奇的是,它能够有稳定的依赖关系.
这里面的原理我真的不知道.完全不知道.我也暂时不想知道.

所以我依然搞不懂,什么时候context里面的value,值的我加上useMemo,来解决什么问题
 */
