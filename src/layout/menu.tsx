import React from 'react'
import { Html5Filled } from '@ant-design/icons'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ItemOptions } from '@/layout/type.ts'

function getItem({ label, key, icon = null, children, type }: ItemOptions) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

const items = [
  getItem({
    label: 'JavaScript',
    key: 'sub1',
    icon: <Html5Filled />,
    children: [
      getItem({ label: '单例模式', key: 'SingletonPattern' }),
      getItem({ label: '策略模式', key: 'StrategyPattern' }),
    ],
  }),
]

const MenuLeft = () => {
  const navigate = useNavigate()

  const onClick = (e: any) => {
    console.log('click ', e)
    const path = e.key
    navigate(`/${path}`)
  }

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      theme="dark"
      mode="inline"
      items={items}
    />
  )
}
export default MenuLeft
