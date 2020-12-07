import dsBridge from 'dsbridge';
import {
  ToastParams, AnonymousFunction, RouterParams, OpenVideoParams,
  ShareWechatParams, CopyLinkParams, IosPurchaseParams,IosPurchaseCallback,
} from './types';

const { call, hasNativeMethod } = dsBridge;

/** 先检查是否有这个方法，然后再调用 */
const iCall:typeof call = (handlerName, params, callback) => {
  if (hasNativeMethod(handlerName)) {
    return call(handlerName, params, callback);
  }
}

function showLoading(callback?:AnonymousFunction):void;
function showLoading(callback) {
  return iCall('app.showNativeLoading', '', callback);
}
function hideLoading(callback?:AnonymousFunction):void;
function hideLoading(callback) {
  return iCall('app.hideNativeLoading', '', callback);
}
function showToast(params:ToastParams, callback?:AnonymousFunction):void;
function showToast(params, callback) {
  return iCall('app.showNativeToast', params, callback);
}
/** 路由跳转 */
function navigateTo(params:RouterParams, callback?:AnonymousFunction):void;
function navigateTo(params, callback) {
  return iCall('app.routerNavigateTo', params, callback);
}
/** 微信支付
 * - 参数待定，所以暂时不可用
 */
function wechatPay(params:{}, callback?:AnonymousFunction):void;
function wechatPay(params, callback) {
  return iCall('app.wechatPay', params, callback);
}
/** 支付宝支付
 * - 参数待定，所以暂时不可用
 */
function aliPay(params:{}, callback?:AnonymousFunction):void;
function aliPay(params, callback) {
  return iCall('app.aliPay', params, callback);
}
/** 强制横屏 */
function forceLandscapeScreen(callback?:AnonymousFunction):void;
function forceLandscapeScreen(callback) {
  return iCall('app.forceLandscapeScreen', '', callback);
}
/** 强制竖屏 */
function forcePortraitScreen(callback?:AnonymousFunction):void;
function forcePortraitScreen(callback) {
  return iCall('app.forcePortraitScreen', '', callback);
}
/** 是否是提审环境，适用于iOS */
function isReviewEnv(callback?:AnonymousFunction):boolean;
function isReviewEnv(callback) {
  return iCall('app.isReviewEnv', '', callback);
}
/** 调用原生视频播放器 */
function openVideo(params:OpenVideoParams, callback?:AnonymousFunction):void;
function openVideo(params, callback) {
  return iCall('app.openNativeVideoPlayer', params, callback);
}
/** 微信朋友圈分享 */
function shareWechatTimeline(params:ShareWechatParams, callback?:AnonymousFunction):void;
function shareWechatTimeline(params, callback) {
  return iCall('share_wechat_timeline', {
    image_base64: params.imageBase64,
  }, callback);
}
/** 微信好友分享 */
function shareWechatFriends(params:ShareWechatParams, callback?:AnonymousFunction):void;
function shareWechatFriends(params, callback) {
  return iCall('share_wechat_session', {
    image_base64: params.imageBase64,
  }, callback);
}
/** 复制链接到粘贴板 */
function copyLink(params:CopyLinkParams, callback?:AnonymousFunction):void;
function copyLink(params, callback) {
  return iCall('copy_link', {
    image_base64: params.imageBase64,
  }, callback);
}
/** 保存图片 */
function saveImage(params:ShareWechatParams, callback?:AnonymousFunction):void;
function saveImage(params, callback) {
  return iCall('save_photo', {
    image_base64: params.imageBase64,
  }, callback);
}
/** ios内购 */
function iosPurchase(params:IosPurchaseParams, callback?:IosPurchaseCallback):void;
function iosPurchase(params, callback) {
  return iCall('in_app_purchase', {
    term_id: params.termId,
    app_product_id: params.appProductId,
  }, callback);
}
/** 获取APP版本号 */
function getAppVersion(callback?:AnonymousFunction):string;
function getAppVersion(callback) {
  return iCall('get_app_version', '', callback);
}
/** 打开指定公众号，其实只是复制微信名称到粘贴板而已(╯▽╰)
 * @returns 返回唤起微信是否成功
 */
function openWechatOfficial(name:string, callback?:AnonymousFunction):boolean;
function openWechatOfficial(params, callback) {
  const success:'success'|'fail' = iCall('open_wechat_official_account', params, callback);
  return success === 'success';
}
/** 是否安装了微信 */
function getHasWechat(callback?:AnonymousFunction):boolean;
function getHasWechat(callback) {
  return iCall('is_wechat_installed', '', callback);
}
/** 获取用户id */
function getUserId(callback?:AnonymousFunction):string;
function getUserId(callback) {
  return iCall('get_user_id', '', callback);
}
/** 展示加载失败界面 */
function showFailurePage(callback?:AnonymousFunction):string;
function showFailurePage(callback) {
  return iCall('show_failure_view', '', callback);
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
