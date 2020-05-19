
const getPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve(true)
    } else {
      reject(false)
    }
  }, 1000)

})



const arr = [

  {
    func: () => {
      return getPromise()
    }
  },
  {
    func: () => {
      return getPromise()
    }
  },
  {
    func: () => {
      return getPromise()
    }
  },
  {
    func: () => {
      getPromise()
    }
  },
  {
    func: async() => {
      console.log('s1')
      getPromise()
      getPromise()
      getPromise()
      getPromise()
      getPromise()
      console.log('s2')
      await getPromise()
      // 他会执行，但是返回值似乎仍然是undufined
    }
  },
  {
    func: async() => {
      return await getPromise()
    }
  },
  {
    func: async() => {
      console.log('start last')
      var rr = await getPromise()
      console.log(rr)
      return rr
    }
  },
]

const test = async() => {
  console.log('start')
  for (let i = 0; i < arr.length; i++) {
    try {
      // 我觉得await就是promiseill 他是一个包装，将里面的东西强行包装一层promise对象
      const answer = await arr[i].func();
      console.log(i + `:` + answer)
    } catch (e) {
      console.error(i+ `:` +  e)
    }
  }
  console.log('end')
}
test()


let t1
let t2
let t3
const p1 = step(100).then((v) => {
  t1 = v
  step(100 + t1)
})