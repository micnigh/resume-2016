import React, { Component } from "react";
import { connect } from "react-redux";

import SkillsGraph from "./component/skillsGraph/";

export class Skills extends Component<any, any> {
  render() {
    let { tags } = this.props;
    return (
      <div id="skills" className="row">
        <h2 className="title">Skills</h2>
        <div className="col-xs-offset-1">
          <SkillsGraph tags={tags}/>
        </div>
      </div>
    );
  }
};

let mapStateToProps = (state, ownProps) => {
  let tags = Object.keys(state.entities.tags).map(id => state.entities.tags[id]);
  return {
    tags,
  };
};

export default connect(mapStateToProps)(Skills);
