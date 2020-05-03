import React, { PureComponent } from 'react';
import Button from '../04/Button';
import ButtonWithLoadingContext from './ButtonWithLoadingContext';
import LoadingProvider from './LoadingProvider';

function RowBComponent() {
  return <Button>버튼</Button>;
}

function RowCComponent() {
  // return <ButtonWithLoadingContext>버튼</ButtonWithLoadingContext>; // 소비자 출력
  return <ButtonWithLoadingContext label="버튼" />
}

function TableComponent() {
  return (
    <table>
      <RowBComponent />
      <RowCComponent />
    </table>
  );
}

// 소비자 
// const TableComponent = () => <ButtonWithLoadingContext label="버튼" />

// 공급자
class HomePageComponent extends PureComponent {

  render() {
    return (
      <LoadingProvider>
        <TableComponent />
        <ButtonWithLoadingContext label="상태 변경"></ButtonWithLoadingContext>
      </LoadingProvider>
    );
  }
}

export default HomePageComponent;