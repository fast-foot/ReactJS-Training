import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
  }

  toggleState() {
    this.setState({ isOpened: !this.state.isOpened })
  }

  render() {
    console.log(this.state.isOpened);
    let dropdownText;
    if (this.state.isOpened) {
      dropdownText = <div>Here Dropdown content</div>;
    }
    return <div onClick={this.toggleState.bind(this)}>Look: {dropdownText}</div>
  }
}

export default Dropdown;
