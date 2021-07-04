import React from 'react'
import { Button, List, Skeleton } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { CheckOutlined } from '@ant-design/icons'

const TodoList = props => {
  const state = useSelector(state => state)
  const { status, todos } = state
  let list = todos.filter(item => item.status === status)
  const dispatch = useDispatch()
  const complete = item => {
    console.log('update')
    dispatch({
      type: 'UPDATE_TODO_STATUS',
      item
    })
  }
  const removeListItem = item => {
    dispatch({
      type: 'REMOVE_TODO',
      item
    })
  }
  const todosStyle = { padding: '40px 20%' }
  return (
    <div style={todosStyle}>
      <List
        itemLayout='horizontal'
        dataSource={list}
        renderItem={item => (
          <List.Item
            actions={
              status === 0
                ? [
                    <Button
                      type='link'
                      key='list-edit'
                      onClick={complete.bind(this, item)}>
                      完成
                    </Button>,
                    <Button
                      type='link'
                      key='list-more'
                      onClick={removeListItem.bind(this, item)}>
                      删除
                    </Button>
                  ]
                : []
            }>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta title={item.content} />
              {status === 1 ? (
                <div>
                  {item.time}
                  <CheckOutlined
                    style={{
                      marginLeft: '50px',
                      color: 'green',
                      fontSize: '20px'
                    }}
                  />
                </div>
              ) : null}
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  )
}

export default TodoList
