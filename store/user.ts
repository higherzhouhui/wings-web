import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';
const {persistAtom} = recoilPersist();

interface IUserStore {
  token: string | null;
  id: number | string | null;
  account: number | string | null;
}

export const userState = atom<IUserStore>({
  key: 'userState',
  default: {
    token: null,
    id: null,
    account: null,
  },
  effects_UNSTABLE: [persistAtom],
});
