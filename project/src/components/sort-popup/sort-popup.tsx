/* eslint-disable no-console */
import React from 'react';

import useClickOutside from '../../hooks/use-click-outside';

interface ISortPopupProps {
  popupOptions: string[];
}

function SortPopup(props: ISortPopupProps): JSX.Element {
  const { popupOptions } = props;

  const [isOpenPopup, setOpenPopup] = React.useState<boolean>(false);

  const sortLabelRef = React.useRef<HTMLSpanElement | null>(null);
  const sortPopupRef = React.useRef<HTMLUListElement | null>(null);

  const handlePopup = (): void => {
    setOpenPopup(!isOpenPopup);
  };

  const handleOutsidePopupClick = (): void => {
    if (isOpenPopup) {
      setOpenPopup(false);
    }
  };

  useClickOutside(sortPopupRef, handleOutsidePopupClick);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} ref={sortLabelRef} onClick={handlePopup}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        ref={sortPopupRef}
        className={`places__options places__options--custom ${isOpenPopup ? 'places__options--opened' : ''}`}
      >
        {popupOptions.map((option, index) => {
          const key = `${option}_${index}`;
          return (
            <li className="places__option" tabIndex={0} key={key}>
              {option}
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default SortPopup;
