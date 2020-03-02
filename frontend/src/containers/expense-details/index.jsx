import { connect } from "react-redux";
import { selectExpense, postComment } from '../../store/expenses/actions'
import ExpenseDetails from '../../components/expense-details';

const mapStateToProps = (state) => ({
  expense: state.expenses.expenses.find(e => e.id === state.expenses.selectedExpenseId),
  isPostingComment: state.expenses.isPostingComment
});

const mapDispatchToProps = {
  selectExpense,
  postComment
};


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseDetails);
