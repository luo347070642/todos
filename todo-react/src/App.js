/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Layout } from 'antd'
import Left from './containers/Left'
import Content from './containers/Content'
import { fixHeight, background } from './commons/style'

export default function App() {
  return (
    <Layout style={fixHeight}>
      <Layout.Sider style={background} breakpoint='lg'>
        <Left />
      </Layout.Sider>
      <Layout.Content>
        <Content />
      </Layout.Content>
    </Layout>
  )
}
