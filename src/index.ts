import dsBridge from 'dsbridge';
import {
  ToastParams, AnonymousFunction, RouterParams, OpenVideoParams,
  ShareWechatParams, CopyLinkParams, IosPurchaseParams,IosPurchaseCallback,
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
 * - 参数待定，所以暂时不可用
 */
function wechatPay(params:{}, callback?:AnonymousFunction):void;
function wechatPay(params, callback) {
  return call('app.wechatPay', params, callback);
}
/** 支付宝支付
 * - 参数待定，所以暂时不可用
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
  return call('share_wechat_timeline', params, callback);
}
/** 微信好友分享 */
function shareWechatFriends(params:ShareWechatParams, callback?:AnonymousFunction):void;
function shareWechatFriends(params, callback) {
  return call('share_wechat_session', params, callback);
}
/** 复制链接到粘贴板 */
function copyLink(params:CopyLinkParams, callback?:AnonymousFunction):void;
function copyLink(params, callback) {
  return call('copy_link', params, callback);
}
/** 保存图片 */
function saveImage(params:ShareWechatParams, callback?:AnonymousFunction):void;
function saveImage(params, callback) {
  return call('save_photo', params, callback);
}
/** ios内购 */
function iosPurchase(params:IosPurchaseParams, callback?:IosPurchaseCallback):void;
function iosPurchase(params, callback) {
  return call('in_app_purchase', params, callback);
}
/** 获取APP版本号 */
function getAppVersion(callback?:AnonymousFunction):string;
function getAppVersion(callback) {
  return call('get_app_version', '', callback);
}
/** 打开指定公众号，其实只是复制微信名称到粘贴板而已(╯▽╰)
 * @returns 返回唤起微信是否成功
 */
function openWechatOfficial(name:string, callback?:AnonymousFunction):boolean;
function openWechatOfficial(params, callback) {
  const success:'success'|'fail' = call('open_wechat_official_account', params, callback);
  return success === 'success';
}
/** 是否安装了微信 */
function getHasWechat(callback?:AnonymousFunction):boolean;
function getHasWechat(callback) {
  return call('is_wechat_installed', '', callback);
}
/** 获取用户id */
function getUserId(callback?:AnonymousFunction):string;
function getUserId(callback) {
  return call('get_user_id', '', callback);
}
/** 展示加载失败界面 */
function showFailurePage(callback?:AnonymousFunction):string;
function showFailurePage(callback) {
  return call('show_failure_view', '', callback);
}

export {
  showLoading,
  hideLoading,
  showToast,
  navigateTo,
  forceLandscapeScreen,
  forcePortraitScreen,
  isReviewEnv,
  openVideo,
  shareWechatTimeline,
  shareWechatFriends,
  copyLink,
  saveImage,
  iosPurchase,
  getAppVersion,
  openWechatOfficial,
  getHasWechat,
  getUserId,
  showFailurePage,
};

export const rocketApp = {
  showLoading,
  hideLoading,
  showToast,
  navigateTo,
  forceLandscapeScreen,
  forcePortraitScreen,
  isReviewEnv,
  openVideo,
  shareWechatTimeline,
  shareWechatFriends,
  copyLink,
  saveImage,
  iosPurchase,
  getAppVersion,
  openWechatOfficial,
  getHasWechat,
  getUserId,
  showFailurePage,
};

export default rocketApp;
