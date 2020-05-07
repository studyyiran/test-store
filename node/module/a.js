// console.log('start')
// console.log(this)
// console.log(require)
// // const myExports = exports
// // myExports.key='hehe'

// exports = {
//     key: 'haha'
// }
// // console.log(module.exports === exports)
// // module.exports = {
// //     key: 'key1'
// // }
// // console.log(module.exports === exports)
// // exports.key = "key2"
// console.log('finish')
 const hehe = {
    a: function () {
        const c = hehe.c();
        return c
    },
    b: function () {
        return 'b'
    },
    c: function () {
        const a = hehe.b();
        return a
    }
}

const result = hehe.c()
console.log(result)
module.exports = {
    key: result
}