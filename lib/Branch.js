import React from "react";
import Label from "./Label.js";
import Tree from "./Tree.js";

export default class Branch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: props.defaultCollapsed || true
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    const arrow = (
      <span
        className={`arrow ${this.state.collapsed ? "arrow-collapsed" : ""}`}
        onClick={this.onClick}
      >
        ▾
      </span>
    );

    const remainingTree = data => {
      if (typeof data === "string") {
        return <div>{data}</div>;
      }

      if (Array.isArray(data)) {
        return (
          <ul>
            {data.map((x, index) => {
              if (typeof x === "object") {
                return (
                  <li key={index} >
                    <Tree data={x} />
                  </li>
                );
              }
              return <li key={index}>{x}</li>;
            })}
          </ul>
        );
      }
    };

    const item = text => <div className="item">text</div>;
    return (
      <div className="branch">
        <Label>{this.props.label}</Label>
        {arrow}
        {this.state.collapsed ? null : remainingTree(this.props.data)}
      </div>
    );
  }
}
