import { connect } from "react-redux";
import { fetchExpenses } from '../../store/expenses/actions'
import ExpensesList from '../../components/expenses-list';

const mapStateToProps = (state) => ({
  expenses: state.expenses.expenses
})

const mapDispatchToProps = {
  fetchExpenses
};


export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList);
