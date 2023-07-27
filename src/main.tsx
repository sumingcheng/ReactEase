import * as React from 'react'
import Routers from '@/router/index.jsx'
import '@/assets/index.css'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { createRoot } from 'react-dom/client'

const root = document.getElementById('root')

if (root === null) {
  throw new Error('没有找到根元素')
}

createRoot(root).render(
  <ConfigProvider
    locale={zhCN}
    theme={{
      token: {
        // "colorPrimaryBgHover": "#93aba4",
        // "colorPrimaryBorderHover": "#adb8b4",
        // "colorPrimary": "#1a7868",
        // "colorPrimaryBg": "#d2deda"
      },
    }}
  >
    <React.StrictMode>
      <Routers />
    </React.StrictMode>
  </ConfigProvider>
)
