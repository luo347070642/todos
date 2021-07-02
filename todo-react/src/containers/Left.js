import React from 'react'
import { Menu, Button } from 'antd'
import moment from 'moment'
import { PlusOutlined } from '@ant-design/icons'
import { textCenter } from '../commons/style'

const Left = (props) => {
  const onClick = () => {
    props.changeStatus(2)
  }
  return (
    <div>
      <div style={textCenter}>
        {moment().format('YYYY-MM-DD')}
      </div>
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          待办事项
        </Menu.Item>
        <Menu.Item key="2">
          已完成
        </Menu.Item>
      </Menu>
      <div style={textCenter}>
        <Button type="primary" shape="round" icon={<PlusOutlined/>} onClick={onClick}>新建</Button>
      </div>
    </div>
  )
}

export default Left
