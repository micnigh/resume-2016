import React, { Component } from "react";

export class Header extends Component<any, any> {
  render() {
    return (
        <div id="header" className="row">
          <h1 id="name" className="title text-center wide-sm">Michael Nigh</h1>
          <div className="contact">
            <h4 id="email" className="text-center"><a href="mailto:contact@mnigh.com" target="_blank">contact@mnigh.com</a></h4>
            <div className="mobile visible-xs visible-ms social icons text-center">
              <ul>
                <li className="github">
                  <a href="https://github.com/micnigh" data-tooltip-toggle="tooltip" data-tooltip-placement="bottom" target="_blank" title="Check out my github">
                    <div className="fa fa-github" />
                  </a>
                </li>
                <li className="linkedin">
                  <a href="https://www.linkedin.com/in/michaelnigh" target="_blank" data-tooltip-toggle="tooltip" data-tooltip-placement="bottom" title="Visit my LinkedIn">
                    <div className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden-xs hidden-ms pull-right social icons">
              <ul>
                <li className="github">
                  <a href="https://github.com/micnigh" data-tooltip-toggle="tooltip" data-tooltip-placement="bottom" target="_blank" title="Check out my github">
                    <div className="fa fa-github" />
                  </a>
                </li>
                <li className="linkedin">
                  <a href="https://www.linkedin.com/in/michaelnigh" target="_blank" data-tooltip-toggle="tooltip" data-tooltip-placement="bottom" title="Visit my LinkedIn">
                    <div className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
};

export default Header;
