import React, { useState } from 'react'
import { List, Skeleton } from 'antd'

const TodoList = (props) => {
  const { list, status } = props
  const complete = item => {
    props.changeStatus(1)
  }
  const removeItem = item => {}
  console.log(status)
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (
          <List.Item
            actions={
              status === 0 ? [<a key="list-loadmore-edit" onClick={complete(item)}>完成</a>,
                <a key="list-loadmore-more" onClick={removeItem}>删除</a>] : []
            }
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta title={item.title}/>
              {status === 1 ? <div>content</div> : null}
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  )
}

export default TodoList
