import React from "react";

export default function() {
  function handler(...other: any) {
    // 因为bind,是在后面新增,因此是e,123,haha
      console.log(other)
    console.log(other[other.length - 1]);
  }
  return (
      <div>
          <MyButton handler={handler.bind({}, Date.now())}>{Date.now()}</MyButton>
          <div onClick={handler}>123</div>
      </div>

  );
}

function MyButton(props: any) {
    const a = props.handler.bind({}, "haha")
    // ??? haha eeee
  return (
    <div
      onClick={a}
    >
      213
    </div>
  );
}


