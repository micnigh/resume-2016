import React, { Component } from "react";

export class Base extends Component<any, any> {
  render() {
    return (
      <div className="page">
        <div className="content container">
          <div className="secondary-font">
            { this.props.children }
          </div>
        </div>
        <div className="footer"/>
      </div>
    );
  }
};

export default Base;
