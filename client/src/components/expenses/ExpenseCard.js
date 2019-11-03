import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

class ExpenseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row border mb-2">
        <div className="col-1 px-0">
          <a href="#">
            <img
              src={
                this.props.expense.receipts.length > 0
                  ? this.props.expense.receipts[0].url
                  : 'https://picsum.photos/200?random=1'
              }
              alt="img1"
              className="img-fluid"
            />
          </a>
          <div className="text-center">{this.props.expense.category}</div>
        </div>
        <div className="col-7 border-left">
          <h4 className="mt-2">
            {this.props.expense.user.first} {this.props.expense.user.last}
            <span className="h5 ml-3 text-secondary">
              <a href={`mailto:${this.props.expense.user.email}`}>
                <i> {this.props.expense.user.email}</i>
              </a>
            </span>
          </h4>
          <p className="mb-0">{this.props.expense.comment}</p>
        </div>
        <div className="col-3 border-left border-right pt-2">
          <p className="lead mb-1">
            <i className="icon fas fa-calendar-alt text-center"></i>
            <Moment format="D MMM YYYY" withTitle>
              {this.props.expense.date}
            </Moment>
          </p>
          <p className="lead mb-1">
            <i className="icon fas fa-dollar-sign text-center"></i>
            {this.props.expense.amount.value}{' '}
            {this.props.expense.amount.currency}{' '}
            <span className="text-muted baseEUR float-right mt-1">
              <i>
                {(
                  this.props.expense.amount.value /
                  this.props.expense.amount.baseEUR
                ).toFixed(2)}{' '}
                EUR
              </i>
            </span>
          </p>
          <p className="lead mb-1">
            <i className="icon fas fa-clock text-center"></i>
            <Moment format="HH:mm A">{this.props.expense.date}</Moment>
          </p>
        </div>
        <div className="col-1 pt-1">
          <button
            className="btn btn-block btn-success btn-sm my-1"
            onClick={e => this.props.openImageModal(e, this.props.expense.id)}
          >
            <i className="fas fa-camera"></i>
          </button>
          <button
            className="btn btn-block btn-success btn-sm my-1"
            onClick={e =>
              this.props.openCommentModal(
                e,
                this.props.expense.id,
                this.props.expense.comment
              )
            }
          >
            <i className="fas fa-comments"></i>
          </button>
          <button
            className="btn btn-block btn-warning btn-sm my-1"
            onClick={e =>
              this.props.openEditModal(
                e,
                this.props.expense.id,
                this.props.expense.date,
                this.props.expense.amount.value,
                this.props.expense.amount.currency,
                this.props.expense.category
              )
            }
          >
            <i className="fas fa-edit"></i>
          </button>
        </div>
      </div>
    );
  }
}

ExpenseCard.propTypes = {
  expense: PropTypes.object.isRequired,
  openImageModal: PropTypes.func.isRequired,
  openCommentModal: PropTypes.func.isRequired,
  openEditModal: PropTypes.func.isRequired
};

export default ExpenseCard;
