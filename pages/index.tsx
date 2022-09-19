import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {FC, useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';

import type {NextPage} from 'next';

import {MyCollapse, Footer} from '@/components';
import {twitterUrl, capsidOneUrl, discordUrl} from '@/config';
import {walletState} from '@/store/wallet';
import {
  HomeContainer,
  HomeOneContainer,
  HomeTwoContainer,
  HomeThreeContainer,
  CommingComp,
  HomeMobileContainer,
} from '@/styles/home';
import {SvgIcon, Button, Modal} from '@/uikit';
import {popUpLogin} from '@/utils';
const anchors = ['firstPage', 'secondPage', 'thirdPage'];
const MySection = ({children}: any) => {
  return (
    <div
      className='section'
      style={{
        height: '100vh',
      }}
    >
      {children}
    </div>
  );
};

const FirstPage = () => {
  const router = useRouter();
  const [wallet, setWallet] = useRecoilState(walletState);
  const handButterfly = (url: string) => {
    if (wallet.visible) {
      popUpLogin(wallet.visible);
    } else {
      handleGoToClick(url);
    }
  };
  const handleGoToClick = (url: string) => {
    router.push(url);
  };
  return (
    <HomeOneContainer>
      <div
        className='butterfly-box'
        onClick={() => {
          handButterfly('/freesoulsmint');
        }}
      >
        <div className='butterfly-item-box'>
          <SvgIcon name='home-wings' />
        </div>
        <div className='butterfly-item-box butterfly-item-bg-box'>
          <SvgIcon name='home-wings-bg' />
        </div>
      </div>
      {/* <div className='butterfly-box'>
        <div className='butterfly-item-box'>
          <SvgIcon name='home-wings' />
        </div>
        <div className='butterfly-item-box butterfly-item-bg-box'>
          <SvgIcon name='home-wings-bg' />
        </div>
      </div> */}
      <div className='slogan-box'>
        {/* <SvgIcon name='home-logo' /> */}
        <span>WINGS</span>
      </div>
      <div
        className='tombstone-box'
        onClick={() => {
          handleGoToClick('/story/timeline');
        }}
      >
        <Image
          alt='tombstone'
          className='tomb-1'
          layout='fill'
          src='/static/image/tomb-1.png'
        />
        <Image
          alt='tombstone'
          className='tomb-2'
          layout='fill'
          src='/static/image/tomb-2.webp'
        />
        <Image
          alt='tombstone'
          className='tomb-3'
          layout='fill'
          src='/static/image/tomb-3.webp'
        />
      </div>
    </HomeOneContainer>
  );
};

type secondPageProps = {
  onClickDiscord?: () => void;
};
const SecondPage: FC<secondPageProps> = ({onClickDiscord}) => {
  useEffect(() => {
    let isPlay = false;
    const scrollFnc = (e: any) => {
      const scrollTop = document.scrollingElement?.scrollTop || 0;
      const videoDom = document.getElementById('MyVideo');
      const top = videoDom?.getBoundingClientRect()?.top || 0;
      const height = videoDom?.getBoundingClientRect()?.height || 0;
      if (scrollTop > top && top + height > 0) {
        if (isPlay) {
          return;
        }
        const videos: any = document.getElementsByTagName('video');
        for (let i = 0; i < videos.length; i++) {
          videos[i].pause && videos[i].play();
          isPlay = true;
        }
      } else {
        if (!isPlay) {
          return;
        }
        const videos: any = document.getElementsByTagName('video');
        for (let i = 0; i < videos.length; i++) {
          videos[i].pause && videos[i].pause();
          isPlay = false;
        }
      }
    };
    document.addEventListener('scroll', scrollFnc);
    return () => {
      document.removeEventListener('scroll', scrollFnc);
    };
  }, []);
  return (
    <HomeTwoContainer>
      <h2>What is “Capsid Wings”? </h2>
      <p style={{marginBottom: '32px'}}>
        <span className='fontStyle'>
          Through the wilderness of the Capsid planet, the adventurer came upon
          an edge of the hill that led to a mysterious place, discovered
          treasures which can be armed on their NFTs.
        </span>
        <span className='wingsCollection'>
          {' '}
          The Genesis Collection is the WINGS collection.
        </span>
      </p>
      <p className='italic hallelujah'>
        Inspire the forest and the shadows of the morning.
      </p>
      <p className='italic hallelujah'>
        Sad fire should be passed, and a solemn star.
      </p>
      <p className='italic hallelujah' style={{marginBottom: '0'}}>
        The story has just begun …
        <SvgIcon height={24} name='home-jimao' width={24} />
      </p>
      <h2>Unique features of WINGS</h2>
      <div className='videos' id='MyVideo'>
        <div className='videosWrapper specialVideo'>
          <video
            autoPlay
            loop
            muted
            playsInline
            controlsList='nodownload'
            data-object-fit='cover'
            data-wf-ignore='true'
          >
            <source
              data-wf-ignore='true'
              src='/static/video/1.mp4'
              type='video/mp4'
            />
          </video>
          <div className='videoDes'>
            Buy once, sprout WINGS on any of your NFTs
          </div>
        </div>
        <div className='videosWrapper'>
          <video
            autoPlay
            loop
            muted
            playsInline
            controlsList='nodownload'
            data-object-fit='cover'
            data-wf-ignore='true'
          >
            <source
              data-wf-ignore='true'
              src='/static/video/2.mp4'
              type='video/mp4'
            />
          </video>
          <div className='videoDes'>
            On chain dependency graph, cross-platform royalty distribution
          </div>
        </div>
        <div className='videosWrapper'>
          <video
            autoPlay
            loop
            muted
            playsInline
            controlsList='nodownload'
            data-object-fit='cover'
            data-wf-ignore='true'
          >
            <source
              data-wf-ignore='true'
              src='/static/video/3.mp4'
              type='video/mp4'
            />
          </video>
          <div className='videoDes'>On chain IP licensing</div>
        </div>
      </div>
      {/* <h2>What is “Wings Collection”? </h2>
      <p>Buy once, sprout WINGS on any of your NFTs.</p> */}
      <div className='btn-wrapper'>
        {/* <Link passHref href={discordUrl}>
      <a target='_blank'>
        <Button
          backgroundColor='#ffffff'
          borderRadius={8}
          color='#1D1D1D'
          fontSize={20}
          fontWeight={600}
          height={64}
          width={320}
        >
          <SvgIcon
            color='#1D1D1D'
            height={40}
            name='discord-icon'
            width={40}
          />
          JOIN US ON DISCORD
        </Button>
      </a>
    </Link> */}
        <Button
          backgroundColor='#ffffff'
          borderRadius={8}
          color='#1D1D1D'
          fontSize={20}
          fontWeight={600}
          height={64}
          width={320}
          onClick={onClickDiscord}
        >
          <SvgIcon color='#1D1D1D' height={40} name='discord-icon' width={40} />
          JOIN US ON DISCORD
        </Button>
        <Link passHref href={twitterUrl}>
          <a target='_blank'>
            <Button
              backgroundColor='#ffffff'
              borderRadius={8}
              color='#1D1D1D'
              fontSize={20}
              fontWeight={600}
              height={64}
              width={320}
            >
              <SvgIcon
                color='#1D1D1D'
                height={40}
                name='twitter-icon'
                width={40}
              />
              FOLLOW US ON TWITTER
            </Button>
          </a>
        </Link>
      </div>
    </HomeTwoContainer>
  );
};

SecondPage.displayName = 'SecondPage';

const ThirdPage: FC<secondPageProps> = ({onClickDiscord}) => {
  const faqArr = [
    {
      title: 'How many NFTs are in the Wings NFT collection?',
      des: 'There are 1000 unique NFTs in the Wings NFT collection.',
    },
    {
      title: 'How to get a Wings NFT?',
      des: 'The public sale is open to all.',
    },
    {
      title: 'Why are NFTs in Capsid Wings special?',
      des: `These NFTs are powered by Capsid Protocol, an NFT derivative protocol that unlocks zillions of utilities for digital assets through “Non-Fungible Rights”. And yep the smart contract is audited. Read more about <a href=${capsidOneUrl} target="_blank">Capsid here</a>.`,
    },
    // {
    //   title: 'What parent NFT collections are currently supported?',
    //   des: 'Azuki, BAYC, Mfers, Moonbirds.',
    // },
    // {
    //   title: 'What items can I create/mint in Capsid Area 42?',
    //   des: `Wings is our genesis series. We’ll release more accessories in the future. All you can imagine! We also seriously take the community proposals into consideration. Propose <a href=${discordUrl} target="_blank">in our Discord</a>!`,
    // },
    {
      title: 'How much will it cost to mint a new item?',
      // des: `Details will be announced <a href=${discordUrl} target="_blank">in our official Discord</a>.`,
      des: `Details will be announced <span>in our official Discord</span>.`,
    },
    {
      title: 'What are the maximum mints per wallet?',
      // des: 'Two mints per wallet is allowed.',
      des: 'Only one mint per wallet is allowed.',
    },
    {
      title: 'How unique will items be?',
      des: 'Each accessory NFT is unique and combined with the parent project NFT will generate an independent and exclusive image.',
    },
    {
      title: 'Will there be a physical item?',
      des: 'Not for now, but soon!',
    },
    {
      title: 'How can I get in touch with the team?',
      // des: `Please join our community <a href=${discordUrl} target="_blank">Discord</a> or contact us on <a href=${twitterUrl} target="_blank">Twitter</a>...`,
      des: `Please contact us on <a href=${twitterUrl} target="_blank">Twitter</a>...`,
    },
  ];
  return (
    <HomeThreeContainer>
      <div>
        <h2>FAQ</h2>
        <div className='faq-box'>
          {faqArr.map((faq: any, index: number) => (
            <MyCollapse
              isClose
              key={`${faq.title}`}
              title={`${index + 1}.  ${faq.title}`}
            >
              {index + 1 === 4 ? (
                <p>
                  Details will be announced in our official{' '}
                  <span
                    style={{
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                    onClick={onClickDiscord}
                  >
                    Discord
                  </span>
                  .
                </p>
              ) : (
                <p dangerouslySetInnerHTML={{__html: faq.des}} />
              )}
            </MyCollapse>
          ))}
        </div>
      </div>
      <Footer />
    </HomeThreeContainer>
  );
};

ThirdPage.displayName = 'SecondPage';
const Home: NextPage = () => {
  const [modalVisible, setVisible] = useState(false);
  const onClickDiscord = () => {
    // setVisible(true);
    window.open(discordUrl);
  };
  return (
    <HomeContainer id='home-pape-container'>
      {/* <HomeWebContainer>
        <ReactFullpage
          navigation // 每一部分的锚点, 就是url#后面的部分
          anchors={anchors} // 是否显示右侧小圆圈
          licenseKey='capsid-wings'
          navigationTooltips={anchors} // 鼠标放到小圆圈上显示的提示
          render={({state, fullpageApi}) => {
            return (
              <ReactFullpage.Wrapper>
                <div className='section full-page-section'>
                  <FirstPage />
                </div>
                <div className='section full-page-section'>
                  <SecondPage onClickDiscord={onClickDiscord} />
                </div>
                <div className='section full-page-section'>
                  <ThirdPage onClickDiscord={onClickDiscord} />
                </div>
              </ReactFullpage.Wrapper>
            );
          }} // 每一个部分你的背景色
          onLeave={(origin, destination, direction) => {
            // console.log('onLeave event', {origin, destination, direction});
          }}
        />
      </HomeWebContainer> */}
      <HomeMobileContainer>
        <FirstPage />
        <SecondPage onClickDiscord={onClickDiscord} />
        <ThirdPage onClickDiscord={onClickDiscord} />
      </HomeMobileContainer>
      <Modal
        height=''
        visible={modalVisible}
        width=''
        onClose={() => {
          setVisible(false);
        }}
      >
        <CommingComp>
          <div className='content'>
            {/* <div className='imgWrapper'>
              <SvgIcon color='red' height='100%' name='coming' width='100%' />
            </div> */}
            <span>Coming Soon</span>
          </div>
        </CommingComp>
      </Modal>
    </HomeContainer>
  );
};

export default Home;
