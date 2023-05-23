import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SingletonPattern } from '@/views/SingletonPattern/index.jsx'
import { StrategyPattern } from '@/views/StrategyPattern/index.jsx'
import { ProxyPattern } from '@/views/ProxyPattern/index.jsx'
import Layout from '@/layout/index.jsx'
import { generateRoutes } from '@/router/config.jsx'

let sub1 = generateRoutes()

function App () {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><SingletonPattern/></Layout>}/>
          <Route path="/SingletonPattern" element={<Layout><SingletonPattern/></Layout>}/>
          <Route path="/StrategyPattern" element={<Layout><StrategyPattern/></Layout>}/>
          <Route path="/ProxyPattern" element={<Layout><ProxyPattern/></Layout>}/>
        </Routes>
      </BrowserRouter>
  )
}


export default App
