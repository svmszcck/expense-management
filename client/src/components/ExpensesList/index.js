import React, { useEffect } from "react";
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
      {isShowError && <ErrorText>Error message</ErrorText>}
      {isShowNoItems && <Text>No results</Text>}
      {isAllLoaded && <Text>All items loaded</Text>}
      {isLoadMore && (
        <Button centered onClick={fetchExpenses}>
          Load more
        </Button>
      )}
    </StyledExpensesList>
  );
};

ExpensesList.propTypes = {
  expenses: PropTypes.arrayOf(expensePropTypes)
};

export default ExpensesList;
