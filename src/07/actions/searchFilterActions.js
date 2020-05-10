export const SET_FILTER = 'searchFilter/SET_FILTER';
export const RESET_FILTER = 'searchFilter/RESET_FILTER';

/**
 * 검색기능 액션 생성 함수
 * @param {string} filterName - 검색항목 이름
 * @param {string} value - 검색 결과
 */
export const setFilter = (filterName, value) => ({
  type: SET_FILTER,
  payload: {
    filterName,
    value,
  },
});

export const resetFilter = () => ({
  type: RESET_FILTER,
})