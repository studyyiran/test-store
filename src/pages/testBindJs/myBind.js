Function.prototype.myBind = function(that, ...other) {
  // call apply bind
    console.log(this)
  const newFunc = function(...originParams) {
    return this.call(that, originParams.concat(other));
  };
  return newFunc;
};

