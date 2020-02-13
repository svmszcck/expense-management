import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ExpensesList from "../components/ExpensesList";
import {
  selectError,
  selectExpenses,
  selectIsShowError,
  selectIsLoadMore,
  selectIsShowNoItems,
  selectIsAllLoaded,
  selectLoading
} from "../store/reducers/expenses/selectors";
import { fetchExpenses } from "../store/reducers/expenses/actions";

const mapStateToProps = createStructuredSelector({
  error: selectError,
  expenses: selectExpenses,
  isLoadMore: selectIsLoadMore,
  isShowError: selectIsShowError,
  isAllLoaded: selectIsAllLoaded,
  isShowNoItems: selectIsShowNoItems,
  isLoading: selectLoading
});

const mapDispatchToProps = {
  fetchExpenses
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList);
