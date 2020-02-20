import React from "react";
import { mount } from "enzyme";
import { withReactIntl } from "../../helpers/testHelpers";
import CurrentExpense from "./index";
import { expense1 as expense } from "../../store/expenses/expenses.mock";
import { SERVER_URL } from "../../constants";

const setup = props => mount(withReactIntl(<CurrentExpense {...props} />));

describe("CurrentExpense", () => {
  it("should represent initial fields state", () => {
    const holder = setup({ expense });

    expect(holder.find("textarea").prop("value")).toBe(expense.comment);
    expect(holder.find("FileUpload")).toHaveLength(1);
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

  it("should update expense comment on save", async () => {
    const updateExpense = jest.fn();
    const holder = setup({ expense, updateExpense });

    expect(holder.find('p[data-test="success-msg"]')).toHaveLength(0);
    expect(holder.find('p[data-test="error-msg"]')).toHaveLength(0);

    holder.find("textarea").simulate("change", { target: { value: "test" } });
    holder.update();

    holder.find("button").simulate("click");

    expect(updateExpense).toHaveBeenCalledWith({ comment: "test", category: "", id: expense.id });
  });

  it("should represent error state", () => {
    const error = "Error message";
    const holder = setup({ error, expense });

    expect(holder.find('p[data-test="error-msg"]').text()).toBe(error);
  });

  it("should represent success message", () => {
    const holder = setup({ expense, showSuccessMessage: true });

    expect(holder.find('p[data-test="success-msg"]').text()).toBe("Expense was successfully saved");
  });

  it("should represent receipts", () => {
    const receipts = [{ url: "url" }, { url: "url2" }];
    const holder = setup({
      expense: {
        ...expense,
        receipts
      }
    });

    const receiptsEl = holder.find('img[data-test="receipt"]');

    expect(receiptsEl).toHaveLength(receipts.length);

    receiptsEl.forEach((receipt, i) => {
      expect(receipt.prop("src")).toBe(`${SERVER_URL}${receipts[i].url}`);
    });
  });
});
