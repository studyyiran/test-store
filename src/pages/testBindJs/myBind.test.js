import something from './myBind'

const a = function(...other) {
  console.log(this && this.name);
  return [this.name].concat(other);
};

it("me", () => {
  const obj = {
    name: "haha"
  };
  const second = 2
  const result = a.myBind(obj)(second)
  expect(result[0]).toBe(obj.name);
  expect(result[1]).toBe(second);

  const newObj = {
    name: 'newObj'
  }
  const result2 = new a.myBind(obj)
  expect(result[0]).toBe(newObj.name);
  expect(result[1]).toBe(second);
});

//
// it("lucas", () => {
//   const obj = {
//     name: "haha"
//   };
//   const second = 2
//   const result = a.lucasBind(obj)(second)
//   expect(result[0]).toBe(obj.name);
//   expect(result[1]).toBe(second);
// });
