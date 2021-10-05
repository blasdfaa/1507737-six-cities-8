/* eslint-disable no-console */
import React from 'react';

interface ISortPopup {
  popupOptions: string[];
}

function SortPopup(props: ISortPopup): JSX.Element {
  const { popupOptions } = props;

  const [isOpenPopup, setOpenPopup] = React.useState(false);

  const sortLabelRef = React.useRef<HTMLSpanElement>(null);
  const sortPopupRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsidePopupClick);
    return () => {
      document.body.removeEventListener('click', handleOutsidePopupClick);
    };
  }, []);

  const handlePopupOpen = (): void => {
    setOpenPopup(!isOpenPopup);
  };

  const handleOutsidePopupClick = (e: Event): void => {
    const path = e.composedPath && e.composedPath();
    const isOutsideClick = !(
      path.includes(sortLabelRef.current as HTMLElement) ||
      path.includes(sortPopupRef.current as HTMLElement)
    );

    if (isOutsideClick) {
      setOpenPopup(false);
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        ref={sortLabelRef}
        onClick={handlePopupOpen}
      >
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        ref={sortPopupRef}
        className={`places__options places__options--custom ${
          isOpenPopup ? 'places__options--opened' : ''
        }`}
      >
        {popupOptions.map((option, index) => (
          <li
            className="places__option"
            tabIndex={0}
            // eslint-disable-next-line react/no-array-index-key
            key={`${option}_${index}`}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortPopup;
