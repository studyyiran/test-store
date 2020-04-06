import React, {useReducer} from 'react'

export const TestHook = () => {
    const jsx = useReducerComponent()
    return <div>{jsx}</div>
}

function reducer (state: any, change: any) {
    const {type, value} = change
    switch (type) {
        case 'add':
            state.a = state.a + value
            return {...state}
    }
    return state
}

function useReducerComponent () {
    const [state, dispatch] = useReducer(reducer, {a: 123})
    return <p onClick={() => {
        dispatch({
            type: 'add',
            value: 1
        })
    }}>{state.a}</p>
}