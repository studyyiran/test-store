function fun1(s: string): number | void {}

const fun2 = (s: string) => {};

const fun2p: (a: string, b: string) => string = (a, b) => {
  return "123";
};

// 设置
interface IFunc2 {
  (s: string): string;
}

interface IName {
  firstName?: string;
  lastName?: string;
}

// 可选参数
interface IGetTotalName {
  (info: IName, ...arg: any[]): string;
}
// ts函数对于可选参数有包容性.也就是,如果额外的参数是可选的话,他不会被轻易约束
export const getTotalName: IGetTotalName = (
  { firstName = "firstName", lastName = "lastName" },
  ...arg
) => {
  const hehe = arg.join("");
  return hehe + firstName + lastName;
};

getTotalName({});
