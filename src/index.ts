import dsBridge from 'dsbridge';
import {
  ToastParams, AnonymousFunction, RouterParams, OpenVideoParams,
  ShareWechatParams, CopyLinkParams,
} from './types';

const { call } = dsBridge;

function showLoading(callback?:AnonymousFunction):void;
function showLoading(callback) {
  return call('app.showNativeLoading', '', callback);
}
function hideLoading(callback?:AnonymousFunction):void;
function hideLoading(callback) {
  return call('app.hideNativeLoading', '', callback);
}
function showToast(params:ToastParams, callback?:AnonymousFunction):void;
function showToast(params, callback) {
  return call('app.showNativeToast', params, callback);
}
/** 路由跳转 */
function navigateTo(params:RouterParams, callback?:AnonymousFunction):void;
function navigateTo(params, callback) {
  return call('app.routerNavigateTo', params, callback);
}
/** 微信支付
 * - 参数待定
 */
function wechatPay(params:{}, callback?:AnonymousFunction):void;
function wechatPay(params, callback) {
  return call('app.wechatPay', params, callback);
}
/** 支付宝支付
 * - 参数待定
 */
function aliPay(params:{}, callback?:AnonymousFunction):void;
function aliPay(params, callback) {
  return call('app.aliPay', params, callback);
}
/** 强制横屏 */
function forceLandscapeScreen(callback?:AnonymousFunction):void;
function forceLandscapeScreen(callback) {
  return call('app.forceLandscapeScreen', '', callback);
}
/** 强制竖屏 */
function forcePortraitScreen(callback?:AnonymousFunction):void;
function forcePortraitScreen(callback) {
  return call('app.forcePortraitScreen', '', callback);
}
/** 是否是提审环境，适用于iOS */
function isReviewEnv(callback?:AnonymousFunction):void;
function isReviewEnv(callback) {
  return call('app.isReviewEnv', '', callback);
}
/** 调用原生视频播放器 */
function openVideo(params:OpenVideoParams, callback?:AnonymousFunction):void;
function openVideo(params, callback) {
  return call('app.openNativeVideoPlayer', params, callback);
}
/** 微信朋友圈分享 */
function shareWechatTimeline(params:ShareWechatParams, callback?:AnonymousFunction):void;
function shareWechatTimeline(params, callback) {
  return call("share_wechat_timeline", params, callback)
}
/** 微信好友分享 */
function shareWechatFriends(params:ShareWechatParams, callback?:AnonymousFunction):void;
function shareWechatFriends(params, callback) {
  return call("share_wechat_session", params, callback)
}
/** 复制链接 */
function copyLink(params:CopyLinkParams, callback?:AnonymousFunction):void;
function copyLink(params, callback) {
  return call("copy_link", params, callback)
}
/** 保存图片 */
function saveImage(params:ShareWechatParams, callback?:AnonymousFunction):void;
function saveImage(params, callback) {
  return call("save_photo", params, callback)
}

export {
  showLoading,
  hideLoading,
  showToast,
  navigateTo,
  wechatPay,
  aliPay,
  forceLandscapeScreen,
  forcePortraitScreen,
  isReviewEnv,
  openVideo,
  shareWechatTimeline,
  shareWechatFriends,
  copyLink,
  saveImage,
};

export const rocketApp = {
  showLoading,
  hideLoading,
  showToast,
  navigateTo,
  wechatPay,
  aliPay,
  forceLandscapeScreen,
  forcePortraitScreen,
  isReviewEnv,
  openVideo,
  shareWechatTimeline,
  shareWechatFriends,
  copyLink,
  saveImage,
};

export default rocketApp;
