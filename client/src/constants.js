import PropTypes from "prop-types";

export const API_URL = `http://localhost:3000/expenses`;

export const DEFAULT_EXPENSES_LIMIT = 25;

export const expensePropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  merchant: PropTypes.string.isRequired,
  user: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string
  }).isRequired,
  comment: PropTypes.string,
  receipts: PropTypes.array,
  date: PropTypes.string.isRequired,
  amount: PropTypes.shape({
    value: PropTypes.string,
    currency: PropTypes.string
  })
});
