import React, { Component } from "react";
import $ from "jquery";

export class Base extends Component<any, any> {
  componentDidMount () {
    $("[title]", this.refs.page).tooltip({
      container: `body`,
      placement: (tip, e) => {
        return $(e).data("tooltip-placement") || "top";
      },
    });
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
