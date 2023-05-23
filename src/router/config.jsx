import { Route } from 'react-router-dom'
import Layout from '@/layout/index.jsx'
import React from 'react'

const router = [
  { name: '单例模式', code: 'SingletonPattern' },
  { name: '策略模式', code: 'StrategyPattern' },
  { name: '代理模式', code: 'ProxyPattern' },
  { name: '迭代器模式', code: 'IteratorPattern' },
  { name: '发布-订阅模式', code: 'PublisherSubscriberPattern' },
  { name: '命令模式', code: 'CommandPattern' },
  { name: '组合模式', code: 'CompositePattern' },
  { name: '模板方法模式', code: 'TemplateMethodPattern' },
  { name: '享元模式', code: 'FlyweightPattern' },
  { name: '责任链模式', code: 'ChainOfResponsibilityPattern' },
  { name: '中介者模式', code: 'MediatorPattern' },
  { name: '装饰者模式', code: 'DecoratorPattern' },
  { name: '状态模式', code: 'StatePattern' },
  { name: '适配者模式', code: 'AdapterPattern' },
  { name: '观察者模式', code: 'ObserverPattern' },
]

export function generateRoutes () {
  return router.map((item) => {
    const path = `/${item.code}`
    
    return (
        <Layout>
          <Route path={path} element={`<Layout><${path}/></Layout>`}/>
        </Layout>
    )
  })
}
