import {HomeNftsProps} from './common.d';

import service from '@/utils/request';

// 获取首页数据
export const getHomeNfts = (params: HomeNftsProps) => {
  return service<any>({
    url: '/base/home-page',
    method: 'GET',
    params,
  });
};
