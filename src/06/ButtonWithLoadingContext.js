import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import withLoadingContext from './withLoadingContext';

// 공급자(withLoadingContext)의 데이터를 프로퍼티로 전달받아 Button에 제공
function ButtonWithLoadingContext({ label, loading, setLoading }) {
  return (
    <Button onPress={() => setLoading(!loading)}>
      {loading ? '로딩중' : label}
    </Button>
  );
}

ButtonWithLoadingContext.propTypes = {
  label: PropTypes.string,
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

// 하이오더 컴포넌트에 Button 컴포넌트를 전달해서 소비자 구현
export default withLoadingContext(ButtonWithLoadingContext); 