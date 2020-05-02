import React from 'react';
import { storiesOf } from '@storybook/react';

import { CounterWithCountState } from '../05/withState';

storiesOf('CounterWithCountState', module)
  .addWithJSX('기본 설정', () => <CounterWithCountState />)