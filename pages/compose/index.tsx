import {useSize} from 'ahooks';
import {BigNumber} from 'ethers';
import {useRouter} from 'next/router';
import {FC, memo, useEffect, useRef, useState} from 'react';
import Skeleton from 'react-loading-skeleton';
import {useRecoilState} from 'recoil';

import type {NextPage} from 'next';

import {List, SuccessModal, OptionsDrawer} from '@/components';
import {abi, contractAddress} from '@/config/avrContract';
import {useContract} from '@/ethers-react';
import {
  composeRequest,
  decomposeRequest,
  getDecomposeNfts,
} from '@/services/compose';
import {getNft} from '@/services/nft';
import {getUserWalletNfts} from '@/services/user';
import {userState} from '@/store/user';
import {ComponseContainer, DeCompProduct, ImageWrapper} from '@/styles/compose';
import {Row, Col, Button, Image, Empty} from '@/uikit';
import {IMessageType, showTip} from '@/utils';

import 'react-loading-skeleton/dist/skeleton.css';

const Compose: NextPage = () => {
  const router = useRouter();
  const asideRef: any = useRef(null);
  const size = useSize(asideRef);
  const decomposeRef: any = useRef(null);
  const mainSize = useSize(decomposeRef);
  const [chooseWings, setChooseWings] = useState(0);
  const [chooseProject, setChooseProject] = useState(0);
  const [compose, setCompose] = useState(true);
  const [showColl, setShowColl] = useState(false);
  const [modalProps, setModalProps] = useState({
    visiable: false,
    loading: true,
  });
  const staticData = [null, null, null, null, null, null, null, null];
  const [products, setProducts] = useState<GlobalNft.Nft[] | null[]>(
    staticData
  );
  const [wings, setWings] = useState<GlobalNft.Nft[] | null[]>(staticData);
  const [projects, setProjects] = useState<GlobalNft.WalletNft[] | null[]>(
    staticData
  );
  const [user] = useRecoilState(userState);

  const {getContract} = useContract();

  const shiftDecompose = () => {
    setCompose(false);
    getDecomposeNfts().then((res: any) => {
      if (res.code === 200) {
        setProducts(res.data);
      }
    });
  };

  const getColnumber = (width?: number): number => {
    let num = 2;
    if (!width) {
      return num;
    }
    num = Math.round(width / 224);
    return num;
  };
  const getProductColumn = (width?: number): number => {
    let num = 5;
    if (!width) {
      return num;
    }
    num = Math.round(width / 276);
    return num;
  };
  const loadMore = () => {};

  const composeSubmit = async () => {
    const cwing = wings[chooseWings];
    const cprject = projects[chooseProject];
    if (cwing && cprject) {
      setModalProps({visiable: true, loading: true});
      composeRequest({
        contract_address: cprject.contract_address,
        img: cprject.img,
        token_id: cprject.token_id,
        wings_token_id: cwing.wings_token_id,
        name: cprject.name,
      })
        .then(async (res: any) => {
          try {
            const contract = await getContract(contractAddress, abi);
            // 切换区块链
            const chainId = await contract.signer.getChainId();
            if (chainId !== 1) {
              setModalProps({visiable: false, loading: false});
              return;
            }
            // eslint-disable-next-line new-cap
            const price: BigNumber = await contract.PRICE();
            // eslint-disable-next-line new-cap
            await contract.MintNFT(
              user.account,
              cwing.wings_token_id,
              0,
              cprject.token_id,
              {
                value: price,
              }
            );
            setModalProps({visiable: true, loading: false});
          } catch (err: any) {
            const message =
              err?.error?.message || err?.message || 'operation failed !';
            showTip({type: IMessageType.ERROR, content: message});
            setModalProps({visiable: false, loading: false});
          }
        })
        .catch(() => {
          showTip({
            type: IMessageType.ERROR,
            content: 'Network error, please try again!',
          });
        });
    }
  };
  const onCloseModal = () => {
    setModalProps({visiable: false, loading: false});
  };

  const decomposeClick = (nft: GlobalNft.Nft) => {
    decomposeRequest({id: nft.id}).then((res: any) => {
      let list: any = products;
      if (products.length) {
        list = list.filter((item: GlobalNft.Nft) => {
          return item.id !== nft.id;
        });
        setProducts(list);
      }
      showTip({type: IMessageType.SUCCESS, content: 'Decomposition succeeded'});
    });
  };

  useEffect(() => {
    getInitData();
  }, []);

  const getInitData = async () => {
    getNft().then((res: any) => {
      if (res?.code === 200) {
        setWings(res.data);
      }
    });
    let walletNft: any[] = [];
    getUserWalletNfts('Azuki').then((res: any) => {
      const data = res.data;
      walletNft = walletNft.concat(data);
      setProjects(walletNft);
      getUserWalletNfts('BAYC').then((res: any) => {
        const data = res.data;
        walletNft = walletNft.concat(data);
        setProjects(walletNft);
        getUserWalletNfts('Doodles').then((res: any) => {
          const data = res.data;
          walletNft = walletNft.concat(data);
          setProjects(walletNft);
        });
      });
    });
  };
  return (
    <ComponseContainer style={{overflow: compose ? 'hidden' : 'auto'}}>
      <main>
        <aside className='left' style={{opacity: compose ? 1 : 0}}>
          <h1 className='title'>CHOOSE A WINGS</h1>
          <div className='wings' ref={asideRef}>
            <List bottomHeight={0} onLoadMore={loadMore}>
              <Row>
                {wings.map((nft: GlobalNft.Nft | null, index: number) => (
                  <Col
                    colGutter={24}
                    gutter={20}
                    key={index}
                    span={getColnumber(size?.width)}
                  >
                    <ImageWrapper
                      className={
                        chooseWings === index ? 'choose' : 'imageBorder'
                      }
                      style={{
                        margin: getColnumber(size?.width) === 1 ? 'auto' : '',
                        width: getColnumber(size?.width) === 1 ? '80%' : '100%',
                        paddingBottom:
                          getColnumber(size?.width) === 1 ? '80%' : '100%',
                      }}
                      onClick={() => {
                        setChooseWings(index);
                      }}
                    >
                      {nft ? (
                        <Image
                          alt='wings'
                          layout='fill'
                          src={
                            nft.wings_url ||
                            'https://json.capsid.one/temp/188.png'
                          }
                        />
                      ) : (
                        <Skeleton className='sk' />
                      )}
                    </ImageWrapper>
                  </Col>
                ))}
              </Row>
              {wings.length > 0 ? null : (
                <Empty text='You do not have any Capsid WINGS...' />
              )}
            </List>
          </div>
        </aside>
        <section>
          {/* <div className='comOrdecom'>
            <span
              className={`title marginR ${compose ? 'active' : 'disable'}`}
              onClick={() => {
                setCompose(true);
              }}
            >
              Compose
              {compose ? <span className='underline' /> : null}
            </span>
            <span
              className={`title ${!compose ? 'active' : 'disable'}`}
              onClick={shiftDecompose}
            >
              Decompose
              {!compose ? <span className='underline' /> : null}
            </span>
          </div> */}
          <div className='composeWrapper' style={{opacity: compose ? 1 : 0}}>
            <div className='imageWrapper'>
              <Image
                alt='compose'
                layout='fill'
                src='/static/image/compose.jpg'
              />
            </div>
            <div className='buttonWrapper'>
              <Button
                borderRadius={8}
                // disabled={!wings.length || !projects.length}
                fontSize='1rem'
                height='3.5rem'
                variant='primary'
                width='100%'
                onClick={composeSubmit}
              >
                COMPOSE
              </Button>
            </div>
          </div>
          <div
            className='decomposeWrapper'
            ref={decomposeRef}
            style={{
              opacity: !compose ? 1 : 0,
              zIndex: !compose ? 99 : -1,
              marginTop: !compose ? '48px' : 0,
            }}
          >
            <List bottomHeight={0} onLoadMore={loadMore}>
              <Row>
                {products.map((nft: any, index: number) => (
                  <Col
                    colGutter={36}
                    gutter={36}
                    key={index}
                    span={getProductColumn(mainSize?.width)}
                  >
                    <Product
                      handleClick={() => {
                        decomposeClick(nft);
                      }}
                      nft={nft}
                    />
                  </Col>
                ))}
              </Row>
              {products.length > 0 ? null : (
                <Empty text='You do not have any Composed Wings.' />
              )}
            </List>
          </div>
        </section>
        <aside className='right' style={{opacity: compose ? 1 : 0}}>
          <h1 className='title'>CHOOSE A PROJECT</h1>
          <div className='wings'>
            <List bottomHeight={0} onLoadMore={loadMore}>
              <Row>
                {projects.map((nft: any, index: number) => (
                  <Col
                    colGutter={24}
                    gutter={20}
                    key={index}
                    span={getColnumber(size?.width)}
                  >
                    <ImageWrapper
                      className={
                        chooseProject === index ? 'choose' : 'imageBorder'
                      }
                      style={{
                        margin: getColnumber(size?.width) === 1 ? 'auto' : '',
                        width: getColnumber(size?.width) === 1 ? '80%' : '100%',
                        paddingBottom:
                          getColnumber(size?.width) === 1 ? '80%' : '100%',
                      }}
                      onClick={() => {
                        setChooseProject(index);
                      }}
                    >
                      {nft ? (
                        <Image
                          alt='wings'
                          layout='fill'
                          src={
                            nft.img ||
                            nft.wings_url ||
                            'https://json.capsid.one/temp/188.png'
                          }
                        />
                      ) : (
                        <Skeleton className='sk' />
                      )}
                    </ImageWrapper>
                  </Col>
                ))}
              </Row>
              {projects.length > 0 ? null : (
                <Empty text="You do not have any our appoint Collection's NFT..." />
              )}
            </List>
          </div>
        </aside>
        {/* <div
          className='collection'
          style={{opacity: compose ? 1 : 0}}
          onClick={() => {
            setShowColl(!showColl);
          }}
        >
          <span className='text'>Collections</span>
        </div> */}
        <SuccessModal
          description='Please wait for 3 days to see your amazing Composed Wings.'
          loading={modalProps.loading}
          title='COMPOSE REQUEST SUBMIT SUCCESSFULLY'
          visible={modalProps.visiable}
          onClose={onCloseModal}
        />
      </main>
      {/* Collection Drawer */}
      <OptionsDrawer
        data={[
          {
            title: 'wings',
            options: [
              {
                label: 'Owned',
                value: 'Owned',
              },
              {
                label: 'Borrowed',
                value: 'Borrowed',
              },
            ],
          },
          {
            title: 'project',
            options: [
              {
                label: 'Owned',
                value: 'Owned',
              },
              {
                label: 'Borrowed',
                value: 'Borrowed',
              },
            ],
          },
        ]}
        visible={showColl}
        onClose={() => {
          setShowColl(false);
        }}
        onQuery={(title: string, value: any) => {
          console.log(title, value);
        }}
      />
    </ComponseContainer>
  );
};

type ProductProps = {
  nft: GlobalNft.Nft | null;
  handleClick: () => void;
};
const Product: FC<ProductProps> = memo(({nft, handleClick}) => {
  const [loading, setLoading] = useState(false);
  const handleDecomposeClick = () => {
    setLoading(true);
    handleClick();
  };
  return (
    <DeCompProduct>
      {nft ? (
        <>
          <div className='image'>
            <Image alt='nft' layout='fill' src={nft.wings_nft_url} />
          </div>
          <p className='productName'>{nft.wings_nft_name}</p>
          <div className='mask'>
            <Button
              fontSize='16px'
              height='40px'
              isLoading={loading}
              variant='primary'
              width='160px'
              onClick={handleDecomposeClick}
            >
              Decompose
            </Button>
          </div>
        </>
      ) : (
        <>
          <Skeleton className='sk' />
          <Skeleton className='productName' />
        </>
      )}
    </DeCompProduct>
  );
});

Product.displayName = 'product';

export default Compose;
