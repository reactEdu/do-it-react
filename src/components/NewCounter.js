import React, { Component } from 'react';

class NewCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.increaseCount = this.increaseCount.bind(this);
  }

  // 상위 컴포넌트에서 전달받은 props를 state에 연동할때 사용하며 반환값으로 state를 변경
  static getDerivedStateFromProps(props, state) { // props: 상위 컴포넌트에서 전달받은 값, state: 현재 컴포넌트의 state
    const { count } = props;
    return {
      count,
      newCount: count === state.count
      ? state.newCount // props가 같으면 기존 state
      : count // props가 변경되었다면 변경된 props값 적용
    }
  }

  increaseCount() {
    this.setState(
      ({newCount}) => ({newCount: newCount+1})
    );
  }

  render() {
    return (
      <>
         현재 카운트 : {this.state.newCount}
        <button onClick={this.increaseCount}>카운트증가</button>
        &nbsp; getDerivedStateFromProps 사용
      </>
    );
  }
}

export default NewCounter;