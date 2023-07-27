import React from 'react'
import ReactDOM from 'react-dom/client'
import Routers from '@/router/index.jsx'
import '@/assets/index.css'
import {ConfigProvider} from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

ReactDOM.createRoot(document.getElementById('root')).render(
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
            <Routers/>
        </React.StrictMode>
    </ConfigProvider>
)
