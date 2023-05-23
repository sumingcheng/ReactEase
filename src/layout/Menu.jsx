import { ToolFilled, Html5Filled, } from '@ant-design/icons'
import { Menu } from 'antd'

function getItem (label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

const items = [
  getItem('JavaScript', 'sub1', <Html5Filled/>, [
    getItem('单例模式', 'SingletonPattern'),
    getItem('策略模式', 'StrategyPattern'),
    getItem('代理模式', 'ProxyPattern'),
    getItem('迭代器模式', 'IteratorPattern'),
    getItem('发布-订阅模式', 'PublisherSubscriberPattern'),
    getItem('命令模式', 'CommandPattern'),
    getItem('组合模式', 'CompositePattern'),
    getItem('模板方法模式', 'TemplateMethodPattern'),
    getItem('享元模式', 'FlyweightPattern'),
    getItem('责任链模式', 'ChainOfResponsibilityPattern'),
    getItem('中介者模式', 'MediatorPattern'),
    getItem('装饰者模式', 'DecoratorPattern'),
    getItem('状态模式', 'StatePattern'),
    getItem('适配者模式', 'AdapterPattern'),
    getItem('观察者模式', 'ObserverPattern'),
  ]),
  getItem('Java', 'sub2', <ToolFilled/>, [
    getItem('单例模式', 'SingletonPattern'),
  ]),
]

const MenuLeft = () => {
  const onClick = (e) => {
    console.log('click ', e)
  }
  return (
      <Menu
          onClick={onClick}
          style={{
            width: 256,
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          theme="dark"
          mode="inline"
          items={items}
      />
  )
}
export default MenuLeft
