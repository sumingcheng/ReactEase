import React from 'react'

// 自定义迭代器函数
function* Iterator(collection) {
  let index = 0
  while (index < collection.length) {
    yield collection[index]
    index++
  }
}

// 迭代器模式的最佳案例组件
export const IteratorPattern = () => {
  // 示例数据
  const data = ['Apple', 'Banana', 'Orange']

  // 使用迭代器遍历数据
  const iterator = Iterator(data)

  return (
    <div>
      <h1>Iterator Example</h1>
      <ul>
        {/* 使用迭代器获取数据 Array.from() 函数会遍历迭代器对象，依次调用其 next() 方法来获取每个元素 */}
        {Array.from(iterator).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
