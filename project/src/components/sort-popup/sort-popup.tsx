import React from 'react';

import useClickOutside from '../../hooks/use-click-outside';
import { setSortOptionHotelsAction } from '../../redux/all-hotels-data/all-hotels-actions';
import { HotelSortOptions } from '../../const';
import { HotelSortOption } from '../../types/hotel';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getAllHotelsSortType } from '../../redux/all-hotels-data/selectors';

function SortPopup(): JSX.Element {
  const dispatch = useAppDispatch();

  const sortType = useAppSelector(getAllHotelsSortType);

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

  const handleSelectOption = (option: HotelSortOption): void => {
    setOpenPopup(false);
    dispatch(setSortOptionHotelsAction(option));
  };

  useClickOutside(sortPopupRef, handleOutsidePopupClick);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} ref={sortLabelRef} onClick={handlePopup}>
        {sortType ? sortType : 'Popular'}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        ref={sortPopupRef}
        className={`places__options places__options--custom ${isOpenPopup ? 'places__options--opened' : ''}`}
      >
        {HotelSortOptions.map((option) => (
          <li
            className="places__option"
            tabIndex={0}
            key={`${option}_item`}
            onClick={() => handleSelectOption(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default React.memo(SortPopup);
