import {MintDataResponse, MintNftProps} from './nft.d';

import service from '@/utils/request';

// 获取mint后的NFT
export const getNft = () => {
  return service({
    url: '/nft/v1/mint',
    method: 'GET',
  });
};

// 获取Collections
export const getCollections = () => {
  return service({
    url: '/nft/v1/collections',
    method: 'GET',
  });
};

// 获取mint数据
export const getMintData = () => {
  return service<MintDataResponse>({
    url: '/nft/v1/mint_data',
    method: 'GET',
  });
};

// 获取mint数据
export const mintNft = (data: MintNftProps) => {
  return service({
    url: '/nft/v1/mint',
    method: 'POST',
    data,
  });
};
