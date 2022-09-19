import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import type {NextPage} from 'next';
import 'swiper/css';

import {
  TimeLineContainer,
  TimeLineTopContainer,
  TimeLineContentContainer,
  TimeLineBottomContainer,
} from '@/styles/timeline';
import {SvgIcon} from '@/uikit';
const TimeLine: NextPage = () => {
  const [videoEndFlag, setvideoEndFlag] = useState(false);
  const [wordEndFlag, setwordEndFlag] = useState(false);
  const [swiper, setSwiper] = useState<any>(null);
  const timer = useRef<any>();
  const onSlideChange = () => {
    setwordEndFlag(true);
    clearInterval(timer.current);
  };
  const imageAndDescriptions = [
    {
      url: '/static/image/timeline-two.jpg',
      des: 'The adventurer came upon an edge of the hill that led to a mysterious place, and found a stela.“Inspire the forest and the shadows of the morning.Sad fire should be passed, and a solemn star.”',
    },
    {
      url: '/static/image/timeline-one.jpg',
      des: 'The adventurer: “Strange patterns on the back of the stela. A puzzle… ?” ',
    },
    {
      url: '/static/image/timeline-three.jpg',
      des: 'The adventurer: “Puzzle solved! Wait, what’s that… ”.Immediately an enormous and frightful genie rose out of the earth, saying, “what would you like me to do for you?”',
    },
  ];
  useEffect(() => {
    const elevideo = document.getElementById('myVideo');
    const start = () => {
      const str =
        'The adventurer came upon an edge of the hill that led to a mysterious place, and found a stela. “Inspire the forest and the shadows of the morning. Sad fire should be passed, and a solemn star.”';
      let str_ = '';
      let i = 0;
      const content = document.getElementById('contents');
      if (content) {
        timer.current = setInterval(() => {
          if (str_.length < str.length) {
            str_ += str[i++];
            content.innerHTML = `<p>${str_}_</p>`; // 打印时加光标
          } else {
            clearInterval(timer.current);
            setwordEndFlag(true);
            content.innerHTML = `<p>${str_}</p>`;
          }
        }, 30);
      }
    };

    const videoEnd = () => {
      setvideoEndFlag(true);
      start();
    };
    elevideo?.addEventListener('ended', videoEnd);
    return () => elevideo?.removeEventListener('ended', videoEnd);
  }, []);
  return (
    <TimeLineContainer>
      <TimeLineTopContainer>
        <h2>Timeline</h2>
      </TimeLineTopContainer>
      <TimeLineContentContainer>
        <div className='video'>
          <video
            autoPlay
            muted
            playsInline
            controlsList='nodownload'
            data-wf-ignore='true'
            id='myVideo'
            loop={false}
            style={{opacity: !videoEndFlag ? 1 : 0}}
          >
            <source
              data-wf-ignore='true'
              src='/static/video/timeline.mp4'
              type='video/mp4'
            />
          </video>
          <Image
            alt='timebg'
            className={videoEndFlag ? 'bgImageShow' : 'bgImageHide'}
            layout='fill'
            src='/static/image/timeline-bg.jpg'
          />
        </div>

        <div className='swiperWrapper' style={{opacity: videoEndFlag ? 1 : 0}}>
          <Swiper
            loop={false}
            slidesPerView={1}
            spaceBetween={25}
            onSlideChange={onSlideChange}
            onSwiper={setSwiper}
          >
            {imageAndDescriptions.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className='imgWrapper'>
                    <Image alt='timeline' layout='fill' src={item.url} />
                    <div className='des'>
                      {index === 0 ? (
                        wordEndFlag && <p>{item.des}</p>
                      ) : (
                        <p>{item.des}</p>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div
            className='prev-box step-box'
            onClick={() => {
              swiper.slidePrev();
            }}
          >
            <SvgIcon
              color='#989898'
              height={48}
              name='home-banner-prev'
              width={48}
            />
          </div>
          <div className='next-box step-box' onClick={() => swiper.slideNext()}>
            <SvgIcon
              color='#989898'
              height={48}
              name='home-banner-next'
              width={48}
            />
          </div>
          {!wordEndFlag && (
            <TimeLineBottomContainer>
              <div className='box'>
                <div className='content' id='contents' />
              </div>
            </TimeLineBottomContainer>
          )}
        </div>
      </TimeLineContentContainer>
    </TimeLineContainer>
  );
};

export default TimeLine;
