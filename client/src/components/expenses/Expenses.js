import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseCard from './ExpenseCard';

import { getExpenses } from '../../actions/expenseActions';

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      expenses: [],
      total: ''
    };
  }
  componentDidMount() {
    this.props.getExpenses();
  }
  componentWillReceiveProps(nextProps) {
    // Set errors
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    // Set expenses
    if (nextProps.expenses && nextProps.expenses.expenses) {
      this.setState({
        expenses: nextProps.expenses.expenses.expenses,
        total: nextProps.expenses.expenses.total
      });
    }
  }
  render() {
    const { errors, expenses } = this.state;
    let spinner = null;
    if (expenses.length === 0) {
      spinner = <div className="loader" />;
    } else {
      spinner = null;
    }
    return (
      <div>
        {spinner}
        {!spinner && (
          <div className="container pt-5">
            {this.state.expenses.length > 0 &&
              this.state.expenses.map(expense => (
                <ExpenseCard key={expense.id} expense={expense} />
              ))}
          </div>
        )}
      </div>
    );
  }
}

Expenses.propTypes = {
  errors: PropTypes.object,
  expenses: PropTypes.object,
  getExpenses: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  expenses: state.expenses
});

export default connect(
  mapStateToProps,
  {
    getExpenses
  }
)(Expenses);
