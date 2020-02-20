import React from "react";
import { FormattedTime, injectIntl } from "react-intl";
import { expensePropTypes, IntlPropType } from "../../constants";
import { Text } from "../UI/styled";
import { StyledItem, StyledRow } from "./styled";

const ExpenseItem = ({ expense: { merchant, user, receipts, date, amount, category }, intl }) => {
  return (
    <StyledItem>
      <StyledRow>
        <Text bold>
          {merchant} {!!category && `(${category})`}
        </Text>
        <Text align="right">
          {amount.value} {amount.currency}
        </Text>
      </StyledRow>
      <StyledRow>
        <Text small>
          {user.first} {user.last}
        </Text>
        <Text small align="right">
          <FormattedTime
            value={new Date(date)}
            year="numeric"
            month="short"
            day="numeric"
            hour="numeric"
            minute="numeric"
          />
        </Text>
      </StyledRow>
      <StyledRow>
        {!!receipts.length && (
          <Text small>{intl.formatMessage({ id: "general.receipts_count" }, { count: receipts.length })}</Text>
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
