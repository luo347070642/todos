import React from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import {
  paddingLR20,
  siteLayoutBackground,
  textCenter,
  fontSize30
} from '../commons/style'
import { useSelector } from 'react-redux'

const Content = () => {
  const state = useSelector(state => state)
  const { todos, status } = state
  const list = todos.filter(item => item.status === 1)
  const showAdd = status === 2
  const contentStyle = { ...siteLayoutBackground, paddingTop: '50px' }
  return (
    <div style={contentStyle}>
      {showAdd ? (
        <AddTodo />
      ) : (
        <div>
          <div style={{ ...textCenter, ...fontSize30 }}>今日待完成任务</div>
          <TodoList />
        </div>
      )}
      {status === 1 ? (
        <div style={paddingLR20}>
          你已经对自己信守承诺 {list.length}次，加油！
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Content
