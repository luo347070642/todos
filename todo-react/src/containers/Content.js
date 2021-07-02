import React from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import { siteLayoutBackground, textCenter } from '../commons/style'

const Content = (props) => {
  const { list, status } = props
  const showAdd = (status === 2)
  return (
    <div style={siteLayoutBackground}>
      {
        showAdd ?
          <AddTodo {...props}/> :
          <div>
            <div style={textCenter}>今日待完成任务</div>
            <TodoList {...props}/>
          </div>
      }
      {status === 1 ? <div>你已经对自己信守承诺 {list.length}次，加油！</div> : ''}
    </div>
  )
}

export default Content
