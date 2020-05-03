import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_KEY, contextPropTypes } from './LoadingProviderWithKey';

export default (contextKey = DEFAULT_KEY) => {
  // render 프로퍼티로 render 함수를 전달받아 출력
  function LoadingConsumer({ render }, context) {
    return render(context[contextKey]);
  };
  LoadingConsumer.contextTypes = {
    [contextKey]: contextPropTypes,
  };
  LoadingConsumer.propTypes = {
    render: PropTypes.func.isRequired,
  };
  return LoadingConsumer;
};