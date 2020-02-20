import React, { useState } from "react";
import PropTypes from "prop-types";
import { injectIntl, FormattedTime } from "react-intl";
import { expensePropTypes, IntlPropType } from "../../constants";
import { Textarea, Label, ErrorText, Text, Button, Loader } from "../UI/styled";
import FileUpload from "../FileUpload";
import { StyledCurrentExpense, StyledActions, StyledLoaderOverlay } from "./styled";
import Select from "../Select/index";

const CurrentExpense = ({ expense, updateExpense, showSuccessMessage, error, isLoading, intl }) => {
  const { merchant, user, amount, date, id } = expense;
  const [comment, setComment] = useState(expense.comment);
  const [category, setCategory] = useState(expense.category);
  const [file, setFile] = useState(null);

  const saveExpanse = () => {
    const expense = {
      id,
      comment,
      category
    };

    if (file) {
      const files = new FormData();
      files.set("receipt", file, "receipt");
      expense.files = files;
    }

    updateExpense(expense);
  };

  return (
    <StyledCurrentExpense>
      <Text bold>
        {merchant} - {user.first} {user.last}
      </Text>
      <Text small>
        {amount.value} {amount.currency}
        <FormattedTime
          value={new Date(date)}
          year="numeric"
          month="short"
          day="numeric"
          hour="numeric"
          minute="numeric"
        />
      </Text>
      <Label htmlFor="category">{intl.formatMessage({ id: "general.category" })}</Label>
      <Select
        name="category"
        placeholder={intl.formatMessage({ id: "general.select_category" })}
        onChange={e => setCategory(e.target.value)}
        value={category}
        options={[
          { value: "food", label: intl.formatMessage({ id: "categories.food" }) },
          { value: "software", label: intl.formatMessage({ id: "categories.software" }) },
          { value: "travel", label: intl.formatMessage({ id: "categories.travel" }) }
        ]}
      />
      <Label htmlFor="comment">{intl.formatMessage({ id: "general.comment" })}</Label>
      <Textarea rows="8" id="comment" value={comment} onChange={e => setComment(e.target.value)} />
      <Label htmlFor="file">{intl.formatMessage({ id: "general.receipt" })}</Label>
      <FileUpload name="file" onDrop={setFile} />
      {isLoading && (
        <StyledLoaderOverlay>
          <Loader />
        </StyledLoaderOverlay>
      )}
      <StyledActions>
        <Button onClick={saveExpanse}>{intl.formatMessage({ id: "general.save" })}</Button>
      </StyledActions>
      {showSuccessMessage && (
        <Text bold align="center" data-test="success-msg">
          {intl.formatMessage({ id: "messages.success_expense_save" })}
        </Text>
      )}
      {error && (
        <ErrorText align="center" data-test="error-msg">
          {error}
        </ErrorText>
      )}
    </StyledCurrentExpense>
  );
};

CurrentExpense.propTypes = {
  expense: expensePropTypes,
  updateExpense: PropTypes.func,
  onSuccessUpdate: PropTypes.func,
  intl: IntlPropType
};

export default injectIntl(CurrentExpense);
