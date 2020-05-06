import { SET_LOADING, RESET_LOADING } from "../actions/loadingActions";

const initState = false; // 초기값 정의 => 객체가 아닌 값인 경우

export default function reducer (state=initState, action) {
  const { type, payload } = action;
  switch(type) {
    case SET_LOADING: {
      return payload;
    }
    case RESET_LOADING: {
      return initState;
    }
    default: 
      return state;
  }
}