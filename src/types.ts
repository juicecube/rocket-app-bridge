/** 匿名函数 */
export type AnonymousFunction = () => void;

export type ToastParams = {
  msg:string;
}
export type RouterParams = {
  router:string;
}
export type OpenVideoParams = {
  url:string;
}
export type ShareWechatParams = {
  imageBase64:string;
}
export type CopyLinkParams = {
  url:string;
}
export type IosPurchaseParams = {
  appProductId:string; // 内购id
  termId:string;
}
/** 失败时0，成功是1 */
export type IosPurchaseCallback = (success:'0'|'1') => void;
