import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@/layout/index.tsx'
import PageNotFound from '@/views/error/index.tsx'
import Index from '@/views/home/index.tsx'
import Detail from '@/views/detail/index.tsx'

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
          path="/detail"
          element={
            <Layout>
              <Detail />
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
