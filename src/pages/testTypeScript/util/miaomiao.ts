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
  (hehe: { content: string }): string;
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
  console.log('123')
}

/*
实际上这两种是一致的.
第二种,是教会我,这种箭头函数,能够表达函数的定义方法(这种表达必须写完整)
而function的定义过程中(无论是function的形式还是() =>的形式)都是可以自由定义的.也就是可以不写返回值
 */
let myTest = function (a: string, b:string) : void {
  return a + b
}

let myAdd: (aNumber: number, bNumber: number) => number = function(
    x: number,
    y: number
): number {
  return x + y;
};

let myAddWithOutType = () : number => {
  return a + b;
};



/*
ts是按照形状来的.不能多.不能少.
ts遵循按照传入值 传出值 作为左右值来进行比较.
ts也可以用接口来描述函数.不过似乎只能用来描述箭头函数

 */
