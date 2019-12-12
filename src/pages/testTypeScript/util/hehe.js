const hahaInterface = {
  a: "string",
  n: "number"
};

function test(someThing) {
  // 首先对someThing进行一种遍历?用来比较差异?
  let isOk = true;
  function notOkFunc(content) {
    isOk = false;
    console.error(content);
  }
  // 根据interface要求的样子遍历
  Object.keys(hahaInterface).forEach(key => {
    // 1,有没有
    if (someThing.hasOwnProperty(key)) {
      // 值是否正确
      if (typeof someThing[key] === hahaInterface[key]) {
        console.log("type is ok");
      } else {
        notOkFunc(
          `type is not ok. expect ${
            hahaInterface[key]
          }.but get ${typeof someThing[key]}`
        );
      }
    } else {
      notOkFunc(
        `expect have you ${key} as ${hahaInterface[key]} in your obj.but done get.`
      );
    }

    // 2,类型是否相同
  });
  // 根据someThing进行判断
  Object.keys(someThing).forEach(key => {
    // 1,有没有
    if (!hahaInterface.hasOwnProperty(key)) {
      notOkFunc(
        `you have extra obj key of ${key}.but done defined in interface of ${JSON.stringify(
          hahaInterface
        )}`
      );
    }
    // 2,类型是否相同
  });
}
