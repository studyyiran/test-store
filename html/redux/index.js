const {redux} = require('./redux')

const initState = {value: 0}

const reducer = (state, action) => {
  if (action) {
    const {type, value} = action
    switch (type) {
      case 'add':
        return {...state, value: state.value + value}
      default:
        return {...state}
    }
  }
}

const store = redux.createStore(initState, reducer)

/*
1. single souce of trueth
2. dispach and reducer

 */

const destory1 = store.onChange(() => {
  const nextState = store.getState();
  console.log(nextState)
})

const destory2 = store.onChange(() => {
  console.log('get it')
})

setInterval(() => {
  store.dispatch({
    type: 'add',
    value: 1,
  })
  const nextState = store.getState();
  if(nextState && nextState.value > 0) {
    destory2()
  }
}, 1000)
