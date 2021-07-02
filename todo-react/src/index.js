import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import 'antd/dist/antd.css'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import App from './App'

const store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <App/>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
)

