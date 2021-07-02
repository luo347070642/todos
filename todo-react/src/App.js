import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import moment from 'moment'
import Left from './containers/Left'
import Content from './containers/Content'

const App = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    setList([...list, { title: '123', date: moment().format() }])
    console.log(list)
  }, [])
  return (
    <Layout style={
      { height: '100vh' }
    }>
      <Layout.Sider
        style={
          { background: '#f8f8f8' }
        }
        breakpoint="lg"
      >
        <Left/>
      </Layout.Sider>
      <Layout.Content>
        <Content list={list}/>
      </Layout.Content>
    </Layout>
  )
}

export default App
