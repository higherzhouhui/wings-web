declare namespace GlobalNft {
  interface Nft {
    contract_address: string;
    id: number;
    s3_url: string; // 蓝筹的图片
    token_id: string;
    wings_nft_url: string; // 合成蓝筹的翅膀
    wings_token_id: string;
    wings_url: string; // 画的翅膀
    wings_nft_name: string;
  }
  interface WalletNft {
    contract_address: string;
    img: string;
    name: string;
    token_id: string;
  }
}
