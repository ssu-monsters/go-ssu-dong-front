import { atom } from 'recoil';

const isLoggedInState = atom({
  key: 'isLogged',
  default: false,
});

const userState = atom({
  key: 'user',
  default: {},
});

export { isLoggedInState, userState };
