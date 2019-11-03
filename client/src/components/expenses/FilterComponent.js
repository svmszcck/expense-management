import React from 'react';
import PropTypes from 'prop-types';

import TextInput from './common/TextInput';
import NumberInput from './common/NumberInput';
import SelectInput from './common/SelectInput';
import optionsCurrency from './common/optionsCurrency';
import optionsCategory from './common/optionsCategory';

const FilterComponent = ({
  toggleFilterWindow,
  filterWindow,
  onChangeFilter,
  filteredFirstName,
  filteredLastName,
  filteredMinPrice,
  filteredMaxPrice,
  filteredCurrency,
  filteredCategory
}) => {
  return (
    <div className="mb-3">
              <button
                className="btn btn-sm btn-info my-1"
                onClick={toggleFilterWindow}
              >
                FILTER
                {filterWindow ? (
                  <i className="fas fa-chevron-up ml-2"></i>
                ) : (
                  <i className="fas fa-chevron-down ml-2"></i>
                )}
              </button>
              {filterWindow && (
                <div className="my-2 py-2">
                  <div className="row">
                    <div className="col-2">
                      <TextInput
                        value={filteredFirstName}
                        onChange={onChangeFilter}
                        placeholder="First Name"
                        name="filteredFirstName"
                        extraClass="form-control-sm"
                      />
                    </div>
                    <div className="col-2">
                      <TextInput
                        value={filteredLastName}
                        onChange={onChangeFilter}
                        placeholder="Last Name"
                        name="filteredLastName"
                        extraClass="form-control-sm"
                      />
                    </div>
                    <div className="col-2">
                      <NumberInput
                        value={filteredMinPrice}
                        onChange={onChangeFilter}
                        placeholder="Min Price"
                        name="filteredMinPrice"
                        extraClass="form-control-sm"
                      />
                    </div>
                    <div className="col-2">
                      <NumberInput
                        value={filteredMaxPrice}
                        onChange={onChangeFilter}
                        placeholder="Max Price"
                        name="filteredMaxPrice"
                        extraClass="form-control-sm"
                      />
                    </div>
                    <div className="col-2">
                      <SelectInput
                        name="filteredCurrency"
                        value={filteredCurrency}
                        onChange={onChangeFilter}
                        options={optionsCurrency}
                        extraClass="form-control-sm"
                      />
                    </div>
                    <div className="col-2">
                      <SelectInput
                        name="filteredCategory"
                        value={filteredCategory}
                        onChange={onChangeFilter}
                        options={optionsCategory}
                        extraClass="form-control-sm"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
  );
};

FilterComponent.propTypes = {
  toggleFilterWindow: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  filterWindow: PropTypes.bool.isRequired,
  filteredFirstName: PropTypes.string.isRequired,
  filteredLastName: PropTypes.string.isRequired,
  filteredMinPrice: PropTypes.string.isRequired,
  filteredMaxPrice: PropTypes.string.isRequired,
  filteredCurrency: PropTypes.string.isRequired,
  filteredCategory: PropTypes.string.isRequired
};

export default FilterComponent;
