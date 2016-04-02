import React, { Component } from "react";

export class Education extends Component<any, any> {
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: content}}/>
    );
  }
};

let content =
`EDUCATION

  San Jose State University

    2004-08 to 2009-12

      Bachelor of Science - Computer Science

`;

export default Education;
