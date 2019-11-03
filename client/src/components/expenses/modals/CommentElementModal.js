import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TextareaInput from '../common/TextareaInput';

import { updateExpense } from '../../../actions/expenseActions';

class CommentElementModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      id: ''
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ comment: nextProps.comment, id: nextProps.id });
  }
  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  submitModal = e => {
    e.preventDefault();
    let commentObj = {};
    commentObj.comment = this.state.comment;
    this.props.updateExpense(this.state.id, commentObj);
    this.props.toggleModal();
  };
  render() {
    return (
      <Modal
        isOpen={this.props.modal}
        toggle={this.props.toggleModal}
        size="lg"
        onClosed={this.props.resetModal}
      >
        <form onSubmit={this.submitModal}>
          <ModalHeader className="text-info">
            {this.props.content.changeComment}
          </ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <TextareaInput
                      value={this.state.comment}
                      onChange={this.onChange}
                      name="comment"
                      placeholder={this.props.content.addComment}
                    />
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

CommentElementModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  comment: PropTypes.string,
  id: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  updateExpense: PropTypes.func.isRequired
};

export default connect(
  null,
  { updateExpense }
)(CommentElementModal);
