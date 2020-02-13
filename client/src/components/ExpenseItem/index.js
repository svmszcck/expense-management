import React from "react";
import { expensePropTypes } from "../../constants";
import { Text } from "../Text";
import { StyledItem, StyledAmount } from "./styled";
const options = { timeStyle: "short", dateStyle: "medium" };

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
        <Text small>{new Date(date).toLocaleDateString("en-US", options)} </Text>
      </StyledAmount>
    </StyledItem>
  );
};

ExpenseItem.propTypes = {
  expense: expensePropTypes
};

export default ExpenseItem;
