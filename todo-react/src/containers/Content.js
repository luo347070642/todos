import React from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

const textCenter = { textAlign: 'center' }
const siteLayoutBackground = {
  background: '#fff',
  height: '100%',
  padding: '24px'
}
const Content = (props) => {
  const { list } = props
  return (
    <div style={siteLayoutBackground}>
      <div style={textCenter}>
        今日待完成任务
      </div>
      <TodoList {...props}/>
      <div>你已经对自己信守承诺 {list.length}次，加油！</div>
      <AddTodo {...props}/>
    </div>
  )
}

export default Content
