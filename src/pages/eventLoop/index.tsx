import { useEffect } from "react";
import React from "react";

export function eventLoop1() {
  function handler(n: number) {
    console.log(Math.random());
  }
  // 浏览器执行1
  longTimeTask(handler);
  // 浏览器发射了很多炮弹。那么是谁在计算炮弹的弹道呢？
  fetch("http://118.31.42.201/api/testRouter").then((res: any) => {
    console.log(res);
  });
}

function longTimeTask(callBack: (s: number) => void) {
  window.setTimeout(() => {
    callBack && callBack(Math.random());
  }, 1000);
}

export default function EventLoop() {
  useEffect(() => {
    eventLoop1();
  }, [eventLoop1]);
  return <div>123</div>;
}
