import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import moment from 'moment'
import Left from './containers/Left'
import Content from './containers/Content'
import {fixHeight, background} from './commons/style'


const App = () => {
  const [list, setList] = useState([])
  const [status, setStatus] = useState(0)
  const changeStatus = (status)=>{
    setStatus(status)
  }
  useEffect(() => {
    setList([...list, { title: '123', date: moment().format() }])
  }, [])
  return (
    <Layout style={fixHeight}>
      <Layout.Sider style={background} breakpoint="lg">
        <Left status={status} changeStatus={changeStatus}/>
      </Layout.Sider>
      <Layout.Content>
        <Content list={list} status={status} changeStatus={changeStatus}/>
      </Layout.Content>
    </Layout>
  )
}

export default App
