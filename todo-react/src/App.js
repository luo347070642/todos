/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import Left from './containers/Left'
import Content from './containers/Content'
import { fixHeight, background } from './commons/style'

const App = () => {
  const [list, setList] = useState([])
  const [status, setStatus] = useState(0)
  const changeStatus = status => {
    setStatus(status)
  }
  const removeListItem = id => {
    list.splice(
      list.findIndex(item => item.id === id),
      1
    )
    setList([...list])
  }
  const addList = item => {
    console.log(item)
    setList([...list, item])
  }
  useEffect(() => {
    setList([...list])
    setStatus(status)
  }, [])
  return (
    <Layout style={fixHeight}>
      <Layout.Sider style={background} breakpoint='lg'>
        <Left status={status} changeStatus={changeStatus} />
      </Layout.Sider>
      <Layout.Content>
        <Content
          list={list}
          status={status}
          changeStatus={changeStatus}
          removeListItem={removeListItem}
          addList={addList}
        />
      </Layout.Content>
    </Layout>
  )
}

export default App
