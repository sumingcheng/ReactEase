import { MailOutlined, SettingOutlined } from '@ant-design/icons'
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
  getItem('Navigation One', 'sub1', <MailOutlined/>, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  {
    type: 'divider',
  },
  getItem('Navigation Three', 'sub4', <SettingOutlined/>, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
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
