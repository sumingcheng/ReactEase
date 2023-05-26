import React, { useState, useEffect, useRef } from 'react'
import src from '@/assets/image/git.png'

function LazyImage({ src, alt }) {
  // 创建存储图片元素引用和是否加载完成状态的变量
  const imgRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // 创建 IntersectionObserver 观察器并进行懒加载
  useEffect(() => {
    const observer = new IntersectionObserver(
      // 监听元素进出视口变化的回调函数
      (entries, observer) => {
        console.log(entries)
        entries.forEach((entry) => {
          // 如果元素进入视口
          if (entry.isIntersecting) {
            // 创建新的图片元素
            const imgElement = new Image()
            imgElement.src = src
            // 监听图片加载完成的事件
            imgElement.onload = () => {
              setIsLoaded(true)
            }
            // 将创建的图片元素替换原本的图片元素
            if (imgRef && imgRef.current) {
              imgRef.current.src = imgElement.src
            }
            // 停止观察目标元素
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 } // 定义进入视口变化的阈值
    )

    // 观察图片元素
    if (imgRef && imgRef.current) {
      observer.observe(imgRef.current)
    }

    // 组件卸载时停止观察
    return () => {
      observer.disconnect()
    }
  }, [src])

  // 返回带有图片元素的 JSX
  return <img ref={imgRef} src={isLoaded ? src : ''} alt={alt} />
}

export const ProxyPattern = () => {
  return (
    <div>
      <h1>Lazy Loading Images</h1>
      <div style={{ height: '2000px' }}></div>
      <LazyImage src={src} alt="Lazy Loaded Image" />
    </div>
  )
}
