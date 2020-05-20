const redux = {}

redux.applyMiddlerWare = (...arg) => {
  // next的最后，要扔给dispatch。
  // 我无论吸收多少，我需要返回一个reducer
  // 不。我需要返回一个触发器
  return (store, dispatch) => {
    let trigger = (action) => {
      dispatch(action)
    }
    arg.forEach((m) => {
      // run = m1(store, () => m2(store, () => m3(store, store.dispatch)))
      trigger = function (store) {
        m(store, trigger)
      }
    })

    return (action) => {
      trigger(action)
    }
  }
}

redux.createStore = (initState, reducer, enhancer) => {

  let currentState = initState
  let arr = []
  const store = {

  }
  store.getState = function () {
    return currentState
  }
  store.dispatch = function (somethingNext) {
    currentState = reducer(currentState, somethingNext)
    arr.forEach((func) => {
      func()
    })
  }
  if (enhancer) {
    store.dispatch = enhancer(store, store.dispatch)
  }
  store.onChange = function (callBackWhenChange) {
    arr.push(callBackWhenChange)
    return function () {
      console.log('run')
      const targetIndex = arr.findIndex((targetFunc) => {
        return targetFunc === callBackWhenChange
      })
      console.log(targetIndex)
      if (targetIndex !== -1) {
        console.log(arr)
        arr = [...arr.slice(0, targetIndex), ...arr.slice(targetIndex + 1)]
        console.log(arr)
      }
    }
  }
  return store
}

module.exports = {redux}