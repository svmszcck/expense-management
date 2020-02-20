import React from "react";
import { FormattedTime, injectIntl } from "react-intl";
import { expensePropTypes, IntlPropType } from "../../constants";
import { Text } from "../UI/styled";
import { StyledItem, StyledAmount } from "./styled";

const ExpenseItem = ({ expense: { merchant, user, comment, receipts, date, amount, category }, intl }) => {
  return (
    <StyledItem>
      <div>
        <Text bold>
          {merchant} {!!category && `(${category})`}
        </Text>
        <Text>
          {user.first} {user.last}
        </Text>
        <Text>{comment}</Text>
        <Text>
          {!!receipts.length && intl.formatMessage({ id: "general.receipts_count" }, { count: receipts.length })}
        </Text>
      </div>
      <StyledAmount>
        <Text>
          {amount.value} {amount.currency}
        </Text>
        <Text small>
          <FormattedTime
            value={new Date(date)}
            year="numeric"
            month="short"
            day="numeric"
            hour="numeric"
            minute="numeric"
          />
        </Text>
      </StyledAmount>
    </StyledItem>
  );
};

ExpenseItem.propTypes = {
  expense: expensePropTypes,
  intl: IntlPropType
};

export default injectIntl(ExpenseItem);
