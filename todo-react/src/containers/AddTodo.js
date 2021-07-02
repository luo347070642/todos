import React from 'react'
import { Button, Form, Input } from 'antd'
import { marginAuto, wrapperCol } from '../commons/style'

const AddTodo = (props) => {
  const onFinish = () => {}
  const onFinishFailed = () => {}
  const returnPre = () => {
    props.changeStatus(0)
  }
  return (
    <div style={marginAuto}>
      <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item label="设置任务" name="content" rules={[{ required: true, message: '请输入内容!' }]}>
          <Input/>
        </Form.Item>
        <Form.Item label="设置时间" name="time" rules={[{ required: true, message: '请选择时间!' }]}>
          <Input/>
        </Form.Item>
        <Form.Item wrapperCol={wrapperCol}>
          <Button type="primary" htmlType="submit">添加</Button>&nbsp;
          <Button type="primary" onClick={returnPre}>返回</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddTodo
