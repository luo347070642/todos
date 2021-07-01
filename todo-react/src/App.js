import React, { useEffect, useState } from 'react'
import { Layout, Menu, Button, List } from 'antd'
import './App.css'
import moment from 'moment'
import { PlusOutlined } from '@ant-design/icons'

const App = () => {
  const [list, setList] = useState([])
  useEffect(()=>{
    setList([...list,{title:'123',date:moment().format()}])
    console.log(list)
  },[])
  return (
    <Layout style={
      {
        height: '100vh',
      }
    }>
      <Layout.Sider
        style={
          { background: '#f8f8f8' }
        }
        breakpoint="lg"
      >
        <div style={
          { textAlign: 'center' }
        }>
          {moment().format('YYYY-MM-DD')}
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            待办事项
          </Menu.Item>
          <Menu.Item key="2">
            已完成
          </Menu.Item>
        </Menu>
        <div style={
          { textAlign: 'center' }
        }>
          <Button type="primary" shape="round" icon={<PlusOutlined />}>新建</Button>

        </div>
      </Layout.Sider>
      <Layout.Content>
        <div className="site-layout-background">
          <div style={
            { textAlign: 'center' }
          }>
            今日待完成任务
          </div>
          <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={list}
            renderItem={item => (
              <List.Item
                actions={[<a key="list-loadmore-edit">完成</a>, <a key="list-loadmore-more">删除</a>]}
              >{item.title}</List.Item>
            )}
          />
          <div>你已经对自己信守承诺 {list.length}次，加油！</div>
        </div>
      </Layout.Content>
    </Layout>
  )
}

export default App
