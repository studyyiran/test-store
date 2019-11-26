Function.prototype.myBind = function(that, ...other) {
  // call apply bind
    console.log(this.call)
    const me = this
  const newFunc = function(...originParams) {
        // 我以为 这个this指的是调用的函数.
      // 这个bug是因为,newFunc无法决定他的this指向,因此我用闭包拿一下
      // apply 是数组 call是参数列表
    return me.apply(that, originParams.concat(other));
  };
  return newFunc;
};

Function.prototype.lucasBind = function (context) {
    var me = this;
    var argsArray = Array.prototype.slice.call(arguments);
    return function () {
        return me.apply(context, argsArray.slice(1))
    }
}

