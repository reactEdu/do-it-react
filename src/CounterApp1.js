import React, { Component } from 'react';
import NewCounter from './components/NewCounter';
import Counter from './components/Counter';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 }
    this.resetCount = this.resetCount.bind(this);
  }

  resetCount() {
    this.setState(
      // (prevState) => { return { count: prevState.count+10 } }
      // 이전 상태 객체에서 count 꺼내 한줄로 처리
      // 1. 매개변수를 객체로 감쌈
      // 2. 함수를 ()로 감싸고 리턴할 객체에 매개변수 count를 바로 사용
      ({count}) => ({count: count+10})
    ) 
  }

  render() {
    return (
      <>
        {/*  */}
        <div><Counter count={this.state.count}></Counter></div>
        <div><NewCounter count={this.state.count}></NewCounter></div>
        <button onClick={this.resetCount}>{this.state.count + 10}으로 초기화</button>
      </>
    );
  }
}

export default CounterApp;