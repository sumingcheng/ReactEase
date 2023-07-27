import React from 'react'
import '@/assets/less/layout.less'
import Menu from '@/layout/Menu.js'
import Header from '@/layout/Header.tsx'

// 主框架
const layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="left bg-slate-800 ">
        <Menu></Menu>
      </div>
      <div className="right">{children}</div>
    </>
  )
}

export default layout
