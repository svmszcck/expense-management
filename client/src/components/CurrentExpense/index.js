import React, { useState } from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";
import { apiUpdateExpense } from "../../api";
import { expensePropTypes, IntlPropType } from "../../constants";
import { Button } from "../Button";
import { ErrorText, Text } from "../Text";

// TODO: update styles
const HIDE_MODAL_DELAY = 2000;

const CurrentExpense = ({ expense, updateExpense, onSuccessUpdate, intl }) => {
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
    <div>
      {isShowMessage ? (
        <Text data-test="success-msg">{intl.formatMessage({ id: "messages.success_expense_save" })}</Text>
      ) : (
        <>
          <textarea value={comment} onChange={e => setComment(e.target.value)} />
          <Button onClick={saveExpanse}>{intl.formatMessage({ id: "general.save" })}</Button>
        </>
      )}
      {isShowError && <ErrorText data-test="error-msg">{intl.formatMessage({ id: "messages.error" })}</ErrorText>}
      {isLoading && <Text>Loading...</Text>}
    </div>
  );
};

CurrentExpense.propTypes = {
  expense: expensePropTypes,
  updateExpense: PropTypes.func,
  onSuccessUpdate: PropTypes.func,
  intl: IntlPropType
};

export default injectIntl(CurrentExpense);
