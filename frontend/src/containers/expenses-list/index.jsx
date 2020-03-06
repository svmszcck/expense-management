import { connect } from "react-redux";
import { fetchExpenses } from '../../store/expenses/actions'
import ExpensesList from '../../components/expenses-list';

const mapStateToProps = (state) => ({
  expenses: state.expenses.isSearchActive
    ? state.expenses.filteredExpenses
    : state.expenses.expenses,
  isSearchActive: state.expenses.isSearchActive,
  isLoading: !state.expenses.expenses.length && state.expenses.isFetching,
  selectedExpenseId: state.expenses.selectedExpenseId
})

const mapDispatchToProps = {
  fetchExpenses
};


export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList);
