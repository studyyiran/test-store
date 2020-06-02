/*
这里面有一些有趣的问题。
写箭头函数可以吗？还能有this吗？why？
写const能取到吗？
call是怎么用的
这个和新建类有什么区别？
这个和redux那个新建类有什么区别？


 */


function init() {
  let current = {
    addData,
    addTitle,
    getSsrData,
    setTitle,
    storeList: [],
    ssrTitle: '',
  }
  if (this && this.addData) {
    current = this
  }
  return current
}

function addTitle(title) {
  const current = init.call(this);
  return {
    ...current,
    ssrTitle: title,
  }
}

export function addData (key, value) {
  const current = init.call(this);
  return {
    ...current,
    storeList: [...current.storeList, {
      [key]: value
    }],
  }
}

function getSsrData() {
  return {
    storeList: this.storeList
  }
}

function setTitle() {
  if (this.ssrTitle) {
    return this.ssrTitle
  } else {
    return '123'
  }
}

const result = addData('hehe', {name: 'hehe'}).addData('haha', {name: 'haha'}).addTitle('miaowu')
console.log(result)