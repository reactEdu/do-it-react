import { SET_COLLECTION} from '../actions/collectionActions01';

const initState = {
  ids: [],
  entities: {},
}

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_COLLECTION: {
      // payload 하위에 id키를 가진 값들을 추출해서 배열을 생성
      const ids = payload.map(entity => entity['id']);
      // payload를 entity['id']를 키로 하는 객체로 변환한 다음에 entities에 저장
      const entities = payload.reduce((finalEntities, entity) => ({
        ...finalEntities,
        [entity['id']]: entity
      }), {});
      return { ...state, ids, entities };
    }
    default:
      return state;
  }
};
