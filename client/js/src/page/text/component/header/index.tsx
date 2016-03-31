import React, { Component } from "react";

export class Header extends Component<any, any> {
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: marked}}/>
    );
  }
};

let marked =
`Michael Nigh

  Email
    contact@mnigh.com

  Github
    github.com/micnigh

  LinkedIn
    linkedin.com/in/michaelnigh

  Resume
    resume.mnigh.com

`;

export default Header;
