/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import { expensePropTypes } from "../../constants";
import ExpenseItem from "../ExpenseItem";
import { Button } from "../Button";
import { ErrorText, Text } from "../Text";
import { StyledExpensesList } from "./styled";

const ExpensesList = ({ expenses, fetchExpenses, isLoadMore, isLoading, isAllLoaded, isShowError, isShowNoItems }) => {
  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <StyledExpensesList>
      {expenses.map(expense => (
        <ExpenseItem expense={expense} key={expense.id}></ExpenseItem>
      ))}
      {isLoading && <Text>Loading...</Text>}
      {isShowError && (
        <ErrorText>
          <FormattedMessage id="general.error_msg" />
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
  );
};

ExpensesList.propTypes = {
  expenses: PropTypes.arrayOf(expensePropTypes),
  fetchExpenses: PropTypes.func.isRequired,
  isLoadMore: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isAllLoaded: PropTypes.bool.isRequired,
  isShowError: PropTypes.func.isRequired,
  isShowNoItems: PropTypes.func.isRequired
};

export default ExpensesList;
