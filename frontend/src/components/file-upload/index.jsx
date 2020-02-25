import React from 'react';
import './index.scss';

export default () => {
  return (
    <label htmlFor='file' className='file-upload__label'>
      <input type='file' name='file' id='file' className='file-upload' aria-label='Upload a reciept'/>
    </label>
  );
};