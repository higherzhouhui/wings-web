import {useRouter} from 'next/router';
import React, {useState, useRef, useEffect} from 'react';
import Skeleton from 'react-loading-skeleton';
import {useRecoilState} from 'recoil';

import type {NextPage} from 'next';

import {SuccessModal, Loading} from '@/components';
import {abi, contractAddress} from '@/config/contract';
import {getMerkleProof} from '@/config/whitelist';
import {useContract, useEthersUtils} from '@/ethers-react';
import {getMintData, mintNft} from '@/services/nft';
import {MintDataResponse} from '@/services/nft.d';
import {quickLoginFromNfr} from '@/services/user';
import {userState} from '@/store/user';
import {walletState} from '@/store/wallet';
import {MintContainer, MintContentContainer} from '@/styles/mint';
import {SvgIcon, Button} from '@/uikit';
import {showTip, IMessageType} from '@/utils';

import 'react-loading-skeleton/dist/skeleton.css';

const Mint: NextPage = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const {getContract} = useContract();
  const {getEtherPrice} = useEthersUtils();
  const [loading, setLoading] = useState<boolean>(false);
  const [modalProps, setModalProps] = useState({
    visiable: false,
    loading: true,
  });
  const [user, setUser] = useRecoilState(userState);
  const [wallet, setWallet] = useRecoilState(walletState);

  const [collections, setCollections] = useState<
    {label: string; value: string}[]
  >([]);
  const [mintData, setMintData] = useState<MintDataResponse | null>(null);
  const [mintNum, setMintNum] = useState<number>(1);
  const {sign} = router.query;
  useEffect(() => {
    if (sign) {
      quickLoginFromNfr(sign as any).then((res: any) => {
        if (res.code === 200) {
          // 钱包也要重新连接，需要产品确认流程
          const {token, address} = res.data;
          localStorage.setItem('x-token', token);
          setUser({
            id: null,
            token,
            account: address,
          });
          setWallet({visible: false});
          getMintDataRequest();
        }
      });
    } else {
      getMintDataRequest();
      // getCollectionsRequest();
    }
  }, [sign]);

  // 获取mint data
  const getMintDataRequest = async () => {
    const res = await getMintData();
    if (res.code === 200) {
      setMintData(res.data);
    }
  };

  // 获取 Collections
  // const getCollectionsRequest = async () => {
  //   const res: any = await getCollections();
  //   if (res.code === 200) {
  //     const arr: {label: string; value: string}[] = [];
  //     Object.keys(res.data ?? {}).forEach((key: string) => {
  //       arr.push({
  //         label: key,
  //         value: res.data[key],
  //       });
  //     });
  //     setCollections(arr);
  //   }
  // };
  // 开始mint
  const handleMintClick = async () => {
    try {
      setLoading(true);
      // 发送铸造申请
      const mintRes = await mintNft({
        mint_num: mintNum,
      });
      if (mintRes.code !== 200) {
        return;
      }
      // 获取proof
      const proof = getMerkleProof(user.account as any);
      // 链接合约
      const contract = await getContract(contractAddress, abi);
      // 切换区块链
      const chain = await contract.signer.getChainId();
      if (chain !== 1) {
        return;
      }
      // eslint-disable-next-line new-cap
      // const price = await contract.PRICE();
      await contract.mint(mintNum, proof, {
        value: getEtherPrice((mintData?.mint_amount || 0) * mintNum),
      });
      setModalProps({visiable: true, loading: false});
    } catch (err: any) {
      let message = err?.error?.message || err?.message || 'operation failed !';
      if (message && message?.includes('gas * price')) {
        message = "You don't have enough eth in your wallet";
      }
      showTip({
        type: IMessageType.ERROR,
        content: message,
      });
    } finally {
      setLoading(false);
    }
  };

  // 关闭success modal
  const onCloseModal = () => {
    setModalProps({visiable: false, loading: false});
  };

  // 成功弹出框
  const handleSuccessQuery = () => {
    onCloseModal();
    router.push('/user');
  };

  return (
    <MintContainer ref={contentRef}>
      <MintContentContainer>
        <div className='wing-box'>
          <div className='wings-text'>
            <p>WINGS</p>
          </div>
          <div className='wing-icon'>
            <SvgIcon name='mint-wings' />
          </div>
          <div
            className='btn-box'
            style={{
              // opacity: mintData ? 1 : 0,
              opacity: 1,
            }}
          >
            {/* <div className='priceWrapper'>
              <SvgIcon height={50} name='eth-icon' width={50} />
              <span className='price'>{mintData?.mint_amount || 0.0}</span>
            </div> */}
            <div className='describe'>
              This sale allows only 1 mint per wallet
            </div>
            <div className='number-box'>
              <div
                className='btn-item-box'
                onClick={() => {
                  // setMintNum(1);
                }}
              >
                <SvgIcon name='reduce-icon' />
              </div>
              <div className='value'>{mintNum}</div>
              <div
                className='btn-item-box'
                onClick={() => {
                  // setMintNum(mintData?.mint_limit || 1);
                }}
              >
                <SvgIcon name='add-icon' />
              </div>
            </div>
            <Button
              borderRadius={8}
              disabled={
                !!(
                  mintData?.mint_total &&
                  mintData?.current_mint_num === mintData?.mint_total
                ) || !mintData
              }
              // disabled
              fontSize={24}
              height={64}
              variant='primary'
              width={400}
              onClick={() => {
                !loading && handleMintClick();
              }}
            >
              {loading ? (
                <Loading size='large' />
              ) : mintData?.mint_total &&
                mintData?.current_mint_num === mintData?.mint_total ? (
                'Sell Out'
              ) : (
                'FREEMINT'
              )}
            </Button>
          </div>
        </div>
      </MintContentContainer>
      <div className='num-tip-box'>
        {mintData ? (
          <>
            <p className='mindes'>Mint Price : Free</p>
            <p className='mindes'>You Minted : {mintData?.user_mint_num} / 1</p>
            <p className='mindes'>
              Total Minted : {mintData?.current_mint_num} /{' '}
              {mintData?.mint_total}
            </p>
          </>
        ) : (
          <>
            <Skeleton className='mindes' />
            <Skeleton className='mindes' />
            <Skeleton className='mindes' />
          </>
        )}
      </div>

      {/* mint成功提示框 */}
      <SuccessModal
        description=''
        loading={modalProps.loading}
        title='Mint Successfully!'
        visible={modalProps.visiable}
        onClose={onCloseModal}
        onQuery={handleSuccessQuery}
      />
    </MintContainer>
  );
};

export default Mint;
