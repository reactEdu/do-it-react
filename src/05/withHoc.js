import React from 'react';

const withHoc = (WrappedComponent) => {
  const { displayName, name } = WrappedComponent;
  const wrappedComponentName =  displayName || name;
  return class WithHoc extends React.Component {
    static displayName = `withHoC(${wrappedComponentName})`; // 리액트 개발자 도구에서 컴포넌트 이름 출력
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
};

export default withHoc;