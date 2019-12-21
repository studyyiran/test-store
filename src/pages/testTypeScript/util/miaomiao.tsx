// interface Person {
//   firstName: string;
//   lastName: string;
//   ageArr?: number[];
// }
//
// export function test(person: Person) {
//   const { firstName, lastName, ageArr } = person;
//   if (ageArr) {
//     ageArr.forEach(() => {});
//   }
//
//   return person.firstName + person.lastName;
// }
//
// test({
//   firstName: "sun",
//   lastName: "yiran",
//   ageArr: [18, 16]
// });
//
// interface IHaha {
//   (hehe: { content: string }): number;
// }
//
// const haha: IHaha = props => {
//   console.log(props.content);
//   return Number(props.content);
// };
// haha({ content: "123123123" });
// // Argument of type "value" is not asignable to parameter of
//
// function add(x: number, y: number) {
//   return x + y;
// }
//
// /*
// (aNumber: number, bNumber: number) => string
// 这是一个类型值  他赋值给了 myAdd 他必须是填充完整.
//
// function(x: number, y: number) : number
// 这是一个类似的类型值 他赋值给了 这个函数
// 这种写法可以随意.
//
// 不管在哪里定义,我发现都是括号后面,跟上返回值.
//
//  */
//
// let a = 1;
// let b = 2;
// function testHaha(): any {
//   console.log("123");
// }
//
// /*
// 实际上这两种是一致的.
// 第二种,是教会我,这种箭头函数,能够表达函数的定义方法(这种表达必须写完整)
// 而function的定义过程中(无论是function的形式还是() =>的形式)都是可以自由定义的.也就是可以不写返回值
//  */
// let myTest = function(a: string, b: string): any {
//   return a + b;
// };
//
// let myAdd: (aNumber: number, bNumber: number) => number = function(
//   x: number,
//   y: number
// ): number {
//   return x + y;
// };
//
// let myAddWithOutType = (): number => {
//   return a + b;
// };
//
// /*
// ts是按照形状来的.不能多.不能少.
// ts遵循按照传入值 传出值 作为左右值来进行比较.
// ts也可以用接口来描述函数.不过似乎只能用来描述箭头函数
//
//  */
//
// /*
// 复习函数
//  */
//
// function fa(content: string) {
//   console.log(content);
// }
//
// function fb(content: string): null {
//   console.log(content);
//   return null;
// }
//
// /*
// 这个例子说明，函数返回值，都是以：的形式，添加在括号之后的
//  */
// function fc(content: number): () => number {
//   console.log(content);
//   return () => {
//     return content;
//   };
// }
//
// const ffa = () => {
//   return 123;
// };
//
// const ffb = (content: string): string => {
//   return content;
// };
//
// interface Name {
//   firstName: string;
//   lastName: string;
// }
//
// /*
// 我不明白，为什么这种定义模式允许
// 它能够约束调用，能够约束返回，但是没办法约束下一个函数
//  */
//
// const ffc: (name: string, age: number) => string = () => {
//   return "123";
// };
//
// ffc("1", 2);
//
// const ffe = function(a: string) {
//   return "123";
// };
//
// const ffd: (name: string, age: number) => string = function(a) {
//   return a;
// };
//
// ffc(ffe("1"), 2);
//
// /*
// 所以，我个人上推荐的定义方式是。
//
//  */
// function aaa(a: string): string {
//   return a;
// }
//
// const bbb = (b: string): string => {
//   return b;
// };
//
// interface Ifunc {
//   (n: number): number;
// }
//
// let c2: Ifunc;
// c2 = () => {
//   return 1;
// };
//
// c2(2);
//
// function c1(): Ifunc {
//   return () => {
//     return 1;
//   };
// }
//
// function haha1(name: string, age = "123") {}
//
// haha1("1", "2");
// interface Card {
//   suit: string;
//   card: number;
// }
// interface Deck {
//   suits: string[];
//   cards: number[];
//   createCardPicker(this: Deck): () => Card;
// }
// let deck: Deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   // NOTE: The function now explicitly specifies that its callee must be of type Deck
//   createCardPicker: function(this: Deck) {
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);
//
//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     };
//   }
// };
//
// interface Card {
//   suit: string;
//   card: number;
// }
// interface Deck {
//   suits: string[];
//   cards: number[];
//   createCardPicker(this: Deck): () => Card;
// }
// let deck123: Deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   // NOTE: The function now explicitly specifies that its callee must be of type Deck
//   createCardPicker: function(this: Deck) {
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);
//
//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     };
//   }
// };
//
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
//
// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

/*
start review
 */

// 1  可选参数
// function qew1(a: string, b = a): { firstName: string; lastName: string } {
//   return {
//     firstName: a,
//     lastName: a
//   };
// }
import React, {useCallback} from "react";

export function MiaoMiao() {
  // const a = qwe2("abc", 1, 2);
  // const obj = testThis();
  // return (
  //   <span>
  //     {a} {obj.getName()}
  //   </span>
  // );
}
//
// function qwe2(a: string, ...b: number[]): string {
//   return a + b.join(" ");
// }
//
// function testThis() {
//   return {
//     a: "a",
//     b: "b",
//     getName: function() {
//       const that = this;
//       return function() {
//         return this.a + that.b;
//       };
//     }
//   };
// }
//
// qwe2("123");
//
//
// function hahaha() {
//
//
// }
//
// function hehe(...hehe) {
//     const func = () => {
//
//     }
//     return func(...hehe)
// }