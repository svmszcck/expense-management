import { connect } from "react-redux";
import { fetchExpenses } from '../../store/expenses/actions'
import Pagination from '../../components/pagination';

const mapStateToProps = (state) => ({
  loaded: state.expenses.expenses.length,
  total: state.expenses.total,
  isLoading: state.expenses.isFetching
});

const mapDispatchToProps = {
  fetchNext: fetchExpenses
};


export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
