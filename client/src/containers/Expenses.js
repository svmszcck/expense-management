import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ExpensesList from "../components/ExpensesList";
import {
  selectFilteredExpenses,
  selectIsShowError,
  selectIsShowLoadMore,
  selectIsShowNoItems,
  selectIsAllLoaded,
  selectIsLoading,
  selectCurrentExpenseId
} from "../store/expenses/selectors";
import { fetchExpenses, setExpenseId, resetExpenseId } from "../store/expenses/actions";

const mapStateToProps = createStructuredSelector({
  expenses: selectFilteredExpenses,
  isLoadMore: selectIsShowLoadMore,
  isShowError: selectIsShowError,
  isAllLoaded: selectIsAllLoaded,
  isShowNoItems: selectIsShowNoItems,
  isLoading: selectIsLoading,
  expenseId: selectCurrentExpenseId
});

const mapDispatchToProps = {
  fetchExpenses,
  setExpenseId,
  resetExpenseId
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList);
