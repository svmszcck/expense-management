import React from 'react';
import classnames from 'classnames';
import './index.scss';

export default ({ className, onChange, isUploadingFile }) => {
  const labelClasses = classnames(
    'file-upload__label',
    className, {
      'file-upload__label--uploading': isUploadingFile
    });
  return (
    <label htmlFor='file' className={labelClasses}>
      <input
        type='file'
        name='file'
        id='file'
        className='file-upload'
        aria-label='Upload a reciept'
        onChange={e => onChange(e.currentTarget.files[0])}
      />
    </label>
  );
};