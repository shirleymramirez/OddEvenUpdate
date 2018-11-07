import React, { Component } from "react";

class OddsOnly extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.value % 2 === 1) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
      </div>
    );
  }
}

export default OddsOnly;
