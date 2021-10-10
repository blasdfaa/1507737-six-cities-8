import { Link } from 'react-router-dom';

import { getRatingValue } from '../../utils/get-rating-value';
import { IOfferCard } from '../../types/offer';

interface IOfferCardProps extends IOfferCard {
  handleHoverCard?: () => void;
  variant: string;
}

function OfferCard(props: IOfferCardProps): JSX.Element {
  const { id, title, previewImage, price, isPremium, type, isFavorite, rating, variant, handleHoverCard } =
    props;

  const isFavoriteVariant: boolean = variant === 'favorite';
  const isOfferVariant: boolean = variant === 'offer';
  const isNearVariant: boolean = variant === 'near';

  const handleScrollTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <article
      className={`place-card ${isFavoriteVariant && 'favorites__card'} ${
        isOfferVariant && 'cities__place-card'
      } ${isNearVariant && 'near-places__card'}`}
      onMouseEnter={handleHoverCard}
    >
      {isOfferVariant && isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`place-card__image-wrapper ${isFavoriteVariant && 'favorites__image-wrapper'} ${
          isFavoriteVariant && '"cities__image-wrapper'
        } ${isNearVariant && 'near-places__image-wrapper'}`}
      >
        <a href="#!">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place images" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              isFavorite ? 'place-card__bookmark-button--active' : ''
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRatingValue(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`} onClick={handleScrollTop}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
