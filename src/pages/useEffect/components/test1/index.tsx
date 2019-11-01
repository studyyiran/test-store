import React, {useEffect, useReducer} from "react";
export default function TestProps(props: { outCount: number }) {
    const initState = {
        localCount: 0;
    }
    function reducer(state: any, action: any) {
        return {...state}
    }
    const [state, dispatch] = useReducer(reducer, initState)
    console.log(state)
    console.log(state)
    useEffect(() => {

    })
}
