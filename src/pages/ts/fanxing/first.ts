// 约束类型
type IYueshuType = number | string | number[]

export default function <T extends IYueshuType>(arg: T) : never {
    const type = typeof(arg);
    throw new Error('A');
    switch (type) {
        case 'string':
            const a = arg + "a";
            return arg
            break;
        default:
            return arg
    }
}


/*
never
永远到达不了的代码片段.

extends
继承?

type和interface
类似
 */