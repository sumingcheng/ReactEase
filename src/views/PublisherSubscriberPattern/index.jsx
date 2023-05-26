import React, { useState, useEffect } from 'react'
import { Button, Input } from 'antd'

// 创建一个全局的事件订阅/发布对象
const eventEmitter = {
  events: {},
  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(callback)
    return () => this.unsubscribe(event, callback)
  },
  unsubscribe(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((listener) => listener !== callback)
    }
  },
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(data))
    }
    console.log(this.events)
  },
}

// 发布者组件
const Publisher = () => {
  const [message, setMessage] = useState('')

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handlePublish = () => {
    eventEmitter.emit('messagePublished', message)
    setMessage('')
  }

  return (
    <div className="border-2 border-b-orange-400 m-3">
      <h2>发布者</h2>
      <Input className="w-1/4" type="text" value={message} onChange={handleMessageChange} placeholder="输入消息" />
      <Button onClick={handlePublish}>发布</Button>
    </div>
  )
}

// 订阅者组件
const Subscriber = () => {
  const [receivedMessage, setReceivedMessage] = useState('')

  useEffect(() => {
    const handleMessagePublished = (message) => {
      setReceivedMessage(message)
    }

    const unsubscribe = eventEmitter.subscribe('messagePublished', handleMessagePublished)

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div className="border-2 border-cyan-200 m-3">
      <h2>订阅者</h2>
      <p>接收到的消息：{receivedMessage}</p>
    </div>
  )
}

// 应用组件
export const PublisherSubscriberPattern = () => {
  return (
    <div className="m-2">
      <h1>发布-订阅模式示例</h1>
      <Publisher />
      <Subscriber />
    </div>
  )
}
