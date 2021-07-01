const CracoLessPlugin = require('craco-less')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const path = require('path')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1890ff', // 全局主色
              '@link-color': '#1890ff', // 链接色
              '@success-color': '#52c41a', // 成功色
              '@warning-color': '#faad14', // 警告色
              '@error-color': '#f5222d', // 错误色
              '@font-size-base': '14px', // 主字号
              '@heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
              '@text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
              '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // 次文本色
              '@disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色
              '@border-radius-base': '2px', // 组件/浮层圆角
              '@border-color-base': '#d9d9d9', // 边框色
              '@box-shadow-base': '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)', // 浮层阴影
            },
            javascriptEnabled: true,
          },
        },
      },
    }
  ],
  babel: {
    plugins: [
      // 用来支持装饰器
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      // AntDesign 按需加载
      [
        'import',
        {
          'libraryName': 'antd',
          'libraryDirectory': 'es',
          'style': true //设置为true即是less
        }
      ]
    ]
  },
  webpack: {
    plugins: [
      new AntdDayjsWebpackPlugin(),
      new SimpleProgressWebpackPlugin(), // 查看打包的进度
    ],
    configure: (webpackConfig, {
      env, paths
    }) => {
      paths.appBuild = 'dist'
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, 'dist'), // 修改输出文件目录
        publicPath: '/'
      }
      return webpackConfig
    }
  },
  //配置代理解决跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.baidu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
}