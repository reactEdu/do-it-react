import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';

class ActionComponent extends PureComponent {
  render() {
    const { setAge } = this.props;
    const [num, age] = [2, 22]
    return (
      <React.Fragment>
        <Button onPress={() => setAge(num, age)}>고유번호 {num}번 나이 {age}세로 변경</Button>
      </React.Fragment>
    );
  }
}

ActionComponent.propTypes = {
  setAge: PropTypes.func,
};

export default ActionComponent;