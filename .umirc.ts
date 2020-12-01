import { defineConfig } from 'dumi';

const logo = 'https://gallary.ithen.cn/images/2020/12/01/ico_rocket.png';
export default defineConfig({
  title: 'Rocket app bridge',
  description: 'H5与小火箭APP交互的SDK，Android & iOS通用。',
  favicon: logo,
  logo: logo,
  publicPath: '/',
  outputPath: 'docs-dist',
  exportStatic: {}, // 会生成对应的静态html
  hash: true,
  mode: 'site',
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/juicecube/rocket-app-bridge',
    },
  ],
  // more config: https://d.umijs.org/config
});
