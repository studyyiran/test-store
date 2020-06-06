/*
我还要把node的视频给写了因为最近经常要高node
我要配合一下。

我先把这个事情搞懂
然后我要去搞懂promise
然后我要对象
然后我要搞懂redux的，class的，funciton的到底有啥区别。

因为我对link这种写法重发了激情。

然后我还要顺手去搞死compose
我还要去学习底层html

因为我好不容易，把ssr相关的东西平定了。
我现在有空折腾这些了。
 */


function MyPromise() {
  /*
  这个this指向水？
  new操作符，应该会帮助我初始化一个{}
  这个this就指向他。
  我需要为他进行name初始化


   */
  console.log(this);
  function _resolve() {

  }

  function _reject() {

  }
  // 在哪里定义静态方法呢？
  function then(callback) {
    callback(_resolve, _reject)
    return this
  }

  /*
  我试图，让这个返回去的对象的__proto__都指向我们的构造函数。
  但这样并没有卵用。。

  我需要利用new操作符的操作。
  将构造函数指向一个圆形对象。。。

  但是我觉得应该是函数.prototype = 圆形对象把？
   */
  // MyPromise.prototype = {
  //   constructor: MyPromise,
  //   then,
  // };



  if (typeof this.then !== "function") {
    console.log(MyPromise.prototype.constructor)
    MyPromise.prototype = {
      constructor: MyPromise.prototype.constructor,
      then: function () {

      },
    };
    // MyPromise.prototype.then = then
    console.log(MyPromise.prototype)
  }

    /*
    这款不能显示返回 那样会失效似乎
     */
  // return this
}
//
// MyPromise.prototype = {
//   constructor: MyPromise,
//   then: function () {
//
//   },
// };
console.log('test')
console.log(MyPromise.prototype.constructor)
console.log(MyPromise.prototype.then)
module.exports = {
  MyPromise
}




function addData (key, value) {
  const current = init.call(this);
  return {
    ...current,
    storeList: [...current.storeList, {
      storeName: key,
      storeData: value,
    }],
  }
}

function init() {
  let current = {
    addData,
    addTitle,
    getSsrData,
    getTitle,
    storeList: [],
    ssrTitle: '',
  }
  if (this && this.addData) {
    current = this
  }
  return current
}

function addTitle(title) {
  const current = init.call(this);
  return {
    ...current,
    ssrTitle: title,
  }
}

function getSsrData() {
  return {
    storeList: this.storeList
  }
}

function getTitle() {
  if (this.ssrTitle) {
    return this.ssrTitle
  } else {
    return '123'
  }
}

