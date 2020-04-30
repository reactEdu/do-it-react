import React, { Component } from 'react';

class ScrollSpy extends Component {
  constructor(props) {
    super(props);
    this.setRef = React.createRef();
    // window.addEventListener('scroll', this.checkPosition);
  }
  checkPosition = () => {
    if (Math.abs(this.setRef.current.getBoundingClientRect().top) < window.innerHeight) {
      console.log('enter', window.innerHeight);
      console.log(this.setRef.current.getBoundingClientRect().top);
    } else {
      console.log('exit');
    }
  }
  componentDidMount() {
    // this.checkPosition();
    window.addEventListener('scroll', this.checkPosition);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition);
  }
  render() {
    return (
      <div>
        <div style={{'height':'1600px', 'background':'yellowGreen'}}>
        </div>
        <div ref={this.setRef}  style={{'height':'100px', 'background':'green'}}>
          보고싶은 화면
        </div>
      </div>
    )
  }
}

export default ScrollSpy;