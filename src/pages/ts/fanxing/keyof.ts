interface Interface {

}

function getP<T> (obj: T, key: keyof T) : T[keyof T] {
    return obj[key]
}

function getP2<T, K extends keyof T> (obj: T, key:K) : T[K] {
    return obj[key]
}

function setP<O> (obj: O, key: keyof O, value: O[keyof O]): O {
    obj[key] = value
    return obj
}

export default function () {
    const a = {
        'a': 'a',
        'b': 'b'
    }
    getP(a, 'a')
    getP(a, 'b')
    setP(a, 'a', 123)
    setP(a, 'b', 'bcd')
}