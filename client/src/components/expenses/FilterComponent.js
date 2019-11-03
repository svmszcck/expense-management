import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextInput from './common/TextInput';
import NumberInput from './common/NumberInput';
import SelectInput from './common/SelectInput';
import optionsCurrency from './common/optionsCurrency';
import optionsCategory from './common/optionsCategory';

class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="mb-3">
        <button
          className="btn btn-sm btn-info my-1"
          onClick={this.props.toggleFilterWindow}
        >
          {this.props.content.filter.toUpperCase()}
          {this.props.filterWindow ? (
            <i className="fas fa-chevron-up ml-2"></i>
          ) : (
            <i className="fas fa-chevron-down ml-2"></i>
          )}
        </button>
        {this.props.filterWindow && (
          <div className="my-2 py-2">
            <div className="row">
              <div className="col-2">
                <TextInput
                  value={this.props.filteredFirstName}
                  onChange={this.props.onChangeFilter}
                  placeholder={this.props.content.firstName}
                  name="filteredFirstName"
                  extraClass="form-control-sm"
                />
                <small className="text-muted">
                  {this.props.content.filterByFirstName}
                </small>
              </div>
              <div className="col-2">
                <TextInput
                  value={this.props.filteredLastName}
                  onChange={this.props.onChangeFilter}
                  placeholder={this.props.content.lastName}
                  name="filteredLastName"
                  extraClass="form-control-sm"
                />
                <small className="text-muted">
                  {this.props.content.filterByLastName}
                </small>
              </div>
              <div className="col-2">
                <NumberInput
                  value={this.props.filteredMinPrice}
                  onChange={this.props.onChangeFilter}
                  placeholder={this.props.content.minPrice}
                  name="filteredMinPrice"
                  extraClass="form-control-sm"
                  min={0}
                />
                <small className="text-muted">
                  {this.props.content.filterByMinPrice}
                </small>
              </div>
              <div className="col-2">
                <NumberInput
                  value={this.props.filteredMaxPrice}
                  onChange={this.props.onChangeFilter}
                  placeholder={this.props.content.maxPrice}
                  name="filteredMaxPrice"
                  extraClass="form-control-sm"
                  min={0}
                />
                <small className="text-muted">
                  {this.props.content.filterByMaxPrice}
                </small>
              </div>
              <div className="col-2">
                <SelectInput
                  name="filteredCurrency"
                  value={this.props.filteredCurrency}
                  onChange={this.props.onChangeFilter}
                  options={optionsCurrency}
                  extraClass="form-control-sm"
                />
                <small className="text-muted">
                  {this.props.content.filterByCurrency}
                </small>
              </div>
              <div className="col-2">
                <SelectInput
                  name="filteredCategory"
                  value={this.props.filteredCategory}
                  onChange={this.props.onChangeFilter}
                  options={optionsCategory}
                  extraClass="form-control-sm"
                />
                <small className="text-muted">
                  {this.props.content.filterByCategory}
                </small>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

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
