import Image from 'next/image';
import {FC, memo} from 'react';

import {EmptyComp} from './style';

type EmptyProps = {
  text?: string;
  className?: string;
};

const Empty: FC<EmptyProps> = memo((props) => {
  const {children, text, className} = props;
  return (
    <EmptyComp className={className}>
      <div className='image-wrapper'>
        <Image
          alt='develop'
          layout='fill'
          src='/static/icon/develop-icon.png'
        />
      </div>
      <br />
      <span>{text || 'Data is empty...'}</span>
      {children}
    </EmptyComp>
  );
});

Empty.displayName = 'Empty';
export default Empty;
