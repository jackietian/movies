import React from "react";
import { shallow } from "enzyme";
import MovieCard from "./MovieCard";

const setup = (title, year) => {
  const component = shallow(<MovieCard Title={title} Year={year} />);

  return {
    component: component
  };
};

describe("MovieCard component", () => {
  it("should display title", () => {
    const { component } = setup("movie title");
    expect(component.find(".card-container__title").text()).toMatch(
      "movie title"
    );
  });

  it("should display title", () => {
    const { component } = setup("", "2019");
    expect(component.find(".card-container__year").text()).toMatch(
        "2019"
      );
  });
});
