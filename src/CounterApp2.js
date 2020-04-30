import React, { Component } from 'react';
import Counter from './components/Counter2';

class CounterApp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    // this 오류를 확인한 후에 아래 주석을 삭제해 주세요.
    // this.increateCount = this.increateCount.bind(this);
  }
  increateCount = () => {
    this.setState(({ count }) => ({ count: count + 1}));
  }
  render() {
    return (
      <Counter count={this.state.count} onAdd={this.increateCount} />
    );
  }
}

export default CounterApp2;