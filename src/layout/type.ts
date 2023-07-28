import { ReactNode } from 'react'

export interface LayoutProps {
  children?: any
}

export interface ItemOptions {
  label: string
  key: string
  icon?: ReactNode
  children?: any
  type?: string
}
