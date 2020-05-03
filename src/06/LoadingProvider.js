import React from 'react';
import PropTypes from 'prop-types';

// 공급자 분리용 컴포넌트
class LoadingProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: false };
    this.setLoading = this.setLoading.bind(this);
  }

  getChildContext() { // 공급자 HomePageComponent의 데이터 항목 옮김
    return {
      loading: this.state.loading,
      setLoading: this.setLoading,
    };
  }

  setLoading(loading) {
    this.setState({ loading });
  }

  render() {
    return this.props.children; // 자식 프로퍼티 노드 출력
  }
}

LoadingProvider.childContextTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default LoadingProvider;