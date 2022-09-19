import {FC, memo} from 'react';

import {SuccessContainer} from './styles';

import {Button, Modal, SvgIcon} from '@/uikit';

type IProps = {
  loading?: boolean;
  onClose?: () => void;
  onQuery?: () => void;
  title: string;
  description: string;
  visible?: boolean;
};

export const SuccessModal: FC<IProps> = memo((props) => {
  return (
    <Modal
      height='23rem'
      loading={props.loading}
      visible={props.visible}
      width='36rem'
      onClose={props.onClose}
    >
      <SuccessContainer>
        <h1>{props.title}</h1>
        <div className='svgWrapper'>
          <SvgIcon height='100%' name='modal-success' width='100%' />
        </div>
        <p className='description'>{props.description}</p>
        <Button
          borderRadius={8}
          fontSize='1rem'
          height='3.5rem'
          variant='primary'
          width='8.8rem'
          onClick={props.onQuery || props.onClose}
        >
          OK
        </Button>
      </SuccessContainer>
    </Modal>
  );
});

SuccessModal.displayName = 'SuccessModal';
