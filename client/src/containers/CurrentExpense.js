import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CurrentExpense from "../components/CurrentExpense";
import { selectCurrentExpense } from "../store/expenses/selectors";
import { updateExpense, resetExpenseId } from "../store/expenses/actions";

const mapStateToProps = createStructuredSelector({
  expense: selectCurrentExpense
});

const mapDispatchToProps = {
  updateExpense,
  onSuccessUpdate: resetExpenseId
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentExpense);
