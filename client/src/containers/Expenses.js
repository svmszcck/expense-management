import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ExpensesList from "../components/ExpensesList";
import {
  selectFilteredExpenses,
  selectIsShowError,
  selectIsShowLoadMore,
  selectIsShowNoItems,
  selectIsAllLoaded,
  selectIsLoading
} from "../store/expenses/selectors";
import { fetchExpenses } from "../store/expenses/actions";
import { selectCurrentExpenseId } from "../store/editExpense/selectors";
import { resetExpenseId, setExpenseId } from "../store/editExpense/actions";

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
