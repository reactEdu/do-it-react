import React from 'react';
import { DEFAULT_KEY, contextPropTypes } from './LoadingProviderWithKey'; // 공급자에 정의된 컨텍스트의 데이터의 키값과 항목 정보를 임포트

export const loadingPropTypes = contextPropTypes;

export default (contextKey = DEFAULT_KEY) => WrappedComponent => { // 공급자의 컨텍스트 데이터 키값을 인자로 전달받는 하이어 오더 컴포넌트
  const { displayName, name: componentName } = WrappedComponent;
  const wrappedComponentName = displayName || componentName;

  function WithLoadingContext(props, context) {
    const { loading, setLoading } = context[contextKey]; // context를 인자로 받아 구조 분해해서 소비자 컴포넌트에 전달
    console.log('c', context);
    return <WrappedComponent {...props} loading={loading} setLoading={setLoading} />;
  }
  
  WithLoadingContext.displayName = `withLoadingContext(${wrappedComponentName})`;
  WithLoadingContext.contextTypes = {
    [contextKey]: contextPropTypes,
  };
  return WithLoadingContext;
};