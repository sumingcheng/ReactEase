import React, { useEffect, useState } from 'react'
import { Button, Input } from 'antd'

class Singleton {
  static instance = null // 保存单例实例的静态变量
  message = '' // 保存消息的实例变量
  
  static getInstance () {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
  
  setMessage (msg) {
    this.message = msg
  }
  
  getMessage () {
    return this.message
  }
}

// 在组件中使用单例
export function SingletonPattern () {
  const [isShown, setIsShown] = useState(false)
  const [message, setMessage] = useState('')
  
  useEffect(() => {
    const singleton = Singleton.getInstance()
    setMessage(singleton.getMessage())
  }, [])
  
  const showMessage = () => {
    const singleton = Singleton.getInstance()
    singleton.setMessage(message) // 保存输入框的内容到单例对象
    setIsShown(true)
  }
  
  const hideMessageBox = () => {
    setIsShown(false)
  }
  
  const handleInputChange = (e) => {
    setMessage(e.target.value)
  }
  
  return (
      <div>
        <Button onClick={showMessage}>显示提示框</Button>
        {isShown && (
            <div className="message-box">
              <Input className="w-1/4" placeholder="Basic usage" value={message} onChange={handleInputChange}/>
              <Button onClick={hideMessageBox}>关闭</Button>
            </div>
        )}
      </div>
  )
}
