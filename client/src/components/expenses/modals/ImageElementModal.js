import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FileInputGroup from '../common/FileInputGroup';

import { addReceiptImage } from '../../../actions/expenseActions';

class ImageElementModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageObject: {},
      errors: {},
      id: ''
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.id) {
      this.setState({ id: nextProps.id });
    }
  }
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
      this.props.toggleModal();
    } else {
      let updatedErrors = this.state.errors;
      updatedErrors.image = 'Choose image to upload';
      this.setState({ errors: updatedErrors });
    }
  };
  render() {
    return (
      <Modal
        isOpen={this.props.modal}
        toggle={this.props.toggleModal}
        size="lg"
        onClosed={this.props.toggleModal}
      >
        <form onSubmit={this.submitImage}>
          <ModalHeader className="text-info">
            {this.props.content.uploadNewImage}
          </ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <FileInputGroup
                    name="receipt"
                    placeholder={this.props.content.receipt}
                    onChange={this.changeImage}
                    sendFile={this.state.imageObject}
                    error={this.state.errors.image}
                    accept="image/png, image/jpg, image/jpeg"
                  />
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
ImageElementModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  addReceiptImage: PropTypes.func.isRequired
};

export default connect(
  null,
  { addReceiptImage }
)(ImageElementModal);
