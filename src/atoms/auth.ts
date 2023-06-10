import { atom } from 'recoil';

const isLoggedInState = atom({
  key: 'isLogged',
  default: false,
});

export { isLoggedInState };
