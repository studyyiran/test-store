function compose(...hello) {
    // [].slice.call(arguments, 0).forEach((f) => {
    //     console.log(f)
    // })
    return hello.reduce((f1, f2) => {
        return (...something) => {
            return f1(f2(...something));
        }
    })
}

const p = 0.4;
let count = 20
const length = 5
const calc1 = (amout) => {
    return amout * p
}

const calc2 = (amount) => {
    return amount + calc1(amount)
}


const after1type = calc2(100)
const after2year = calc2(calc2(100))

let arr = []
for (let t = 0; t < length; t++) {
    arr.push(calc2)
}
arr.unshift((v) => {
    console.log(v)
})

const result = compose(...arr);
result(20)