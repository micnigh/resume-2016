import data from "./";
import denormalizeExperience from "./normalizr/denormalizr/experience";
import { Experience } from "./experiences/index.types";

describe("data", function () {
  it("returns normalized data", function () {
    console.log(data);
    expect(data.entities).toBeDefined();
  });

  it("data can be denormalized", function () {
    // todo: implement full test - this assumes one experience with a tag is defined
    let id = Object.keys(data.entities.experiences)[0];
    let denormalizedExperience: Experience = denormalizeExperience(id, data);
    console.log(denormalizedExperience);
    expect(denormalizedExperience.tags[0].name).toBeDefined();
  });
});
