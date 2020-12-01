# rocket-app-bridge

H5与小火箭APP交互的SDK，Android & iOS通用。

## 使用
### 安装
```bash
npm i @mlz/rocket-app-bridge@latest
```
## 方法
```typescript
import rocketApp from 'rocket-app-bridge'

rocketApp.showLoading();
rocketApp.hideLoading();
rocketApp.navigateTo({ router: '/order' });
rocketApp.forceLandscapeScreen();
rocketApp.forcePortraitScreen();
rocketApp.isReviewEnv();
rocketApp.openVideo({ url: '' });
rocketApp.shareWechatTimeline({ imageBase64: 'base64' });
rocketApp.showLoading();
rocketApp.showLoading();
rocketApp.showLoading();
rocketApp.showLoading();
rocketApp.showLoading();
rocketApp.showLoading();
rocketApp.showLoading();
rocketApp.showLoading();
rocketApp.showLoading();
rocketApp.showLoading();
rocketApp.showLoading();
rocketApp.showLoading();
```
- shareWechatFriends
- copyLink
- saveImage
- iosPurchase
- getAppVersion
- openWechatOfficial
- getHasWechat
- getUserId
- showFailurePage
## TODO

## 须知
- 本SDK基于小火箭APP开发者文档[小火箭 H5 Bridge协议](https://shimo.im/docs/kWyrKWdYdvPWGgvP/read)开发；
- 部分方法与新版本api同样功能的，本SDK仅使用最新的方法，如有旧版api需求，请[提需求](https://github.com/juicecube/rocket-app-bridge/issues)；
- 如有问题或提需求请提[issue](https://github.com/juicecube/rocket-app-bridge/issues)。

## 文档
- [小火箭 H5 Bridge协议](https://shimo.im/docs/kWyrKWdYdvPWGgvP/read)
