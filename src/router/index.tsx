import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@/layout/index.jsx'
import Index from '@/views/home/index.jsx'
import PageNotFound from '@/views/error/index.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Index />
            </Layout>
          }
        />
        <Route
          path='*'
          element={
            <Layout>
              <PageNotFound />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
