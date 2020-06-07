
function newSsrData() {
    // 你为啥不写 this = {...this} 呢？
    const storeList = []
    let ssrTitle = ''
    
    const obj = {
        
    }
    obj.addData = function (key, value) {
        storeList.push({
            storeName: key,
            storeData: value,
        })
        return this
    }
    obj.addTitle = function (title) {
        ssrTitle = title
        return this
    }
    obj.getSsrData = function () {
        return storeList
    }
    obj.getTitle = function () {
        return ssrTitle
    }
    console.log('new')
    return obj
    // return this会怎么样？
}

const s1 = new newSsrData();
s1.addData('a', 'is a').addData('b', 'is b').addTitle('haha')
console.log(s1)
console.log(s1.getSsrData())
console.log(s1.getTitle())
const s2 = new newSsrData();
s2.addTitle('duide1')
console.log(s2.getTitle())

const redux = {
    createStore: function (reducer, initState) {
        let _list = []
        let state = initState
        const store = {

        }
        store.addListener = function (callback) {
            if (callback) {
                _list.push(callback)
            }
            return () => {
                const targetIndex = _list.findIndex((f) => {
                    return f === callback
                })
                if (targetIndex !== -1) {
                    _list = [..._list.slice(0, targetIndex), ..._list.slice(targetIndex + 1)]
                }
            }
        }
        store.dispatch = function (action) {
            state = reducer(state, action)
            _list.forEach((f) => {
                f && f()
            })
        }
        store.getState = function () {
            return state
        }
        return store
    },
}

function reducer(state, action) {
    return {...state, count: state.count + 1}
}

const initState = {
    count: 100
}
const store = redux.createStore(reducer, initState);
const destory = store.addListener(() => {
    console.log(store.getState())
})
store.dispatch({
    type: 'add',
    value: 1,
})

store.dispatch({
    type: 'add',
    value: 1,
})

destory()