import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SingletonPattern } from '@/views/SingletonPattern/index.jsx'
import { StrategyPattern } from '@/views/StrategyPattern/index.jsx'

function App () {
  return (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<SingletonPattern/>}/>
          <Route path="/StrategyPattern" element={<StrategyPattern/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
