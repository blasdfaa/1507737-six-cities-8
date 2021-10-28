import React from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import type { ConnectedProps } from 'react-redux';

import useClickOutside from '../../hooks/use-click-outside';
import { Action } from '../../types/action';
import { setOffersSortOptionAction } from '../../redux/actions/offer';
import { GlobalState } from '../../types/state';
import { offerSortOptions } from '../../const';
import { OfferSortOption } from '../../types/offer';

const mapStateToProps = ({ offers }: GlobalState) => ({
  sortType: offers.sortBy,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setSortOption(option: OfferSortOption) {
    dispatch(setOffersSortOptionAction(option));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function SortPopup(props: PropsFromRedux): JSX.Element {
  const { setSortOption, sortType } = props;

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

  const handleSelectOption = (option: OfferSortOption): void => {
    setSortOption(option);
    setOpenPopup(false);
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
        {offerSortOptions.map((option) => (
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

export default connector(SortPopup);
