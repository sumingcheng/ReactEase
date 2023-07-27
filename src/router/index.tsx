import React from 'react'
import Layout from '@/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from '@/views/home/index.jsx'

import PageNotFound from '@/views/error'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Index />
            </Layout>
          }
        />
        <Route
          path="*"
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
