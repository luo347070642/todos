import React, { useState } from 'react'
import { List, Skeleton } from 'antd'

const TodoList = (props) => {
  const [status, setStatus] = useState(0)
  const { list } = props
  return (
    <div>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (
          <List.Item
            actions={
              status === 0 ? [<a key="list-loadmore-edit">完成</a>, <a key="list-loadmore-more">删除</a>] : []
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
