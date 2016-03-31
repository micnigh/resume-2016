import React, { Component } from "react";
import { connect } from "react-redux";

import SkillsGraph from "./component/skillsGraph/";

export class Skills extends Component<any, any> {
  render() {
    let { tags } = this.props;
    return (
      <div>
        SKILLS
        <SkillsGraph tags={tags}/>
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
