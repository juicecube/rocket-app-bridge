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
rocketApp.navigateTo({ router: '/order' }); // 路由跳转
rocketApp.forceLandscapeScreen(); // 强制横屏
rocketApp.forcePortraitScreen(); // 强制竖屏
rocketApp.isReviewEnv(); // 是否iOS提审环境
rocketApp.openVideo({ url: '' }); // 打开原生视频播放器
rocketApp.shareWechatTimeline({ imageBase64: 'base64' }); // 分享图片至朋友圈
rocketApp.shareWechatFriends({ imageBase64: 'base64' }); // 分享图片至微信好友
rocketApp.copyLink({ url: '' }); // 复制链接至粘贴板
rocketApp.saveImage({ imageBase64: 'base64' }); // 保存图片至手机相册
rocketApp.iosPurchase({
    appProductId: '';
    termId: '';
}); // 调起苹果内购
rocketApp.getAppVersion(); // 返回APP版本号
rocketApp.openWechatOfficial('公众号名称'); // 返回调用微信APP是否成功
rocketApp.getHasWechat(); // 返回是否已安装微信APP
rocketApp.getUserId(); // 返回用户id
rocketApp.showFailurePage(); // 展示APP失败页面
```
## TODO

## 须知
- 本SDK基于小火箭APP开发者文档[小火箭 H5 Bridge协议](https://shimo.im/docs/kWyrKWdYdvPWGgvP/read)开发；
- 部分方法与新版本api同样功能的，本SDK仅使用最新的方法，如有旧版api需求，请[提需求](https://github.com/juicecube/rocket-app-bridge/issues)；
- 如有问题或提需求请提[issue](https://github.com/juicecube/rocket-app-bridge/issues)。

## 文档
- [小火箭 H5 Bridge协议](https://shimo.im/docs/kWyrKWdYdvPWGgvP/read)
