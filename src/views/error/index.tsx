import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#1a202c',
        color: '#fff',
      }}>
      <h1 style={{ fontSize: '8rem', marginBottom: '2rem' }}>404</h1>
      <p style={{ fontSize: '2rem', textAlign: 'center', maxWidth: '70%' }}>
        哎呀，看起来你偶然发现了一个不存在的页面。
        <br />
        返回
        <Link to='/' style={{ color: '#fff', textDecoration: 'underline' }}>
          home
        </Link>
        然后重试.
      </p>
    </div>
  )
}

export default PageNotFound
