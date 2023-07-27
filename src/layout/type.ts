import { ReactNode } from 'react'

export interface LayoutProps {
  children?: ReactNode
}

export interface ItemOptions {
  label: string
  key: string
  icon?: ReactNode
  children?: any
  type?: string
}
