import React from "react";
import Filter from "./index";
import { mountWithReactIntl } from "../../helpers/testHelpers";

const changeFilterValue = () => {};

const setup = props => mountWithReactIntl(<Filter changeFilterValue={changeFilterValue} {...props} />);

describe("Filter", () => {
  it("should represent filter layout", () => {
    const filter = setup();

    expect(filter.find('input[data-test="search"]')).toHaveLength(1);
    expect(filter.find('Select[data-test="currency"]')).toHaveLength(1);
  });

  it("should handle search input change", () => {
    const changeFilterValue = jest.fn();
    const value = "USD";
    const event = { target: { value } };
    const filter = setup({ changeFilterValue });
    const search = filter.find('Select[data-test="currency"]');

    search.simulate("change", event);

    expect(changeFilterValue).toHaveBeenCalledWith({ key: "currency", value });
  });

  it("should handle search input change", () => {
    const changeFilterValue = jest.fn();
    const value = "USD";
    const event = { target: { value } };
    const filter = setup({ changeFilterValue });
    const search = filter.find('Select[data-test="currency"]');

    search.simulate("change", event);

    expect(changeFilterValue).toHaveBeenCalledWith({ key: "currency", value });
  });
});
