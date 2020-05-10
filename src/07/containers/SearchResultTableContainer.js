import { connect } from 'react-redux';
import SearchResultTable from '../SearchResultTable';

const mapStateToProps = state => {
  const { collection, searchFilter } = state;
  const hasFilter = Object.values(searchFilter) // 검색 항목으로 배열 반환
  .reduce((result, value) => result || Boolean(value), false); // 검색항목이 있는지 여부 반환
  const { ids, entities } = collection;
  const items = ids
    .map(id => entities[id]) // 해시맵 형태를 배열로 반환
    .filter(
      entity =>
        !hasFilter || // 검색 단어에 대한 데이터가 없으면 모든 항목을 반환
        Object.entries(searchFilter).reduce(
          (result, [key, value]) => result && (!value || `${entity[key]}` === `${value}`),
          true,
        ),
    );

  return { items };
};

export default connect(mapStateToProps)(SearchResultTable);