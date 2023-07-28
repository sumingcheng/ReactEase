import { Dispatch, SetStateAction } from 'react'

export interface ChildrenType {
  children?: any
}

// 定义 GlobalContext 的属性类型
export interface GlobalContextProps {
  globalState: string // 全局状态
  setGlobalState: Dispatch<SetStateAction<string>> // 改变全局状态的函数
}
