const wait= (time: number) => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (time > 199) {
        reject(time)
      } else {
        resolve(time)
      }
    }, time)
  })
}


export const start = async () => {
  const a = await wait(101);
  console.log('a' + a)
  const b = await wait(102);
  console.log('b' + b)
  const c = await wait(103);
  console.log('c' + c)
  return c
}