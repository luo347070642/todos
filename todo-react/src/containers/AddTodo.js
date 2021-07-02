import React from 'react'
import { Button, Form, Input } from 'antd'

const marginAuto = {
  width: '50%',
  margin: '0 auto'
}
const AddTodo = (props) => {
  const onFinish = ()=>{}
  const onFinishFailed = ()=>{}
  return (
    <div style={marginAuto}>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="设置任务"
          name="content"
          rules={[{ required: true, message: '请输入内容!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="设置时间"
          name="time"
          rules={[{ required: true, message: '请选择时间!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={
          { offset: 10, span: 14 }
        }>
          <Button type="primary" htmlType="submit">添加</Button>&nbsp;
          <Button type="primary">返回</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddTodo
