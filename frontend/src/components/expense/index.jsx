import React from 'react';
import classnames from 'classnames';
import getSymbolFromCurrency from 'currency-symbol-map'
import './index.scss';

export default ({
  as: As = 'div',
  amount: {
    value,
    currency
  },
  merchant,
  comment,
  user: {
    first,
    last,
    email
  },
  selected,
  onClick
}) => {
  const classNames = classnames('expense', {
    'expense--active': selected
  });
  return (
    <As className={classNames} onClick={onClick}>
      <div className='expense__container'>
        <div className='expense__info'>
          <p className='expense__merchant'>{ merchant.toLowerCase() }</p>
          <a className='expense__user' href={`mailto:${email}`}>{first} {last}</a>
          <p className='expense__comment'>{comment}</p>
        </div>
        <div className='expense__amount'>
        { getSymbolFromCurrency(currency) }{value}
        </div>
      </div>

    </As>
  );
}