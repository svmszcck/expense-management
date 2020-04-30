import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SelectInput from '../common/SelectInput';
import NumberInput from '../common/NumberInput';
import optionsCurrency from '../common/optionsCurrency';
import { connect } from 'react-redux';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import optionsCategory from '../common/optionsCategory';

import { updateExpense } from '../../../actions/expenseActions';

class EditElementModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      price: '',
      currency: '',
      category: '',
      id: ''
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      date: nextProps.date,
      price: nextProps.price,
      currency: nextProps.currency,
      category: nextProps.category,
      id: nextProps.id
    });
  }
  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  onChangeDatepicker = date => {
    this.setState({ date: date });
  };
  submitModal = e => {
    e.preventDefault();
    let expenseObj = {};
    expenseObj.date = this.state.date;
    expenseObj.price = this.state.price;
    expenseObj.currency = this.state.currency;
    expenseObj.category = this.state.category;
    this.props.updateExpense(this.state.id, expenseObj);
    this.props.toggleModal();
  };
  render() {
    return (
      <Modal
        isOpen={this.props.modal}
        toggle={this.props.toggleModal}
        size="lg"
        onClosed={this.props.toggleModal}
      >
        <form onSubmit={this.submitModal}>
          <ModalHeader className="text-info">{this.props.content.editExpense}</ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <div className="form-input my-1">
                      <DatePicker
                        className="form-control"
                        selected={Date.parse(this.state.date)}
                        onChange={this.onChangeDatepicker}
                        name="date"
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={5}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        maxDate={Date.now()}
                      />
                    </div>
                    <div className="form-input my-1">
                      <NumberInput
                        value={this.state.price}
                        onChange={this.onChange}
                        name="price"
                        placeholder={this.props.content.price || ''}
                      />
                    </div>
                    <div className="form-input my-1">
                      <SelectInput
                        value={this.state.currency}
                        onChange={this.onChange}
                        name="currency"
                        options={optionsCurrency}
                      />
                    </div>
                    {this.props.admin && (
                      <div className="form-input">
                        <SelectInput
                          value={this.state.category}
                          onChange={this.onChange}
                          name="category"
                          options={optionsCategory}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-secondary mainButton" type="submit">
              {this.props.content.submit}
            </button>
            <button
              className="btn btn-danger"
              type="button"
              onClick={this.props.toggleModal}
            >
              {this.props.content.cancel}
            </button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

EditElementModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  date: PropTypes.string,
  price: PropTypes.string,
  currency: PropTypes.string,
  category: PropTypes.string.isRequired,
  admin: PropTypes.bool.isRequired,
  content: PropTypes.object.isRequired
};

export default connect(
  null,
  { updateExpense }
)(EditElementModal);
