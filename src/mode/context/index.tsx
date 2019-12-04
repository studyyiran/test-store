import React, {
  createContext,
  useReducer,
  useCallback,
  useRef,
  useEffect
} from "react";
import { getTestAjaxResult } from "../server";

interface IReducerAction {
  type: string;
  value?: any;
}

export const StoreTestNameContext = createContext({});

// store name
export const StoreTestName = "StoreTestName";
// store state
interface IStoreTestNameState {
  testValue: number;
}

// interface
export interface IStoreTestNameContext extends IStoreTestNameActions {
  storeTestNameContextValue: IStoreTestNameState;
  storeTestNameContextDispatch: (action: IReducerAction) => void;
}

// store provider
export function StoreTestNameContextProvider(props: any) {
  const initState: IStoreTestNameState = {
    testValue: 123
  };
  const [state, dispatch] = useReducer(reducer, initState);
  const action: IStoreTestNameActions = useGetAction(state, dispatch);

  // @useEffect
  useEffect(() => {
    action.getTestAjaxValue();
  }, [action, action.getTestAjaxValue]);

  const propsValue: IStoreTestNameContext = {
    ...action,
    storeTestNameContextValue: state,
    storeTestNameContextDispatch: dispatch
  };
  return <StoreTestNameContext.Provider value={propsValue} {...props} />;
}

// @actions
export interface IStoreTestNameActions {
  getTestAjaxValue: () => any;
}

// useCreateActions
function useGetAction(
  state: IStoreTestNameState,
  dispatch: (action: IReducerAction) => void
): IStoreTestNameActions {
  // 新增promise refW
  const promiseStatus: any = useRef();
  if (!promiseStatus.current) {
    promiseStatus.current = {};
  }
  const actions: IStoreTestNameActions = {
    getTestAjaxValue: useCallback(() => {
      getTestAjaxResult({ test: state.testValue });
    }, [state.testValue])
  };
  return actions;
}

// action types
export const storeTestNameReducerTypes = {
  setTestValue: "setTestValue"
};

// reducer
function reducer(state: IStoreTestNameState, action: IReducerAction) {
  const { type, value } = action;
  let newState = { ...state };
  switch (type) {
    case storeTestNameReducerTypes.setTestValue: {
      newState = {
        ...newState,
        testValue: value
      };
      break;
    }
    default:
      newState = { ...newState };
  }
  return newState;
}

function useHaha() {

}