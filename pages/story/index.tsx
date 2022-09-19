import Image from 'next/image';
import {EffectCoverflow} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import type {NextPage} from 'next';

import {
  StoryContainer,
  BannerContainer,
  StoryTopContainer,
  StoryBottomContainer,
  StoryContentContainer,
} from '@/styles/story';
import 'swiper/css';

const Story: NextPage = () => {
  return (
    <StoryContainer>
      <StoryTopContainer>
        <h2>Timeline</h2>
        {/* <p>
          TimeLined For More Information, Join Us On&nbsp;
          <Link href={twitterUrl}>
            <a target='_blank'>Twitter</a>
          </Link>
          &nbsp;And&nbsp;
          <Link href={discordUrl}>
            <a target='_blank'>Discord</a>
          </Link>
          .
        </p> */}
      </StoryTopContainer>
      <StoryContentContainer>
        <div className='banner-box'>
          <div className='banner-content-box'>
            <Image
              alt='banner'
              layout='fill'
              src='/static/image/story-content.webp'
            />
          </div>
        </div>
      </StoryContentContainer>
      <BannerContainer
        style={{
          display: 'none',
        }}
      >
        <Swiper
          centeredSlides
          loop
          noSwiping
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          effect='coverflow'
          modules={[EffectCoverflow]}
          slidesPerView={1.85}
          spaceBetween={150}
          onSlideChange={() => {
            console.log('slide change');
          }}
          onSwiper={(swiper) => {
            console.log(swiper);
          }}
        >
          <SwiperSlide>
            <div className='banner-box'>
              <div className='banner-content-box'>
                <Image
                  alt='banner'
                  layout='fill'
                  src='/static/image/story-content.webp'
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='banner-box'>
              <div className='banner-content-box'>
                <Image
                  alt='banner'
                  layout='fill'
                  src='/static/image/story-content.webp'
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='banner-box'>
              <div className='banner-content-box'>
                <Image
                  alt='banner'
                  layout='fill'
                  src='/static/image/story-content.webp'
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='mask-box' />
      </BannerContainer>
      <StoryBottomContainer>
        <p>
          The adventurer came upon an edge of the hill that led to a mysterious
          place, and found a stela. “Inspire the forest and the shadows of the
          morning. Sad fire should be passed, and a solemn star.”
        </p>
      </StoryBottomContainer>
    </StoryContainer>
  );
};

export default Story;
