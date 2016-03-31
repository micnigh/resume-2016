import React, { Component } from "react";

export class Education extends Component<any, any> {
  render() {
    return (
      <div id="education" className="row page-break-before">
        <h2 className="title">Education</h2>
        <div className="experience">
          <div className="header">
            <h4 className="title">San Jose State University</h4>
            <div className="icons" />
            <div className="duration">2004-08 to 2009-12</div>
          </div>
          <div className="col-xs-offset-1">
            <p>Bachelor of Science - Computer Science</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Education;
