/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { expensePropTypes } from "../../constants";
import CurrentExpense from "../../containers/CurrentExpense";
import { Button, CloseButton, ErrorText, Text } from "../UI/styled";
import ExpenseItem from "../ExpenseItem";
import { StyledExpensesList } from "./styled";

const ExpensesList = ({
  expenses,
  fetchExpenses,
  isLoadMore,
  isLoading,
  isAllLoaded,
  isShowError,
  isShowNoItems,
  setExpenseId,
  resetExpenseId,
  expenseId
}) => {
  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <StyledExpensesList>
        {expenses.map(expense => (
          <div
            key={expense.id}
            onClick={() => {
              setExpenseId(expense.id);
            }}
          >
            <ExpenseItem expense={expense}></ExpenseItem>
          </div>
        ))}
        {isLoading && <Text>Loading...</Text>}
        {isShowError && (
          <ErrorText>
            <FormattedMessage id="messages.error" />
          </ErrorText>
        )}
        {isShowNoItems && (
          <Text>
            <FormattedMessage id="general.no_results" />
          </Text>
        )}
        {isAllLoaded && (
          <Text>
            <FormattedMessage id="general.all_items_loaded" />
          </Text>
        )}
        {isLoadMore && (
          <Button centered onClick={fetchExpenses}>
            <FormattedMessage id="general.load_more" />
          </Button>
        )}
      </StyledExpensesList>
      <Modal className="modal" isOpen={!!expenseId} onRequestClose={resetExpenseId} bodyOpenClassName="preventScroll">
        <CloseButton onClick={resetExpenseId} />
        <CurrentExpense />
      </Modal>
    </div>
  );
};

ExpensesList.propTypes = {
  expenses: PropTypes.arrayOf(expensePropTypes),
  fetchExpenses: PropTypes.func.isRequired,
  isLoadMore: PropTypes.bool,
  isLoading: PropTypes.bool,
  isAllLoaded: PropTypes.bool,
  isShowError: PropTypes.bool,
  isShowNoItems: PropTypes.bool,
  setExpenseId: PropTypes.func
};

ExpensesList.defaultProps = {
  isLoadMore: false,
  isLoading: false,
  isAllLoaded: false,
  isShowError: false,
  isShowNoItems: false
};

export default ExpensesList;
