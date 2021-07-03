import React from 'react'
import { Button, List, Skeleton } from 'antd'
import { paddingLR20 } from '../commons/style'

const TodoList = props => {
  const { list, status, changeStatus, removeListItem } = props
  const complete = item => {
    changeStatus(1)
  }
  return (
    <div style={paddingLR20}>
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
              {status === 1 ? <div>{item.time}</div> : null}
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  )
}

export default TodoList
