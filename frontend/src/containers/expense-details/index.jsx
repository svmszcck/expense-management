import { connect } from "react-redux";
import { selectExpense } from '../../store/expenses/actions'
import ExpenseDetails from '../../components/expense-details';

const mapStateToProps = (state) => ({
  expense: state.expenses.expenses.find(e => e.id === state.expenses.selectedExpenseId)
});

const mapDispatchToProps = {
  selectExpense
};


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseDetails);
