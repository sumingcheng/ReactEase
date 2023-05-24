import React, { useState } from 'react'
import { Input } from 'antd'

// 管理员策略组件
const AdminComponent = () => {
  return (
      <div>
        <div className="text-black text-2xl">管理员视图 - 可以查看和编辑所有内容</div>
      </div>
  )
}

// 普通用户策略组件
const UserComponent = () => {
  return (
      <div>
        <div className="text-black text-2xl">用户视图 - 只能查看部分内容</div>
      </div>
  )
}

// 游客策略组件
const GuestComponent = () => {
  return (
      <div>
        <div className="text-black text-2xl">游客视图 - 需要登录才能查看内容</div>
      </div>
  )
}

const roleComponents = {
  admin: AdminComponent,
  user: UserComponent,
  guest: GuestComponent,
}

export function StrategyPattern ({ role }) {
  const [customContent, setCustomContent] = useState('')
  
  const handleInputChange = (e) => {
    setCustomContent(e.target.value)
  }
  
  const StrategyComponent = roleComponents[customContent] || GuestComponent
  
  return (
      <>
        <div className="text-black font-bold">参数控制视图的渲染</div>
        <Input className="w-1/4" value={customContent} onChange={handleInputChange}/>
        <StrategyComponent/>
      </>
  )
}
