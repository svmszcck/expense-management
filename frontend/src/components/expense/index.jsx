import React from 'react';
import classnames from 'classnames';
import getSymbolFromCurrency from 'currency-symbol-map';
import stringToColor from '../../helpers/string-to-color';
import { Link } from 'react-router-dom';
import './index.scss';

export default ({
  as: As = 'div',
  id,
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
  const color = stringToColor(merchant);
  return (
    <As className={classNames} onClick={onClick}>
      <div className='expense__container'>
        <div className='expense_logo' style={{backgroundColor: color}}>
          { merchant.charAt(0) }
        </div>
        <div className='expense__info'>
          <Link to={`/expenses/${id}`} className='expense__merchant'>{ merchant.toLowerCase() }</Link>
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