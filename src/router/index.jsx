import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SingletonPattern } from '@/views/SingletonPattern/index.jsx'
import { StrategyPattern } from '@/views/StrategyPattern/index.jsx'
import Layout from '@/layout/index.jsx'

function App () {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout>
              <SingletonPattern/>
            </Layout>
          }/>
          <Route path="/StrategyPattern" element={
            <Layout>
              <StrategyPattern/>
            </Layout>
          }/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
