---
title: Rocket App Bridge
---
# 使用
H5与小火箭APP交互的SDK，Android & iOS通用。
***

# 方法
```typescript
import rocketApp from 'rocket-app-bridge'
rocketApp.showLoading();
rocketApp.hideLoading();
rocketApp.navigateTo({ router: '/order' });
rocketApp.forceLandscapeScreen();
rocketApp.forcePortraitScreen();
rocketApp.isReviewEnv();
rocketApp.openVideo({ url: '' });
rocketApp.shareWechatTimeline({
  imageBase64: 'base64',
});
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

# 文档
- [小火箭 H5 Bridge协议](https://shimo.im/docs/kWyrKWdYdvPWGgvP/read)
