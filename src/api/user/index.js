import { httpGet, httpPost } from '../../utils/http';
/**
 * @description 用户登录
 */
export const userlogin = data => {
   return httpPost('/api/user/login', data);
};
/**
 * @description 用户信息
 */
export const getuser = () => {
   return httpGet('/api/user/get/login');
};
/**
 * @description 用户退出登录
 */
export const userout = () => {
   return httpPost('/api/user/logout');
};
