import React from "react";
import { shallow } from "enzyme";
import Select from "./index";

const onChange = () => {};
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];
const setup = props => shallow(<Select onChange={onChange} {...props} />);

describe("Select", () => {
  it("should represent empty options", () => {
    const select = setup();

    expect(select.find("option")).toHaveLength(0);
  });

  it("should represent correct options", () => {
    const value = "chocolate";
    const select = setup({ options, value });
    const optionsEl = select.find("option");

    expect(select.prop("value")).toBe(value);
    expect(optionsEl).toHaveLength(options.length);

    optionsEl.forEach((option, i) => {
      expect(option.prop("value")).toBe(options[i].value);
      expect(option.text()).toBe(options[i].label);
    });
  });

  it("should trigger onChange prop on select change ", () => {
    const onChange = jest.fn();
    const event = { target: { value: "chocolate" } };
    const select = setup({ options, onChange });

    select.simulate("change", event);

    expect(onChange).toHaveBeenCalledWith(event);
  });
});
