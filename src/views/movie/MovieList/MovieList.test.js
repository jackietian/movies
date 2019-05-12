import React from "react";
import { shallow } from "enzyme";
import MovieList from "./MovieList";

const setup = props => {
  const actions = {
    loadMovies: jest.fn()
  };
  const component = shallow(<MovieList {...props} actions={{ ...actions }} />);

  return {
    component
  };
};

describe("MovieList component", () => {
  it("should display search box", () => {
    const props = {
      movies: [1, 2, 3],
      searchText: "test",
      page: {
        size: 10,
        currentPage: 0
      }
    };
    const { component } = setup(props);
    expect(component.find(".searchInput").length).toBe(1);
    expect(component.find(".searchInput").prop("value")).toBe("test");
  });

  it("should display movie list", () => {
    const props = {
      movies: [1, 2, 3],
      searchText: "test",
      page: {
        size: 10,
        currentPage: 0
      }
    };
    const { component } = setup(props);
    expect(component.find("li").length).toBe(3);
  });

  it("should display movie list no more then page size", () => {
    const props = {
      movies: new Array(15).fill(0),
      searchText: "test",
      page: {
        size: 10,
        currentPage: 0
      }
    };
    const { component } = setup(props);
    expect(component.find("li").length).toBe(10);
  });
});
