import React from "react";
import Branch from "./Branch.js";

export default class Tree extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tree">
        {Object.keys(this.props.data).map((key, index) => (
          <Branch key={index} label={key} data={this.props.data[key]} />
        ))}
      </div>
    );
  }
}
