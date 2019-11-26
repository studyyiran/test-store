import something from './myBind'

function hehe(obj) {
  const a = function() {
    console.log(this && this.name);
    return this.name;
  };
  const b = a.myBind(obj);
  return b
}

it("", () => {
  const obj = {
    name: "haha"
  };
  expect(hehe(obj)()).toBe(obj.name);
});
