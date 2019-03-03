### JSX

- 安装babel插件
  - `npm i babel-core babel-loader babel-plugin-transform-runtime -D`

- 安装识别jsx的包 `npm i babel-preset-env babel-preset-stage-0 babel-preset-react -D`

- .bebelrc 配置
```json
  {
      "presets": ["env", "stage-0", "react"],
      "plugins": ["transform-runtime"]
  }
```

- 添加babel-loader配置项：

```js
module: {//第三方模块的配置规则
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
        ]
    }
```





