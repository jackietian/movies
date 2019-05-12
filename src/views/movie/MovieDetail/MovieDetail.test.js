import React from "react";
import { shallow } from "enzyme";
import MovieDetail from "./MovieDetail";

const setup = () => {
  const props = {
    currentMovie: {
      Title: "title",
      Type: "type",
      Poster: "http://xxxx.com"
    }
  };
  const component = shallow(<MovieDetail {...props} />);

  return {
    component
  };
};

describe("MovieDetail component", () => {
  it("should display title", () => {
    const { component } = setup();
    expect(component.find(".movie-detail__title").text()).toMatch(
      "title"
    );
  });

  it("should display type", () => {
    const { component } = setup();
    expect(component.find(".movie-detail__type").text()).toMatch("type");
  });

  it("should display poster", () => {
    const { component } = setup();
    expect(component.find(".movie-detail__image").length).toBe(1);
  });
});
