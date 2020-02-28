import { connect } from "react-redux";
import { fetchExpenses, selectExpense } from '../../store/expenses/actions'
import ExpensesList from '../../components/expenses-list';

const mapStateToProps = (state) => ({
  expenses: state.expenses.expenses,
  isLoading: !state.expenses.expenses.length && state.expenses.isFetching,
  selectedExpenseId: state.expenses.selectedExpenseId
})

const mapDispatchToProps = {
  fetchExpenses,
  selectExpense
};


export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList);
