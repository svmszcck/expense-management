import React from "react";
import { injectIntl } from "react-intl";
import { expensePropTypes, IntlPropType } from "../../constants";
import { Text, StyledRow } from "../UI/styled";
import { StyledItem } from "./styled";
import ExpenseInfo from "../ExpenseInfo/index";

const ExpenseItem = ({ expense, intl }) => {
  return (
    <StyledItem>
      <ExpenseInfo expense={expense} />
      <StyledRow>
        {!!expense.receipts.length && (
          <Text small>{intl.formatMessage({ id: "general.receipts_count" }, { count: expense.receipts.length })}</Text>
        )}
      </StyledRow>
    </StyledItem>
  );
};

ExpenseItem.propTypes = {
  expense: expensePropTypes,
  intl: IntlPropType
};

export default injectIntl(ExpenseItem);
