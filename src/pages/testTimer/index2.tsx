import React, { useEffect, useState } from "react";

export default function Index2() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    window.setInterval(() => {
      setTime(t => t + 1);
    }, 1000);
  }, []);
  return (
    <div>
      {time}
      <ImageTest />
      <ListTest count={100} time={time} />
    </div>
  );
}

function ListTest(props: any) {
  const { count, time } = props;
  let arr = [];
  for (let i = 0; i < time; i++) {
    if (time % 2 === 0) {
      arr.unshift(
        <li key={i}>
          <ImageTest haha={i} />
        </li>
      );
    } else {
      arr.push(
        <li key={i}>
          <ImageTest haha={i} />
        </li>
      );
    }
  }
  return <ul>{arr}</ul>;
}

function ImageTest(props: any) {
  useEffect(() => {
    return () => {
      console.log("cleat" + props.haha);
    };
  }, []);
  return (
    <div>
      <h1>{props.haha}</h1>
      <img style={{ width: "100px" }} src={require("../../res/test.png")} />
    </div>
  );
}
