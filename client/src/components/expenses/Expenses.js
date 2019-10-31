import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseCard from './ExpenseCard';
import ImageElementModal from './ImageElementModal';

import { getExpenses, addReceiptImage } from '../../actions/expenseActions';

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      expenses: [],
      total: '',
      imageModal: false,
      imageObject: {},
      id: ''
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
  openImageModal = (e, id) => {
    e.preventDefault();
    if (!this.state.imageModal) {
      this.setState({ imageModal: true, id: id });
    }
  };
  resetImageModal = () => {
    this.setState({
      imageModal: false,
      imageObject: {},
      id: ''
    });
  };
  toggleImageModal = e => {
    e.preventDefault();
    if (this.state.imageModal) {
      this.setState({ imageModal: false });
    }
    if (this.state.errors && this.state.errors.image) {
      let updatedErrors = this.state.errors;
      delete updatedErrors.image;
      this.setState({ errors: updatedErrors });
    }
  };
  changeImage = e => {
    e.preventDefault();
    this.setState({ imageObject: e.target.files[0] });
    if (this.state.errors && this.state.errors.image) {
      let updatedErrors = this.state.errors;
      delete updatedErrors.image;
      this.setState({ errors: updatedErrors });
    }
  };
  submitImage = e => {
    e.preventDefault();
    if (this.state.imageObject.name) {
      const formData = new FormData();
      formData.append('receipt', this.state.imageObject);
      const configData = {
        headers: {
          'content-type': 'multipart/form/data'
        }
      };
      console.log('adding image', this.state.id);
      this.props.addReceiptImage(formData, configData, this.state.id);
      this.resetImageModal();
    } else {
      let updatedErrors = this.state.errors;
      updatedErrors.image = 'Choose image to upload';
      this.setState({ errors: updatedErrors });
    }
  };
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
                <ExpenseCard
                  key={expense.id}
                  expense={expense}
                  openImageModal={this.openImageModal}
                />
              ))}
          </div>
        )}
        <section id="imageModal">
          <ImageElementModal
            modal={this.state.imageModal}
            toggleModal={this.toggleImageModal}
            resetModal={this.resetImageModal}
            submitModal={this.submitImage}
            changeImage={this.changeImage}
            imageObject={this.state.imageObject}
            errors={errors}
          />
        </section>
      </div>
    );
  }
}

Expenses.propTypes = {
  errors: PropTypes.object,
  expenses: PropTypes.object,
  getExpenses: PropTypes.func.isRequired,
  addReceiptImage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  expenses: state.expenses
});

export default connect(
  mapStateToProps,
  {
    getExpenses,
    addReceiptImage
  }
)(Expenses);
