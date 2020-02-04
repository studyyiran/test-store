export default function () {

}

interface IObj {
    length: number,
}

type Iindex = number | string

function a<T extends Iindex>(index: T, obj: IObj) {
    if (typeof index === 'number') {
        return index + 1 + obj.length
    }

}