import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getRatingValue } from '../../utils/get-rating-value';
import { HotelCardImageSize, HotelInfo } from '../../types/hotel';
import { changeAllHotelsFavoriteStatus } from '../../redux/all-hotels-data/api-actions';

export type HotelCardProps = {
  onHoverCard?: () => void;
  className?: string;
  imageWrapperClass?: string;
  cardInfoClass?: string;
  cardImageSize?: HotelCardImageSize;
  hotel: HotelInfo;
};

function HotelCard(props: HotelCardProps): JSX.Element {
  const { className, hotel, onHoverCard, imageWrapperClass, cardInfoClass = '', cardImageSize } = props;

  const dispatch = useDispatch();

  const handleScrollTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFavoriteStatus = () => {
    dispatch(changeAllHotelsFavoriteStatus(hotel));
  };

  return (
    <article className={`place-card ${className}`} onMouseEnter={onHoverCard}>
      {hotel.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`place-card__image-wrapper ${imageWrapperClass}`}>
        <a href="#!">
          <img
            className="place-card__image"
            src={hotel.previewImage}
            width={cardImageSize ? cardImageSize.width : '260'}
            height={cardImageSize ? cardImageSize.height : '200'}
            alt="Place images"
          />
        </a>
      </div>
      <div className={`place-card__info ${cardInfoClass}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{hotel.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              hotel.isFavorite ? 'place-card__bookmark-button--active' : ''
            }`}
            type="button"
            onClick={handleFavoriteStatus}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRatingValue(hotel.rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${hotel.id}`} onClick={handleScrollTop}>
            {hotel.title}
          </Link>
        </h2>
        <p className="place-card__type">{hotel.type}</p>
      </div>
    </article>
  );
}

export default HotelCard;
