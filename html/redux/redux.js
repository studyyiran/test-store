const redux = {}

redux.createStore = (initState, reducer) => {
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