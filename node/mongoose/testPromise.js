const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve(123)
  } else {
    reject(456)
  }
})

const Model = {
  save: (callback) => {
    if (callback) {
      promise.then(() => {
        callback()
      })
    } else {
      return promise
    }
  }
}