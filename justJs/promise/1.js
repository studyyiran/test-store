/*
我要解释3个问题，并且利用我的学习方法，我现在是focus模式
1）create发生了什么
2）return this会怎么样。
3)o.__proto__ = redux.prototype是什么意思、
这块其实我是懂的，就是每个对象的，原型链，指向，我们构造函数的prototype属性。

。(其实这块我不懂的是，构造函数的constructor是什么意思。)

我有点钻牛角尖了。先适可而止。不挖了。focus结束。
过分深挖，会造成很大的混乱。

现在我重新开始focus。继续来聊
 */

function redux(state) {
    this.state = state
    // 箭头函数 真的比funciton 优秀吗？为什么发明箭头函数？那样this还有啥用呢？
    // 实际上，对于函数闭包来说，this就是多余的。不需要用this。也就是当你不需要用this的时候，你就用箭头
    // 但是当存在this的时候，就不要用箭头 用function
    // 但是为什么要发明箭头函数呢？
    redux.prototype.getState = function() {
        c(this.state)
        return this.state
    }
}

function redux2(state) {
    this.state = state
    if (!this.getState) {
        console.log(redux2.prototype.constructor)
        // 先不用纠结这个了。你先
        const newPrototype = Object.assign({
            getState: function() {
                c(this.state)
                return this.state
            }
        }, redux2.prototype)
        redux2.prototype = newPrototype
        console.log(redux2.prototype.constructor)
    }

}

function c(string) {
    console.log(string)
}
console.log('start')
const r1 = new redux({count: 1})
const r2 = new redux({count: 2})
console.log(r1.__proto__.constructor)
r1.getState()
r2.getState()

const r3 = myNew(redux2, {count: 1})
const r4 = myNew(redux2, {count: 2})
console.log(r3.__proto__.constructor)
r3.getState()
r4.getState()

function myNew() {
    const array = [].slice.call(arguments)
    const constructor = array.shift();
    // const obj = Object.create(constructor);
    // 得到一个对象
    const obj = {}
    obj.__proto__ = constructor.prototype;
    // 执行并绑定this

    // 在new里面，obj在传入构造函数之前，就已经确定了他的__proto__。
    // 这就是不能随便（永远不要）重新赋值prototype的原因。这个引用，就让他长期alone吧。
    const result = constructor.apply(obj, array)

    return obj
}


function myNew2() {
    // 你需要生成一个新的obj
    const o = {}
    o.__proto__ = redux.prototype
    _redux.call(o)

    function _redux() {
        this.state = state

        redux.prototype.getState = function() {
            return this.state
        }
    }



    // o.prototype.constructor = redux

    //----


    //---

    // 然后你最后要返回他
    return o
}