import React from 'react'
import { Button, Form, Input, TimePicker } from 'antd'
import { marginAuto, wrapperCol } from '../commons/style'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { getContent } from '../store/actions'

const AddTodo = props => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const returnPre = () => {
    dispatch(getContent(0))
  }
  const submit = () => {
    const item = { ...form.getFieldValue() }
    item.time = moment(item.time).format('HH:mm')
    dispatch({ type: 'ADD_TODO', ...item })
    returnPre()
  }
  const containerStyle = { ...marginAuto, paddingTop: '150px' }
  return (
    <div style={containerStyle}>
      <Form name='basic' form={form} layout='inline'>
        <Form.Item
          label='设置任务'
          name='content'
          rules={[{ required: true, message: '请输入内容!' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label='设置时间'
          name='time'
          rules={[{ required: true, message: '请选择时间!' }]}>
          <TimePicker format='HH:mm' />
        </Form.Item>
        <Form.Item wrapperCol={wrapperCol}>
          <Button type='primary' onClick={submit}>
            添加
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={wrapperCol}>
          <Button type='primary' onClick={returnPre}>
            返回
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddTodo
