import dynamic from 'next/dynamic';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, useEffect} from 'react';

import {WalletModal} from '../walletModal';
import {LayoutContainer} from './styles';

import {progressInit} from '@/utils';
const Header = dynamic(import('./header'), {ssr: false});

export const Layout = memo(({children}) => {
  const router = useRouter();
  useEffect(() => {
    progressInit(router);
  }, []);
  return (
    <>
      <Head>
        <title>Capsid Wings</title>
        <meta
          content='width=device-width, initial-scale=1.0, user-scalable=no'
          name='viewport'
        />
      </Head>
      <Header />
      <LayoutContainer>{children}</LayoutContainer>
      <WalletModal />
    </>
  );
});

Layout.displayName = 'Layout';
