import {useRouter} from 'next/router';
import React, {FC, memo, useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';

import {
  HeaderContainer,
  LogoContainer,
  MenuContainer,
  MenuItemContainer,
} from './styles';

import {userState} from '@/store/user';
import {walletState} from '@/store/wallet';
import {SvgIcon} from '@/uikit';
import {popUpLogin} from '@/utils';

export const Header: FC = memo(() => {
  const router = useRouter();
  const [user] = useRecoilState(userState);
  const [scrollTop, setScrollTop] = useState(0);
  const [wallet, setWallet] = useRecoilState(walletState);

  useEffect(() => {
    // const fps: any = document.getElementsByClassName('full-page-section');
    // fps.forEach((fp: any) => {
    //   fp?.addEventListener('scroll', handleScrollListener);
    // });
    window.addEventListener('scroll', handleScrollListener);
    const homeDom: any = document.getElementById('home-pape-container');
    homeDom?.addEventListener('scroll', handleScrollListener);
    return () => {
      window.removeEventListener('scroll', handleScrollListener);
      homeDom?.removeEventListener('scroll', handleScrollListener);
      // fps.forEach((fp: any) => {
      //   fp?.removeEventListener('scroll', handleScrollListener);
      // });
    };
  }, []);

  const handleScrollListener = (e: any) => {
    // console.log(document.scrollingElement?.scrollTop);
    // console.log(e.target.scrollTop);
    setScrollTop(
      document.scrollingElement?.scrollTop || e.target.scrollTop || 0
    );
  };

  // logo点击事件
  const handleLogoClick = () => {
    router.push('/');
  };
  // wallet点击事件
  const handleWalletClick = () => {
    popUpLogin(wallet.visible);
  };
  // 路由跳转
  const handleGotoClick = (url: string) => {
    if (wallet.visible) {
      popUpLogin(wallet.visible);
    } else {
      router.push(url);
    }
  };
  return (
    <HeaderContainer
      style={{
        background:
          router.pathname === '/'
            ? scrollTop < screen?.height
              ? 'transparent'
              : 'rgb(17,17,17)'
            : scrollTop < 100
            ? `rgba(17,17,17, ${scrollTop > 0 ? 1 : 0})`
            : 'rgb(17,17,17)',
      }}
      // style={{
      //   background:
      //     scrollTop < 100
      //       ? `rgba(17,17,17, ${scrollTop / 100})`
      //       : 'rgb(17,17,17)',
      // }}
      // style={{
      //   background: scrollTop ? 'rgba(17,17,17, 1)' : 'rgba(17,17,17, 0)',
      // }}
    >
      {/* <a href='/#firstPage'> */}
      <LogoContainer onClick={handleLogoClick}>
        <SvgIcon height={24} name='logo-icon' width={121} />
      </LogoContainer>
      {/* </a> */}
      <MenuContainer>
        {/* <Auth>
          <MenuItemContainer>
            <SvgIcon height={32} name='potion-icon' width={32} />1
          </MenuItemContainer>
        </Auth> */}

        <MenuItemContainer
          style={{display: 'block'}}
          onClick={() => {
            handleGotoClick('/compose');
          }}
        >
          <SvgIcon height={32} name='skin-icon' width={32} />
        </MenuItemContainer>

        {user.account ? (
          <MenuItemContainer
            style={{
              width: 'auto',
            }}
            onClick={() => {
              handleGotoClick('/user');
            }}
          >
            <SvgIcon height={32} name='avator-icon' width={32} />
            {`${user?.account?.toString()?.slice(0, 5)}...${user?.account
              ?.toString()
              ?.slice(38)}`}
          </MenuItemContainer>
        ) : (
          <MenuItemContainer onClick={handleWalletClick}>
            <SvgIcon height={32} name='wallet-icon' width={32} />
          </MenuItemContainer>
        )}
      </MenuContainer>
      {/* wallet modal */}
      {/* <WalletModal
        show={walletVisible}
        onClose={() => {
          setWalletVisible(false);
        }}
      /> */}
    </HeaderContainer>
  );
});
Header.displayName = 'Header';

export default Header;
