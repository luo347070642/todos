import React from 'react'
import Content from '../containers/Content'
import AddTodo from '../containers/AddTodo'
const routeList = [
  {
    name: '首页',
    path: '/',
    exact: true,
    render(props) {
      return <Content {...props} />
    }
  },
  {
    name: '首页',
    path: '/addTodo',
    exact: true,
    render(props) {
      return <AddTodo {...props} />
    }
  }
]
export { routeList }
