import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseCard from './ExpenseCard';
import ImageElementModal from './modals/ImageElementModal';
import CommentElementModal from './modals/CommentElementModal';
import EditElementModal from './modals/EditElementModal';

import SortComponent from './SortComponent';
import FilterComponent from './FilterComponent';

import ReactPaginate from 'react-paginate';

import {
  getExpenses,
  addReceiptImage,
  updateExpense
} from '../../actions/expenseActions';

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      expenses: [],
      total: '',
      imageModal: false,
      imageObject: {},
      id: '',
      commentModal: false,
      comment: '',
      date: '',
      price: '',
      currency: '',
      category: '',
      editModal: false,
      offset: 0,
      filterWindow: false,
      sortWindow: false,
      filteredExpenses: [],
      filteredFirstName: '',
      filteredLastName: '',
      filteredMinPrice: '',
      filteredMaxPrice: '',
      filteredCurrency: '',
      filteredCategory: '',
      admin: false,
      language: 'ENG',
      content: {}
    };
  }
  componentDidMount() {
    this.props.getExpenses(this.state.offset);
  }
  componentWillReceiveProps(nextProps) {
    // Set locale
    if (nextProps.locale) {
      this.setState({
        language: nextProps.locale.language,
        content: nextProps.locale.content
      });
    }
    // Set admin status
    if (nextProps.admin) {
      this.setState({ admin: nextProps.admin.admin });
    }
    // Set errors
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    // Set expenses
    if (nextProps.expenses && nextProps.expenses.expenses) {
      this.setState({
        expenses: nextProps.expenses.expenses.expenses,
        filteredExpenses: nextProps.expenses.expenses.expenses,
        total: nextProps.expenses.expenses.total
      });
    }
  }
  // SORT WINDOW
  toggleSortWindow = e => {
    e.preventDefault();
    this.setState({ sortWindow: !this.state.sortWindow });
  };
  sortPrice = (e, direction) => {
    e.preventDefault();
    let unsortedList = this.state.filteredExpenses;
    if (direction === 'ascending') {
      unsortedList.sort((a, b) =>
        parseFloat(a.amount.value / a.amount.baseEUR) >
        parseFloat(b.amount.value / b.amount.baseEUR)
          ? 1
          : -1
      );
    } else {
      unsortedList.sort((a, b) =>
        parseFloat(a.amount.value / a.amount.baseEUR) <
        parseFloat(b.amount.value / b.amount.baseEUR)
          ? 1
          : -1
      );
    }
    this.setState({ expenses: unsortedList });
  };
  sortDate = (e, direction) => {
    e.preventDefault();
    let unsortedList = this.state.filteredExpenses;
    if (direction === 'ascending') {
      unsortedList.sort((a, b) => {
        a = new Date(a.date);
        b = new Date(b.date);
        return a < b ? -1 : a > b ? 1 : 0;
      });
    } else {
      unsortedList.sort((a, b) => {
        a = new Date(a.date);
        b = new Date(b.date);
        return a > b ? -1 : a < b ? 1 : 0;
      });
    }
    this.setState({ expenses: unsortedList });
  };
  // FILTER WINDOW
  toggleFilterWindow = e => {
    e.preventDefault();
    this.setState({ filterWindow: !this.state.filterWindow });
  };
  filterExpenses = () => {
    let unfilteredList = this.state.expenses;
    let filteredList = [];
    // Filter All fields
    for (let i = 0; i < unfilteredList.length; i++) {
      if (
        unfilteredList[i].user.first
          .substring(0, this.state.filteredFirstName.length)
          .toLowerCase() === this.state.filteredFirstName.toLowerCase() &&
        unfilteredList[i].user.last
          .substring(0, this.state.filteredLastName.length)
          .toLowerCase() === this.state.filteredLastName.toLowerCase() &&
        (unfilteredList[i].amount.value / unfilteredList[i].amount.baseEUR >=
          Number(this.state.filteredMinPrice) ||
          this.state.filteredMinPrice === '') &&
        (unfilteredList[i].amount.value / unfilteredList[i].amount.baseEUR <=
          Number(this.state.filteredMaxPrice) ||
          this.state.filteredMaxPrice === '') &&
        (unfilteredList[i].amount.currency === this.state.filteredCurrency ||
          this.state.filteredCurrency === '') &&
        (unfilteredList[i].category === this.state.filteredCategory ||
          this.state.filteredCategory === '')
      ) {
        filteredList.push(unfilteredList[i]);
      }
    }
    this.setState({ filteredExpenses: filteredList });
  };
  onChangeFilter = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value }, () =>
      this.filterExpenses()
    );
  };
  // IMAGE MODAL
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
      this.props.addReceiptImage(formData, configData, this.state.id);
      this.resetImageModal();
    } else {
      let updatedErrors = this.state.errors;
      updatedErrors.image = 'Choose image to upload';
      this.setState({ errors: updatedErrors });
    }
  };
  // COMMENT MODAL
  onChange = e => {
    e.preventDefault();
    let errorsUpdate = {};
    if (this.state.errors[`${e.target.name}`]) {
      errorsUpdate = this.state.errors;
      delete errorsUpdate[`${e.target.name}`];
    }
    this.setState({ [e.target.name]: e.target.value, errors: errorsUpdate });
  };
  openCommentModal = (e, id, comment) => {
    e.preventDefault();
    if (!this.state.commentModal) {
      this.setState({ commentModal: true, id: id, comment: comment });
    }
  };
  toggleCommentModal = e => {
    e.preventDefault();
    if (this.state.commentModal) {
      this.setState({ commentModal: false });
    }
  };
  // EDIT MODAL
  openEditModal = (e, id, date, price, currency, category) => {
    e.preventDefault();
    if (!this.state.editModal) {
      this.setState({
        editModal: true,
        id: id,
        date: date,
        price: price,
        currency: currency,
        category: category
      });
    }
  };
  submitEditModal = e => {
    e.preventDefault();
    let expenseObj = {};
    expenseObj.date = this.state.date;
    expenseObj.price = this.state.price;
    expenseObj.currency = this.state.currency;
    expenseObj.category = this.state.category;
    this.props.updateExpense(this.state.id, expenseObj);
    this.resetEditModal();
  };
  resetEditModal = () => {
    this.setState({
      editModal: false
    });
  };
  toggleEditModal = e => {
    e.preventDefault();
    if (this.state.editModal) {
      this.setState({ editModal: false });
    }
  };
  onChangeDatepicker = date => {
    this.setState({ date: date });
  };
  // PAGINATION
  handlePageClick = data => {
    let offset = data.selected * this.state.expenses.length;
    this.props.getExpenses(offset);
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
            <SortComponent
              sortDate={this.sortDate}
              sortPrice={this.sortPrice}
              sortWindow={this.state.sortWindow}
              toggleSortWindow={this.toggleSortWindow}
              content={this.state.content}
            />
            <FilterComponent
              toggleFilterWindow={this.toggleFilterWindow}
              filterWindow={this.state.filterWindow}
              onChangeFilter={this.onChangeFilter}
              filteredFirstName={this.state.filteredFirstName}
              filteredLastName={this.state.filteredLastName}
              filteredMinPrice={this.state.filteredMinPrice}
              filteredMaxPrice={this.state.filteredMaxPrice}
              filteredCurrency={this.state.filteredCurrency}
              filteredCategory={this.state.filteredCategory}
              content={this.state.content}
            />
            {this.state.filteredExpenses.length > 0 ? (
              this.state.filteredExpenses.map(expense => (
                <ExpenseCard
                  key={expense.id}
                  expense={expense}
                  openImageModal={this.openImageModal}
                  openCommentModal={this.openCommentModal}
                  openEditModal={this.openEditModal}
                />
              ))
            ) : (
              <div>No Expenses Found</div>
            )}
          </div>
        )}
        <div className="container">
          <ReactPaginate
            previousLabel={<i className="fas fa-chevron-left"></i>}
            nextLabel={<i className="fas fa-chevron-right"></i>}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={Math.ceil(this.state.total / this.state.expenses.length)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'activePage'}
            nextClassName={'nextPrevBox'}
            previousClassName={'nextPrevBox'}
            pageClassName={'pageBox'}
            activeLinkClassName={'pageLink'}
            pageLinkClassName={'pageLink'}
            breakClassName={'pageBox'}
            breakLinkClassName={'pageLink'}
          />
        </div>
        <section id="imageModal">
          <ImageElementModal
            modal={this.state.imageModal}
            toggleModal={this.toggleImageModal}
            resetModal={this.resetImageModal}
            submitModal={this.submitImage}
            changeImage={this.changeImage}
            imageObject={this.state.imageObject}
            errors={errors}
            content={this.state.content}
          />
        </section>
        <section id="commentModal">
          <CommentElementModal
            modal={this.state.commentModal}
            toggleModal={this.toggleCommentModal}
            resetModal={this.resetCommentModal}
            comment={this.state.comment}
            content={this.state.content}
            id={this.state.id}
          />
        </section>
        <section id="editModal">
          <EditElementModal
            modal={this.state.editModal}
            toggleModal={this.toggleEditModal}
            resetModal={this.resetEditModal}
            submitModal={this.submitEditModal}
            date={this.state.date.toString()}
            price={this.state.price}
            currency={this.state.currency}
            onChange={this.onChange}
            onChangeDatepicker={this.onChangeDatepicker}
            category={this.state.category}
            admin={this.state.admin}
            content={this.state.content}
          />
        </section>
      </div>
    );
  }
}

Expenses.propTypes = {
  errors: PropTypes.object,
  expenses: PropTypes.object,
  admin: PropTypes.object.isRequired,
  locale: PropTypes.object.isRequired,
  getExpenses: PropTypes.func.isRequired,
  addReceiptImage: PropTypes.func.isRequired,
  updateExpense: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  expenses: state.expenses,
  admin: state.admin,
  locale: state.locale
});

export default connect(
  mapStateToProps,
  {
    getExpenses,
    addReceiptImage,
    updateExpense
  }
)(Expenses);
