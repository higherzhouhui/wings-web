import Link from 'next/link';
import {FC, memo} from 'react';

import {FooterContainer} from './styles';

export const Footer: FC = memo(() => {
  return (
    <FooterContainer>
      <div className='left'>Capsid Wings</div>
      <div className='right'>
        <Link href='/tos'>Terms & Conditions</Link>
        <span>|</span>
        <Link href='/policy'>Privacy & Policy</Link>
      </div>
    </FooterContainer>
  );
});
Footer.displayName = 'Footer';

export default Footer;
