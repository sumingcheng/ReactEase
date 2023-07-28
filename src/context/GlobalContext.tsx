// GlobalContext.tsx
import React, { useState, createContext, Dispatch, SetStateAction } from 'react'
import { LayoutProps } from '@/context/type.ts'

// 定义 GlobalContext 的属性类型
interface GlobalContextProps {
  globalState: string // 全局状态
  setGlobalState: Dispatch<SetStateAction<string>> // 改变全局状态的函数
}

// 创建 GlobalContext，其 context 的值类型为 GlobalContextProps 或 undefined
export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined)

// 定义一个全局的状态提供者组件 GlobalProvider，这个组件的子元素类型为 LayoutProps
export const GlobalProvider: React.FC<LayoutProps> = ({ children }) => {
  // 使用 useState 创建一个名为 globalState 的状态变量，初始值为 'initial value'，
  // 并创建一个名为 setGlobalState 的函数，用于改变 globalState 的值
  const [globalState, setGlobalState] = useState<string>('initial value')

  // 返回一个 GlobalContext.Provider 组件，
  // 其 value 属性为一个对象，包含全局状态变量 globalState 和改变该状态的函数 setGlobalState
  // GlobalProvider 组件的所有子组件都能通过 GlobalContext 访问到这个全局状态和改变状态的函数
  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  )
}
