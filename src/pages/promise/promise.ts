const wait= (time: number) => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (time > 1999) {
        reject(time)
      } else {
        resolve(time)
      }
    }, time)
  })
}


export const start = async () => {
  const a = await wait(1000);
  console.log('a' + a)
  const b = await wait(2000);
  console.log('b' + b)
  const c = await wait(1000);
  console.log('c' + c)
}