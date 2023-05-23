import React from 'react'
import Layout from '@/layout/index.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SingletonPattern } from '@/views/SingletonPattern/index.jsx'
import { StrategyPattern } from '@/views/StrategyPattern/index.jsx'
import { ProxyPattern } from '@/views/ProxyPattern/index.jsx'
import { IteratorPattern } from '@/views/IteratorPattern/index.jsx'
import { PublisherSubscriberPattern } from '@/views/PublisherSubscriberPattern/index.jsx'
import { CommandPattern } from '@/views/CommandPattern/index.jsx'
import { CompositePattern } from '@/views/CompositePattern/index.jsx'
import { TemplateMethodPattern } from '@/views/TemplateMethodPattern/index.jsx'
import { FlyweightPattern } from '@/views/FlyweightPattern/index.jsx'
import { ChainOfResponsibilityPattern } from '@/views/ChainOfResponsibilityPattern/index.jsx'
import { MediatorPattern } from '@/views/MediatorPattern/index.jsx'
import { DecoratorPattern } from '@/views/DecoratorPattern/index.jsx'
import { StatePattern } from '@/views/StatePattern/index.jsx'
import { AdapterPattern } from '@/views/AdapterPattern/index.jsx'
import { ObserverPattern } from '@/views/ObserverPattern/index.jsx'
import PageNotFound from '@/views/error/index.jsx'

function App () {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><SingletonPattern/></Layout>}/>
          <Route path="*" element={<Layout><PageNotFound/></Layout>}/>
          <Route path="/SingletonPattern" element={<Layout><SingletonPattern/></Layout>}/>
          <Route path="/StrategyPattern" element={<Layout><StrategyPattern/></Layout>}/>
          <Route path="/ProxyPattern" element={<Layout><ProxyPattern/></Layout>}/>
          <Route path="/IteratorPattern" element={<Layout><IteratorPattern/></Layout>}/>
          <Route path="/PublisherSubscriberPattern" element={<Layout><PublisherSubscriberPattern/></Layout>}/>
          <Route path="/CommandPattern" element={<Layout><CommandPattern/></Layout>}/>
          <Route path="/CompositePattern" element={<Layout><CompositePattern/></Layout>}/>
          <Route path="/TemplateMethodPattern" element={<Layout><TemplateMethodPattern/></Layout>}/>
          <Route path="/FlyweightPattern" element={<Layout><FlyweightPattern/></Layout>}/>
          <Route path="/ChainOfResponsibilityPattern" element={<Layout><ChainOfResponsibilityPattern/></Layout>}/>
          <Route path="/MediatorPattern" element={<Layout><MediatorPattern/></Layout>}/>
          <Route path="/DecoratorPattern" element={<Layout><DecoratorPattern/></Layout>}/>
          <Route path="/StatePattern" element={<Layout><StatePattern/></Layout>}/>
          <Route path="/AdapterPattern" element={<Layout><AdapterPattern/></Layout>}/>
          <Route path="/ObserverPattern" element={<Layout><ObserverPattern/></Layout>}/>
        </Routes>
      </BrowserRouter>
  )
}


export default App
