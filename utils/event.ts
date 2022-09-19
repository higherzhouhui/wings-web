import {EventEmitter} from 'events';

import {IMessageProps} from '@/components';

export const Event = new EventEmitter();

export enum EventTypes {
  search = 'event.search',
  TIP = 'event.tip',
  Message = 'event.message',
  DropDown = 'event.dropDown',
  ModalPopUp = 'event.modalpopup',
  LoginModel = 'event.loginModel',
}

export enum IMessageType {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  LOADING = 'LOADING',
  WARN = 'WARN',
}

// 传入提示状态与内容参数即可
export const showTip = (option: IMessageProps) => {
  Event.emit(EventTypes.Message, option);
};

export const showDropDown = (isShow: boolean) => {
  Event.emit(EventTypes.DropDown, isShow);
};

export const popUpLogin = (show: boolean) => {
  Event.emit(EventTypes.LoginModel, show);
};
