# 踩坑一，reducer过于抽象
> reducer写得没那么抽象也不会有人怪你的。^_^

reducer其实只有一个，由不同的reducer composition出来的。所以，
1. reducer的父作用域是共享的
2. 某一个action被发出后，会在**总**reducer中进行查找出来的reducer代码

例如：
```
//reducer01.js
const disposeFetchRandom = (preState = {}, action) => {
  switch (action.type) {
    case `${REQUEST_BEGIN}${action.condition}`:
    case `${RECEIVED}${action.condition}`:
    case `${RECEIVE_FAILED}${action.condition}`:
      //do something to state
    default:
      return preState;
  }
}
```
和
```
//reducer02.js
const disposeCategories = (preState = {}, action) => {
  let condition = action.condition
  switch (action.type) {
    case `${REQUEST_BEGIN}${condition}`:
    case `${RECEIVED}${condition}`:
    case `${RECEIVE_FAILED}${condition}`:
      //do something
    default:
      return preState
  }
}
```

针对上面两个Reducer：
1. 当`dispatch({type: "REQUEST_BEGIN_RANDOM"})`时，`reducer01.js`与`reducer02.js`都会对其进行处理
2. 无法处理`dispatch({type: "REQUEST_BEGIN_RANDOM})`和`dispatch({type: "REQUEST_BEGIN_CATEGORIES"})`这两个action
3. 解决办法。改为(以reducer01.js为例)
```
//reducer01.js
const RANDOM = "_RANDOM";
const disposeFetchRandom = (preState = {}, action) => {
  switch (action.type) {
    case REQUEST_BEGIN + RANDOM://必须明确指定action.type
    case RECEIVED + RANDOM:
    case RECEIVE_FAILED + RANDOM:
      //do something to state
    default:
      return preState;
  }
}
```