import React from 'react';

// 로딩 메세지를 변경할 수 있는 로딩 컴포넌트
export default function(loadingMessage = '로딩 중') { // 확장한 컴포넌트에서 출력할 메세지를 전달받아 처리하는 역할의 커링 함수
  return function withLoading (WrappedComponent) {
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;
  
    function WithLoading({isLoading, ...props }) {
      if(isLoading) return loadingMessage;
  
      return <WrappedComponent {...props} />;
    }
    WithLoading.displayName = `withLoading(${wrappedComponentName})`;
    return WithLoading;
  };
}

