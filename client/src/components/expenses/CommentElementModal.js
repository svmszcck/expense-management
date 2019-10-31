import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TextareaInput from './TextareaInput';

const CommentElementModal = ({
  modal,
  toggleModal,
  resetModal,
  submitModal,
  comment,
  onChange
}) => {
  return (
    <Modal isOpen={modal} toggle={toggleModal} size="lg" onClosed={resetModal}>
      <form onSubmit={submitModal}>
        <ModalHeader className="text-info">
          Change Comment
        </ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <TextareaInput 
                    value={comment}
                    onChange={onChange}
                    name="comment"
                    placeholder="Add Comment"
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-secondary mainButton" type="submit">
            Submit
          </button>
          <button className="btn btn-danger" type="button" onClick={toggleModal}>
            Cancel
          </button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

CommentElementModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  resetModal: PropTypes.func.isRequired,
  submitModal: PropTypes.func.isRequired,
  comment: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default CommentElementModal;
