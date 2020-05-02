import React from 'react';
// 효율적 : 필요한 함수만 임포트
import branch from 'recompose/branch';
import Button from '../04/Button';

export default branch(
  ({ isloading }) => isloading,
  () => () => <Button disabled>로딩 중</Button>,
)(Button)
