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
            modifyVars: { '@primary-color': '#1DA57A' },
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