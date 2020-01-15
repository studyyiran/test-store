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
  (info: IName): string;
}
export const getTotalName: IGetTotalName = ({
  firstName = "firstName",
  lastName = "lastName"
}) => {
  return firstName + lastName;
};

getTotalName({});

