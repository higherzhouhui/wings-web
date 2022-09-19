import {useSize} from 'ahooks';
import Link from 'next/link';
import {FC, memo, useEffect, useRef, useState} from 'react';
import Skeleton from 'react-loading-skeleton';

import type {NextPage} from 'next';

import {List} from '@/components';
import {getNftDetail, getUserNft} from '@/services/user';
import {ProductContainer, UserContainer, NftContainer} from '@/styles/user';
import {Row, Col, SvgIcon, Modal, Empty, Image} from '@/uikit';

import 'react-loading-skeleton/dist/skeleton.css';
export interface GetUserNftsPrpos {
  img_url: string;
  name: string;
  token_id: string;
  type: string;
}

export interface GetUserNftDetail {
  original_nft_name: string;
  original_nft_opensea: string;
  original_nft_percent: string;
  original_nft_url: string;
  wings_name: string;
  wings_nft_name: string;
  wings_nft_opensea: string;
  wings_nft_url: string;
  wings_opensea: string;
  wings_percent: string;
  wings_url: string;
}

const User: NextPage = () => {
  const [onlyCapsid, setOnlyCapsid] = useState(true);
  const loadMore = () => {};
  const contentRef: any = useRef(null);
  const size = useSize(contentRef);

  const staticData = Array.from({length: 4}).map(() => {
    return null;
  });

  const [nfts, setNfts] = useState<GetUserNftsPrpos[] | null[]>(staticData);
  const [showDetail, setShowDetail] = useState({
    show: false,
    type: '',
    id: '',
  });
  // 将两个选项的数据存储起来，避免重复请求
  const all_nfts = useRef<any>();
  const capsid_nfts = useRef<any>();
  // 防止正在请求的时候切换，导致数据与选项不一致（前一次请求数据覆盖会因为数据来得慢覆盖后一次）
  const isFiltering = useRef<any>();
  const getColnumber = (width?: number): number => {
    let num = 5;
    if (!width) {
      return num;
    }
    num = Math.round(width / 300);
    return Math.max(num, 2);
  };
  // 切换 所有/only capsid
  const filterCapsid = () => {
    if (!isFiltering.current) {
      setOnlyCapsid(!onlyCapsid);
    }
  };

  const displayNftDetail = async (nft: GetUserNftsPrpos) => {
    if (nft.type === 'wings') {
      setShowDetail({
        show: true,
        type: nft.type,
        id: nft.token_id,
      });
    }
  };
  // 监听切换按钮的变化
  useEffect(() => {
    getInitData(onlyCapsid);
  }, [onlyCapsid]);

  // 获取服务端数据
  const getInitData = async (flag: boolean) => {
    if (capsid_nfts.current && all_nfts.current) {
      if (flag) {
        setNfts(capsid_nfts.current);
      } else {
        setNfts(all_nfts.current);
      }
      return;
    }
    isFiltering.current = true;
    setNfts(staticData);
    getUserNft({OnlyCapsid: flag ? 1 : 0}).then((res: any) => {
      isFiltering.current = false;
      if (res.code === 200) {
        // 将数据保存，避免频繁请求数据
        if (flag) {
          capsid_nfts.current = res.data;
          setNfts(res.data);
        } else {
          all_nfts.current = res.data;
          setNfts(res.data);
        }
      }
    });
  };
  return (
    <>
      <UserContainer>
        <div className='fliterWrapper'>
          <div className='fliter'>
            <span className='text'>Capsid NFTs only</span>
            <div
              className={`slide ${onlyCapsid ? 'on' : 'off'}`}
              onClick={filterCapsid}
            >
              <div className={`circle ${onlyCapsid ? 'right' : 'left'}`} />
            </div>
          </div>
        </div>
        <main ref={contentRef}>
          <div className='content'>
            <List bottomHeight={0} onLoadMore={loadMore}>
              <Row>
                {nfts.map((nft: any, index: number) => (
                  <Col
                    colGutter={16}
                    gutter={16}
                    key={index}
                    span={getColnumber(size?.width)}
                  >
                    <Product
                      nft={nft}
                      onClick={() => {
                        displayNftDetail(nft);
                      }}
                    />
                  </Col>
                ))}
              </Row>
            </List>
            {nfts.length > 0 ? null : (
              <Empty text='You do not have any Capsid NFT, waiting for mint start' />
            )}
          </div>
        </main>
      </UserContainer>
      {showDetail.show ? (
        <NftDetail
          id={showDetail.id}
          type={showDetail.type}
          onClose={() => {
            setShowDetail({show: false, type: '', id: ''});
          }}
        />
      ) : null}
    </>
  );
};

