import {NextRouter, useRouter} from 'next/router';
import {FC, memo, useContext, useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';

import {WalletContainer} from './styles';

import {Loading} from '@/components';
import {contractAddress, abi} from '@/config/contract';
import {
  Web3Context,
  useSigner,
  useEthersUtils,
  useContract,
} from '@/ethers-react';
import {getNonce, onLogin} from '@/services/user';
import {userState} from '@/store/user';
import {walletState} from '@/store/wallet';
import {Modal, SvgIcon} from '@/uikit';
import {EventTypes, Event, showTip, IMessageType} from '@/utils';

type IProps = {
  show?: boolean;
  mask?: boolean;
  onClose?: () => void;
};

export const WalletModal: FC<IProps> = memo(({show, onClose}) => {
  const router: NextRouter = useRouter();
  const {account, connectMetaMask, onChangeAccount} = useContext(Web3Context);
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState<boolean>(false);
  const {getSignMessage} = useSigner();
  const {getHashId} = useEthersUtils();
  const [wallet, setWallet] = useRecoilState(walletState);
  const [showWallet, setShowWallet] = useState(false);
  const {getContract} = useContract();

  useEffect(() => {
    const token = localStorage.getItem('x-token');
    if (account) {
      if (!token || !user.token || (user.account && user.account !== account)) {
        onLoginRequest(account);
      }
    }
  }, [account]);

  const clearLoginInfo = () => {
    localStorage.removeItem('x-token');
    setUser({
      id: null,
      token: null,
      account: null,
    });
    setWallet({
      visible: true,
    });
    router.push('/');
  };

  const useContactJudgeIsLogin = () => {
    getContract(contractAddress, abi).then((contract: any) => {
      contract.signer.getAddress().catch((error: any) => {
        clearLoginInfo();
      });
    });
  };

  useEffect(() => {
    onChangeAccount((accounts: string[]) => {
      if (!accounts.length) {
        clearLoginInfo();
      }
    });
    // 解决手动操作metamask断开的bug
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useContactJudgeIsLogin();
    const onMessage = (status: boolean) => {
      setShowWallet(status);
    };
    Event.addListener(EventTypes.LoginModel, onMessage);
    return () => {
      Event.removeListener(EventTypes.LoginModel, onMessage);
    };
  }, []);

  // 获取nonce请求
  const getNonceRequest = async (account: string) => {
    const res = await getNonce({
      address: account,
    });
    if (res.code === 200) {
      return res.data;
    }
    return null;
  };
  // 登录请求
  const onLoginRequest = async (account: string) => {
    setLoading(true);
    const nonce = await getNonceRequest(account);
    const msg = getHashId(`this is a pd1 ${nonce}`);
    const signature = await getSignMessage(msg);
    if (nonce) {
      if (!signature.status) {
        setLoading(false);
        showTip({type: IMessageType.ERROR, content: signature.sign || ''});
        return;
      }
      const res = await onLogin({
        address: account,
        signature: signature.sign,
      });
      if (res.code === 200) {
        const {token, id} = res.data;
        localStorage.setItem('x-token', res.data.token);
        setUser({
          ...user,
          id,
          token,
          account,
        });
        onClose && onClose();

        setWallet({visible: false});
        router.reload();

        // 判断是否是登录页面
        // if (router.pathname === '/login') {
        //   // 判断是否有回掉地址
        //   const {redirectUrl} = router.query;
        //   if (redirectUrl && typeof redirectUrl === 'string') {
        //     router.push(redirectUrl);
        //   } else {
        //     router.push('/');
        //   }
        // }
        // // 切换账号刷新页面
        // if (router.pathname === '/user') {
        //   router.reload();
        // }
      }
    }
    setLoading(false);
  };

  // 登录
  const handleMetaMaskLoginClick = async () => {
    if (loading) {
      return;
    }
    if (!account) {
      connectMetaMask();
      return;
    }
    onLoginRequest(account);
  };
  return (
    <Modal
      height={206}
      visible={showWallet}
      width={400}
      onClose={() => {
        onClose && onClose();
        setShowWallet(false);
      }}
    >
      <WalletContainer>
        <h3>Connect to a wallet</h3>
        <div
          className='wallet-item-box active'
          onClick={handleMetaMaskLoginClick}
        >
          <div className='left'>Metamask</div>
          <div className='right'>
            <SvgIcon height={24} name='metamask-icon' width={24} />
          </div>
        </div>
        {loading && (
          <div className='loading'>
            <Loading />
          </div>
        )}
        <div className='wallet-item-box'>
          <div className='left'>WalletConnect</div>
          <div className='right'>
            <span>Coming Soon</span>
            <SvgIcon height={24} name='wallet-connect-icon' width={24} />
          </div>
        </div>
      </WalletContainer>
    </Modal>
  );
});

WalletModal.displayName = 'WalletModal';
