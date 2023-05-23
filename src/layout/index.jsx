// 主框架
const layout = ({ children }) => {
  return (
      <>
        <header>这里是头部</header>
        <main>
          <div className="left"></div>
          <div className="right">
            {children}
          </div>
        </main>
        <footer>这里是尾部</footer>
      </>
  )
}

export default layout
