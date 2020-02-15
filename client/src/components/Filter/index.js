/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";
import { IntlPropType, SelectOptionPropType } from "../../constants";
import { StyledInput } from "../Input/styled";
import Select from "../Select";

const Filter = ({ currencies, currency, search, changeFilterValue, intl }) => {
  const isCurrenciesDisabled = currencies.length === 0;

  return (
    <div>
      <StyledInput
        data-test="search"
        defaultValue={search}
        placeholder={intl.formatMessage({ id: "general.search" })}
        onChange={e => changeFilterValue({ key: "search", value: e.target.value })}
      />
      <Select
        data-test="currency"
        disabled={isCurrenciesDisabled}
        options={currencies}
        placeholder={intl.formatMessage({ id: "general.currency" })}
        onChange={e => changeFilterValue({ key: "currency", value: e.target.value })}
        value={currency}
      />
    </div>
  );
};

Filter.propTypes = {
  intl: IntlPropType,
  currencies: PropTypes.arrayOf(SelectOptionPropType),
  changeFilterValue: PropTypes.func.isRequired,
  currency: PropTypes.string
};

Filter.defaultProps = {
  currencies: [],
  currency: ""
};

export default injectIntl(Filter);
