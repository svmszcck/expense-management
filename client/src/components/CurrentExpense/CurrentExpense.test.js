import React from "react";
import { act } from "react-dom/test-utils";
import { mountWithReactIntl } from "../../helpers/testHelpers";
import CurrentExpense from "./index";
import { expense1 as expense } from "../../store/expenses/expenses.mock";

// TODO: test error state
jest.mock("../../api", () => ({
  apiUpdateExpense: () => ({ data: { comment: "test" } })
}));

export function wait(amount = 0) {
  return new Promise(resolve => setTimeout(resolve, amount));
}

const setup = props => mountWithReactIntl(<CurrentExpense {...props} />);

describe("CurrentExpense", () => {
  it("should represent initial fields state", () => {
    const holder = setup({ expense });

    expect(holder.find("textarea").prop("value")).toBe(expense.comment);
    expect(holder.find('p[data-test="success-msg"]')).toHaveLength(0);
    expect(holder.find('p[data-test="error-msg"]')).toHaveLength(0);
  });

  it("should change comment value on change", () => {
    const value = "New comment text";
    const event = { target: { value } };
    const holder = setup({ expense });

    expect(holder.find("textarea").prop("value")).toBe(expense.comment);

    holder.find("textarea").simulate("change", event);

    expect(holder.find("textarea").prop("value")).toBe(value);
  });

  it("should represent save button", () => {
    const holder = setup({ expense });

    expect(holder.find("button").text()).toBe("Save");
  });

  it("should update expense on save", async () => {
    const updateExpense = jest.fn();
    const holder = setup({ expense, updateExpense });

    expect(holder.find('p[data-test="success-msg"]')).toHaveLength(0);
    expect(holder.find('p[data-test="error-msg"]')).toHaveLength(0);

    holder.find("button").simulate("click");

    await act(async () => {
      await wait(100);
      holder.update();

      expect(updateExpense).toHaveBeenCalledWith({ comment: "test" });

      expect(holder.find('p[data-test="success-msg"]')).toHaveLength(1);
      expect(holder.find('p[data-test="error-msg"]')).toHaveLength(0);
    });
  });
});
