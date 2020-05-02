import React from 'react';
import { storiesOf } from '@storybook/react';``

import Button from '../04/Button';
import Text from '../04/Text';
import withHoc from '../05/withHoc';
import withLoading from '../05/withLoading';

// 기본 하이어오더 컴포넌트
const ButtonWithHoc = withHoc(Button);
const TextWithHoc = withHoc(Text);
// 로딩 메세지를 변경할 수 있는 하이어오더 컴포넌트 (기본값 = '로딩 중')
const ButtonWithLoading = withLoading(<Button disabled>로우딩</Button>)(Button);
const TextWithLoading = withLoading('로우딩')(Text);

storiesOf('WithHoc', module)
  .addWithJSX('기본 설정', () => (
    <div>
      <ButtonWithHoc>안녕하세요</ButtonWithHoc>
      <TextWithHoc>안녕하세요</TextWithHoc>
    </div>
  ))
  .addWithJSX('large 예제', () => (
    <div>
      <ButtonWithHoc large>안녕하세요</ButtonWithHoc>
      <TextWithHoc large>안녕하세요</TextWithHoc>
    </div>
  ))
  .addWithJSX('isLoading 예제', () => (
    <div>
      <ButtonWithLoading isLoading>안녕하세요</ButtonWithLoading>
      <TextWithLoading isLoading>안녕하세요</TextWithLoading>
    </div>
  ))