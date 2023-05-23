import Menu from '@/layout/Menu.jsx'
import '@/assets/less/layout.less'
// 主框架
const layout = ({ children }) => {
  return (
      <>
        <header className="w-full h-14 bg-slate-800"></header>
        <div className="left bg-slate-800">
          <Menu></Menu>
        </div>
        <div className="right">
          {children}
        </div>
      </>
  )
}

export default layout

