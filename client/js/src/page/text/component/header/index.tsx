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
    resume.mnigh.com/download/Michael-Nigh.txt
    resume.mnigh.com/download/Michael-Nigh.pdf

`;

export default Header;
