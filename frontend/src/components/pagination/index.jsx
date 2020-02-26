import React from 'react';
import classnames from 'classnames';
import './index.scss';

export default ({ loaded, total, isLoading, fetchNext }) => {
  const percentageLoaded = Math.floor(loaded/total * 100);
  const disabled = loaded === total;
  const loadingBarClasses = classnames('pagination__progress-filled', {
    'pagination__progress-filled--loading': isLoading,
  });
  return (
    <div className='pagination'>
      <p className='pagination__info'>
        {loaded} of {total}
      </p>
      <div className="pagination__progress" aria-hidden="true">
          <div
            className={loadingBarClasses}
            style={{ width: `${percentageLoaded}%` }}
          />
        </div>
      <button className='btn btn--primary pagination__button' disabled={disabled} onClick={() => fetchNext(loaded)}>
        Load More
      </button>
    </div>
  );
}