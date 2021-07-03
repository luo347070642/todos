import React from 'react'
import { Menu, Button, Affix } from 'antd'
import moment from 'moment'
import { PlusOutlined } from '@ant-design/icons'
import { textCenter } from '../commons/style'

const Left = props => {
  const { status } = props
  const changeStatus = status => {
    props.changeStatus(status)
  }
  const topStyle = { padding: '50px 0', ...textCenter }
  return (
    <div>
      <div style={topStyle}>
        <span style={{ fontSize: '23px' }}>
          {moment().format('YYYY-MM-DD')}
        </span>
      </div>
      <Menu
        theme='light'
        mode='inline'
        defaultSelectedKeys={['0']}
        selectedKeys={[status.toString()]}>
        <Menu.Item key='0' onClick={changeStatus.bind(this, 0)}>
          待办事项
        </Menu.Item>
        <Menu.Item key='1' onClick={changeStatus.bind(this, 1)}>
          已完成
        </Menu.Item>
      </Menu>
      <Affix style={{ position: 'absolute', bottom: 50, left: 50 }}>
        <Button
          type='primary'
          shape='round'
          icon={<PlusOutlined />}
          onClick={changeStatus.bind(this, 2)}>
          新建
        </Button>
      </Affix>
    </div>
  )
}

export default Left
