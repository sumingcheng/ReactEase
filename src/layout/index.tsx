import React, { FC } from 'react'
import '@/assets/less/layout.less'
import Menu from '@/layout/menu.js'
import Header from '@/layout/header.tsx'
import { LayoutProps } from '@/layout/type.ts'

// 主框架
const Layout: FC = ({ children }: LayoutProps) => {
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

export default Layout
