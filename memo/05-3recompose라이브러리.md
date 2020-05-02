## recompose 설치
- yarn add recompose

## 효율적/비효율적 패키지 참조방법
```javascript
// 비효율적 : 모든 함수들을 임포트하고 필요한걸 꺼냈음
import { branch, withState } from 'recompose';

// 효율적 : 필요한 함수만 임포트
import branch from 'recompose/branch';
import withState from 'recompose/withState';
```

## branch() 함수
- 조건에 따라 다른 함수를 반환하는 하이오더 컴포넌트 함수

```javascript
branch(
  condition: props => boolean,  // 출력 조건을 정의할 함수
  left: HigherOrderComponent,   // 트루일때 출력된 컴포넌트를 반환하는 함수
  [right: HigherOrderComponent] // 펄스일때 출력된 컴포넌트를 반환하는 함수(생략 가능하며 WrappedComponent를 그대로 출력)
)(WrappedComponent)

import React from 'react';
// 효율적 : 필요한 함수만 임포트
import branch from 'recompose/branch';
import Button from '../04/Button';

export default branch(
  ({ isloading }) => isloading,
  () => () => <Button disabled>로딩 중</Button>,
)(Button)

```

## withState
- Hooks의 useState() 역할 

```javascript
withState(
  stateName: string,    // state를 전달한 프로퍼티 이름
  stateUpdater: string, // state를 변경할 수 있는 콜백함수 이름
  initialState: any     // state의 초기값
)(WrappedComponent)

import React from 'react';
// 효율적 : 필요한 함수만 임포트
import withState from 'recompose/withState';
import Button from '../04/Button';

export const withCountState = withState('count', 'setCount', 0);

function Counter ({ count, setCount }) {
  const increaseCount = () => setCount(value => value + 1);
  
  return (
    <div>
      현재 카운트: {count}
      <Button onPress={increaseCount}>카운트 증가</Button>,
    </div>
  )
}

export const CounterWithCountState = withCountState(Counter);
```

## lifecyle
- 라이프사이클 메서드를 사용 가능하게 하며 state를 변경 가능

```javascript
lifecyle({
  [lifeCycleMethod: string]: function, // 라이프사이클 메서드명
  state: object,                       // state의 초기값
})(WrappedComponent)

import React from 'react';
import lifecycle from 'recompose/lifecycle';
import compose from 'recompose/compose';
import withLoading from './withLoading';

function Page({ content }) {
  return (
    <div>
      페이지 로딩이 완료되었습니다.
      {content}
    </div>
  );
}

export const withLoadData = lifecycle({
  state: { isLoading: true, content: '' },
  componentDidMount: function() {
    if (this.props.loadData) {
      this.props.loadData().then(content => this.setState({ isLoading: false, content }));
    }
  },
});

export const PageWithLoadData = withLoadData(Page);
```