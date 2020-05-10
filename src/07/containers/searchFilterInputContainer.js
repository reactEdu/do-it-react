import { connect } from 'react-redux';
import { setFilter } from '../actions/searchFilterActions';
import Input from '../../04/InputWithStyle';

const mapStateToProps = (state, props) => {
  const value = state.searchFilter[props.name] || ''; // 검색 항목의 입력값
  return { value };
};

const mapDispatchToProps = {
  onChange: setFilter, // 입력값이 변경될때저장소의 검색 항목값 변경
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);