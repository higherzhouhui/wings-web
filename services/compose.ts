import service from '@/utils/request';

export interface DecomposeProps {
  id: number;
}
export interface ComposeProps {
  contract_address: string;
  img: string;
  token_id: string;
  wings_token_id: string;
  name: string;
}
// 解组ID
export const decomposeRequest = (data: DecomposeProps) => {
  return service<string>({
    url: `/nft/v1/decompose/${data.id}`,
    method: 'POST',
  });
};

// 解组页面数据
export const getDecomposeNfts = () => {
  return service<string>({
    url: '/nft/v1/decompose',
    method: 'GET',
  });
};
// 组合
export const composeRequest = (data: ComposeProps) => {
  return service<string>({
    url: '/nft/v1/compose',
    method: 'POST',
    data,
  });
};
