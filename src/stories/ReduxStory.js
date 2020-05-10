import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ReduxApp01 from '../07/ReduxApp01';
import ReduxApp02 from '../07/ReduxApp02';
import ReduxApp03 from '../07/ReduxApp03';
import AdvReduxApp01 from '../07/AdvReduxApp01';
import AdvReduxApp02 from '../07/AdvReduxApp02';
import AdvReduxApp03 from '../07/AdvReduxApp03';
import AdvReduxApp04 from '../07/AdvReduxApp04';
import AdvReduxApp05 from '../07/AdvReduxApp05';
import AdvReduxApp06 from '../07/AdvReduxApp06';
import AdvReduxApp07 from '../07/AdvReduxApp07';

storiesOf('ReduxApp', module)
  .addWithJSX('기본 설정', () => <ReduxApp01 />)
  .addWithJSX('dispatch', () => <ReduxApp02 />)
  .addWithJSX('switch', () => <ReduxApp03 />)
  .addWithJSX('AdvReduxApp01', () => <AdvReduxApp01 />)
  .addWithJSX('AdvReduxApp02', () => <AdvReduxApp02 />)
  .addWithJSX('AdvReduxApp03', () => <AdvReduxApp03 />)
  .addWithJSX('AdvReduxApp04', () => <AdvReduxApp04 />)
  .addWithJSX('AdvReduxApp05', () => <AdvReduxApp05 />)
  .addWithJSX('AdvReduxApp06', () => <AdvReduxApp06 />)
  .addWithJSX('AdvReduxApp07', () => <AdvReduxApp07 />)