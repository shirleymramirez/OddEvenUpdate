import React, { Component } from "react";
import OnlyEvens from "./OnlyEvens";
import OddsOnly from "./OddsOnly";

class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }

  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <form>
          <label className="evenNumsLabel">
            Even Numbers
            <OnlyEvens value={this.state.value} />
          </label>
          <label className="oddNumsLabel">
            Odd Numbers
            <OddsOnly value={this.state.value} />
          </label>
        </form>
      </div>
    );
  }
}

export default Controller;
