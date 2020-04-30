import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SortComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mb-1">
        <button
          className="btn btn-sm btn-info my-1"
          onClick={this.props.toggleSortWindow}
        >
          {this.props.content.sort.toUpperCase()}
          {this.props.sortWindow ? (
            <i className="fas fa-chevron-up ml-2"></i>
          ) : (
            <i className="fas fa-chevron-down ml-2"></i>
          )}
        </button>
        {this.props.sortWindow && (
          <div className="my-2 py-2">
            <span className="mr-4 p-2 sortSection">
              {this.props.content.date}{' '}
              <button
                className="btn btn-secondary btn-sm ml-3"
                onClick={e => this.props.sortDate(e, 'ascending')}
              >
                <i className="fas fa-chevron-up"></i>
              </button>
              <button
                className="btn btn-secondary btn-sm ml-1"
                onClick={e => this.props.sortDate(e, 'descending')}
              >
                <i className="fas fa-chevron-down"></i>
              </button>
            </span>
            <span className="mx-4 p-2 sortSection">
              {this.props.content.price}{' '}
              <button
                className="btn btn-secondary btn-sm ml-3"
                onClick={e => this.props.sortPrice(e, 'ascending')}
              >
                <i className="fas fa-chevron-up"></i>
              </button>
              <button
                className="btn btn-secondary btn-sm ml-1"
                onClick={e => this.props.sortPrice(e, 'descending')}
              >
                <i className="fas fa-chevron-down"></i>
              </button>
            </span>
          </div>
        )}
      </div>
    );
  }
}

SortComponent.propTypes = {
  content: PropTypes.object.isRequired,
  sortDate: PropTypes.func.isRequired,
  sortPrice: PropTypes.func.isRequired,
  sortWindow: PropTypes.bool.isRequired,
  toggleSortWindow: PropTypes.func.isRequired
};

export default SortComponent;
