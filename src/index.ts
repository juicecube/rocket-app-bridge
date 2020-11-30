import dsBridge from 'dsbridge';

export {
  
};

export const RAB = {
  showLoading: () => dsBridge.call('app.showNativeLoading', ''),
  hideLoading: () => dsBridge.call('app.hideNativeLoading', ''),
  showToast: (params:{ msg:string }) => dsBridge.call('app.showNativeToast', params),
  /** 路由跳转 */
  navigateTo: (params:{ router:string }) => dsBridge.call('app.routerNavigateTo', params),
};

export default RAB;