type productProps = {
  nft: GetUserNftsPrpos | null;
  onClick: (nft: GetUserNftsPrpos) => void;
};
const Product: FC<productProps> = memo(({nft, onClick}) => {
  return (
    <ProductContainer>
      {nft ? (
        <>
          <div
            className='image'
            onClick={() => {
              onClick(nft);
            }}
          >
            <Image
              alt='nft'
              blurDataURL='/static/image/bx.png'
              layout='fill'
              placeholder='blur'
              src={nft.img_url || '/static/image/compose.jpg'}
            />
          </div>
          <p className='title'>{nft.name || 'Wings'}</p>
        </>
      ) : (
        <>
          <Skeleton className='image' />
          <Skeleton className='title' />
        </>
      )}
    </ProductContainer>
  );
});

Product.displayName = 'product';

type nftDetailProps = {
  type: string;
  id: string;
  onClose?: () => void;
};
const NftDetail: FC<nftDetailProps> = memo(({type, id, onClose}) => {
  const [detail, setDetail] = useState<GetUserNftDetail | null>(null);
  useEffect(() => {
    getNftDetail({type, token_id: id}).then((res: any) => {
      if (res.code === 200) {
        setDetail(res.data);
      }
    });
  }, []);
  return (
    <Modal
      visible
      backdrop='blur(10px)'
      borderRadius={0}
      height='auto'
      maxWidth='80%'
      width='1200px'
      onClose={onClose}
    >
      <NftContainer>
        {detail ? (
          <main>
            <div className='contentWrapper'>
              <div className='content'>
                <div className='top'>
                  <span className='title'>
                    {detail.wings_nft_name || 'Wings'}
                  </span>
                  {detail.wings_nft_opensea ? (
                    <Link passHref href={detail.wings_nft_opensea}>
                      <a target='_blank'>
                        <SvgIcon
                          className='svgWrapper'
                          height='100%'
                          name='nft-opensea'
                          width='100%'
                        />
                      </a>
                    </Link>
                  ) : null}
                </div>
                <h2 className='parentTitle'>Parent NFTs</h2>
                <div className='detailWrapper'>
                  <div className='detail'>
                    <aside className='left'>
                      <div className='detailImg'>
                        <Image
                          alt='nft'
                          layout='fill'
                          src={detail.wings_url || '/static/image/bx.png'}
                        />
                      </div>
                      <div className='description'>
                        {detail.wings_name || 'Wings #0000'}
                      </div>
                    </aside>
                    <aside className='right'>
                      <Link passHref href={detail.wings_opensea}>
                        <a target='_blank'>
                          <SvgIcon
                            className='detailsvg'
                            height='100%'
                            name='nft-opensea'
                            width='100%'
                          />
                        </a>
                      </Link>
                      <div className='fengexian' />
                      <div className='earning'>
                        Creators earning: {detail.wings_percent || '1%'}
                      </div>
                    </aside>
                  </div>
                  {detail.original_nft_url ? (
                    <div className='detail'>
                      <aside className='left'>
                        <div className='detailImg'>
                          <Image
                            alt='nft'
                            layout='fill'
                            src={detail.original_nft_url}
                          />
                        </div>
                        <div className='description'>
                          {detail.original_nft_name}
                        </div>
                      </aside>
                      <aside className='right'>
                        <Link passHref href={detail.original_nft_opensea}>
                          <a target='_blank'>
                            <SvgIcon
                              className='detailsvg'
                              height='100%'
                              name='nft-opensea'
                              width='100%'
                            />
                          </a>
                        </Link>
                        <div className='fengexian' />
                        <div className='earning'>
                          Creators earning:{' '}
                          {detail.original_nft_percent || '1%'}
                        </div>
                      </aside>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className='imageWrapper'>
              <div className='image'>
                <Image
                  alt='nft'
                  blurDataURL='/static/image/bx.png'
                  layout='fill'
                  placeholder='blur'
                  src={
                    detail.wings_nft_url ||
                    detail.wings_url ||
                    '/static/image/bx.gif'
                  }
                />
              </div>
            </div>
          </main>
        ) : (
          <main>
            <div className='contentWrapper'>
              <div className='content'>
                <Skeleton className='sktop' />
                <div className='detailWrapper'>
                  <Skeleton className='skdetail' />
                  <Skeleton className='skdetail' />
                </div>
              </div>
            </div>
            <div className='imageWrapper'>
              <div className='skWrapper'>
                <Skeleton className='sk' />
              </div>
            </div>
          </main>
        )}
      </NftContainer>
    </Modal>
  );
});

NftDetail.displayName = 'NftDetail';

export default User;
