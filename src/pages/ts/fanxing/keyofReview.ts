export default function () {

}

interface Interface {
    a: string
}

const funcA : <T extends Interface, K extends keyof Interface>(enter: T, key: K) => T = (a) => {
    a = a + 'asd'
    switch(typeof a) {
        case 'string':
            const b = a + '123';
            break;
        case 'number':

            const d = a * 10;
            break
        case 'object':
            if (a instanceof Array) {
                a.push('1')
            }
            if (a instanceof Object ) {
                if (a.hasOwnProperty('a')) {
                    a.a = 'a'
                }

            }
            break
    }
    return a
}

function funcB<T extends keyof Interface>(a: T) : T {
    return a
}
