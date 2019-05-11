import React from "react";
import { shallow } from "enzyme";
import Paginator from "./Paginator";

const setup = props => {
    const actions = {
        onChangePage: jest.fn()
    }
    const component = shallow(<Paginator {...props} {...actions}/>);

  return {
    component,
    actions,
  };
};

describe("Paginator component", () => {
  it("should display page and totalElements", () => {
    const props = {
      totalElements: 50,
      currentPage: 0,
      totalPages: 10,
      size: 5
    };
    const { component } = setup(props);
    expect(component.find(".paginator__info").text()).toMatch(
      "Page 1 50 results"
    );
  });

  it("should display prev and next button", () => {
    const props = {
      totalElements: 50,
      currentPage: 0,
      totalPages: 10,
      size: 5
    };
    const { component } = setup(props);
    expect(component.find('button.icon-button').length).toBe(2);
  });

  it("should disable prev button", () => {
    const props = {
      totalElements: 50,
      currentPage: 0,
      totalPages: 10,
      size: 5
    };
    const { component } = setup(props);
    expect(component.find('[data-test="prev-btn"]').prop('disabled')).toEqual(true);
  });

  it("should disable next button", () => {
    const props = {
      totalElements: 50,
      currentPage: 9,
      totalPages: 10,
      size: 5
    };
    const { component } = setup(props);
    expect(component.find('[data-test="next-btn"]').prop('disabled')).toEqual(true);
  });

  it('should call action on button click', () => {
    const props = {
        totalElements: 50,
        currentPage: 0,
        totalPages: 10,
        size: 5,
      };
    const { component, actions } = setup(props);
    component.find('[data-test="next-btn"]').simulate('click')
    expect(actions.onChangePage).toBeCalled();
  })
});
