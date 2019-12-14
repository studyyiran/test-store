interface Person {
  firstName: string;
  lastName: string;
  ageArr?: number[];
}

export function test(person: Person) {
  const { firstName, lastName, ageArr } = person;
  if (ageArr) {
    ageArr.forEach(() => {});
  }

  return person.firstName + person.lastName;
}

test({
  firstName: "sun",
  lastName: "yiran",
  ageArr: [18, 16]
});

interface IHaha {
  (hehe: { content: string }): number;
}

const haha: IHaha = props => {
  console.log(props.content);
  return Number(props.content);
};
haha({ content: "123123123" });
// Argument of type "value" is not asignable to parameter of

function add(x: number, y: number) {
  return x + y;
}

/*
(aNumber: number, bNumber: number) => string
这是一个类型值  他赋值给了 myAdd 他必须是填充完整.

function(x: number, y: number) : number
这是一个类似的类型值 他赋值给了 这个函数
这种写法可以随意.

不管在哪里定义,我发现都是括号后面,跟上返回值.

 */

let a = 1;
let b = 2;
function testHaha(): any {
  console.log("123");
}

/*
实际上这两种是一致的.
第二种,是教会我,这种箭头函数,能够表达函数的定义方法(这种表达必须写完整)
而function的定义过程中(无论是function的形式还是() =>的形式)都是可以自由定义的.也就是可以不写返回值
 */
let myTest = function(a: string, b: string): any {
  return a + b;
};

let myAdd: (aNumber: number, bNumber: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};

let myAddWithOutType = (): number => {
  return a + b;
};

/*
ts是按照形状来的.不能多.不能少.
ts遵循按照传入值 传出值 作为左右值来进行比较.
ts也可以用接口来描述函数.不过似乎只能用来描述箭头函数

 */

/*
复习函数
 */

function fa(content: string) {
  console.log(content);
}

function fb(content: string): null {
  console.log(content);
  return null;
}

/*
这个例子说明，函数返回值，都是以：的形式，添加在括号之后的
 */
function fc(content: number): () => number {
  console.log(content);
  return () => {
    return content;
  };
}

const ffa = () => {
  return 123;
};

const ffb = (content: string): string => {
  return content;
};

interface Name {
  firstName: string;
  lastName: string;
}

/*
我不明白，为什么这种定义模式允许
它能够约束调用，能够约束返回，但是没办法约束下一个函数
 */

const ffc: (name: string, age: number) => string = () => {
  return "123";
};

ffc("1", 2);

const ffe = function(a: string) {
  return "123";
};

const ffd: (name: string, age: number) => string = function(a) {
  return a;
};

ffc(ffe("1"), 2);

/*
所以，我个人上推荐的定义方式是。

 */
function aaa(a: string): string {
  return a;
}

const bbb = (b: string): string => {
  return b;
};

interface Ifunc {
  (n: number): number;
}

let c2: Ifunc;
c2 = () => {
  return 1;
};

c2(2)

function c1(): Ifunc {
  return () => {
      return 1
  };
}
