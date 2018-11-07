import React, { Component } from "react";

class OnlyEvens extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate = nextProps => {
    console.log("Should I Update?");
    if (nextProps.value % 2 === 0) {
      return true;
    }
    return false;
  };

  componentWillReceiveProps(nextProps) {
    console.log("Receiving new props");
  }

  componentDidUpdate() {
    console.log("Component Re-rendered.");
  }

  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
      </div>
    );
  }
}

export default OnlyEvens;
