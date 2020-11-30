# rocket-app-bridge

H5与小火箭APP交互的SDK，Android & iOS通用。

[![](https://img.shields.io/github/workflow/status/juicecube/rocket-app-bridge/npm-publish?style=flat-square&logo=github)](https://github.com/juicecube/rocket-app-bridge/actions?query=workflow%3Anpm-publish)
[![](https://img.shields.io/codecov/c/gh/juicecube/rocket-app-bridge/master?style=flat-square&logo=codecov)](https://codecov.io/gh/juicecube/rocket-app-bridge/branch/master)
[![](https://img.shields.io/bundlephobia/min/@mlz/rocket-app-bridge?style=flat-square&logo=npm)](https://www.npmjs.com/package/@mlz/rocket-app-bridge)
[![](https://img.shields.io/github/license/juicecube/rocket-app-bridge?style=flat-square&logo=github)](https://github.com/juicecube/rocket-app-bridge/blob/master/LICENSE)
[![](https://img.shields.io/badge/website-Doraemon-brightgreen?style=flat-square&logo=github)](https://rab.ithen.cn)

## 使用
> 基于小火箭APP开发者文档[小火箭 H5 Bridge协议](https://shimo.im/docs/kWyrKWdYdvPWGgvP/read)开发。

### 安装
```bash
npm i @mlz/rocket-app-bridge@latest
```

### 按需引入

1. 安装babel-plugin-import
  ```bash
  npm i -D babel-plugin-import
  ```

2. .babelrc
  ```json
  {
    "plugins": [
      ["import", {
        "libraryName": "@mlz/rocket-app-bridge",
        "camel2DashComponentName": false
      }]
    ]
  }
  ```
3. 引入（省略前两步时就不是按需引入了）
  ```typescript
  import { getUrlQuery } from '@mlz/rocket-app-bridge';

  getUrlQuery('https://rab.ithen.cn?name=rocket-app-bridge');
  ```
4. 若不想安装babel-plugin-import，又想按需引入：
  ```typescript
  import getUrlQuery from '@mlz/rocket-app-bridge/lib/getUrlQuery';

  getUrlQuery('https://rab.ithen.cn?name=rocket-app-bridge');
  ```

更多使用文档详看[Doraemon](https://rab.ithen.cn)。

## TODO

## 开发
### 常用命令
```bash
# 单个文件测试
jest test/limitStringToTarget.test.ts
```

## 须知

- 如有问题或提需求请提[issue](https://github.com/juicecube/rocket-app-bridge/issues)。

## 文档
- [小火箭 H5 Bridge协议](https://shimo.im/docs/kWyrKWdYdvPWGgvP/read)
