import React from 'react';
import PropTypes from 'prop-types';

const SortComponent = ({
  filterName,
  filterSurname,
  filterCurrency,
  filterPriceMix,
  filterPriceMax,
  filterDateMin,
  filterDateMax
}) => {
  return (
    <div className="mb-3">
      <button className="btn btn-sm btn-info my-3" onClick={toggleSortWindow}>
        SORT
        {sortWindow ? (
          <i className="fas fa-chevron-up ml-2"></i>
        ) : (
          <i className="fas fa-chevron-down ml-2"></i>
        )}
      </button>
      {sortWindow && (
        <div className="my-2 py-2">
          <span className="mr-4 border p-3 sortSection">
            date{' '}
            <button
              className="btn btn-secondary btn-sm ml-3"
              onClick={e => sortDate(e, 'ascending')}
            >
              <i className="fas fa-chevron-up"></i>
            </button>
            <button
              className="btn btn-secondary btn-sm ml-1"
              onClick={e => sortDate(e, 'descending')}
            >
              <i className="fas fa-chevron-down"></i>
            </button>
          </span>
          <span className="mx-4 border p-3 sortSection">
            price{' '}
            <button
              className="btn btn-secondary btn-sm ml-3"
              onClick={e => sortPrice(e, 'ascending')}
            >
              <i className="fas fa-chevron-up"></i>
            </button>
            <button
              className="btn btn-secondary btn-sm ml-1"
              onClick={e => sortPrice(e, 'descending')}
            >
              <i className="fas fa-chevron-down"></i>
            </button>
          </span>
        </div>
      )}
    </div>
  );
};

SortComponent.propTypes = {
  sortDate: PropTypes.func.isRequired,
  sortPrice: PropTypes.func.isRequired,
  sortWindow: PropTypes.bool.isRequired,
  toggleSortWindow: PropTypes.func.isRequired
};

export default SortComponent;
