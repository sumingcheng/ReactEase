// 第三方库或模块的导入
import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
// 项目内部模块的导入
import Routers from '@/router/index.tsx'
// 样式文件或其他资源的导入
import '@/assets/index.css'

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
