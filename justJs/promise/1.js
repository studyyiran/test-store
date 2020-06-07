/*
我要解释3个问题，并且利用我的学习方法，我现在是focus模式
1）create发生了什么
2）return this会怎么样。
3)o.__proto__ = redux.prototype是什么意思、。

我有点钻牛角尖了。先适可而止。不挖了。focus结束。
过分深挖，会造成很大的混乱。

现在我重新开始focus。继续来聊
 */

function redux2(state) {
    this.state = state
    // 箭头函数 真的比funciton 优秀吗？为什么发明箭头函数？那样this还有啥用呢？
    // 实际上，对于函数闭包来说，this就是多余的。不需要用this。也就是当你不需要用this的时候，你就用箭头
    // 但是当存在this的时候，就不要用箭头 用function
    // 但是为什么要发明箭头函数呢？
    redux.prototype.getState = function() {
        return this.state
    }
}

function c(string) {
    console.log(string)
}
c('start')
const t1 = myNew(redux, {value: '1'});
const t2 = myNew(redux, {value: '1'});
c(t1.getState());
c(t2.getState());

c(t1 instanceof redux)

function myNew() {
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