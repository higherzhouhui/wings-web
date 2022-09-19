// import {useRecoilState} from 'recoil';

import type {NextPage} from 'next';

import {WalletModal} from '@/components';
// import {userState} from '@/store/user';
import {LoginContainer, LoginMaskContainer} from '@/styles/login';

const Login: NextPage = () => {
  // const [user, setUser] = useRecoilState(userState);
  // useEffect(() => {
  //   setUser({
  //     id: null,
  //     token: null,
  //     account: null,
  //   });
  // }, []);

  return (
    <LoginContainer>
      <LoginMaskContainer />
      <WalletModal show onClose={() => {}} />
    </LoginContainer>
  );
};

export default Login;
