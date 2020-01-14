import React, { useEffect, useState } from "react";

export function ReactKeys() {
  const initList = [
    {
      id: "1"
    },
    {
      id: "2"
    },
    {
      id: "3"
    },
    {
      id: "4"
    },
    {
      id: "5"
    }
  ];
  const [list, setList] = useState(initList);
  function swap(arr: any[], first: number, second: number) {
    const linshi = arr[first];
    arr[first] = arr[second];
    arr[second] = linshi;
  }
  function shuffler(array: any[]) : any {
    const b = [...array];
    let currentIndex = array.length - 1;
    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      swap(b, randomIndex, currentIndex);
      currentIndex--;
    }
    console.log(array)
    return b;
  }
  useEffect(() => {
    window.setInterval(() => {
      setList((l) => {
          return shuffler(l);
      });
    }, 1000);
  }, []);
  return list.map(({ id }) => {
    return <ComWithInput key={Date.now() + id} id={id} />;
  });
}

function ComWithInput(props: any) {
  const [content, setContent] = useState("");
  const {id} = props;

  return (
    <div>
        <span>{id}</span>
      <input
        value={content}
        onChange={e => {
          setContent(e.target.value);
        }}
      />
      <div>{props.key}</div>
    </div>
  );
}
