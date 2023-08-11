import { atom } from 'recoil';

export const isLoggedInState = atom({
  key: 'isLoggedInState', // atom의 key는 중복되지 않아야 합니다.
  default: false, // 초기 default 값도 올바르게 설정되어야 합니다.
});

export const searchResultState = atom({
  key:"searchResultState",
  default:[],
});
//위치정보 저장하는 아톰
export const locationResultState = atom({
  key: "locationResultState",
  default: [],
})  