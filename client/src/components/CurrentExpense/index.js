import React, { useState } from "react";
import PropTypes from "prop-types";
import { injectIntl, FormattedTime } from "react-intl";
import { apiUpdateExpense } from "../../api";
import { expensePropTypes, IntlPropType } from "../../constants";
import { Textarea, Label, ErrorText, Text, Button, Loader } from "../UI/styled";
import { StyledCurrentExpense, StyledActions, StyledLoaderOverlay } from "./styled";

const HIDE_MODAL_DELAY = 2000;

const CurrentExpense = ({ expense, updateExpense, onSuccessUpdate, intl }) => {
  const { merchant, user, amount, date } = expense;
  const [comment, setComment] = useState(expense.comment);
  const [isShowError, setError] = useState(false);
  const [isShowMessage, toggleMessage] = useState(false);
  const [isLoading, toggleLoader] = useState(false);

  const saveExpanse = async () => {
    toggleLoader(true);
    try {
      const { data } = await apiUpdateExpense(expense.id, { comment });
      toggleMessage(true);
      updateExpense(data);
      toggleLoader(false);
      setTimeout(onSuccessUpdate, HIDE_MODAL_DELAY);
    } catch (error) {
      toggleLoader(true);
      setError();
      console.log(error);
    }
  };

  return (
    <StyledCurrentExpense>
      <Text bold>
        {merchant} - {user.first} {user.last}
      </Text>
      <Text small>
        {amount.value} {amount.currency} (
        <FormattedTime
          value={new Date(date)}
          year="numeric"
          month="short"
          day="numeric"
          hour="numeric"
          minute="numeric"
        />
        )
      </Text>
      {isShowMessage ? (
        <Text bold data-test="success-msg">
          {intl.formatMessage({ id: "messages.success_expense_save" })}
        </Text>
      ) : (
        <>
          <Label htmlFor="comment">{intl.formatMessage({ id: "general.comment" })}</Label>
          <Textarea rows="8" id="comment" value={comment} onChange={e => setComment(e.target.value)} />
          {isLoading && (
            <StyledLoaderOverlay>
              <Loader />
            </StyledLoaderOverlay>
          )}
          <StyledActions>
            <Button onClick={saveExpanse}>{intl.formatMessage({ id: "general.save" })}</Button>
          </StyledActions>
        </>
      )}
      {isShowError && <ErrorText data-test="error-msg">{intl.formatMessage({ id: "messages.error" })}</ErrorText>}
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
