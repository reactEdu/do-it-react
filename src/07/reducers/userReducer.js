import { SET_USER } from "../actions/userAction";

export default function reducer (state={}, action) {
  const { type, payload } = action;
  switch(type) {
    case SET_USER: {
      return {
        ...state,
        // user: payload,
        // user안에 user가 담기는 이중키 구조가 되므로 아래처럼 payload를 꺼내 펼친다
        ...payload,
      };
    }
    default: 
      return state;
  }
}