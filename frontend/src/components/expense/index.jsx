import React from 'react';
import classnames from 'classnames';
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
  selected
}) => {
  const classNames = classnames('expense', {
    'expense--active': selected
  });
  return (
    <As className={classNames}>
      <div className='expense__container'>
        <div className='expense__info'>
          <p className='expense__merchant'>{ merchant.toLowerCase() }</p>
          <a className='expense__user' href={`mailto:${email}`}>{first} {last}</a>
          <p className='expense__comment'>{comment}</p>
        </div>
        <div className='expense__amount'>
          {value} {currency}
        </div>
      </div>

    </As>
  );
}