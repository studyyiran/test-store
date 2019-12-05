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
    test2: string;
  };
}
function reducer(state: any, actions: any) {
  return { ...state };
}
export function TestUseMemoContextProvider(props: any) {
  const [count, setCount] = useState(1);
  const [test, setTest] = useState("hello world");
  const [state, dispatch] = useReducer(reducer, { test2: "test2" });
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
  return <div>{randomValue}</div>;
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
  }, [randomValue, state.test2]);
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
      aaaa
      <div>{state.test2}</div>
      bbbb
    </div>
  );
}

/*
现在有个问题就是 useState 配合context 是不变的
而useReducer就有这个问题  他和reducer一样.每次都是全新的.这就恶心了?这个问题的根源是在哪里呢.这会带来大量的reReder.
这个有空在完整测试一下.然后这个问题就解决了.我就可以继续写了
 */