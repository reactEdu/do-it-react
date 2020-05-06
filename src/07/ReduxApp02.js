import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

class ReduxApp extends Component {
  store = createStore(
    state => state, // 리듀서 위치
    { loading: false, name: '두잇 리액트'}, // 초기 상태
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  
  componentDidMount() {
    this.store.dispatch({
      type: 'SET_LOADING',
      payload: true,
    })
  }

  render() {
    return (
      <Provider store={this.store}>
        리덕스 예제
      </Provider>
    );
  }
}

export default ReduxApp;