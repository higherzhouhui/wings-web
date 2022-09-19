import {
  NonceParams,
  LoginParams,
  GetUserNftParams,
  GetNftDetailParams,
} from './user.d';

import service from '@/utils/request';

// 获取nonce
export const getNonce = (data: NonceParams) => {
  return service<string>({
    url: '/user/v1/nonce',
    method: 'POST',
    data,
  });
};

// 登录
export const onLogin = (data: LoginParams) => {
  return service<any>({
    url: '/user/v1/login',
    method: 'POST',
    data,
  });
};

// 获取用户名下的ntf
export const getUserNft = (params: GetUserNftParams) => {
  return service({
    url: `/user/v1/all_nfts/${params.OnlyCapsid}`,
    method: 'GET',
  });
};

// 获取nft的详情
export const getNftDetail = (params: GetNftDetailParams) => {
  return service({
    url: `/user/v1/nft/${params.type}/${params.token_id}`,
    method: 'GET',
  });
};

// 获取nft的详情
export const getUserWalletNfts = (collection: string) => {
  return service({
    url: `/user/v1/nfts/${collection}`,
    method: 'GET',
  });
};

// 快速登录
export const quickLoginFromNfr = (sign: string) => {
  return service({
    url: `/user/v1/quick_login/${sign}`,
    method: 'POST',
  });
};
