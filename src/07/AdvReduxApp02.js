import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setLoading, resetLoading } from './actions/loadingActions';
import { setUser } from './actions/userAction';

class AdvReduxApp extends Component {
  store = configureStore({ loading: false, });
  
  componentDidMount() {
    this.store.dispatch(setLoading(true));
    this.store.dispatch(resetLoading());
    this.store.dispatch(setUser({ name: 'Park', age: 20 }));
  }

  render() {
    return (
      <Provider store={this.store}>
        리덕스 예제2
      </Provider>
    );
  }
}

export default AdvReduxApp;