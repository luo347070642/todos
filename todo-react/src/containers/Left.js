import React from 'react'
import { Menu, Button, Affix } from 'antd'
import moment from 'moment'
import { PlusOutlined } from '@ant-design/icons'
import { textCenter } from '../commons/style'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Left() {
  const history = useHistory()

  const state = useSelector(state => state)
  const { status } = state
  const dispatch = useDispatch()
  const changeStatus = status => {
    dispatch({
      type: 'CHANGE_STATUS',
      status
    })
    setTimeout(() => {
      history.push('/')
    }, 100)
  }
  const sendTodo = () => {
    history.push('/addTodo')
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
          onClick={sendTodo}>
          新建
        </Button>
      </Affix>
    </div>
  )
}
