import React from 'react';
import moment from 'moment';
import getSymbolFromCurrency from 'currency-symbol-map'
import { MdPerson as PersonIcon, MdMessage as MessageIcon } from 'react-icons/md';
import { AiOutlineLoading3Quarters as Spinner } from 'react-icons/ai';
import Input from '../input';
import FileUpload from '../file-upload';
import stringToColor from '../../helpers/string-to-color';
import './index.scss';
import { API_URL } from '../../api'

const getGradient = (color) => ({
  background: `linear-gradient(to bottom, transparent 50%, #fff 50%),
    radial-gradient(circle closest-side, ${color}, #fff)`
});

export default ({
  expense,
  isPostingComment,
  selectExpense,
  postComment,
  uploadFile,
  isUploadingFile,
  className
}) => {
  if (!expense) {
    return null;
  }
  const {
    id,
    amount: {
      value,
      currency
    },
    merchant,
    date,
    comment,
    user: {
      first,
      last,
      email
    },
    receipts
  } = expense;
  const color = stringToColor(merchant);
  return (
    <div className={`expense-details ${className}`}>
      <button className='expense-details__close' aria-label='close' onClick={() => selectExpense(null)}>&times;</button>
      <div className='expense-details__bg' style={getGradient(color)}></div>
      <div className='expense-details__logo' style={{backgroundColor: color}}>
        { merchant.charAt(0) }
      </div>
      <h1 className='expense-details__title'>{merchant.toLowerCase()}</h1>
      <p className='expense-details__amount'>{getSymbolFromCurrency(currency)}{value}</p>
      <p className='expense-details__date'>{moment(date).format("dddd, MMMM Do YYYY, h:mm a")}</p>
      <div className='expense-details__other'>
        <p className='expense-details__user'>
          <PersonIcon className='expense-details__icon'/>
          <a className='expense-details__user-link' href={`mailto:${email}`}>{first} {last}</a>
        </p>
        <Input
          id='comment'
          label='Comment'
          className='expense-details__comment'
          inputClassName='expense-details__comment-input'
          onChange={ (e) => postComment({id, comment: e.target.value}) }
          defaultValue={comment}
          prefixIcon={
            <MessageIcon className='expense-details__icon expense-details__icon--message' aria-hidden='true' />
          }
          suffixIcon={
            isPostingComment
              ? <Spinner className='expense-details__icon expense-details__icon--spinner' />
              : null
          } />
      </div>
      <div className='expense-details__receipts'>
        {
          receipts.map((r, index) => <img key={r.url} className='expense-details__receipt' src={`${API_URL}${r.url}`} alt={`Reciept ${index}`} />)
        }
        <FileUpload className='expense-details__receipt-upload' isUploadingFile={isUploadingFile} onChange={(file) => uploadFile({ expenseId: id, file }) } />
      </div>
      
    </div>
  );
};