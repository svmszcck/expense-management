import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { changeFilter } from "../store/filter/actions";
import { selectSearch, selectCurrency } from "../store/filter/selectors";
import Filter from "../components/Filter";
import { selectCurrenciesOptions } from "../store/expenses/selectors";

const mapStateToProps = createStructuredSelector({
  search: selectSearch,
  currencies: selectCurrenciesOptions,
  currency: selectCurrency
});

const mapDispatchToProps = {
  changeFilterValue: changeFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
