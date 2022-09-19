import Image from 'next/image';
import {useEffect, useState} from 'react';

import type {NextPage} from 'next';

import {PotionContainer} from '@/styles/potion';
import {Button, SvgIcon} from '@/uikit';
const Potion: NextPage = () => {
  // 单价eth
  const unitPrice = 0.1;
  const [total, setTotal] = useState(1);
  const add = () => {
    setTotal((next) => next + 1);
  };
  const subtract = () => {
    if (total === 1) {
      return;
    }
    setTotal((next) => next - 1);
  };
  const buyPotion = () => {
    const price = total * unitPrice;
    console.log(price);
  };
  useEffect(() => {
    const canvas1 = document.getElementById('myCanvas1') as any;
    const canvas2 = document.getElementById('myCanvas2') as any;
    if (canvas1 && canvas2) {
      const ctx = canvas1.getContext('2d');
      const ctx2 = canvas2.getContext('2d');
      ctx.beginPath(0, 0);
      ctx.lineTo(0, 400);
      ctx.lineTo(400, 0);
      ctx.lineTo(0, 0);
      ctx.closePath();
      ctx.fillStyle = '#E82648';
      ctx.fill();

      ctx2.beginPath(400, 400);
      ctx2.lineTo(0, 400);
      ctx2.lineTo(400, 0);
      ctx2.lineTo(400, 400);
      ctx2.closePath();
      ctx2.fillStyle = '#E82648';
      ctx2.fill();
    }
  }, []);
  return (
    <PotionContainer>
      <canvas height={400} id='myCanvas1' width={400} />
      <canvas height={400} id='myCanvas2' width={400} />
      <div className='main'>
        <div className='left'>
          <Image
            alt='potion'
            layout='fill'
            objectFit='contain'
            src='/static/image/bx.gif'
          />
        </div>
        <div className='right'>
          <h1>Mint Pass</h1>
          <h3>Dress up your wings with magic potion, magic mix will come.</h3>
          <p className='price'>
            <span className='ethSvg'>
              <SvgIcon height='100%' name='potion-eth' width='100%' />
            </span>
            <span className='number'>{unitPrice}</span>
          </p>
          <div className='addorsubtract'>
            <span className='addSubSvg' onClick={subtract}>
              <SvgIcon
                className='svgicon'
                height='100%'
                name='potion-sub'
                width='100%'
              />
            </span>
            <span className='total'>{total}</span>
            <span className='addSubSvg' onClick={add}>
              <SvgIcon
                className='svgicon'
                height='100%'
                name='potion-add'
                width='100%'
              />
            </span>
          </div>
          <Button
            fontSize='1rem'
            height='3.5rem'
            variant='primary'
            width='22rem'
            onClick={buyPotion}
          >
            Buy
          </Button>
        </div>
      </div>
    </PotionContainer>
  );
};

export default Potion;
