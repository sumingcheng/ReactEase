import '@/assets/less/layout.less'
import Menu from '@/layout/Menu.jsx'
import Header from '@/layout/Header.jsx'
// 主框架
const layout = ({ children }) => {
  return (
      <>
        <Header></Header>
        <div className="left bg-slate-800 ">
          <Menu></Menu>
        </div>
        <div className="right m-3.5">
          {children}
        </div>
      </>
  )
}

export default layout

