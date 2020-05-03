import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ButtonWithContext from './ButtonWithContext'; // 소비자
import Button from '../04/Button';

function RowBComponent() {
  return <Button>버튼</Button>;
}

function RowCComponent() {
  return <ButtonWithContext>버튼</ButtonWithContext>; // 소비자 출력
}

function TableComponent() {
  return (
    <table>
      <RowBComponent />
      <RowCComponent />
    </table>
  );
}

// 공급자
class HomePageComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { loading: false }; // 공급자의 데이터는 state로 관리
    this.setLoading = this.setLoading.bind(this); // 소비자에게 전달하는 콜백함수(this를 바인딩) 
    this.toggleLoading = this.toggleLoading.bind(this);
  }

  getChildContext() { // 소비자가 이 함수를 통해서 loading과 setLoading을 전달받음
    return {
      loading: this.state.loading,
      setLoading: this.setLoading,
    };
  }

  setLoading(loading) {
    this.setState({ loading }); // 공급자의 state를 변경
  }

  toggleLoading() {
    this.setState(({ loading }) => ({ loading: !loading }));
  }

  render() {
    return (
      <div>
        <TableComponent />
        <Button onPress={this.toggleLoading}>상태 변경</Button>
      </div>
    );
  }
}

HomePageComponent.childContextTypes = { // 컨텍스트의 자료형
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default HomePageComponent;