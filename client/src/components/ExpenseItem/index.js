import React from "react";
import { expensePropTypes } from "../../constants";
import { Text } from "../UI/styled";
import { StyledItem, StyledAmount } from "./styled";
import { FormattedTime } from "react-intl";

const ExpenseItem = ({ expense: { merchant, user, comment, receipts, date, amount } }) => {
  return (
    <StyledItem>
      <div>
        <Text bold>{merchant}</Text>
        <Text>
          {user.first} {user.last}
        </Text>
        <Text>{comment}</Text>
        <Text>
          {receipts.map(receipt => (
            <span>{receipt}</span>
          ))}
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
  expense: expensePropTypes
};

export default ExpenseItem;
