import React, { Component } from "react";

import { enableTooltip } from "../../misc/tooltip";

export class Base extends Component<any, any> {
  componentDidMount () {
    enableTooltip(this.refs[`page`] as HTMLElement);
  }

  render() {
    return (
      <div className="page" ref="page">
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
