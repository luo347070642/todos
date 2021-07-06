/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import Left from './containers/Left'
// import Content from './containers/Content'
import { fixHeight, background } from './commons/style'
import IndexRoute from './routers/index'

export default function App() {
  return (
    <BrowserRouter>
      <Layout style={fixHeight}>
        <Layout.Sider style={background} breakpoint='lg'>
          <Left />
        </Layout.Sider>
        <Layout.Content>
          {/* <Content /> */}
          <IndexRoute />
        </Layout.Content>
      </Layout>
    </BrowserRouter>
  )
}
