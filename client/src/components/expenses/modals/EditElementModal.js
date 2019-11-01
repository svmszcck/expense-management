import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SelectInput from '../common/SelectInput';
import NumberInput from '../common/NumberInput';
import optionsCurrency from '../common/optionsCurrency';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EditElementModal = ({
  modal,
  toggleModal,
  resetModal,
  submitModal,
  date,
  price,
  currency,
  onChange,
  onChangeDatepicker
}) => {
  return (
    <Modal isOpen={modal} toggle={toggleModal} size="lg" onClosed={resetModal}>
      <form onSubmit={submitModal}>
        <ModalHeader className="text-info">Edit Expense</ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <div className="form-input">
                    <DatePicker
                      className="form-control"
                      selected={Date.parse(date)}
                      onChange={onChangeDatepicker}
                      name="date"
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={5}
                      timeCaption="time"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      maxDate={Date.now()}
                    />
                  </div>
                  <div className="form-input">
                    <NumberInput
                      value={price}
                      onChange={onChange}
                      name="price"
                      placeholder="price"
                    />
                  </div>
                  <div className="form-input">
                    <SelectInput
                      value={currency}
                      onChange={onChange}
                      name="currency"
                      options={optionsCurrency}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-secondary mainButton" type="submit">
            Submit
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={toggleModal}
          >
            Cancel
          </button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

EditElementModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  resetModal: PropTypes.func.isRequired,
  submitModal: PropTypes.func.isRequired,
  date: PropTypes.string,
  price: PropTypes.string,
  currency: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onChangeDatepicker: PropTypes.func.isRequired,
};

export default EditElementModal;
