import { connect } from "react-redux";
import { selectExpense, postComment, uploadFile } from '../../store/expenses/actions'
import ExpenseDetails from '../../components/expense-details';

const mapStateToProps = (state) => ({
  expense: state.expenses.expenses.find(e => e.id === state.expenses.selectedExpenseId),
  isPostingComment: state.expenses.isPostingComment,
  isUploadingFile: state.expenses.isUploadingFile
});

const mapDispatchToProps = {
  selectExpense,
  postComment,
  uploadFile
};


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseDetails);
